const supabase = require('../config/supabaseClient');

const fraudController = {
  async getThreatSummary(req, res, next) {
    try {
      const { data: threats } = await supabase.from('transactions').select('risk_score, status').eq('user_id', req.user.id).gte('risk_score', 40);
      const total = threats?.length || 0;
      const blocked = threats?.filter(t => t.status === 'BLOCKED').length || 0;
      const avg = total ? (threats.reduce((a, b) => a + b.risk_score, 0) / total) : 0;

      res.status(200).json({ success: true, summary: { totalThreats: total, blockedThreats: blocked, avgRiskScore: avg.toFixed(2) } });
    } catch (err) { next(err); }
  },

  async reportScam(req, res, next) {
    try {
      const { scam_type, source } = req.body;
      let severity = 'MEDIUM';
      if (/phish|deepfake|qr|block/i.test(scam_type)) severity = 'HIGH';
      
      const { data, error } = await supabase.from('scam_reports').insert({
        scam_type, source: source || 'user_manual', severity, reported_at: new Date().toISOString()
      }).select().single();

      if (error) throw error;
      res.status(201).json({ success: true, message: 'Threat reported', report: data });
    } catch (err) { next(err); }
  }
};

module.exports = fraudController;
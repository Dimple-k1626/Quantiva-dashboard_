const supabase = require('../config/supabaseClient');

const alertController = {
  async getAlerts(req, res, next) {
    try {
      const { data, error } = await supabase.from('alerts').select('*').eq('user_id', req.user.id).order('created_at', { ascending: false }).limit(50);
      if (error) throw error;
      res.json({ success: true, alerts: data });
    } catch (err) { next(err); }
  },

  async createAlert(req, res, next) {
    try {
      const { alert_type, severity, message } = req.body;
      const { data, error } = await supabase.from('alerts').insert({
        user_id: req.user.id, alert_type, severity, message, created_at: new Date().toISOString()
      }).select().single();
      if (error) throw error;
      res.status(201).json({ success: true, alert: data });
    } catch (err) { next(err); }
  }
};

module.exports = alertController;
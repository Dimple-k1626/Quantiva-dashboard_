const RiskEngine = require('./riskEngine');
const behaviorEngine = require('./behaviorEngine');
const supabase = require('../config/supabaseClient');

class FraudAnalyzer {
  static async processTransaction(userId, txData) {
    const profile = await behaviorEngine.getProfile(userId);
    const analysis = RiskEngine.evaluateTransaction(txData, profile);

    const status = analysis.threatLevel === 'CRITICAL' ? 'BLOCKED' : analysis.threatLevel === 'HIGH' ? 'FLAGGED' : 'PROCESSED';

    const { data: transaction, error: txErr } = await supabase.from('transactions').insert({
      user_id: userId,
      amount: txData.amount,
      receiver: txData.receiver,
      transaction_type: txData.transaction_type || 'transfer',
      risk_score: analysis.riskScore,
      status,
      created_at: new Date().toISOString()
    }).select().single();

    if (txErr) throw txErr;

    if (analysis.threatLevel === 'HIGH' || analysis.threatLevel === 'CRITICAL') {
      await supabase.from('alerts').insert({
        user_id: userId,
        alert_type: 'FRAUD_RISK',
        severity: analysis.threatLevel,
        message: `[${analysis.threatLevel}] ${analysis.reason} (Score: ${analysis.riskScore})`,
        created_at: new Date().toISOString()
      });
    }

    await behaviorEngine.updateProfile(userId, txData);

    return { transaction, analysis };
  }
}

module.exports = FraudAnalyzer;
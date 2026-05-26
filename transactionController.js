const supabase = require('../config/supabaseClient');
const FraudAnalyzer = require('../services/fraudAnalysis');
const behaviorEngine = require('../services/behaviorEngine');

const transactionController = {
  async addTransaction(req, res, next) {
    try {
      const { transaction, analysis } = await FraudAnalyzer.processTransaction(req.user.id, req.body);
      res.status(201).json({ success: true, transaction, analysis });
    } catch (err) { next(err); }
  },

  async getTransactions(req, res, next) {
    try {
      const { data, error } = await supabase.from('transactions').select('*').eq('user_id', req.user.id).order('created_at', { ascending: false });
      if (error) throw error;
      res.status(200).json({ success: true, count: data?.length, transactions: data });
    } catch (err) { next(err); }
  },

  async analyzeExisting(req, res, next) {
    try {
      const { transaction_id } = req.body;
      const { data: tx, error } = await supabase.from('transactions').select('*').eq('id', transaction_id).eq('user_id', req.user.id).single();
      if (error || !tx) return res.status(404).json({ success: false, message: 'Transaction not found' });

      const profile = await behaviorEngine.getProfile(req.user.id);
      const RiskEngine = require('../services/riskEngine');
      const analysis = RiskEngine.evaluateTransaction(tx, profile);
      
      res.status(200).json({ success: true, analysis, transaction: tx });
    } catch (err) { next(err); }
  }
};

module.exports = transactionController;
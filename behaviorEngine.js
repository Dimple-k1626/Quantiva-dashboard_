const supabase = require('../config/supabaseClient');

const behaviorEngine = {
  async getProfile(userId) {
    const { data, error } = await supabase.from('behavior_profiles').select('*').eq('user_id', userId).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data || { avg_transaction: 1000, risk_level: 'LOW', trusted_receivers: [], normal_behavior: [] };
  },

  async updateProfile(userId, txData) {
    const { data: profile } = await supabase.from('behavior_profiles').select('*').eq('user_id', userId).single();
    const avg = profile ? (profile.avg_transaction + txData.amount) / 2 : txData.amount;

    const trustedReceivers = [...new Set([...(profile?.trusted_receivers || []), txData.receiver])];
    const behaviorHistory = [txData.transaction_type, ...(profile?.normal_behavior || [])].slice(-20);

    const { error } = await supabase.from('behavior_profiles').upsert({
      user_id: userId,
      avg_transaction: Math.round(avg),
      risk_level: 'LOW',
      trusted_receivers: trustedReceivers,
      normal_behavior: behaviorHistory
    }, { onConflict: 'user_id' });

    if (error) throw error;
  }
};

module.exports = behaviorEngine;
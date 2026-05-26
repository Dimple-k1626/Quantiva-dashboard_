class RiskEngine {
  static evaluateTransaction(transaction, behaviorProfile = {}) {
    let score = 10;
    const reasons = [];

    const avgTx = behaviorProfile.avg_transaction || 1000;
    if (transaction.amount > avgTx * 3 || transaction.amount > 50000) {
      score += 40;
      reasons.push('Large unusual transaction amount');
    } else if (transaction.amount > avgTx * 1.5) {
      score += 15;
      reasons.push('Above-average transaction value');
    }

    if (!behaviorProfile.trusted_receivers?.includes(transaction.receiver)) {
      score += 25;
      reasons.push('Transaction to unknown receiver');
    }

    const redFlags = ['verify', 'urgent', 'blocked', 'kyc', 'confirm', 'limit', 'suspicious'];
    if (redFlags.some(flag => transaction.description?.toLowerCase().includes(flag))) {
      score += 20;
      reasons.push('Phishing/scam linguistic patterns detected');
    }

    const hour = new Date().getHours();
    if (hour < 5 || hour > 23) {
      score += 5;
      reasons.push('High-risk transaction window');
    }

    score = Math.min(score, 100);

    let threatLevel = 'LOW';
    if (score >= 75) threatLevel = 'CRITICAL';
    else if (score >= 60) threatLevel = 'HIGH';
    else if (score >= 40) threatLevel = 'MEDIUM';

    return {
      riskScore: score,
      threatLevel,
      reason: reasons.join('. ') || 'Standard transaction pattern'
    };
  }
}

module.exports = RiskEngine;
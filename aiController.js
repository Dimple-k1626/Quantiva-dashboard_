const { analyzeWithGemini } = require('../services/geminiService');

const aiController = {
  async analyzeMessage(req, res, next) {
    try {
      const { text } = req.body;
      const prompt = `Act as a financial cybersecurity AI. Analyze this message for scams/phishing. Return STRICT JSON only: { scamProbability: "string", fraudType: "string", riskLevel: "LOW|MEDIUM|HIGH|CRITICAL", recommendation: "string" }. Message: "${text}"`;
      res.json({ success: true, analysis: await analyzeWithGemini(prompt) });
    } catch (err) { next(err); }
  },

  async checkLink(req, res, next) {
    try {
      const { url } = req.body;
      const prompt = `Analyze this URL for QR scams, phishing, or financial fraud indicators. Return STRICT JSON: { scamProbability: "string", fraudType: "string", riskLevel: "LOW|MEDIUM|HIGH|CRITICAL", recommendation: "string" }. URL: "${url}"`;
      res.json({ success: true, analysis: await analyzeWithGemini(prompt) });
    } catch (err) { next(err); }
  },

  async analyzeTransaction(req, res, next) {
    try {
      const { transactionDetails } = req.body;
      const prompt = `Analyze transaction data for money laundering, fraud, or anomalies. Return STRICT JSON: { riskScore: number, threatLevel: "LOW|MEDIUM|HIGH|CRITICAL", explanation: "string", safetyAdvice: "string" }. Data: ${JSON.stringify(transactionDetails)}`;
      res.json({ success: true, analysis: await analyzeWithGemini(prompt) });
    } catch (err) { next(err); }
  }
};

module.exports = aiController;
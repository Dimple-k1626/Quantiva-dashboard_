const axios = require('axios');

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

const analyzeWithGemini = async (prompt) => {
  try {
    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024
      }
    }, { headers: { 'Content-Type': 'application/json' } });

    let text = response.data.candidates[0]?.content?.parts[0]?.text || '{}';
    text = text.replace(/```json\s*|\s*```/g, '').trim();
    
    return JSON.parse(text);
  } catch (error) {
    console.error('Gemini API Error:', error.response?.data || error.message);
    throw new Error('AI Analysis Service Unavailable');
  }
};

module.exports = { analyzeWithGemini };
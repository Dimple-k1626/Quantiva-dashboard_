const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { totalIncome, totalExpenses, recentTransactions, goals, userMessage } = req.body;
    const prompt = `
You are Quantiva AI, a professional financial assistant. 
User Data: Income: ₹${totalIncome}, Expenses: ₹${totalExpenses}
Recent Transactions: ${recentTransactions.map(t => `- ₹${t.amount} at ${t.merchant} (${t.category})`).join(', ')}
Goals: ${goals.map(g => `- ${g.name}: ₹${g.current_amount || 0} of ₹${g.target_amount}`).join(', ')}

User Question: ${userMessage}
Provide concise, actionable financial advice based strictly on this data.
`;
    const result = await model.generateContent(prompt);
    res.json({ reply: result.response.text() });
  } catch (error) {
    console.error('Gemini Error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.listen(3000, () => console.log('🤖 Gemini Proxy running on port 3000'));
Quantiva Dashboard

> Predict. Protect. Prosper.



Quantiva Dashboard is a modern AI-powered cybersecurity and financial monitoring platform built using React, Vite, Tailwind CSS, Express.js, and Supabase. The application provides real-time fraud detection, intelligent financial monitoring, AI-driven security insights, and interactive analytics through a futuristic cyber-themed dashboard.

Designed as a scalable SaaS-style platform, Quantiva combines fintech intelligence with cybersecurity monitoring to deliver a premium real-time security operations experience.


---

✨ Features

🔐 JWT Authentication & Protected Routes

📡 Real-Time Threat & Transaction Monitoring

🤖 AI Security Assistant powered by Google Gemini API

📊 Interactive Charts & Analytics using Recharts

🛡 Fraud Detection & Risk Analysis Engine

📁 CSV Export System for Reports & Logs

⚡ Ultra-fast Vite Development Experience

🎨 Cyberpunk UI with Neon Tailwind Theme

✨ Framer Motion Animations & Effects

📱 Fully Responsive Design

🌐 REST API Integration Ready

🔄 Auto-refresh polling every 30 seconds

🧠 AI-based Risk Scoring System



---

🛠 Tech Stack

Frontend

React 18

Vite

React Router DOM v6

Tailwind CSS

Axios

Recharts

Framer Motion

Lucide React

clsx

tailwind-merge


Backend

Node.js

Express.js

Supabase PostgreSQL

JWT Authentication

bcryptjs

Google Gemini API



---

🎨 Cyber Theme Configuration

Colors

Token	Value

cyber-bg	#030712
cyber-surface	#0b1229
cyber-primary	#00f3ff
cyber-secondary	#3b82f6
cyber-accent	#8b5cf6
cyber-alert	#ef4444
cyber-safe	#10b981
cyber-warning	#f59e0b


Fonts

Inter

JetBrains Mono


Animations

pulse-neon

float



---

📁 Project Structure

quantiva-dashboard/
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── database/
│   └── schema.sql
│
└── README.md


---

🗄 Database Schema

Tables

users

Column	Type

id	uuid
name	text
email	text
password_hash	text
created_at	timestamptz



---

transactions

Column	Type

id	uuid
user_id	uuid
amount	numeric
receiver	text
type	text
category	text
status	text
risk_score	int
created_at	timestamptz



---

alerts

Column	Type

id	uuid
user_id	uuid
alert_type	text
message	text
severity	text
status	text
created_at	timestamptz



---

🔐 Environment Variables

Frontend .env

VITE_API_URL=http://localhost:5000


---

Backend .env

PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173


---

🚀 Installation & Setup

1. Clone Repository

git clone https://github.com/your-username/quantiva-dashboard.git


---

2. Install Frontend Dependencies

cd frontend
npm install


---

3. Install Backend Dependencies

cd backend
npm install


---

📦 Frontend Dependencies

npm install react-router-dom axios recharts lucide-react framer-motion jspdf jspdf-autotable clsx tailwind-merge


---

📦 Backend Dependencies

npm install express cors dotenv jsonwebtoken bcryptjs axios @supabase/supabase-js


---

🧪 Running Development Servers

Frontend

npm run dev

Runs on:

http://localhost:5173


---

Backend

node server.js

Runs on:

http://localhost:5000


---

🔗 API Endpoints

Authentication

POST /api/auth/register
POST /api/auth/login
GET /api/auth/me


---

Transactions

GET /api/transactions
POST /api/transactions


---

Alerts

GET /api/alerts


---

Fraud Analytics

GET /api/fraud/summary


---

AI Security Analysis

POST /api/ai/analyze


---

🤖 AI Integration

Quantiva integrates with Google Gemini API to provide:

Scam analysis

Financial risk detection

Threat explanations

AI security recommendations

Fraud probability scoring

Transaction intelligence



---

📊 Real-Time Monitoring

The dashboard includes:

Live fraud alerts

Threat analytics

Real-time transaction monitoring

Auto-refresh polling every 30 seconds

Dynamic AI insights

Risk score calculations



---

📁 CSV Export System

Users can export:

Transaction reports

Fraud analytics

Threat logs

Security summaries


Recommended libraries:

PapaParse

file-saver



---

🎯 UI/UX Philosophy

Quantiva follows a futuristic cyber-defense design system inspired by:

Security Operations Centers (SOC)

AI command systems

FinTech intelligence dashboards

Cyberpunk interfaces


Core design principles:

Real-time visibility

High readability

Smooth animations

Immersive dashboard experience

Responsive layouts

Enterprise-grade aesthetics



---

🔒 Security Features

JWT Authentication

Protected API Routes

Password Hashing using bcryptjs

Axios JWT Interceptors

Automatic 401 Logout Handling

Secure Environment Variable Management

CORS Configuration



---

📱 Responsive Design

Optimized for:

Desktop

Tablet

Mobile


Responsive features include:

Adaptive sidebar

Mobile navigation

Responsive charts

Flexible layouts

Touch-friendly interactions



---

🔄 Auto Refresh & Error Handling

Quantiva implements:

30-second polling for live updates

Global Axios error handling

Automatic JWT expiration handling

Loading states

Empty states

Retry-friendly API architecture



---

📌 Future Enhancements

WebSocket real-time updates

Multi-user role management

AI anomaly prediction

Blockchain verification

Voice scam detection

Threat heatmaps

Dark/light theme switching

Advanced fraud simulation engine



---

⚡ Quantiva Vision

Quantiva is designed as a next-generation AI-powered financial cybersecurity ecosystem that combines behavioral intelligence, fraud analytics, and real-time monitoring into a unified futuristic platform.
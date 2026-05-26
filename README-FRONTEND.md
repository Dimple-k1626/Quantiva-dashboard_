Quantiva

<div align="center">💎 Quantiva — AI-Driven Financial Intelligence Platform

Predict • Protect • Prosper

AI-powered financial management platform with real-time analytics, fraud detection, intelligent insights, and modern cyber-inspired UI.

<br />     

</div>
---

🚀 Overview

Quantiva is a modern AI-powered financial intelligence dashboard designed to help users monitor transactions, detect fraud, analyze spending patterns, and receive intelligent financial insights in real time.

Built with React, Vite, Tailwind CSS, Supabase, and Google Gemini Flash, Quantiva combines financial analytics with cybersecurity-inspired monitoring in a futuristic glassmorphism interface.

This repository contains the frontend application only. Backend APIs and database services are managed separately.


---

✨ Features

📊 Financial Management

Feature	Description

Real-Time Transaction Tracking	Monitor transactions instantly using Supabase Realtime
Budget Planning	Set monthly budgets and monitor spending patterns
Goal Tracking	Track savings and financial goals visually
CSV Export	Export transaction history and reports
Interactive Analytics	Dynamic charts and visual insights using Recharts



---

🤖 AI Intelligence

Feature	Description

Gemini Flash AI Insights	AI-generated financial recommendations
Spending Analysis	Detect spending trends and anomalies
Smart Recommendations	Personalized finance suggestions
AI Fraud Detection	Analyze suspicious transaction behavior



---

🛡 Security & Authentication

Feature	Description

JWT Authentication	Secure user login and session handling
Protected Routes	Route-level authorization
Fraud Detection Engine	Real-time suspicious activity detection
Cross-Tab Sync	Sync auth/session changes across browser tabs
Real-Time Notifications	Live alerts and security updates



---

🎨 UI & Experience

Feature	Description

Glassmorphism UI	Futuristic cyber-inspired design system
Framer Motion Animations	Smooth transitions and interactions
Responsive Design	Mobile, tablet, and desktop optimized
Dark Theme	Premium modern financial dashboard aesthetic
Reusable Components	Modular scalable frontend architecture



---

🛠 Tech Stack

Category	Technology

Frontend Framework	React 18
Build Tool	Vite 5
Styling	Tailwind CSS
Animations	Framer Motion
Icons	Lucide React
Charts	Recharts
Routing	React Router v6
Backend Client	Supabase JS SDK
State Management	React Context API
Authentication	JWT
AI Integration	Google Gemini Flash
Data Export	CSV Export



---

📦 Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/your-username/quantiva.git


---

2️⃣ Navigate Into Project

cd quantiva


---

3️⃣ Install Dependencies

npm install


---

4️⃣ Start Development Server

npm run dev


---

5️⃣ Open In Browser

http://localhost:5173


---

⚙️ Environment Variables

Create a .env file in the project root:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:5000
VITE_GEMINI_API_KEY=your_gemini_api_key


---

📁 Project Structure

quantiva/
├── public/
├── src/
│   ├── assets/
│   ├── auth/
│   │   ├── AuthContext.jsx
│   │   ├── useAuth.js
│   │   └── ProtectedRoute.jsx
│   │
│   ├── components/
│   │   ├── charts/
│   │   ├── dashboard/
│   │   ├── layout/
│   │   ├── notifications/
│   │   └── ui/
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Transactions.jsx
│   │   ├── Analytics.jsx
│   │   ├── FraudDetection.jsx
│   │   ├── Reports.jsx
│   │   ├── Login.jsx
│   │   └── Settings.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── supabase.js
│   │   └── ai.js
│   │
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


---

📜 Available Scripts

Command	Description

npm run dev	Start development server
npm run build	Build production application
npm run preview	Preview production build
npm run lint	Run ESLint checks



---

🔗 API & Backend Integration

Quantiva frontend connects to a separate backend service responsible for:

Authentication

JWT generation

Transaction APIs

Fraud detection

AI analysis

Notifications

Reporting


Expected Backend Endpoints

POST /api/auth/login
POST /api/auth/register
GET /api/transactions
POST /api/transactions
GET /api/alerts
POST /api/ai/analyze


---

📡 Supabase Integration

Quantiva uses Supabase for:

Authentication

Realtime database updates

Transaction sync

Notifications

Realtime subscriptions


Core Supabase Features Used

Realtime Channels

Database Subscriptions

Authentication

PostgreSQL Database



---

📊 Charts & Analytics

Quantiva uses Recharts to render:

Spending analytics

Fraud probability graphs

Income vs expense trends

Goal tracking charts

Transaction summaries

Risk score visualizations



---

🎨 Design System

The UI follows a modern cyber-financial design inspired by:

Glassmorphism

Cyberpunk dashboards

FinTech SaaS products

AI monitoring systems


Design Highlights

Dark futuristic theme

Neon accents

Smooth animations

Floating UI cards

Real-time dashboard effects

Responsive layouts



---

🔐 Authentication Flow

Authentication is handled using:

JWT tokens

React Context API

Protected routes

Persistent sessions

Cross-tab synchronization


Features include:

Auto login persistence

Token validation

Session restoration

Secure logout



---

📱 Responsive Experience

Quantiva is fully optimized for:

Desktop

Tablet

Mobile devices


Responsive features include:

Adaptive layouts

Mobile navigation

Flexible charts

Touch-friendly controls



---

🚀 Future Enhancements

AI investment predictions

Voice-based AI assistant

Advanced fraud analytics

Multi-user financial groups

Blockchain transaction verification

OCR receipt scanning

WebSocket real-time updates

AI-powered financial forecasting



---

🤝 Contributing

Contributions are welcome.

Steps to Contribute

1. Fork the repository


2. Create a feature branch


3. Commit your changes


4. Push to your branch


5. Open a Pull Request



Please follow clean coding standards and maintain consistent UI/UX patterns.


---

📄 License

This project is licensed under the MIT License.


---

<div align="center">💎 Quantiva

AI-Driven Financial Intelligence Platform

Built with React, Vite, Tailwind CSS, Supabase & Gemini AI.

</div>
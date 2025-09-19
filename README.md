# IKS Reimagined - Starter Project

This package contains a ready-to-deploy starter for the IKS Reimagined project:
- Backend: Node.js + Express + MongoDB
- Frontend: React (with Tailwind via CDN for quick styling)
- Seed script with sample lessons & quizzes
- README and .env.example

## Quick steps (local run)

1. Create a MongoDB Atlas free cluster and get the connection string.
2. In `backend/.env.example` copy to `.env` and fill `MONGO_URI` and `JWT_SECRET`.
3. Start backend:
   ```
   cd backend
   npm install
   npm run seed   # seeds sample lessons & quizzes
   npm run dev    # or npm start
   ```
4. Start frontend:
   ```
   cd frontend
   npm install
   npm start
   ```
5. Open http://localhost:3000

## Deploying online (summary)
- Use MongoDB Atlas for DB.
- Deploy backend to Render or Railway (connect GitHub).
- Deploy frontend to Netlify or Vercel. Set env var REACT_APP_API_URL to your backend URL.

## Notes
- Tailwind is included via CDN in `public/index.html` for fast styling (suitable for demo).
- This starter is for demo and hackathon; for production, secure env vars and improve validation/security.

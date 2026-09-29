# RAVEN — PS 26105

AI-Powered Continuous Cyber Risk Quantification and Investment Optimization Platform.

## Architecture
- Frontend: React + TypeScript + Vite + Tailwind
- Backend: Express + TypeScript
- Database: MongoDB + Mongoose
- Risk: FAIR-inspired lineage + Monte Carlo
- Optimization: exact binary solver for demo-scale portfolio selection
- AI: explanation-only mock provider in DEMO_MODE
- Audit: SHA-256 hash chain

## Demo
Pragati National University is synthetic. Public CVE identifiers are used as public-context inputs; organization context and occurrences are synthetic.

## Run
1. Copy `server/.env.example` to `server/.env` locally and set MongoDB URI/JWT secret.
2. `cd server && npm install && npm run seed && npm run dev`
3. `cd client && npm install && npm run dev`

Demo accounts are documented in `server/src/seed.ts` and are DEMO ONLY.

## Reports
- Board JSON: `GET /api/reports/board`
- Board PDF: `GET /api/reports/board.pdf`

## Tests
`cd server && npm run test && npm run lint`
`cd client && npm run build && npm run lint`

## Governance
See `docs/` for risk, financial, regulatory, AI, audit and competitor governance.

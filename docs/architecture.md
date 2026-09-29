# Architecture

Client: React + TypeScript + Vite + Tailwind + React Router.
Server: Express + TypeScript. Persistence: MongoDB + Mongoose.

Request path: routes → engines/services → MongoDB models. The deterministic/statistical layer owns risk and financial calculations; optimization owns portfolio selection; LLM access is explanation-only.

Core lineage: public/synthetic evidence → asset → service → threat/vulnerability → controls → scenario → Monte Carlo → EAL/VaR/CVaR → investment option → optimizer → residual risk → audit hash chain.

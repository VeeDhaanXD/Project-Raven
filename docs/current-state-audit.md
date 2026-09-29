# RAVEN Current-State Audit

## CURRENT
React/Vite/TypeScript frontend, Express/TypeScript backend, Mongoose/MongoDB authentication. Existing dashboards were role-specific but largely static.

## BROKEN / UNSUPPORTED
Legacy dashboards contained fictional operational, military, quantum, NATO, USD and performance claims; navigation used placeholder `href="#"`; backend startup asserted Mongo/JWT environment variables without validation; role semantics were legacy.

## STATIC
Landing/login presentation, legacy KPI values, legacy dashboard cards.

## REUSABLE
React + Vite + TypeScript + Tailwind, Express + TypeScript + MongoDB/Mongoose, JWT, bcrypt, protected routing.

## TO REPLACE
Legacy military/sci-fi dashboard content, static business KPIs, placeholder navigation, weak auth configuration.

## TO EXTEND
Risk engine, Monte Carlo, optimizer, compliance, evidence, audit chain, AI boundary, reporting, provenance, source freshness.

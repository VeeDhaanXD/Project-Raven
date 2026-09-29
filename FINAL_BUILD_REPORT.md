# RAVEN Final Build Report — 19 Sep 2026

## 1. Current state
Initial repository had a small React/Vite frontend with static role dashboards and an Express/Mongoose JWT backend. Several dashboards used fictional military/sci-fi terminology, hard-coded USD KPIs and placeholder navigation.

## 2. Changes implemented
- Preserved React + Vite + TypeScript + Tailwind, Express + TypeScript + MongoDB/Mongoose and JWT/bcrypt.
- Replaced legacy dashboards with a RAVEN cyber-risk decision workspace.
- Added 100-asset / 20-service / 250-vulnerability / 15-threat / 100-scenario synthetic demo dataset generator.
- Added versioned framework registry metadata for NIST CSF 2.0, ISO/IEC 27001:2022 + Amd 1:2024, CIS Controls 8.1, CERT-In, RBI 2026 commercial-bank directions, SEBI CSCRF and DPDP metadata.
- Added applicability-by-entity handling in compliance records.
- Added Monte Carlo risk engine with fixed demo seed 26105 and EAL/VaR95/CVaR95/PML95/PML99 outputs.
- Added scenario rerun engine.
- Added exact demo-scale binary optimization with budget/dependency constraints.
- Added modeled ROSI calculation.
- Added SHA-256 audit hash chain verification.
- Added AI mock provider with numeric-validation boundary.
- Added Board JSON/PDF report endpoints.
- Added provenance/claim-governance documentation and workflow alignment reference.

## 3. Verification
### VERIFIED
- Repository audit and legacy-term scan.
- Pure TypeScript Monte Carlo compilation.
- Monte Carlo deterministic fixed-seed invariant.
- Exact optimizer compilation.
- Optimizer budget/dependency invariant.

### PARTIALLY VERIFIED
- Full client/server `npm run build` and dependency installation: blocked by sandbox package-download availability; the requested npm tarballs were not cached and network installation timed out.
- MongoDB seed/integration: no local MongoDB service exists in the sandbox.
- PDF runtime endpoint against a live server: source implemented, runtime not executed because dependencies/Mongo are unavailable here.

### NOT VERIFIED
- Full browser E2E flow.
- Exhaustive primary-source validation of every detailed framework mapping.
- Production-scale solver performance beyond demo-scale enumeration.

## 4. Regulatory source verification notes
- NIST CSF 2.0 current six-function structure verified against NIST.
- CIS Controls v8.1 and implementation groups verified against CIS.
- CERT-In 28 Apr 2022 Directions URL and document reference verified against CERT-In.
- SEBI CSCRF 2024 plus 2025 clarification records verified against SEBI/SEBI CyberSuraksha.
- DPDP Rules 2025 and related publication records verified against MeitY.
- RBI/DoS/2026-27/410 dated 31 Jul 2026 located in current regulatory records; production deployment should retain and periodically re-verify the authoritative RBI publication.

## 5. Key limitations
This is a defensible SIH prototype, not a production GRC/CRQ platform. Synthetic organization context is clearly labelled. Cached public intelligence is labelled CACHED. Regulatory outputs are evidence-readiness/assessment views, not certifications.

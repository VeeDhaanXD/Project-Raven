# Risk Model

RAVEN uses a FAIR-inspired lineage rather than an invented 0–100 AI score.

LEF is represented as TEF × susceptibility, with control state reducing susceptibility/event realization. Loss is modelled per scenario from explicit primary loss components. Monte Carlo samples frequency and loss distributions with a deterministic seed in DEMO_MODE.

Outputs: EAL, P10/P50/P90, VaR95, CVaR95, and model-defined PML95/PML99. PML is explicitly labelled a model-defined tail metric.

Public vulnerability data is used only as input context; CVSS, EPSS and KEV are not themselves treated as final breach probabilities.

# Audit Chain

Each event stores canonical JSON payload hash and a current hash chaining to the previous event. `verifyAuditChain()` recomputes the chain in order and exposes a verified/failure state.

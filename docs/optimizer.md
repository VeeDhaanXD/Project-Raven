# Optimizer

Demo-scale exact binary optimization solves the real subset-selection problem:

maximize modeled risk-reduction score subject to total selected cost ≤ budget and dependency constraints, x_i ∈ {0,1}.

The solver does not sort by ROI or return a hard-coded portfolio. The UI budget control triggers another solve.

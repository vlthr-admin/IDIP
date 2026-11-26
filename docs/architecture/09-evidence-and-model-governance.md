# A09 — Evidence, AI and Model Governance

## Output classes
- **Measured:** directly observed from an identified source.
- **Derived:** calculated from traceable inputs.
- **Predicted:** estimated future/latent state from a model.
- **Recommended:** proposed action based on explicit rules, constraints or analysis.

UI and data model preserve these distinctions.

## Evidence record
Each consequential output references output ID/type; asset/equipment/context; source records and measurement window; data-quality assessment; method/model/rule version/configuration; timestamp; uncertainty; validation and operating-domain status; limitations; reviewer; decision/outcome where applicable.

## Model lifecycle
Problem/intended use; data inventory and rights; quality/label audit; baseline; train/validation/test separation; evaluation by equipment/regime; robustness/drift/out-of-domain testing; independent review where consequence warrants; controlled release/rollback; monitoring/revalidation/retirement.

## Task-specific validation
Anomaly: precision, recall, false alarm rate, detection delay and operator burden. Diagnosis: class-wise metrics, confusion matrix, unknown-class handling. Degradation: error by horizon/regime. RUL: error distribution, calibration, censoring and horizon-specific results. Recommendation: constraint satisfaction, decision quality, sensitivity and outcomes. One generic accuracy score is insufficient.

## LLM boundaries
May retrieve/summarize approved documents, explain an existing assessment, compare already-calculated alternatives, draft work/procurement text for human review, and identify missing evidence. Must not invent facts, authoritatively calculate safety limits, approve transactions, bypass permissions, control plant or present unvalidated predictions as fact.

## Simulation
Store model version, input snapshot, parameters, assumptions, seed where relevant, constraints, metrics and environment. Repeated runs reproducible within stated tolerances. Synthetic data stays labelled synthetic.

## Status vocabulary
Conceptual → Implemented → Functionally tested → Experimentally evaluated → Independently validated → Production approved. Applied per capability and intended use; implementation does not imply validation.
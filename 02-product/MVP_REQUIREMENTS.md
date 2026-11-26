# IDIP MVP Requirements

## Product objective
Deliver a narrow, evidence-governed industrial decision-support workflow for oil-and-gas assets. Initial release demonstrates the link between telemetry, asset context, condition assessment, maintenance/material constraints and a human-authorized decision.

## Primary users
Operations manager, facility/asset engineer, reliability engineer, maintenance planner, procurement/materials user, executive reviewer and platform administrator.

## MVP scope
- Organization, facility, asset, equipment and sensor registry.
- CSV/API ingestion with provenance, unit and timestamp validation.
- Synthetic demo data clearly labelled.
- Asset condition workspace and rule-based deviation assessment.
- Evidence record and assessment review.
- Maintenance requirement draft and strategy selection.
- BOM/material/inventory read model.
- Decision case with alternatives, assumptions and constraints.
- Human approval record and outcome capture.
- Audit trail and role-scoped access.

## Explicit exclusions
Direct OT control; SIS interaction; autonomous maintenance; automatic purchase order dispatch; universal fault diagnosis; guaranteed RUL; live SAP/Maximo integrations until access/contracts are confirmed; production use without customer security and operational acceptance.

## Functional acceptance
1. Imported records reconcile to source row counts and preserve rejected-row reasons.
2. Unit, timestamp, duplicate and missing-data checks are visible.
3. Every condition assessment links to its input window, method version and evidence.
4. Synthetic observations and scenarios are visibly marked.
5. Maintenance/procurement actions remain drafts until authorized.
6. Tenant boundaries are tested using separate user/org contexts.
7. Decision packages expose assumptions, uncertainty and limitations.
8. Audit events capture privileged actions and approvals.

## Quality gates
- Data quality and ingestion contract tests.
- Auth/RLS positive and negative tests.
- UI accessibility/responsive checks.
- Build, lint and typecheck.
- Model metrics only after an evaluation dataset and baseline are approved.
- No predictive claim without task-specific validation.

## MVP success is not defined by
Dashboard completeness, number of AI features, volume of synthetic data, or a successful cloud build alone. Success requires a reproducible, reviewable operational decision workflow validated with a pilot stakeholder.

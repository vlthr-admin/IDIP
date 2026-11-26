# A11 — MVP Boundary and Implementation Roadmap

## MVP objective
Demonstrate a complete auditable decision-support loop for a narrow oil-and-gas equipment scope using real or clearly labelled synthetic data, without claiming unvalidated predictive capability.

## Initial equipment
Gas compressors, production/export pumps, generators/power equipment, selected subsea equipment and export pipelines. Select pilot classes with an operating partner and confirm data access.

## MVP workflow
Register facility/assets/equipment/sensor relationships; ingest approved telemetry/sample datasets; validate units/timestamps/quality/mapping; display asset state/context; generate bounded rules/anomaly assessments with evidence; link to history/failure hypotheses only where supported; check BOM/inventory; compare maintenance/material scenarios; prepare decision package with assumptions/uncertainty/economics; capture human approval/outcome.

## Phases
**Phase 0 — Architecture foundation:** approve charter/requirements, pilot scope, stakeholders, domain model, trust boundaries, deployment profile, ADRs and acceptance plan.

**Phase 1 — Platform core:** identity, organization/facility scope, asset registry, adapters, canonical measurements, data quality, provenance, edge persistence/sync, audit/observability.

**Phase 2 — Asset/reliability intelligence:** operating modes/envelopes, condition rules/views, anomaly baseline, evidence-backed diagnosis where labels exist, model registry/evaluation and twin state history.

**Phase 3 — Maintenance/supply chain:** strategies/work requirements, CMMS/EAM boundary, BOM/materials/inventory, suppliers/lead times, approvals and controlled ERP integration.

**Phase 4 — Simulation/decision:** maintenance/degradation scenarios, production deferral/downtime economics, material constraints, sensitivity/uncertainty, decision cases/outcomes.

**Phase 5 — Pilot validation/release:** site security, data/model validation, operator acceptance, offline/recovery tests, deployment/rollback/support and production approval.

## First backlog
Repo/CI standards; glossary/ID strategy; auth/tenant isolation; organization/facility/asset schema; measurement/event contracts; ingestion/quality; evidence/provenance; asset-state API/UI; rule-based condition assessment; inventory/BOM read model; decision/approval workflow; evaluation/audit reporting.

## Team sequence
Systems/platform architect, backend, industrial data, frontend, reliability/ML, fractional OT/ICS security and mechanical/reliability expert. Expand only after pilot scope/workload stabilize.

## Gates
G0 scope/site confirmed; G1 architecture/threat model reviewed; G2 ingestion/data quality accepted; G3 condition benchmark accepted; G4 maintenance/supply reconciled; G5 simulations reproducible; G6 security/resilience/user acceptance passed; G7 accountable customer approves production.

## Non-goals
No universal prediction, fixed RUL guarantees, autonomous maintenance, automatic procurement or guaranteed production uplift.
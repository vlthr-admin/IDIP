# IDIP Phase Tracker

**Baseline:** 26 November 2026  
**Status rule:** A phase is accepted only when its deliverables and acceptance evidence are reviewed. File creation alone is not acceptance.

| Phase | Scope | Status | Exit evidence |
|---|---|---|---|
| 0 | Architecture foundation | IN_PROGRESS | Charter, requirements, context, subsystem model, data model, security, ADRs and acceptance plan reviewed |
| 1 | Platform core | NOT_STARTED | Identity, tenant scope, asset registry, ingestion, data quality, provenance, edge sync and audit tests |
| 2 | Asset/reliability intelligence | NOT_STARTED | Condition rules, anomaly benchmark, model registry and twin state validation |
| 3 | Maintenance/supply chain | NOT_STARTED | Maintenance, BOM, inventory, supplier and workflow reconciliation |
| 4 | Simulation/decision | NOT_STARTED | Reproducible scenarios, sensitivity analysis and decision traceability |
| 5 | Pilot validation/release | BLOCKED | Site authorization, security assessment, data/model validation, operator acceptance and production approval |

## Current verified state
- A01–A13 architecture drafts exist in docs/architecture.
- Initial Next.js UI scaffold and package scripts are committed.
- CI workflow is committed; execution status not yet verified.
- Supabase SQL migration and seed are not deployed and have not passed isolated database validation.
- Vercel deployment has not been verified.
- Financial Datasets live API validation is blocked by account balance/authorization.

## Phase acceptance record
For every phase, record: deliverable links, test evidence, known limitations, unresolved risks, reviewer, decision and date. Use ACCEPTED only after an accountable reviewer approves the exit criteria.

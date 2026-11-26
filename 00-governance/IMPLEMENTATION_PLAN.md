# IDIP — Master Implementation Plan

**Version:** Initial implementation baseline  
**Delivery method:** Phase-gated, evidence-led, repository-first

## 1. Product objective
Build a modular industrial decision intelligence platform that connects equipment condition to maintenance, reliability, supply chain, operational risk, economics and authorized decisions. Initial market is oil and gas; architecture should remain reusable across asset-intensive industries.

## 2. Product boundaries
IDIP is an intelligence and decision-support layer. It does not replace PLC, DCS, SCADA, SIS, ERP, CMMS or EAM. No direct plant-control path. OT connectivity is separately engineered at the edge and approved by the site OT authority. Enterprise write-back is disabled until a specific connector and approval model are validated.

## 3. Delivery principles
- Build a working vertical slice rather than disconnected modules.
- Keep measured, derived, predicted, recommended and executed data distinct.
- Preserve evidence and provenance from ingestion through decision.
- Use synthetic data only for UI/software testing and label it clearly.
- Establish baseline and acceptance metrics before claiming model performance.
- Start with modular monolith; extract services only for measured need.
- Edge-first, offline-resilient architecture.
- Security, tenant isolation and audit are core platform requirements.
- Every phase produces committed artifacts and test evidence.

## 4. Workstreams
A. Product and domain requirements.  
B. Platform and identity.  
C. Industrial data ingestion and edge synchronization.  
D. Asset context and digital twin.  
E. Reliability and predictive intelligence.  
F. Maintenance and supply chain.  
G. Simulation and decision intelligence.  
H. Experience and integrations.  
I. Security, governance and validation.

## 5. Phase plan

### Phase 0 — Architecture foundation
Deliverables: charter; operational requirements; stakeholder/system context; subsystem responsibilities; canonical data model; edge/enterprise topology; API/event contracts; threat/security model; evidence/model governance; technology ADRs; MVP scope; acceptance framework; risk register.

Exit gate: pilot scope, stakeholders, system boundary, trust boundaries, data ownership and acceptance plan reviewed. Open questions remain recorded.

### Phase 1 — Platform core
Build:
- Authentication and organization membership.
- Tenant/facility/asset/equipment registry.
- Canonical measurement and event contracts.
- CSV/API ingestion with source traceability.
- Unit/timestamp/duplicate/missing-data validation.
- Evidence records and audit foundation.
- Edge persistence/sync contract, initially simulated if no edge device exists.

Exit gate: ingestion reconciles source counts; invalid records are explained; tenant isolation and authorization tests pass; provenance is queryable.

### Phase 2 — Asset and reliability intelligence
Build:
- Equipment class profiles and operating modes/envelopes.
- Asset state history and condition workspace.
- Deterministic engineering rules.
- Anomaly detection baseline and evaluation harness.
- Failure-mode linkage only where labelled evidence exists.
- Model registry, versioning and validation metadata.
- Digital twin context/state model.

Exit gate: task-specific benchmark and out-of-domain behaviour reviewed. Anomaly detection is not represented as confirmed diagnosis or RUL.

### Phase 3 — Maintenance and supply chain
Build:
- Corrective, preventive, condition-based, predictive and prescriptive strategy records.
- Work requirements and resources.
- BOM/material catalogue.
- Inventory snapshots and reservations.
- Supplier/lead-time model.
- CMMS/EAM and ERP adapter contracts.
- Human review/approval workflow.

Exit gate: source-system reconciliation, role authorization, material-readiness correctness and audit trail pass. Procurement remains simulated until a real integration is approved.

### Phase 4 — Simulation and decision intelligence
Build:
- Scenario definitions and reproducible runs.
- Maintenance duration and timing scenarios.
- Production deferral/downtime economics.
- Material shortages and supplier delay scenarios.
- Alternatives, constraints, sensitivity and uncertainty.
- Decision packages, approvals and outcome tracking.

Exit gate: results are reproducible; assumptions and sensitivity are visible; decision constraints are satisfied and independently reviewed.

### Phase 5 — Pilot validation and release
Activities:
- Confirm site data rights and data quality.
- Complete OT/IT security and deployment assessment.
- Validate models on representative independent data.
- Test offline operation, recovery and synchronization.
- Run operator workflow acceptance.
- Verify backup, rollback, monitoring and support.
- Obtain customer operational/security approval.

Exit gate: accountable customer authority approves the specific intended use and deployment. No broader capability claim follows automatically.

## 6. MVP vertical slice
1. Register one pilot facility and a small number of equipment classes.
2. Import telemetry and validate source records.
3. Display asset state and data freshness.
4. Generate a rule-based condition assessment.
5. Link assessment to evidence and maintenance history.
6. Check a relevant BOM/material/inventory snapshot.
7. Compare a small number of maintenance/material scenarios.
8. Produce a decision case with assumptions and constraints.
9. Require human approval and capture outcome.

## 7. Initial equipment focus
Prioritize rotating equipment and selected critical production infrastructure: gas compressors, production/export pumps, generators/power equipment, selected subsea equipment and pipelines. Do not attempt equal predictive maturity for every class.

## 8. Technical baseline
Candidate: Next.js/React/TypeScript; Python/FastAPI as separate service when needed; PostgreSQL; optional time-series extension after workload test; S3-compatible object storage; optional broker/cache; scikit-learn/PyTorch for task-specific models; Linux edge runtime; Docker; CI/CD and observability. Final selections require ADR and proof-of-fit.

## 9. Team
Core: systems/platform architect, backend engineer, industrial data engineer, frontend engineer, reliability/ML engineer. Fractional: OT/ICS security specialist and mechanical/reliability domain expert. Add headcount only when scope and workload justify it.

## 10. Verification and release controls
Unit, contract, integration, security, data-quality, model, simulation, end-to-end, resilience and site acceptance tests. Track precision/recall/false alarms/detection delay for anomaly; class metrics for diagnosis; horizon-specific error/calibration for RUL; workflow and reconciliation correctness for maintenance/inventory; sensitivity/reproducibility for simulation.

## 11. External Financial Datasets
Optional company/market-financial provider only. Not an industrial telemetry or asset-condition source. Commercial and redistribution rights must be verified. Live account validation is currently blocked; do not make live-data claims.

## 12. Phase reporting
Every phase report must contain: completed deliverables; links/commit references; tests executed and results; assumptions; defects; unresolved risks; evidence status; reviewer; go/no-go decision. A phase remains IN_PROGRESS or BLOCKED until the gate is passed.

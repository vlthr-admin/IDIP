# A02 — Operational Context and Requirements

**Status:** Initial requirements baseline; validation required.

## Operational context
Oil-and-gas assets connect equipment, utilities, process units, pipelines, people, maintenance, spares, suppliers and commercial constraints. Equipment condition alone is insufficient to select an action. Decisions may depend on failure likelihood/consequence, operating mode, redundancy, production criticality, repair duration, material availability, logistics, permits and risk controls.

**Decision chain:** Physical condition → evidence → asset context → reliability assessment → maintenance/material options → scenario analysis → authorized decision → outcome.

## Primary use cases
1. Ingest/validate telemetry from approved sources.
2. Reconcile tags, units, timestamps and asset identity.
3. Display equipment condition with data quality/freshness.
4. Detect deviations from configured operating envelopes.
5. Correlate condition evidence with failure modes and maintenance history.
6. Compare corrective, time-based preventive, condition-based, predictive and prescriptive strategies.
7. Check BOM/material availability.
8. Assess supplier lead time, logistics and stockout exposure.
9. Simulate maintenance, production, inventory and cost scenarios.
10. Prepare traceable decision packages for human review.
11. Record authorized actions and compare expected/observed outcomes.

## Requirement classes
FR functional; NFR non-functional; SEC security; SAF safety boundary; GOV governance; INT integration.

## Functional requirements
| ID | Requirement | Initial acceptance evidence |
|---|---|---|
| FR-001 | Register organization/facility/asset/equipment/component/sensor | CRUD and referential tests |
| FR-002 | Ingest telemetry with source, unit and timestamp | Contract and ingestion tests |
| FR-003 | Preserve raw input or immutable reference | Provenance retrieval |
| FR-004 | Validate units, ranges, timestamps, duplicates, missingness | Data-quality tests |
| FR-005 | Maintain operating modes/envelopes | Configuration/audit tests |
| FR-006 | Display condition with quality/freshness | UI/API tests |
| FR-007 | Store assessments with evidence references | Traceability test |
| FR-008 | Link failure modes only where evidence supports it | Domain review |
| FR-009 | Represent maintenance strategies/work requirements | Workflow tests |
| FR-010 | Represent BOM, inventory, suppliers and lead times | Reconciliation tests |
| FR-011 | Simulate selected scenarios | Reproducibility tests |
| FR-012 | Create decision cases with alternatives/constraints | Decision-package tests |
| FR-013 | Record approvals and outcomes | Authorization/audit tests |
| FR-014 | Buffer and synchronize offline data | Disconnect/recovery tests |
| FR-015 | Expose versioned APIs/events | Compatibility tests |

## NFR / safety / security
Edge operation must tolerate defined interruption; repeated ingestion must be idempotent; freshness must be visible; logs must not leak secrets; API/events versioned; consequential workflows auditable; performance targets workload-derived; backup/restore tested. SAF-001: no direct IDIP control path to PLC/DCS/SIS. SAF-002: no AI/LLM safety authorization. SAF-003: critical operational, maintenance and procurement actions require humans. SEC-001: authenticate users/services/devices. SEC-002: least privilege and tenant/facility scope. SEC-003: protect data in transit/at rest. SEC-004: audit privileged changes/approvals. SEC-005: deny when authorization cannot be established.

## Evidence/model requirements
Each output identifies asset, input window, model/rule version and time; predictions expose uncertainty, limitations and validation status; measured/derived/predicted/recommended remain distinct; data splits/leakage controls documented; negative/out-of-domain results retained; no unsubstantiated performance or compliance claim.

## Open discovery questions
Pilot site, telemetry sources/protocols, priority equipment/failure modes, authoritative asset and maintenance systems, sample rates/retention, OT zoning, approval roles and baseline KPIs require confirmation with operating partner.
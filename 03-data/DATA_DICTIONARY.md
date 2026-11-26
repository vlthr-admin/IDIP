# IDIP Data Dictionary — Initial Logical Vocabulary

**Status:** Conceptual; not a deployed schema.

| Domain | Entity | Meaning | Key data considerations |
|---|---|---|---|
| Organization | Organization | Tenant/legal operating entity | Tenant ID, status, slug |
| Organization | Membership | User-to-organization role | Auth user ID, role, status |
| Facility | Facility | Site, station, plant or terminal | Org scope, code, timezone |
| Asset | Asset | Operational asset/system boundary | Facility, tag, criticality |
| Asset | Equipment | Maintainable equipment unit | Asset, class, tag, serial |
| Asset | Component | Subassembly/component hierarchy | Parent, equipment, component tag |
| Instrumentation | Sensor | Physical measurement source | Equipment/component, tag, unit |
| Instrumentation | Measurement | Time-stamped observation | Value, unit, observed/ingested time, quality |
| Operations | OperatingMode | Equipment operating state | Mode, validity window, source |
| Operations | OperatingEnvelope | Approved operating boundaries | Parameter, units, limits, version |
| Operations | OperationalEvent | Operational occurrence | Type, time, source, asset scope |
| Reliability | FailureMode | Defined failure mechanism | Taxonomy, definition, evidence |
| Reliability | FailureEvent | Confirmed failure occurrence | Time, mode, consequence, confirmation |
| Reliability | ConditionAssessment | Condition interpretation | Method/version, window, status |
| Reliability | Prediction | Estimated future/latent state | Model/version, horizon, uncertainty |
| Maintenance | WorkRequirement | Proposed work scope | Strategy, priority, rationale, approval |
| Supply | Material | Maintainable/spare material | Code, description, base unit |
| Supply | BOMItem | Equipment-material relationship | Quantity, critical spare flag |
| Supply | InventoryBalance | Snapshot of stock | Warehouse, on-hand, reserved, as-of |
| Supply | Supplier | Vendor record | External ref, status, country |
| Supply | PurchaseRequisition | Requested procurement | Requester, value, status, approval |
| Evidence | EvidenceRecord | Source/provenance reference | Hash, source ref, validation status |
| Decision | DecisionCase | Structured decision | Owner, context, alternatives |
| Decision | Alternative | Candidate action | Constraints, cost, expected outcome |
| Simulation | SimulationRun | Reproducible scenario execution | Model, inputs, parameters, seed |
| Governance | Approval | Human authorization | Approver, decision, timestamp |
| Governance | AuditEvent | Security/transaction history | Actor, action, subject, request ID |

## Universal data rules
- Store source ID and canonical ID where both exist.
- Store engineering units; never infer units silently.
- Preserve event time separately from ingestion time.
- Record data quality and freshness.
- Keep measured, derived, predicted, recommended and executed records distinct.
- Link outputs to source records, model/rule version and applicable operating window.
- Define tenant ownership and access rules for every tenant-owned record.
- Treat this vocabulary as a starting point; physical schema requires review and migration tests.

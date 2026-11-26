# IDIP Acceptance Test Plan

**Status:** Test plan only; tests not yet executed.

## 1. Ingestion and data quality
- Valid CSV rows accepted with source metadata.
- Invalid units rejected with explicit reason.
- Missing timestamps flagged/rejected according to source contract.
- Duplicate replay does not create duplicate measurements.
- Source row counts reconcile to accepted plus rejected rows.
- Late-arriving and out-of-order observations remain traceable.
- Quality/freshness state is visible to users.

## 2. Asset context
- Organization/facility/asset/equipment relationships enforce referential integrity.
- Tag mapping is scoped and auditable.
- Operating mode and envelope versions are traceable.
- Unknown asset/tag inputs are quarantined rather than silently mapped.

## 3. Evidence and reliability
- Every condition assessment references input window and method version.
- Synthetic records remain visibly labelled.
- Anomaly detection is not represented as confirmed fault diagnosis or RUL.
- Out-of-domain and low-quality input conditions produce degraded/withheld outputs.
- Human review state is preserved.

## 4. Maintenance and supply
- Maintenance strategy is explicit and configurable.
- Work requirements remain drafts until authorized.
- BOM quantities and material units reconcile.
- Inventory snapshots carry source and as-of time.
- No purchase order is dispatched by an AI-generated recommendation.

## 5. Decision and simulation
- Alternatives, assumptions and constraints are stored.
- Simulation runs preserve inputs, model version, parameters and random seed where applicable.
- Repeated runs reproduce within defined tolerance.
- Sensitivity analysis exposes material assumptions.
- Approval and outcome are separate states.

## 6. Security and tenancy
- Unauthenticated requests are denied.
- A user cannot read another organization’s records.
- Role restrictions are tested for every write operation.
- Audit records cannot be altered by ordinary client roles.
- Service-role credentials are never present in browser bundles.
- LLM/tool output cannot bypass server authorization.

## 7. Resilience and deployment
- Edge queue survives process restart.
- Network interruption/recovery does not lose or duplicate events.
- Backup restore is exercised.
- CI lint/typecheck/test/build gates pass.
- Database migrations are tested on disposable project before production.
- Production migration requires approved target, backup and human gate.

## Exit evidence
Attach test output, environment, test data provenance, defects, limitations, reviewer and acceptance decision. This plan is not evidence that tests have passed.

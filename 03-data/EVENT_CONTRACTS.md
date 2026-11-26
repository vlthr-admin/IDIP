# IDIP Event Contracts — Initial Draft

**Status:** Contract draft; schemas and compatibility tests pending.

## Common envelope
Every event should carry:
- schema_version
- event_id (stable and unique)
- event_type
- event_time (source/event time)
- ingested_at (platform receipt time)
- source system and adapter identity
- organization/facility/asset/equipment scope where known
- payload
- quality and provenance metadata

## Event classes
- industrial.measurement.observed
- industrial.measurement.quality_assessed
- industrial.asset.state_changed
- industrial.condition.assessed
- industrial.failure.confirmed
- industrial.maintenance.requirement_created
- industrial.inventory.balance_updated
- industrial.procurement.requested
- industrial.decision.case_created
- industrial.decision.approved
- industrial.decision.outcome_recorded
- platform.sync.batch_completed
- platform.integration.error

## Measurement payload
Parameter, numeric/string value, engineering unit, source tag, sensor/equipment identity, quality status, sampling/aggregation metadata and source reference.

## Condition assessment payload
Assessment type, status, severity where defined, method/model name and version, source measurement window, evidence references, validation status, operating-domain status, uncertainty and limitations.

## Decision event payload
Decision case, accountable owner, alternatives, constraints, assumptions, evidence references, calculation/model versions, approval state and outcome reference.

## Delivery semantics
Assume at-least-once delivery. Consumers must be idempotent. Deduplicate by event_id and/or scoped idempotency key. Preserve event order only where a contract explicitly requires it. Handle clock drift and late-arriving observations. Do not infer missing event time.

## Versioning
Backward-compatible optional additions may be minor revisions. Breaking semantic or structural changes require a new major schema version and migration/compatibility plan.

## Security
Validate payloads and caller identity. Do not include secrets or unnecessary personal data. Enforce tenant scope server-side. Event content is untrusted input.

# A10 — Technology Decisions and ADR Register

**Status:** Candidate baseline; proof-of-fit required before lock-in.

| Layer | Candidate | Validation required |
|---|---|---|
| Web | React/Next.js + TypeScript | Offline/deployment constraints |
| API | Python/FastAPI | Concurrency/footprint |
| Relational | PostgreSQL | Schema, tenancy, workload |
| Time-series | PostgreSQL/TimescaleDB or dedicated store | Ingest, retention, query tests |
| Object | S3-compatible | Data residency/lifecycle |
| Queue/cache | Redis or durable broker | Delivery guarantees/offline replay |
| ML | scikit-learn/PyTorch | Task benchmark |
| Optimization | OR-Tools or equivalent | Constraint/scale tests |
| Edge | Linux containers | Hardware/patch/offline tests |
| Observability | OpenTelemetry-compatible | Local operation/data minimization |

## ADR-001 Modular monolith first
Keep explicit module boundaries; extract services only when measured scaling, availability, security isolation or team ownership justifies it.

## ADR-002 Edge-first ingestion
Provide local buffering/processing because connectivity may be intermittent. Confirm site requirements before hardware selection.

## ADR-003 Read-only OT by default
No control write-back; this does not authorize PLC/SIS control under later exception.

## ADR-004 Evidence as first-class object
Link outputs/decisions to source data, methods, versions, uncertainty and limitations.

## ADR-005 PostgreSQL transactional core
Initial candidate for transaction/metadata; revisit time-series after workload measurement.

## ADR-006 LLM assistive, not authoritative
LLMs explain/draft from approved evidence; deterministic services own calculations and permission.

## Open choices
Frontend details, API deployment, time-series store, broker, edge hardware/OS, identity provider, object storage, model registry/signing, private deployment packaging, observability. Score security, offline operation, interoperability, maintainability, cost, skills, measured performance and exit cost; record rejected options.
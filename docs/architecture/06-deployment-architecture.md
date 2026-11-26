# A06 — Edge-to-Enterprise Deployment Architecture

## Objectives
Continue local data capture during network interruption, isolate OT control/safety systems, transfer only approved data classes and make synchronization recoverable/auditable.

## Logical zones
1. OT control: PLC, DCS, SIS.
2. OT supervisory: SCADA, historian and supervisory services.
3. Industrial DMZ: broker, historian replica, transfer gateway and inspection.
4. Edge intelligence: adapters, local storage, analytics and sync agent.
5. Enterprise application: IDIP core, database, APIs and web UI.
6. External services: approved SaaS, model APIs and supplier endpoints.

Exact boundaries/conduits are site-specific. This is not a claim of IEC 62443 compliance.

## Data flow
OT-to-edge via approved read-only interfaces; edge-to-enterprise via authenticated transfer of configured observations/events/summaries; enterprise-to-edge via authenticated, signed/versioned configuration and approved model packages; enterprise-to-ERP/CMMS via scoped, idempotent, audited connectors; external AI receives approved enterprise-side context only. No direct LLM connection to PLC/DCS/SIS.

## Offline synchronization
Durable local queue; stable event IDs/idempotency; retry with backoff; acknowledgements/checkpoints; duplicate suppression; entity-specific conflict policy; clock-drift handling; dead-letter handling; operator visibility; integrity checks; sync audit; recovery tests.

## Profiles
| Profile | Placement | Constraint |
|---|---|---|
| Edge-only | Local industrial compute | No enterprise connectivity |
| Hybrid | Edge plus private/cloud enterprise | Intermittent/controlled WAN |
| Private enterprise | Customer data centre | Sovereignty/control |
| Managed cloud | Approved managed services | Policy/connectivity permit |

Measure tag count/sample rate, payload size, daily ingest, retention, buffer duration, concurrent users, inference frequency, document volume, RPO/RTO and restore requirements before sizing. Site release requires approved network/data-flow diagrams, threat model, access matrix, connector allowlist, recovery plan, owner and test results.
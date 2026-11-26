# IDIP Architecture Decision Register

| ID | Decision | Current position | Status |
|---|---|---|---|
| ADR-001 | Application architecture | Modular monolith first | Proposed |
| ADR-002 | Industrial data path | Edge-first with durable store-and-forward | Proposed |
| ADR-003 | OT connectivity | Read-only by default; no control path | Boundary rule |
| ADR-004 | Evidence | Provenance and evidence objects first-class | Proposed |
| ADR-005 | Transactional database | PostgreSQL candidate | Proposed |
| ADR-006 | AI role | LLM assistive; deterministic services own calculations and authorization | Boundary rule |
| ADR-007 | Initial market | Oil and gas first; reusable industrial core | Product direction |
| ADR-008 | Initial application | Next.js/TypeScript web workspace | Prototype baseline |
| ADR-009 | Database isolation | Dedicated Supabase project preferred | Pending project provisioning |
| ADR-010 | External financial data | Financial Datasets optional, not core dependency | Proposed |

## Decision process
Each ADR must state context, options, decision, consequences, security/operational effects, evidence and revisit trigger. Proposed choices are not locked until reviewed by the accountable owner. Changes to OT boundaries, data semantics, authorization, tenant isolation or model claims require explicit review.

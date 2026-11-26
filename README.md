# IDIP — Industrial Decision Intelligence Platform

**Initial market:** Oil and gas. **Product:** Modular industrial decision intelligence platform. **Status:** Architecture baseline draft; implementation and validation remain pending.

IDIP connects physical asset condition to reliability, maintenance, supply chain, operational risk, economics and enterprise decisions. It complements existing PLC, DCS, SCADA, SIS, ERP and CMMS/EAM systems. It is not a replacement for those systems and does not control plant equipment.

## Architecture baseline
- [A01 Architecture Charter](docs/architecture/01-architecture-charter.md)
- [A02 Operational Context and Requirements](docs/architecture/02-operational-context-and-requirements.md)
- [A03 System Context and Logical Architecture](docs/architecture/03-system-context-and-logical-architecture.md)
- [A04 Subsystem Responsibilities](docs/architecture/04-subsystem-responsibilities.md)
- [A05 Canonical Domain Model](docs/architecture/05-canonical-domain-model.md)
- [A06 Edge-to-Enterprise Deployment](docs/architecture/06-deployment-architecture.md)
- [A07 API and Event Contracts](docs/architecture/07-api-and-event-contracts.md)
- [A08 OT/IT Security Architecture](docs/architecture/08-security-architecture.md)
- [A09 Evidence and Model Governance](docs/architecture/09-evidence-and-model-governance.md)
- [A10 Technology Decisions](docs/architecture/10-technology-decisions.md)
- [A11 MVP and Roadmap](docs/architecture/11-mvp-and-roadmap.md)
- [A12 Verification and Validation](docs/architecture/12-verification-and-validation.md)
- [A13 Initial Risk Register](docs/architecture/13-initial-risk-register.md)

## Governing rules
1. Separate measured, derived, predicted and recommended information.
2. Preserve provenance for data, models, simulations and decisions.
3. Fail closed on authorization and trust-boundary violations.
4. Keep plant control and safety functions outside IDIP authority.
5. Require human authorization for consequential maintenance and procurement.
6. Treat compliance, performance and economic claims as unverified until evidenced.
7. Start as a modular monolith; extract services only when measured needs justify it.

## Initial equipment scope
Gas compressors, production/export pumps, generators and power equipment, selected subsea equipment, and export pipelines. This is a starting catalogue, not a complete taxonomy.

## Capability status vocabulary
Conceptual → Implemented → Functionally tested → Experimentally evaluated → Independently validated → Production approved.

A working demonstration is not proof of industrial validation or production readiness. Synthetic data supports software and scenario testing, not field validation.

## Current status
- Architecture baseline: committed as draft.
- Application implementation: not yet committed in this initial documentation push.
- Database migration: not deployed.
- Production integrations: not implemented.
- Model performance and OT security: not validated.
- Production approval: not granted.

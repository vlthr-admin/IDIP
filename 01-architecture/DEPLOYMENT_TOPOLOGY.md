# IDIP Deployment Topology — Logical Draft

## Enterprise application
Next.js web workspace; server-side application/API; PostgreSQL transactional store; object storage for evidence artifacts; optional search/vector service for approved documents; observability and audit services.

## Edge deployment (separate product component)
Industrial protocol adapters; validation/normalization; local event processing; durable local database/queue; controlled synchronization agent. Runs on customer-approved Linux/industrial compute, not on Vercel.

## Network relationship
OT sources -> site-approved gateway/DMZ -> edge intelligence -> controlled outbound sync -> enterprise IDIP. ERP/CMMS/EAM connectors operate on enterprise side through approved APIs. External model providers are optional and isolated from OT control.

## Deployment variants
Edge-only; hybrid edge + private/cloud enterprise; customer-private enterprise; managed cloud where customer policy permits.

## Operational constraints
No direct control connection. Define RPO/RTO, buffering duration, throughput, retention, monitoring, patching, backup, restore and incident response per deployment. Topology requires site review before implementation.

# IDIP Security Model — Initial Draft

## Trust zones
OT control; OT supervisory; industrial DMZ; edge intelligence; enterprise application/data; external services. Site-specific zone/conduit design requires OT security authority approval.

## Trust boundaries
- OT to edge: approved read-only collection.
- Edge to enterprise: outbound authenticated, allowlisted transfer.
- Enterprise to edge: authenticated and versioned configuration distribution.
- Enterprise to ERP/CMMS: scoped connector, explicit transaction approval and audit.
- Enterprise to external AI: only approved, classified data.

## Identity
Unique identities for users, devices, services and connectors. Enforce least privilege, organization/facility scope, role/attribute checks, short-lived credentials where possible, secret rotation and privileged-action audit.

## Data
Classify operational, commercial, personal and public data. Encrypt in transit and at rest per deployment policy. Minimize external disclosure. Keep raw data provenance and retention policy. Never put service-role credentials in client code.

## Application controls
Server-side authorization; tenant isolation; input validation; idempotency for transactional operations; rate limits; audit; secure session handling; dependency and artifact scanning; backup/restore tests.

## AI controls
Treat model outputs and retrieved documents as untrusted. No LLM to PLC/DCS/SIS. LLM does not approve work/procurement or calculate authoritative safety limits. Display sources, uncertainty, limitations and validation state.

## Security claims
This document is a design baseline, not a completed threat assessment, penetration test, IEC 62443 certification or compliance statement.

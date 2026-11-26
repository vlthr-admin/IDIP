# A08 — OT/IT Security Architecture

**Status:** Security design baseline; site-specific threat assessment required.

## Objectives
Protect OT safety/availability, industrial data confidentiality/integrity, tenant boundaries, enterprise transactions and software/model integrity.

## Controls
Document zones/conduits; read-only OT collection by default; no direct IDIP control path to PLC/DCS/SIS; no inbound internet exposure of edge services; mutual authentication where supported; encryption in transit/at rest per deployment; RBAC/ABAC; least-privilege service identities; secret storage/rotation; signed/verified artifacts; security/audit logs; vulnerability/patch governance; backup, restore and incident response.

## Identity
Distinct identity for each human, service, device and integration. Access decisions consider tenant, facility, role, resource, action and context. Privileged actions require stronger authentication and audit. Authorization failure denies access.

## Integration
Allowlist endpoints/protocols; scope credentials; separate read/write credentials; rate-limit/validate payloads; enforce idempotency; record caller/scope/outcome/correlation ID; never ship service-role secrets to browser clients.

## AI and external services
Do not send classified OT data to external model APIs without data-owner approval and provider review. LLM commands never reach control systems. Ground responses in authorized evidence. Treat retrieved documents/tool outputs as untrusted. Deterministic services own calculations and authorization.

## IEC 62443
May inform design/assessment. Mapping selected requirements does not establish certification or conformity. Claims require scope, implementation evidence and qualified assessment.

## Threat scenarios
Compromised edge gateway; malformed telemetry; credential theft; cross-tenant exposure; unauthorized ERP/CMMS write-back; software/model supply-chain compromise; ransomware; queue replay/corruption; prompt injection; out-of-domain model output.

## Required artifacts
Network/data-flow diagrams, asset inventory, threat model, role matrix, connector allowlist, secrets inventory, logging plan, vulnerability register, incident response, backup/restore and penetration-test evidence. Production gate requires high-risk findings resolved or accepted by accountable authority and access/isolation/recovery/audit tests passed.
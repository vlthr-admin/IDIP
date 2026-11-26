# Implementation Rules

1. Work phase-by-phase. Each phase must produce a durable artifact and acceptance evidence.
2. Do not mark a phase accepted because a file was generated or a build succeeded.
3. Keep measured, derived, predicted, recommended and executed records distinct.
4. Label synthetic/demo data at every user-facing surface.
5. Preserve source provenance, model version, data window, uncertainty and limitations.
6. Keep PLC, DCS, SCADA control, SIS and actuators outside the IDIP application/control plane.
7. Use least privilege, tenant isolation and server-side authorization.
8. Never expose service-role keys in browser code or commit credentials.
9. Do not enable database deployment automation before migration review, isolated target validation and production approval.
10. Record material architecture changes in ADRs.
11. Keep integration adapters replaceable; do not couple the domain model to one vendor.
12. Report failed tests, unsupported assumptions and negative results.

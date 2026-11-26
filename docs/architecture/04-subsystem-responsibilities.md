# A04 — Subsystem Responsibilities

## 1. Industrial Data Infrastructure (IDI)
Acquire, validate, normalize and route industrial data: protocol/file adapters; tag/asset/unit mapping; timestamp normalization; quality checks; idempotent ingestion; durable buffering; synchronization; source metadata. **Output:** canonical quality-labelled observations.

## 2. Asset Intelligence and Digital Twin (AIDT)
Maintain facility/asset/equipment/component hierarchy, taxonomy, sensor mappings, operating modes/envelopes, configuration and state history. **Output:** contextual asset state with source/freshness metadata.

## 3. Reliability and Predictive Intelligence (RPI)
Provide rule-based limits, condition indicators, anomaly detection, evidence-backed diagnosis, degradation, failure probability/RUL where justified, reliability analytics, model registry and drift monitoring. **Output:** bounded condition/reliability assessments, not unqualified predictions.

## 4. Maintenance Intelligence and Management (MIM)
Represent corrective/run-to-failure where justified, time-based preventive, condition-based, predictive and prescriptive strategies. Manage work requirements, tasks, resources, schedules, priority, history/effectiveness and CMMS/EAM boundary. **Output:** justified maintenance options/work packages.

## 5. Enterprise Resource and Supply Chain Intelligence (ERSI)
Manage BOM/material master, inventory/reservations/warehouse, supplier qualification/lead times, reorder/stockout exposure, procurement and logistics. **Output:** material-readiness assessment and controlled procurement options.

## 6. Simulation and Experimentation Engine (SEE)
Simulate degradation, failure scenarios, maintenance timing/duration, production interruption, spares/supplier delays, repair/replace options and economics. Store reproducible configuration. **Output:** results with assumptions, parameters, uncertainty and limitations.

## 7. Industrial Decision Intelligence (IDI-D)
Define decisions, alternatives, constraints, risk/economic and multi-criteria evaluation, sensitivity, recommendations, approval routing and outcomes. **Output:** auditable decision package.

## 8. Enterprise Experience and Integration (EEI)
Provide workspaces for executive, operations, facility, asset, reliability, maintenance, procurement, R&D and administration. Integrate approved ERP/CMMS/EAM, identity, documents and data systems. AI may explain authorized evidence. **Output:** permission-aware experience/integration.

## Cross-cutting constraints
Reliability does not approve maintenance; simulation does not authorize operations; LLM does not own authoritative calculations or approvals; integration does not bypass source-system authorization; UI exposes uncertainty/evidence status.
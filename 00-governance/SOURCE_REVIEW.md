# IDIP — Source Review and Evidence Boundaries

**Status:** Review summary; original source files retained outside the public repository pending publication approval.

## Source set reviewed
1. CSV/SQLite architecture demonstration.
2. Security and architecture pitch deck.
3. Simulated ERP demonstration.

## 1. CSV/SQLite demonstration
The source demonstrates a Streamlit prototype using synthetic multi-asset telemetry, CSV/SQLite import/export, equipment-specific sensor/threshold/BOM context, Isolation Forest anomaly detection, charts/KPIs and an LLM-assisted explanation path.

Initial equipment examples include a gas turbine compressor, subsea Christmas tree, LNG cryogenic heat exchanger and subsea export pipeline.

Review boundary:
- Demonstrates an early workflow and UI concept.
- Synthetic data does not establish field performance.
- Isolation Forest anomaly scores do not prove failure diagnosis, failure date or remaining useful life.
- A visualization/state panel alone is not a validated digital twin.
- Code and ingestion paths require correctness, validation, error handling and security review before reuse.

## 2. Security pitch deck
The deck proposes an edge-to-enterprise architecture, OT/IT segmentation, industrial DMZ, IEC 62443-aligned zones/conduits, sanitized enterprise transfer and external LLM assistance.

Review boundary:
- Treat security controls and compliance mapping as design proposals.
- Do not claim IEC 62443 certification or conformity without scoped assessment evidence.
- Air-gap, latency, savings and security claims require measurable verification.
- External AI must remain outside the OT control path and only receive approved data.

## 3. Simulated ERP demonstration
The source demonstrates a Streamlit workflow combining synthetic telemetry, anomaly detection, simulated inventory, injected stockout/fault scenarios, emergency purchase requisition drafting and LLM-assisted explanation.

Review boundary:
- Inventory and procurement are simulated.
- It is not a live SAP/ERP integration.
- A generated requisition is not an approved purchase order or supplier dispatch.
- Workflow authorization, transaction integrity and source-system reconciliation are not established.

## 4. Initial product inference
The source prototypes suggest an initial vertical slice:
**telemetry intake → asset context/condition assessment → maintenance requirement → material readiness → decision package → human approval.**

The industrial platform must extend beyond run-to-failure. Maintenance strategy selection must consider corrective, time-based preventive, condition-based, predictive and prescriptive approaches according to asset criticality, failure behaviour, data availability, consequence, economics and operational constraints.

## 5. Evidence status
The source set is evidence of prototype concepts and workflow exploration. It is not evidence of production integrations, independently validated model performance, OT security certification, operational reliability improvement or realized financial savings.

## 6. Publication boundary
The GitHub repository is public. Original source files may contain customer, asset, operational or proprietary information. They are not copied into this public repository by default. Publish sanitized extracts only after owner approval and sensitivity review.

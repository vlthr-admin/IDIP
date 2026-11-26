# A07 — API and Event Contracts

**Status:** Contract principles/examples; implementation pending.

## Rules
Version external APIs/events; define required/optional fields; use stable canonical IDs and preserve source IDs; include event and ingestion timestamps; include unit, quality and provenance; require idempotency for retried writes; define pagination, filters, rate limits and errors; never rely on UI validation for security; reject unknown units rather than silently coercing.

## Measurement event example
```json
{
  "schema_version": "1.0",
  "event_id": "source-generated-stable-id",
  "event_type": "industrial.measurement.observed",
  "event_time": "2026-01-15T10:30:00Z",
  "ingested_at": "2026-01-15T10:30:02Z",
  "source": {"system_id": "historian-site-01", "tag_id": "COMP-04-BRG-DE-TEMP", "gateway_id": "edge-gateway-01"},
  "subject": {"facility_id": "facility-id", "asset_id": "asset-id", "equipment_id": "equipment-id", "component_id": "component-id", "sensor_id": "sensor-id"},
  "measurement": {"parameter": "bearing_temperature", "value": 84.2, "unit": "degC"},
  "quality": {"status": "good", "flags": []},
  "provenance": {"ingestion_adapter": "opcua-adapter", "adapter_version": "0.1.0"}
}
```

All identifiers are illustrative placeholders.

## API resource groups
Organizations, facilities, assets, equipment, sensors, measurements, events, condition assessments, failure modes, maintenance, materials, inventory, suppliers, procurement, simulations, decision cases, evidence, approvals and audit events under a versioned API.

## Errors and testing
Return stable machine-readable codes, readable messages, correlation IDs and field-level validation detail. Never expose secrets or stack traces. Contract tests cover schema compatibility, authorization, duplicate/replay, invalid units and timestamp/clock skew.
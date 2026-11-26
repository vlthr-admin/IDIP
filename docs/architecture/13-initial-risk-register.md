# A13 — Initial Architecture Risk Register

| ID | Risk | Consequence | Treatment | Owner |
|---|---|---|---|---|
| R-001 | Inaccurate asset/tag mapping | Wrong conclusions | Master-data reconciliation and mapping confidence | Asset/data |
| R-002 | Poor telemetry/clock drift | False or missed assessments | Quality gates, timestamp checks, freshness | Industrial data |
| R-003 | Anomaly mistaken for failure prediction | Unsafe reliance/alert fatigue | Separate tasks and validate each | Reliability |
| R-004 | Model outside validated domain | Misleading output | Domain checks, uncertainty, degraded mode | Model owner |
| R-005 | OT/IT boundary weakness | Plant/enterprise compromise | Threat model, segmentation, independent review | OT security |
| R-006 | Unauthorized enterprise write-back | Incorrect transaction | Read-only default, scoped credentials, approvals | Integration |
| R-007 | Offline queue loss/duplication | Inconsistent records | Durable queue, idempotency, replay tests | Platform |
| R-008 | Stale inventory/supplier data | Incorrect material readiness | Reconciliation and freshness flags | Supply chain |
| R-009 | Unrepresentative simulation assumptions | Poor decision | Provenance, sensitivity, domain review | Domain |
| R-010 | LLM misstates evidence | Incorrect interpretation | Grounding, citations, human review | AI governance |
| R-011 | Data rights/confidentiality unclear | Legal/trust exposure | Classification, agreements, retention review | Product/legal |
| R-012 | MVP too broad | Delay/weak validation | Narrow pilot and gates | Product |
| R-013 | Compliance claims exceed evidence | Contractual/reputational risk | Claim review and assessment | Security/compliance |
| R-014 | Cloud/edge dependency unavailable | Service interruption | Local mode, queue, recovery, fallback | Platform |

Each risk requires named owner, likelihood, impact, treatment, due date and residual-risk acceptance before pilot. This is qualitative and not a completed risk assessment.
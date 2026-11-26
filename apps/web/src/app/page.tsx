import { Activity, ArrowUpRight, Boxes, BrainCircuit, ClipboardCheck, Factory, Gauge, ShieldCheck, Wrench } from "lucide-react";

const metrics = [
  { label: "Registered assets", value: "27", note: "Synthetic demonstration" },
  { label: "Condition events", value: "06", note: "3 awaiting review" },
  { label: "Work requirements", value: "04", note: "2 draft · 2 review" },
  { label: "Evidence coverage", value: "92.4%", note: "Demo data quality score" }
];
const assets = [
  { tag: "COMP-GT-04", name: "Gas turbine compressor", facility: "Oziengbe Flowstation", state: "Attention", status: "warning", value: "82.4 °C", signal: "Bearing temperature" },
  { tag: "PUMP-EXP-02", name: "Export pump 02", facility: "Oziengbe Flowstation", state: "Normal", status: "good", value: "4.8 mm/s", signal: "Vibration RMS" },
  { tag: "SUB-XT-09", name: "Subsea Christmas tree", facility: "Offshore asset / demo", state: "Data gap", status: "muted", value: "—", signal: "Last update 6h ago" }
];
const workflow = [
  { title: "Measurement intake", text: "CSV import validated", state: "Complete", icon: Activity },
  { title: "Condition assessment", text: "Rule-based deviation detected", state: "Review", icon: Gauge },
  { title: "Maintenance requirement", text: "Draft linked to evidence", state: "Draft", icon: Wrench },
  { title: "Decision package", text: "Alternatives not yet evaluated", state: "Pending", icon: ClipboardCheck }
];

export default function Home() {
  return <main className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">I</div><div><strong>IDIP</strong><span>INDUSTRIAL INTELLIGENCE</span></div></div>
      <div className="workspace"><span className="eyebrow">WORKSPACE</span><div className="workspace-name"><Factory size={17}/> <span>Oziengbe Flowstation</span><span className="chevron">⌄</span></div></div>
      <nav className="nav">
        <span className="eyebrow">OPERATIONS</span>
        <a className="active" href="#overview"><Gauge size={17}/> Overview</a>
        <a href="#assets"><Boxes size={17}/> Assets & equipment</a>
        <a href="#condition"><Activity size={17}/> Reliability intelligence</a>
        <a href="#maintenance"><Wrench size={17}/> Maintenance</a>
        <a href="#supply"><Factory size={17}/> Supply & procurement</a>
        <a href="#decisions"><BrainCircuit size={17}/> Decision workspace</a>
        <span className="eyebrow nav-lower">GOVERNANCE</span>
        <a href="#evidence"><ShieldCheck size={17}/> Evidence & audit</a>
      </nav>
      <div className="sidebar-bottom"><div className="demo-pill"><span/> DEMONSTRATION ENVIRONMENT</div><div className="user-block"><div className="avatar">SA</div><div><strong>System Admin</strong><span>Workspace owner</span></div><span className="chevron">···</span></div></div>
    </aside>
    <section className="main-area" id="overview">
      <header className="topbar"><div className="crumb">Operations <span>/</span> Overview</div><div className="top-actions"><span className="data-fresh"><i/> Data stream simulated</span><button className="outline-button">Last 24 hours⌄</button><div className="avatar small">SA</div></div></header>
      <div className="content">
        <div className="page-heading"><div><div className="eyebrow orange">INDUSTRIAL DECISION INTELLIGENCE</div><h1>Operations overview</h1><p>Asset condition, reliability exposure and operational decisions across your facility.</p></div><button className="primary-button">Create decision case <ArrowUpRight size={16}/></button></div>
        <div className="notice"><ShieldCheck size={18}/><div><strong>Demonstration data active</strong><span>Values, assets and events on this screen are synthetic. No live plant systems or control networks are connected.</span></div><span className="notice-tag">NOT FIELD VALIDATED</span></div>
        <div className="metric-grid">{metrics.map((m) => <div className="metric-card" key={m.label}><span>{m.label}</span><strong>{m.value}</strong><small>{m.note}</small></div>)}</div>
        <div className="section-heading" id="assets"><div><h2>Asset condition</h2><p>Current state with source and freshness context</p></div><a href="#assets">View all assets <ArrowUpRight size={14}/></a></div>
        <div className="asset-table card"><div className="table-head"><span>ASSET / EQUIPMENT</span><span>FACILITY</span><span>CONDITION</span><span>LAST OBSERVATION</span><span>KEY SIGNAL</span></div>{assets.map(a => <div className="asset-row" key={a.tag}><div><strong>{a.tag}</strong><span>{a.name}</span></div><span>{a.facility}</span><span><i className={`state-dot ${a.status}`}/>{a.state}</span><div><strong>{a.value}</strong><span>{a.signal}</span></div><span className="muted-link">Open asset <ArrowUpRight size={13}/></span></div>)}</div>
        <div className="lower-grid">
          <section id="maintenance"><div className="section-heading"><div><h2>Decision pipeline</h2><p>From operational evidence to authorized action</p></div><a href="#decisions">Open pipeline <ArrowUpRight size={14}/></a></div><div className="pipeline card">{workflow.map((w, i) => { const Icon = w.icon; return <div className="pipeline-step" key={w.title}><div className={`pipeline-icon p${i}`}><Icon size={17}/></div><div className="pipeline-copy"><strong>{w.title}</strong><span>{w.text}</span></div><span className={`pipeline-state s${i}`}>{w.state}</span></div>})}</div></section>
          <section id="decisions"><div className="section-heading"><div><h2>Decision exposure</h2><p>Illustrative operating trade-off</p></div><a href="#decisions">Compare options <ArrowUpRight size={14}/></a></div><div className="exposure-card card"><div className="exposure-top"><div><span className="eyebrow">OPEN DECISION CASE</span><h3>Compressor bearing temperature</h3><p>COMP-GT-04 · Condition deviation</p></div><span className="risk-label">HIGH PRIORITY</span></div><div className="exposure-stats"><div><span>Potential production exposure</span><strong>$18.5k <small>/ day</small></strong></div><div><span>Evidence status</span><strong className="unvalidated">Unvalidated</strong></div></div><div className="exposure-foot"><span>Scenario estimate · synthetic assumptions</span><ArrowUpRight size={15}/></div></div></section>
        </div>
        <footer>Industrial Decision Intelligence Platform <span>·</span> Draft application surface v0.1.0 <span>·</span> OT control is outside this product boundary.</footer>
      </div>
    </section>
  </main>;
}
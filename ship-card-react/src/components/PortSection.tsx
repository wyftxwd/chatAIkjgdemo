export default function PortSection() {
  return (
    <div className="port-section">
      <div className="port-header">
        <div className="port-header-left">
          <span className="port-header-prefix">港口情报</span>
          <span className="port-header-divider"></span>
          <span className="port-header-name">上海</span>
          <span className="port-header-en">SHANGHAI</span>
          <span className="port-code mono">CNSHA</span>
        </div>
        <span className="badge-live">LIVE</span>
      </div>
      <div className="port-body">
        <div className="alert-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <span>特殊事件：恶劣天气 (台风外围影响)</span>
        </div>
        <div className="port-stats-row">
          <div className="stat-card">
            <span className="stat-label">平均等泊</span>
            <span className="stat-value blue">10 <small>小时</small></span>
          </div>
          <div className="stat-card">
            <span className="stat-label">锚地船舶</span>
            <span className="stat-value orange">20 <small>艘</small></span>
          </div>
          <div className="stat-card">
            <span className="stat-label">泊位利用率</span>
            <span className="stat-value red">87<small>%</small></span>
          </div>
        </div>
      </div>
    </div>
  )
}

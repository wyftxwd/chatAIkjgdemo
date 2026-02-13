import { useState } from 'react'

type ShipStatus = 'sailing' | 'berthed'

interface ShipHeroProps {
  mobile?: boolean
}

export default function ShipHero({ mobile = false }: ShipHeroProps) {
  const [status, setStatus] = useState<ShipStatus>('sailing')
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(false)
  const isSailing = status === 'sailing'

  const toggleStatus = () => {
    setStatus(prev => prev === 'sailing' ? 'berthed' : 'sailing')
  }

  const chevronIcon = (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )

  return (
    <div className="ship-hero">
      <div className="hero-base"></div>
      <div className="hero-ship-img"></div>

      <div className="water-fx">
        <svg className="water-wave water-wave-1" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,30 C200,10 400,50 600,30 C800,10 1000,50 1200,30 V60 H0Z" fill="rgba(30,136,229,0.12)"/>
        </svg>
        <svg className="water-wave water-wave-2" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,35 C150,15 350,55 550,35 C750,15 950,55 1200,35 V60 H0Z" fill="rgba(66,165,245,0.08)"/>
        </svg>
        <svg className="water-wave water-wave-3" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,38 C180,20 380,52 580,38 C780,24 980,50 1200,38 V60 H0Z" fill="rgba(30,136,229,0.06)"/>
        </svg>
        <div className="water-shimmer"></div>
        <div className="water-shimmer shimmer-2"></div>
      </div>

      <div className="radar-mask">
        <div className="radar-mask-inner"></div>
      </div>

      <svg className="radar-rings" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
        <circle cx="300" cy="200" r="180" fill="none" stroke="rgba(30,136,229,0.08)" strokeWidth="0.5"/>
        <circle cx="300" cy="200" r="130" fill="none" stroke="rgba(30,136,229,0.06)" strokeWidth="0.5"/>
        <circle cx="300" cy="200" r="80" fill="none" stroke="rgba(30,136,229,0.05)" strokeWidth="0.5"/>
        <line x1="120" y1="200" x2="480" y2="200" stroke="rgba(30,136,229,0.04)" strokeWidth="0.5"/>
        <line x1="300" y1="20" x2="300" y2="380" stroke="rgba(30,136,229,0.04)" strokeWidth="0.5"/>
      </svg>

      {/* 左侧面板：船舶信息 */}
      <div className="glass-panel panel-left">
        <div className="panel-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(180,210,240,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20l.8-2.7A1.4 1.4 0 0 1 3.3 17H21a1 1 0 0 0 .9-1.4L18 6a1 1 0 0 0-.9-.6H5a1 1 0 0 0-.9.6L2 12"/>
            <path d="M2 20h20"/>
          </svg>
          船舶信息
          {mobile && (
            <button
              className={`panel-collapse-toggle ${!leftOpen ? 'panel-collapse-toggle--collapsed' : ''}`}
              onClick={() => setLeftOpen(p => !p)}
              aria-label={leftOpen ? '收起船舶信息' : '展开船舶信息'}
            >
              {leftOpen ? '收起' : '展开'}{chevronIcon}
            </button>
          )}
        </div>
        <div className={`panel-fields-wrap ${mobile && !leftOpen ? 'panel-fields-wrap--collapsed' : ''}`}>
          <div className="panel-fields">
            <div className="field-row">
              <span className="field-label">中文船名</span>
              <span className="field-value">中远海运双鱼座</span>
            </div>
            <div className="field-row">
              <span className="field-label">英文船名</span>
              <span className="field-value mono">COSCO SHIPPING PISCES</span>
            </div>
            <div className="field-row">
              <span className="field-label">MMSI</span>
              <span className="field-value mono">477168800</span>
            </div>
            <div className="field-row">
              <span className="field-label">IMO</span>
              <span className="field-value mono">9789647</span>
            </div>
            <div className="field-row">
              <span className="field-label">箱量</span>
              <span className="field-value highlight-accent mono">20,000 TEU</span>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧面板：航行动态 */}
      <div className="glass-panel panel-right">
        <div className="panel-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(180,210,240,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11"/>
          </svg>
          航行动态
          {mobile && (
            <button
              className={`panel-collapse-toggle ${!rightOpen ? 'panel-collapse-toggle--collapsed' : ''}`}
              onClick={() => setRightOpen(p => !p)}
              aria-label={rightOpen ? '收起航行动态' : '展开航行动态'}
            >
              {rightOpen ? '收起' : '展开'}{chevronIcon}
            </button>
          )}
        </div>
        <div className={`panel-fields-wrap ${mobile && !rightOpen ? 'panel-fields-wrap--collapsed' : ''}`}>
          <div className="panel-fields">
            <div className="field-row">
              <span className="field-label">航向 / 航速</span>
              <span className="field-value mono">285° / 18.5 kn</span>
            </div>
            <div className="field-row">
              <span className="field-label">当前位置</span>
              <span className="field-value mono">34.12°N, 124.56°E</span>
            </div>
            <div className="field-row">
              <span className="field-label">吃水</span>
              <span className="field-value mono">14.5 m</span>
            </div>
            <div className="field-row">
              <span className="field-label">目的港</span>
              <span className="field-value highlight-success mono">SHANGHAI (CNSHA)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部状态条 */}
      <div className="ship-status-bar">
        <div className={`ship-badge ${isSailing ? '' : 'ship-badge--berthed'}`}>
          <span
            className="badge-dot-wrap"
            onClick={toggleStatus}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            aria-label={`当前状态：${isSailing ? '航行中' : '靠泊中'}，点击切换`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleStatus() }}
          >
            <span className={`badge-dot ${isSailing ? '' : 'badge-dot--berthed'}`}></span>
            {isSailing && <span className="badge-ring"></span>}
          </span>
          {isSailing ? '航行中' : '靠泊中'}
        </div>
        <div className="update-time-box">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(180,210,240,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span className="update-time">2026-02-12 14:30 更新</span>
        </div>
      </div>
    </div>
  )
}

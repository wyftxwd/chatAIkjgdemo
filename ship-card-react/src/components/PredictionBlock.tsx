import { useState } from 'react'

export default function PredictionBlock() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="prediction-block">
      {/* AI 标签 + 标题行 */}
      <div className="prediction-block-header">
        <div className="prediction-title-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span className="prediction-main-title">智能船期预测</span>
        </div>
        <span className="ai-corner-badge">AI PREDICTION</span>
      </div>

      {/* 预测卡片组 */}
      <div className="prediction-cards">
        <div className="pred-card">
          <span className="pred-label">预测 ETA</span>
          <span className="pred-date">2026-05-20</span>
          <span className="pred-time">16:30</span>
        </div>
        <div className="pred-card">
          <span className="pred-label">预测 ETB</span>
          <span className="pred-date">2026-05-20</span>
          <span className="pred-time">18:45</span>
        </div>
        <div className="pred-card accent">
          <span className="pred-label">预测 ETD</span>
          <span className="pred-date">2026-05-22</span>
          <span className="pred-time">10:00</span>
        </div>
      </div>

      {/* 开港/截港 */}
      <div className="prediction-footer">
        <div className="footer-item">
          <span className="footer-label">预测开港</span>
          <span className="footer-value">2026-05-15 08:00</span>
        </div>
        <div className="footer-item">
          <span className="footer-label">预计截港</span>
          <span className="footer-value">2026-05-19 18:00</span>
        </div>
      </div>

      {/* 底部：免责声明（左） + 订阅按钮（右） */}
      <div className="prediction-bottom-bar">
        <div className="prediction-disclaimer">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <span>以上数据经由AI预测生成，请以实际港区计划为准。</span>
        </div>
        <button
          className={`subscribe-btn ${subscribed ? 'subscribe-btn--active' : ''}`}
          onClick={() => setSubscribed(prev => !prev)}
        >
          {subscribed ? (
            <>
              <svg className="subscribe-btn__icon--check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span className="subscribe-btn__text--subscribed">已订阅</span>
              <svg className="subscribe-btn__icon--cancel" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              <span className="subscribe-btn__text--cancel">取消订阅</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              订阅该船期
            </>
          )}
        </button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import './ship-card.css'
import ShipHero from './components/ShipHero'
import PortSection from './components/PortSection'
import PredictionBlock from './components/PredictionBlock'

function App() {
  const [mobile, setMobile] = useState(false)

  return (
    <div className="card-wrapper">
      <div className={`card ${mobile ? 'card--mobile' : ''}`}>
        <ShipHero mobile={mobile} />
        <PortSection />
        <PredictionBlock mobile={mobile} />
      </div>
      <button
        className="view-toggle-btn"
        onClick={() => setMobile(prev => !prev)}
        aria-label={mobile ? '切换至桌面端' : '切换至移动端'}
      >
        {mobile ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        )}
        {mobile ? '切换至桌面端' : '切换至移动端'}
      </button>
    </div>
  )
}

export default App

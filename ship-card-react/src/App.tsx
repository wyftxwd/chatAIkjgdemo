import './ship-card.css'
import ShipHero from './components/ShipHero'
import PortSection from './components/PortSection'
import PredictionBlock from './components/PredictionBlock'

function App() {
  return (
    <div className="card">
      <ShipHero />
      <PortSection />
      <PredictionBlock />
    </div>
  )
}

export default App

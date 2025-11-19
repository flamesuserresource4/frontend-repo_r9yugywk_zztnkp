import Hero from './components/Hero'
import Stats from './components/Stats'
import Expertise from './components/Expertise'
import Assessment from './components/Assessment'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero with Spline asset */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Expertise */}
      <Expertise />

      {/* Assessment */}
      <Assessment />

      {/* CTA */}
      <CTA />
    </div>
  )
}

export default App

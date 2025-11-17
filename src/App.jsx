import { useRef } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  const startRef = useRef(null)

  const scrollToStart = () => {
    const el = document.getElementById('start')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl text-slate-900">Apex Tax & Wealth</a>
          <nav className="hidden sm:flex items-center gap-6 text-slate-700">
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#start" className="hover:text-slate-900">Get started</a>
            <a href="/test" className="hover:text-slate-900">System test</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero onStart={scrollToStart} />
        <HowItWorks />
        <LeadForm ref={startRef} />
      </main>

      <Footer />
    </div>
  )
}

export default App

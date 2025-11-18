import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-peach-100 text-peach-900">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute -top-20 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-peach-200 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App

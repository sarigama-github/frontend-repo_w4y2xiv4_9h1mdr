import React from 'react'

export default function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/70 backdrop-blur-md shadow-sm border border-white/40 flex items-center justify-center">
            <span className="text-peach-700 text-lg font-semibold">LG</span>
          </div>
          <span className="text-peach-900/90 font-semibold tracking-tight text-lg">Lucid Glass</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-peach-900/80">
          <a href="#features" className="hover:text-peach-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-peach-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-peach-900 transition-colors">Contact</a>
        </nav>

        <button className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 backdrop-blur-md px-4 py-2 text-peach-900/90 shadow-sm hover:bg-white/80 transition">
          Get Started
        </button>
      </div>
    </header>
  )
}

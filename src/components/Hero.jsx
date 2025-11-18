import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Soft peach gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-peach-100 via-peach-100 to-peach-200" />

      {/* Spline 3D scene */}
      <div className="relative h-[70vh] w-full">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glassy overlay header */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 -mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-peach-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
            Lucid Glass Experiences
          </h1>
          <p className="mt-5 text-lg md:text-xl text-peach-800/80">
            A playful, vintage-inspired 2.5D scene with a glass perfume bottle and floating leaves. Explore a lifestyle aesthetic brought to life.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#features" className="rounded-full bg-peach-700 text-white px-5 py-3 shadow-md hover:bg-peach-800 transition">Explore</a>
            <a href="#about" className="rounded-full border border-peach-700/30 bg-white/50 backdrop-blur-md text-peach-900 px-5 py-3 shadow-sm hover:bg-white/70 transition">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

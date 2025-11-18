import React from 'react'

const features = [
  {
    title: 'Glassy UI',
    desc: 'Translucent layers, soft shadows, and subtle blur for a modern, lucid look.',
  },
  {
    title: 'Interactive 3D',
    desc: 'The hero features a playful Spline model to explore and interact with.',
  },
  {
    title: 'Delicate Palette',
    desc: 'Peach, cream, and green hues create a calm beauty and lifestyle vibe.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-100px,rgba(255,237,213,0.7),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-peach-900">{f.title}</h3>
              <p className="mt-2 text-peach-900/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

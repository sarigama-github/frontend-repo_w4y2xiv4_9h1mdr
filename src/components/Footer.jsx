import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_120%,rgba(255,237,213,0.6),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-peach-900/80">© {new Date().getFullYear()} Lucid Glass. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a className="rounded-full border border-white/50 bg-white/60 backdrop-blur-md px-4 py-2 text-peach-900/90 shadow-sm hover:bg-white/80 transition" href="#">Twitter</a>
          <a className="rounded-full border border-white/50 bg-white/60 backdrop-blur-md px-4 py-2 text-peach-900/90 shadow-sm hover:bg-white/80 transition" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

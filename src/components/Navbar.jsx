import { useState } from 'react'
import { Menu, X, Compass, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Explore', href: '#destinations' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Packages', href: '#pricing' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute left-0 right-0 top-0 z-50 bg-ink/25 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral text-white"><Compass size={20} /></span>
          Roamly<span className="text-sunshine">.</span>
        </a>

        <button
          className="rounded-xl border border-white/25 p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-ink p-5 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-ink">
            Plan a trip <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}

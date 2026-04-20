import { useState } from 'react'

const navLinks = [
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo / Name */}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-sm font-semibold tracking-[0.18em] text-slate-800 uppercase transition-colors hover:text-slate-600"
        >
          Prince Sah
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 rounded-md p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-px bg-slate-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-slate-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-slate-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg shadow-slate-900/5 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

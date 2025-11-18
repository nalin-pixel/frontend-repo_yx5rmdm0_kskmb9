import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#top' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-5 py-3 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">FK</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:contato@exemplo.com" className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors" aria-label="E-mail"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6">
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-3 text-slate-300 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

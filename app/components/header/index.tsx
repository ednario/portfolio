'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSend, FiArrowUpRight } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#060913]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 text-gray-100 hover:text-sky-400 transition-colors"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600/25 to-sky-500/10 border border-blue-500/35 group-hover:border-sky-400 group-hover:shadow-[0_0_16px_rgba(56,189,248,0.4)] transition-all duration-300">
            <span className="font-mono font-bold text-sm text-sky-400">EA</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium tracking-tight text-sm text-gray-200 group-hover:text-white transition-colors">
              Ednario Andrade
            </span>
            <span className="font-mono text-[10px] text-gray-500 -mt-0.5">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-white/[0.06] backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-sm font-medium text-gray-300 hover:text-sky-300 rounded-full transition-all duration-200 hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 bg-blue-950/50 border border-blue-500/30 px-3 py-1.5 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span>Disponível para projetos</span>
          </div>

          <a
            href="#contato"
            className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5"
          >
            <span>Fale Comigo</span>
            <FiSend size={13} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-lg bg-slate-800/60 border border-white/10 text-gray-300 hover:text-white"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/[0.08] bg-[#060913]/95 backdrop-blur-xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-300 bg-blue-950/50 border border-blue-500/30 px-3 py-1.5 rounded-full w-max mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span>Disponível para projetos</span>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-gray-300 hover:text-sky-400 py-2 border-b border-white/[0.04]"
                >
                  <span>{link.label}</span>
                  <FiArrowUpRight className="text-gray-500" size={16} />
                </a>
              ))}

              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <span>Entre em contato</span>
                <FiSend size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

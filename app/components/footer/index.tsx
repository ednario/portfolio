'use client'

import { FiArrowUp, FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#060913] pt-16 pb-12 overflow-hidden">
      {/* Top ambient blue line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />

      <div className="container flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <span className="font-mono font-bold text-xs text-sky-400">EA</span>
              </div>
              <span className="text-lg font-semibold text-gray-100">
                Ednario Andrade
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Engenharia de software com foco em backend, APIs resilientes, microserviços e alta escalabilidade.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ednarioandrade"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-gray-400 hover:text-sky-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ednarioandrade"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-gray-400 hover:text-sky-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="#contato"
              aria-label="Contato direto"
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-gray-400 hover:text-sky-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            >
              <FiMail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="group flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/30 transition-all duration-300"
            >
              <span>Topo</span>
              <FiArrowUp className="group-hover:-translate-y-0.5 transition-transform" size={14} />
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-white/[0.05]" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {currentYear} Ednario Andrade. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Construído com Next.js &</span>
            <FiHeart className="text-sky-400 fill-sky-400" size={12} />
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useMemo } from 'react'
import KnownTech from './known-tech'
import { KnownTechs as IKnownTechs } from '@/app/types/projects'
import SectionTitle from '@/app/components/section-title'
import Reveal from '@/app/components/reveal'
import { FiSearch, FiLayers } from 'react-icons/fi'

type KnownTechsProps = {
  techs: IKnownTechs[]
}

function KnownTechs({ techs }: KnownTechsProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTechs = useMemo(() => {
    if (!searchTerm.trim()) return techs
    const query = searchTerm.toLowerCase().trim()
    return techs.filter((t) => t.name.toLowerCase().includes(query))
  }, [techs, searchTerm])

  return (
    <section id="competencias" className="container py-24 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <Reveal>
          <SectionTitle subtitle="competências" title="Tecnologias & Ferramentas" />
          <p className="text-slate-400 text-sm max-w-lg mt-3">
            Ferramentas, linguagens e frameworks que utilizo no dia a dia para desenvolver sistemas de alto desempenho.
          </p>
        </Reveal>

        {/* Search bar with glass styling */}
        <Reveal delay={0.1}>
          <div className="relative w-full md:w-72">
            <FiSearch
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar tecnologia..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 backdrop-blur-md transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </Reveal>
      </div>

      {/* Grid of technologies */}
      {filteredTechs?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTechs.map((tech, index) => (
            <Reveal key={tech.name} delay={Math.min(index * 0.04, 0.28)}>
              <KnownTech tech={tech} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 rounded-2xl bg-slate-900/40 border border-dashed border-white/10 text-center">
          <FiLayers size={32} className="text-slate-500 mb-3" />
          <p className="text-slate-300 font-medium">Nenhuma tecnologia encontrada</p>
          <p className="text-slate-500 text-sm mt-1">
            Tente buscar por outro termo ou limpe a busca.
          </p>
        </div>
      )}
    </section>
  )
}

export default KnownTechs

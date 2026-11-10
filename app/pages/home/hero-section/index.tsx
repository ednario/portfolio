import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FiCode } from 'react-icons/fi'

import TechBadge from '@/app/components/tech-badge'
import Button from '@/app/components/button'
import RichText from '@/app/components/rich-text'
import CMSIcon from '@/app/components/cms-icon'
import Reveal from '@/app/components/reveal'

import { HomePageInfo } from '@/app/types/page-info'

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

function HeroSection({ homeInfo }: HomeSectionProps) {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-16 pb-16 lg:py-24 overflow-hidden"
    >
      {/* Ambient blue glow in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-blue-500/18 blur-[140px] rounded-full"
      />

      <div className="container relative z-10 flex items-center justify-between flex-col-reverse lg:flex-row gap-12 lg:gap-16">
        {/* Left Column: Text & CTAs */}
        <Reveal className="w-full lg:max-w-[580px]">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/35 backdrop-blur-md mb-6 shadow-[0_0_18px_rgba(59,130,246,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="font-mono text-xs font-semibold text-sky-300">
              Disponível para novos projetos & posições
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Ednario <span className="text-gradient-blue">Andrade</span>
          </h1>

          <p className="font-mono text-sm sm:text-base text-sky-400 mt-2 tracking-wide flex items-center gap-2">
            <span className="text-slate-500">&gt;</span> Backend & Fullstack Software Engineer
          </p>

          <div className="text-slate-300 my-6 text-sm sm:text-base leading-relaxed max-w-xl">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          {/* Quick Stats Highlights */}
          <div className="grid grid-cols-3 gap-3 py-3.5 my-6 border-y border-white/[0.08] max-w-lg">
            <div className="flex flex-col">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                4+ <span className="text-sky-400 text-sm">anos</span>
              </span>
              <span className="text-xs text-slate-400 mt-0.5">Experiência</span>
            </div>
            <div className="flex flex-col border-l border-white/[0.08] pl-4">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                APIs <span className="text-sky-400 text-xs">REST/gRPC</span>
              </span>
              <span className="text-xs text-slate-400 mt-0.5">Escaláveis</span>
            </div>
            <div className="flex flex-col border-l border-white/[0.08] pl-4">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                Clean <span className="text-sky-400 text-xs">Arch</span>
              </span>
              <span className="text-xs text-slate-400 mt-0.5">Boas Práticas</span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 max-w-lg">
            {homeInfo.technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}
          </div>

          {/* Action CTAs & Socials */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 pt-2">
            <a href="#contato">
              <Button size="lg" className="w-full sm:w-auto">
                <span>Vamos conversar</span>
                <HiArrowNarrowRight size={18} />
              </Button>
            </a>

            <a href="#projetos">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <FiCode size={16} className="text-sky-400" />
                <span>Ver Projetos</span>
              </Button>
            </a>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:ml-2 pt-2 sm:pt-0">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Rede social"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-sky-400 hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-1"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right Column: Hero Profile Presentation */}
        <Reveal delay={0.15} className="relative shrink-0 flex items-center justify-center">
          {/* Ambient Blue Glow behind profile */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/35 via-sky-500/18 to-transparent blur-3xl opacity-80"
          />

          {/* Photo Card Container */}
          <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 backdrop-blur-xl shadow-photo group">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                className="w-[270px] h-[300px] sm:w-[320px] sm:h-[350px] lg:w-[380px] lg:h-[430px] object-cover transition-transform duration-700 group-hover:scale-105"
                width={420}
                height={460}
                src={homeInfo.profilePicture.url}
                alt="Foto de perfil do Ednario Andrade"
                priority
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-60"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection

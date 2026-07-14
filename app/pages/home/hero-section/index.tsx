import Image from 'next/image'

import { HiArrowNarrowRight } from 'react-icons/hi'

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
    <section className="relative w-full lg:min-h-[655px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-24 py-28 lg:pb-16 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1220]/95 via-[#0b1220]/70 to-[#0b1220]/35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-[#0b1220]/40"
      />

      <div className="container relative z-10 flex items-center justify-between flex-col-reverse lg:flex-row gap-10 lg:gap-16">
        <Reveal className="w-full lg:max-w-[540px]">
          <p className="font-mono text-emerald-400 text-sm tracking-wide">
            Olá, meu nome é
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium mt-3 leading-[1.1] tracking-tight text-gray-50">
            Ednario Andrade
          </h1>

          <div className="text-gray-400 my-6 text-sm sm:text-base leading-relaxed">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[380px]">
            {homeInfo.technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}
          </div>

          <div className="flex sm:items-center mt-8 lg:mt-10 sm:gap-6 sm:flex-row flex-col gap-4">
            <a href="#contato">
              <Button className="w-max shadow-button">
                Entre em contato
                <HiArrowNarrowRight size={18} />
              </Button>
            </a>

            <div className="text-2xl text-gray-500 flex items-center gap-4">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-2xl bg-emerald-500/10 blur-2xl"
          />
          <Image
            className="relative rounded-2xl w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[420px] shadow-photo object-cover ring-1 ring-white/10"
            width={420}
            height={420}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil do Ednario Andrade"
            priority
          />
        </Reveal>
      </div>
    </section>
  )
}

export default HeroSection

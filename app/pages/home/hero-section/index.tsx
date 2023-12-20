import Image from 'next/image'

import { HiArrowNarrowRight } from 'react-icons/hi'

import TechBadge from '@/app/components/tech-badge'
import Button from '@/app/components/button'
import RichText from '@/app/components/rich-text'
import CMSIcon from '@/app/components/cms-icon'

import { HomePageInfo } from '@/app/types/page-info'

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

function HeroSection({ homeInfo }: HomeSectionProps) {
  return (
    <section className="w-full lg:h-[655px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[10px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Ednario Andrade</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}
          </div>

          <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 sm:flex-row flex-col">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          className="rounded-lg w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mg-0 shadow-2xl object-cover"
          width={420}
          height={404}
          src={homeInfo.profilePicture.url}
          alt="Foto de perfil do Ednario Andrade"
        />
      </div>
    </section>
  )
}

export default HeroSection

import Image from 'next/image'

import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb'

import TechBadge from '@/app/components/tech-badge'
import Button from '@/app/components/button'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/ednario',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://linkedin.com/in/ednario-andrade',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://www.youtube.com/@studyprogrammingwithme',
    icon: <TbBrandYoutube />,
  },
  {
    url: 'https://w.app/kbOD4c',
    icon: <TbBrandWhatsapp />,
  },
]

function HeroSection() {
  return (
    <section className="w-full lg:h-[655px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[10px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Ednario Andrade</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou um desenvolvedor de softwares com foco em Node.js há 2 anos.
            Tenho ampla experiência no uso de frameworks populares, como Express
            e Nest, para criar soluções robustas. Além disso, tenho
            conhecimentos sólidos em outras tecnologias, como Python e Java.
            Durante minha jornada profissional, adquiri experiência em aplicar
            boas práticas de desenvolvimento, como TDD (Test-Driven Development)
            e DDD (Domain-Driven Design). Estou sempre em busca de novos
            desafios e oportunidades para aprimorar minhas habilidades e
            contribuir para projetos de sucesso.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge key={index} name="Node.js" />
            ))}
          </div>

          <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 sm:flex-row flex-col">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          className="rounded-lg w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mg-0 shadow-2xl object-cover"
          width={420}
          height={404}
          src="/images/profile-pic.jpeg"
          alt="Foto de perfil do Ednario Andrade"
        />
      </div>
    </section>
  )
}

export default HeroSection

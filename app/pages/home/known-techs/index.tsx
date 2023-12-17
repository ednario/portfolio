import { SiExpress } from 'react-icons/si'

import KnownTech from './known-tech'

import SectionTitle from '@/app/components/section-title'

function KnownTechs() {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <SiExpress />,
              name: 'Express.js',
              startDate: '2021-03-01',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default KnownTechs

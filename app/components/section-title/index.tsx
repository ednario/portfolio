import { cn } from '@/app/utils/cn'

type SectionTitleProps = {
  title: string
  subtitle?: string
  className?: string
}

function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {subtitle && (
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-sky-300 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-full w-max shadow-[0_0_12px_rgba(59,130,246,0.18)]">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
          {`// ${subtitle}`}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mt-0.5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.5)]"
      />
    </div>
  )
}

export default SectionTitle

import { cn } from '@/app/utils/cn'

type SectionTitleProps = {
  title: string
  subtitle?: string
  className?: string
}

function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="font-mono text-sm text-emerald-400 tracking-wide">
        {`../${subtitle}`}
      </span>
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-50">
        {title}
      </h2>
      <span
        aria-hidden
        className="mt-1 h-px w-16 bg-gradient-to-r from-emerald-500 to-transparent"
      />
    </div>
  )
}

export default SectionTitle

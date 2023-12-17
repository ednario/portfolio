import { cn } from '@/app/utils/cn'

type SectionTitleProps = {
  title: string
  subtitle?: string
  className?: string
}

function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="font-mono text-sm text-emerald-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  )
}

export default SectionTitle

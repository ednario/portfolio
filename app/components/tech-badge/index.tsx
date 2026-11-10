import { cn } from '@/app/utils/cn'

type TechBadgeProps = {
  name: string
  className?: string
  size?: 'sm' | 'md'
}

function TechBadge({ name, className, size = 'sm' }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-mono font-medium rounded-lg transition-all duration-300',
        'text-sky-300 bg-blue-950/40 border border-blue-500/25 backdrop-blur-sm',
        'hover:border-sky-400 hover:bg-blue-900/40 hover:text-sky-100 hover:shadow-[0_0_12px_rgba(56,189,248,0.35)] hover:-translate-y-0.5',
        size === 'sm' ? 'text-xs px-2.5 py-1' : 'text-sm px-3.5 py-1.5',
        className,
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
      <span>{name}</span>
    </span>
  )
}

export default TechBadge

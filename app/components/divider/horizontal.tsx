import { cn } from '@/app/utils/cn'

type HorizontalDividerProps = {
  className?: string
}

function HorizontalDivider({ className }: HorizontalDividerProps) {
  return (
    <div
      className={cn(
        'w-full my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent',
        className,
      )}
    />
  )
}

export default HorizontalDivider

import { cn } from '@/app/utils/cn'

type HorizontalDividerProps = {
  className?: string
}

function HorizontalDivider({ className }: HorizontalDividerProps) {
  return (
    <div
      className={cn('w-full my-8 border-b border-b-gray-800', className)}
    ></div>
  )
}

export default HorizontalDivider

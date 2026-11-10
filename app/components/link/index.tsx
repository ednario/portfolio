import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { cn } from '@/app/utils/cn'

type LinkProps = ComponentProps<typeof NextLink>

function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(
        'group inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors duration-200',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export default Link

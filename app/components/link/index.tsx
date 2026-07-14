import NextLink from 'next/link'
import { ComponentProps } from 'react'

import { cn } from '@/app/utils/cn'

type LinkProps = ComponentProps<typeof NextLink>

function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-400 transition-colors duration-300 hover:gap-3',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export default Link

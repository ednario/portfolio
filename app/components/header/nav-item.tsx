import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/app/utils/cn'

type NavItemProps = {
  label: string
  href: string
}

function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname()

  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 lg:font-medium lg:font-mono text-base',
        isActive && 'text-gray-50',
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  )
}

export default NavItem

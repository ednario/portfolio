'use client'

import Link from 'next/link'

import { DiCodeigniter } from 'react-icons/di'

import NavItem from './nav-item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projetos',
  },
]
function Header() {
  return (
    <header className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <DiCodeigniter className="w-[58px] h-[49px]" />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

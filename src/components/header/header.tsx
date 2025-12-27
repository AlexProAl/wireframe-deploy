'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useModal } from '@/components/modal/modal-context'

interface IHeaderProps {
  className?: string
}

export const Header = ({ className = '' }: IHeaderProps) => {
  const { openModal } = useModal()

  const menuItems = [
    { label: 'О нас', href: '#pain-point' },
    { label: 'Решения', href: '#solution' },
    { label: 'Цены', href: '#pricing' },
  ]

  return (
    <header>
      <nav className="fixed left-0 right-0 top-4 z-50 mx-auto flex max-w-6xl max-w-[800px] items-center justify-between rounded-[200px] bg-white px-4 py-2 shadow-md">
        {/* Logo */}
        <Link
          href="#hero"
          className="relative h-12 w-28"
        >
          <Image
            src="/logonew.png"
            alt="Logo"
            fill
            className="rounded-full object-contain"
          />
        </Link>

        {/* Menu items */}
        <div className="hidden gap-6 md:flex">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="font-medium text-secondary transition hover:text-tertiary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Primary button */}
        <button
          onClick={openModal}
          className="relative cursor-pointer rounded-full bg-tertiary px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-secondary"
        >
          Написать нам
        </button>
      </nav>
    </header>
  )
}

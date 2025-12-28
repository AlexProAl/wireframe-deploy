'use client'

import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  const menuItems = [
    { label: 'О нас', href: '#about' },
    { label: 'Решения', href: '#solution' },
    { label: 'Цены', href: '#pricing' },
  ]

  const socials = [
    { label: 'VK', href: '', icon: '/images/social/vk.png', size: 24 },
    {
      label: 'Telegram',
      href: '#',
      icon: '/images/social/tg.webp',
      size: 24,
    },
  ]

  return (
    <footer className="mt-20 rounded-3xl bg-white p-8 shadow-lg">
      <div className="container">
        {/* Top: Logo */}
        <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex flex-col items-start gap-0 md:mb-0">
            <div className="relative mx-auto h-12 w-28 md:mx-0">
              <Image
                src="/logonew.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm">
              @{new Date().getFullYear()} ORYXBMS. Все права защищены.
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-gray-800 font-medium transition hover:text-blue-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="mt-4 flex gap-4 md:mt-0">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 flex h-10 w-10 items-center justify-center rounded-lg transition"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={item.size}
                  height={item.size}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

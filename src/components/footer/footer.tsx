'use client'

import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Solution', href: '#solution' },
    { label: 'Pricing', href: '#pricing' },
  ]

  const socials = [
    { label: 'X', href: 'https://x.com/framer', icon: '/social-x.png', size: 24 },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/framer/',
      icon: '/social-ig.png',
      size: 24,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/framer/posts/?feedView=all',
      icon: '/social-linkedin.png',
      size: 24,
    },
  ]

  return (
    <footer className="mt-16 rounded-3xl bg-white p-8 shadow-lg">
      {/* Top: Logo */}
      <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 flex flex-col items-start gap-0 md:mb-0">
          <div className="relative h-12 w-28">
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

        {/* Social icons */}
        {/* <div className="flex gap-4">
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
        </div> */}
      </div>

      {/* Menu */}
      <div className="mb-4 flex flex-col items-center justify-center gap-6 md:flex-row">
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

      {/* Meta */}
      <div className="text-gray-400 text-center text-sm">
        <Link
          href="https://elevatestudio.design/"
          target="_blank"
          rel="noopener"
        >
          Template by Elevate Studio
        </Link>
      </div>
    </footer>
  )
}

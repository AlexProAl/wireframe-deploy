'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Modal from '@/components/modal/modal'

interface IHeaderProps {
  className?: string
}

export const Header = ({ className = '' }: IHeaderProps) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const menuItems = [
    { label: 'О нас', href: '#pain-point' },
    { label: 'Решения', href: '#solution' },
    { label: 'Цены', href: '#pricing' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Имя:', name)
    console.log('Телефон:', phone)
    setName('')
    setPhone('')
    setOpen(false)
    alert('Спасибо! Мы свяжемся с вами.')
  }

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
              className="text-gray-900 font-medium transition hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Primary button */}
        <button
          onClick={() => setOpen(true)}
          className="relative cursor-pointer rounded-full bg-blue-600 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Написать нам
        </button>
      </nav>

      {/* Модалка с формой */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">Свяжитесь с нами</h2>
        <p className="text-gray-600 mb-6 text-center">
          Оставьте свои контакты, и мы свяжемся с вами.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Отправить
          </button>
        </form>
      </Modal>
    </header>
  )
}

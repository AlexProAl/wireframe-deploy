'use client'

import { useState } from 'react'
import { useModal } from '@/components/modal/modal-context'
import Modal from './modal'

export const GlobalModal = () => {
  const { open, closeModal } = useModal()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Имя:', name)
    console.log('Телефон:', phone)
    setName('')
    setPhone('')
    closeModal()
    alert('Спасибо! Мы свяжемся с вами.')
  }

  return (
    <Modal
      isOpen={open}
      onClose={closeModal}
    >
      <h2 className="mb-4 text-center text-2xl font-semibold">Свяжитесь с нами</h2>
      <p className="mb-4 text-center text-xl">Наш специалист свяжется с вами в ближайшее время</p>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-gray-300 rounded-lg border px-4 py-2"
          required
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-gray-300 rounded-lg border px-4 py-2"
          required
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Отправить
        </button>
      </form>
    </Modal>
  )
}

'use client'

import { CheckIcon } from 'lucide-react'
import { useModal } from '../modal-window/modal-context'

type PricingCardProps = {
  title: string
  description: string
  price: string
  period: string
  features: string[]
  buttonText: string
  variant?: 'light' | 'dark'
  cardClassName?: string
  buttonClassName?: string
}

export default function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  variant = 'light',
  cardClassName,
  buttonClassName,
}: PricingCardProps) {
  const { openModal } = useModal()

  const isDark = variant === 'dark'

  const cardBase = 'rounded-2xl p-8 shadow-md transition-colors'

  const cardVariant = isDark ? 'bg-black text-white' : 'bg-white text-black'

  const buttonVariant = isDark
    ? 'bg-white text-black hover:bg-gray-200'
    : 'bg-black text-white hover:bg-gray-800'

  return (
    <div className={`${cardBase} ${cardClassName ?? cardVariant}`}>
      <h4 className="mb-2 text-xl font-semibold">{title}</h4>

      <p className={`mb-6`}>{description}</p>

      <div className="mb-6 flex items-end gap-1">
        <span className="text-4xl font-semibold">{price}</span>
        <span className="text-sm opacity-70">{period}</span>
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2"
          >
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={openModal}
        className={`block w-full cursor-pointer rounded-full py-3 text-center font-medium transition ${
          buttonClassName ?? buttonVariant
        }`}
      >
        {buttonText}
      </button>
    </div>
  )
}

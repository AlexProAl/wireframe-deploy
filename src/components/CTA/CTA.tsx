'use client'

import { useModal } from '../modal-window/modal-context'

export default function CTASection() {
  const { openModal } = useModal()
  return (
    <section
      id="cta"
      className="relative pt-40"
    >
      <div className="container">
        <div className="max-w-fill relative mx-auto rounded-[32px] bg-tertiary px-6 py-20 text-center shadow-md">
          {/* Title */}
          <h2 className="font-manrope text-[32px] font-bold leading-[1.1] text-white md:text-[56px] md:leading-[1.05]">
            Начните с нами
            <br />
            Уже сегодня
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Запустите свой проект вместе снами и пользуйтесь современыми инструментами аналитики
            прямо сейчас
          </p>

          {/* Button */}
          <div className="mt-10">
            <button
              onClick={openModal}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-8 py-4 font-manrope text-sm font-semibold text-[#100f14] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              Начать сегодня
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

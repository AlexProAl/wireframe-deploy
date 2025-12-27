'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useModal } from '@/components/modal/modal-context'

export default function HeroSection() {
  const { openModal } = useModal()
  const [showHeading, setShowHeading] = useState(false)
  const [showSubheading, setShowSubheading] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [showLogos, setShowLogos] = useState(false)
  const companies = [
    { src: '/images/company1.png', alt: 'FeatherDev', width: 134, height: 134 },
    { src: '/images/company2.png', alt: 'Acme Corp', width: 110, height: 110 },
    { src: '/images/company3.png', alt: 'Capsule', width: 107, height: 107 },
    { src: '/images/company4.png', alt: 'Segment', width: 132, height: 132 },
    { src: '/images/company5.png', alt: 'Spherule', width: 133, height: 133 },
    { src: '/images/company6.png', alt: 'Polymath', width: 100, height: 100 },
    { src: '/images/company7.png', alt: 'Catalog', width: 97, height: 97 },
    { src: '/images/company8.png', alt: 'FocalPoint', width: 117, height: 117 },
    { src: '/images/company9.png', alt: 'Luminous', width: 119, height: 119 },
    { src: '/images/company10.png', alt: 'Galileo', width: 118, height: 118 },
    { src: '/images/company11.png', alt: 'Layers', width: 111, height: 111 },
  ]

  // Для заголовка с эффектом печати
  const [currentWord, setCurrentWord] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const words = ['ORYX.CRM', 'ORYX.TASK', 'ORYX.HRM', 'ORYX.PIM', 'ORYX.BI'] // нужные слова
    const speed = isDeleting ? 250 : 350
    const pauseAfterTyping = 1000
    const pauseAfterDeleting = 500

    const timeout = setTimeout(() => {
      const fullWord = words[wordIndex]

      if (!isDeleting) {
        setCurrentWord(fullWord.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex + 1 === fullWord.length) {
          setTimeout(() => setIsDeleting(true), pauseAfterTyping)
        }
      } else {
        setCurrentWord(fullWord.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)

        if (charIndex - 1 === 0) {
          setTimeout(() => {
            setIsDeleting(false)
            setWordIndex((wordIndex + 1) % words.length)
          }, pauseAfterDeleting)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex]) // убрали words из зависимостей

  // === Последовательное появление элементов ===
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    timers.push(setTimeout(() => setShowHeading(true), 100))
    timers.push(setTimeout(() => setShowSubheading(true), 400))
    timers.push(setTimeout(() => setShowButtons(true), 700))
    timers.push(setTimeout(() => setShowLogos(true), 1000))

    return () => timers.forEach((t) => clearTimeout(t))
  }, [])
  const fadeUpClass = (show: boolean) =>
    `transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
  return (
    <section
      id="hero"
      className="relative flex w-full items-center justify-center pb-[96px] pt-[200px]"
    >
      {/* Background pattern */}
      <div
        className="opacity-2 absolute inset-0 bg-[url('/pattern.svg')] bg-center bg-repeat"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          maskRepeat: 'no-repeat',
          maskSize: 'cover',
        }}
      />

      <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 text-center">
        {/* Heading с эффектом печати */}
        <h1
          className={`font-manrope max-w-[900px] text-4xl font-bold text-secondary md:text-[60px] ${fadeUpClass(showHeading)}`}
        >
          Удобный сервис с которым легко <span className="text-primary">{currentWord}</span>
          <span className="blinking-cursor">|</span>
        </h1>

        {/* Subheading */}
        <p
          className={`font-manrope text-gray-700 max-w-xl text-lg md:text-xl ${fadeUpClass(showSubheading)}`}
        >
          Сквозная аналитика — объединяет данные из всех модулей и показывает полную картину
          бизнеса.
        </p>

        {/* Buttons */}
        <div className={`mt-6 flex flex-col gap-4 sm:flex-row ${fadeUpClass(showButtons)}`}>
          <button
            onClick={openModal}
            className="relative cursor-pointer rounded-full bg-tertiary px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-secondary"
          >
            Написать нам
          </button>
          <a
            href="#solution"
            className="border-gray-300 hover:bg-gray-100 rounded-full border bg-white px-6 py-3 font-semibold transition"
          >
            Наши решения
          </a>
        </div>

        {/* Companies logos */}
        <div className={`relative min-h-[140px] overflow-hidden py-8 ${fadeUpClass(showLogos)}`}>
          <div className="relative min-h-[140px] max-w-[800px] overflow-hidden">
            <div className="animate-marquee flex gap-6">
              {companies.concat(companies).map((company, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                >
                  <Image
                    src={company.src}
                    alt={company.alt}
                    width={company.width}
                    height={company.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Маска через градиент поверх */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f8f8f8] via-transparent to-[#f8f8f8]" />
          </div>
        </div>
      </div>

      {/* CSS для мигающего курсора */}
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

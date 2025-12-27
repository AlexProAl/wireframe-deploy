'use client'

import React from 'react'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    name: 'Алексей Петров',
    role: 'CEO, TechSoft',
    text: 'ORYX помог нам объединить все процессы в одной системе. Продажи и аналитика стали прозрачными.',
    avatar: '/images/reviews/1.jpg',
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Операционный директор',
    text: 'Очень удобный интерфейс и быстрая поддержка. Команда начала работать эффективнее уже через неделю.',
    avatar: '/images/reviews/2.jpg',
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    role: 'Руководитель отдела продаж',
    text: 'Отчёты и сквозная аналитика — это именно то, чего нам не хватало.',
    avatar: '/images/reviews/3.jpg',
  },
]

const ReviewsSection: React.FC = () => {
  return (
    <section className="relative w-full py-24">
      <div className="container">
        {/* Заголовок */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Что говорят наши клиенты</h2>
          <p className="text-gray-700 mx-auto max-w-xl text-lg">
            Реальные отзывы компаний, которые уже используют нашу систему
          </p>
        </div>

        {/* Сетка отзывов */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="animate-fade-up rounded-2xl bg-white p-6 shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="text-gray-700 mb-6">“{review.text}”</p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-gray-500 text-sm">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Анимация */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default ReviewsSection

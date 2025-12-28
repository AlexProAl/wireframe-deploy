// 'use client'

// import React from 'react'
// import Image from 'next/image'

// const reviews = [
//   {
//     id: 1,
//     name: 'Алексей Петров',
//     role: 'CEO, TechSoft',
//     text: 'ORYX помог нам объединить все процессы в одной системе. Продажи и аналитика стали прозрачными.',
//     avatar: '/images/reviews/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Мария Иванова',
//     role: 'Операционный директор',
//     text: 'Очень удобный интерфейс и быстрая поддержка. Команда начала работать эффективнее уже через неделю.',
//     avatar: '/images/reviews/3.jpg',
//   },
//   {
//     id: 3,
//     name: 'Дмитрий Смирнов',
//     role: 'Руководитель отдела продаж',
//     text: 'Отчёты и сквозная аналитика — это именно то, чего нам не хватало.',
//     avatar: '/images/reviews/2.jpg',
//   },
// ]

// const ReviewsSection: React.FC = () => {
//   return (
//     <section className="relative w-full py-24">
//       <div className="container">
//         {/* Заголовок */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-5xl">Что говорят наши клиенты</h2>
//           <p className="text-gray-700 mx-auto max-w-xl text-lg">
//             Реальные отзывы компаний, которые уже используют нашу систему
//           </p>
//         </div>

//         {/* Сетка отзывов */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {reviews.map((review, index) => (
//             <div
//               key={review.id}
//               className="animate-fade-up flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <p className="text-gray-700 mb-6">“{review.text}”</p>

//               <div className="flex items-center gap-4">
//                 <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                   <Image
//                     src={review.avatar}
//                     alt={review.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div>
//                   <div className="font-semibold">{review.name}</div>
//                   <div className="text-gray-500 text-sm">{review.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Анимация */}
//       <style jsx>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-up {
//           opacity: 0;
//           animation: fadeUp 0.6s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default ReviewsSection

'use client'

import React from 'react'

// 'use client'

// import React from 'react'
// import Image from 'next/image'

// const reviews = [
//   {
//     id: 1,
//     name: 'Алексей Петров',
//     role: 'CEO, TechSoft',
//     text: 'ORYX помог нам объединить все процессы в одной системе. Продажи и аналитика стали прозрачными.',
//     avatar: '/images/reviews/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Мария Иванова',
//     role: 'Операционный директор',
//     text: 'Очень удобный интерфейс и быстрая поддержка. Команда начала работать эффективнее уже через неделю.',
//     avatar: '/images/reviews/3.jpg',
//   },
//   {
//     id: 3,
//     name: 'Дмитрий Смирнов',
//     role: 'Руководитель отдела продаж',
//     text: 'Отчёты и сквозная аналитика — это именно то, чего нам не хватало.',
//     avatar: '/images/reviews/2.jpg',
//   },
// ]

// const ReviewsSection: React.FC = () => {
//   return (
//     <section className="relative w-full py-24">
//       <div className="container">
//         {/* Заголовок */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-5xl">Что говорят наши клиенты</h2>
//           <p className="text-gray-700 mx-auto max-w-xl text-lg">
//             Реальные отзывы компаний, которые уже используют нашу систему
//           </p>
//         </div>

//         {/* Сетка отзывов */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {reviews.map((review, index) => (
//             <div
//               key={review.id}
//               className="animate-fade-up flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <p className="text-gray-700 mb-6">“{review.text}”</p>

//               <div className="flex items-center gap-4">
//                 <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                   <Image
//                     src={review.avatar}
//                     alt={review.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div>
//                   <div className="font-semibold">{review.name}</div>
//                   <div className="text-gray-500 text-sm">{review.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Анимация */}
//       <style jsx>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-up {
//           opacity: 0;
//           animation: fadeUp 0.6s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default ReviewsSection

// 'use client'

// import React from 'react'
// import Image from 'next/image'

// const reviews = [
//   {
//     id: 1,
//     name: 'Алексей Петров',
//     role: 'CEO, TechSoft',
//     text: 'ORYX помог нам объединить все процессы в одной системе. Продажи и аналитика стали прозрачными.',
//     avatar: '/images/reviews/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Мария Иванова',
//     role: 'Операционный директор',
//     text: 'Очень удобный интерфейс и быстрая поддержка. Команда начала работать эффективнее уже через неделю.',
//     avatar: '/images/reviews/3.jpg',
//   },
//   {
//     id: 3,
//     name: 'Дмитрий Смирнов',
//     role: 'Руководитель отдела продаж',
//     text: 'Отчёты и сквозная аналитика — это именно то, чего нам не хватало.',
//     avatar: '/images/reviews/2.jpg',
//   },
// ]

// const ReviewsSection: React.FC = () => {
//   return (
//     <section className="relative w-full py-24">
//       <div className="container">
//         {/* Заголовок */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-5xl">Что говорят наши клиенты</h2>
//           <p className="text-gray-700 mx-auto max-w-xl text-lg">
//             Реальные отзывы компаний, которые уже используют нашу систему
//           </p>
//         </div>

//         {/* Сетка отзывов */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {reviews.map((review, index) => (
//             <div
//               key={review.id}
//               className="animate-fade-up flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <p className="text-gray-700 mb-6">“{review.text}”</p>

//               <div className="flex items-center gap-4">
//                 <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                   <Image
//                     src={review.avatar}
//                     alt={review.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div>
//                   <div className="font-semibold">{review.name}</div>
//                   <div className="text-gray-500 text-sm">{review.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Анимация */}
//       <style jsx>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-up {
//           opacity: 0;
//           animation: fadeUp 0.6s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default ReviewsSection

// 'use client'

// import React from 'react'
// import Image from 'next/image'

// const reviews = [
//   {
//     id: 1,
//     name: 'Алексей Петров',
//     role: 'CEO, TechSoft',
//     text: 'ORYX помог нам объединить все процессы в одной системе. Продажи и аналитика стали прозрачными.',
//     avatar: '/images/reviews/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Мария Иванова',
//     role: 'Операционный директор',
//     text: 'Очень удобный интерфейс и быстрая поддержка. Команда начала работать эффективнее уже через неделю.',
//     avatar: '/images/reviews/3.jpg',
//   },
//   {
//     id: 3,
//     name: 'Дмитрий Смирнов',
//     role: 'Руководитель отдела продаж',
//     text: 'Отчёты и сквозная аналитика — это именно то, чего нам не хватало.',
//     avatar: '/images/reviews/2.jpg',
//   },
// ]

// const ReviewsSection: React.FC = () => {
//   return (
//     <section className="relative w-full py-24">
//       <div className="container">
//         {/* Заголовок */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold md:text-5xl">Что говорят наши клиенты</h2>
//           <p className="text-gray-700 mx-auto max-w-xl text-lg">
//             Реальные отзывы компаний, которые уже используют нашу систему
//           </p>
//         </div>

//         {/* Сетка отзывов */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {reviews.map((review, index) => (
//             <div
//               key={review.id}
//               className="animate-fade-up flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <p className="text-gray-700 mb-6">“{review.text}”</p>

//               <div className="flex items-center gap-4">
//                 <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                   <Image
//                     src={review.avatar}
//                     alt={review.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div>
//                   <div className="font-semibold">{review.name}</div>
//                   <div className="text-gray-500 text-sm">{review.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Анимация */}
//       <style jsx>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-up {
//           opacity: 0;
//           animation: fadeUp 0.6s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default ReviewsSection

const reviews = [
  {
    id: 1,
    name: 'Алексей Петров',
    role: 'CEO, TechSoft',
    text: 'ORYX помог нам объединить все процессы в одной системе. Продажи и аналитика стали прозрачными.',
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Операционный директор',
    text: 'Очень удобный интерфейс и быстрая поддержка. Команда начала работать эффективнее уже через неделю.',
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    role: 'Руководитель отдела продаж',
    text: 'Отчёты и сквозная аналитика — это именно то, чего нам не хватало.',
  },
  {
    id: 4,
    name: 'Елена Кузнецова',
    role: 'Финансовый директор',
    text: 'Автоматизация отчётности сэкономила нам десятки часов в месяц.',
  },
  {
    id: 5,
    name: 'Сергей Васильев',
    role: 'CTO, DigitalAgency',
    text: 'Интеграция с нашими системами прошла гладко. API хорошо документирован.',
  },
  {
    id: 6,
    name: 'Ольга Николаева',
    role: 'HR-директор',
    text: 'Система учёта рабочего времени полностью изменила наш подход к планированию.',
  },
]

const ReviewsSection: React.FC = () => {
  const bgColor = '#f8f8f8'

  return (
    <section
      className="relative w-full overflow-hidden py-32"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <div className="mb-24 text-center">
          <div
            className="inline-block rounded-full px-8 py-3"
            style={{ backgroundColor: '#f0f0f0' }}
          >
            <span className="font-semibold text-blue-600">Отзывы</span>
          </div>
          <h2 className="mb-6 mt-6 text-4xl font-bold md:text-6xl">Что говорят наши клиенты</h2>
          <p className="text-gray-700 mx-auto max-w-2xl text-xl">
            Реальные отзывы компаний, которые уже используют нашу систему
          </p>
        </div>

        <div className="relative mx-auto h-[800px] max-w-7xl">
          <div className="grid h-full grid-cols-1 gap-24 md:grid-cols-2">
            {/* Левая колонка - ДВИЖЕТСЯ ВНИЗ */}
            <div className="relative h-full">
              <div
                className="absolute inset-0 overflow-hidden rounded-3xl"
                style={{
                  maskImage:
                    'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
              >
                <div
                  className="space-y-10"
                  style={{
                    animation: 'scrollDown 40s linear infinite',
                  }}
                >
                  {[...reviews, ...reviews, ...reviews].map((review, index) => (
                    <div
                      key={`left-${review.id}-${index}`}
                      className="hover:shadow-3xl rounded-3xl bg-white p-10 shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    >
                      <div className="mb-6 flex items-start justify-between">
                        <div className="text-gray-200 text-4xl"></div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                          <span className="text-2xl font-bold text-blue-600">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-8 text-xl leading-relaxed">{review.text}</p>

                      <div className="border-t pt-6">
                        <div className="text-xl font-bold">{review.name}</div>
                        <div className="text-gray-600 text-lg">{review.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 rounded-t-3xl"
                style={{
                  background: `linear-gradient(to bottom, ${bgColor} 0%, ${bgColor} 20%, rgba(248, 248, 248, 0) 100%)`,
                }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 rounded-b-3xl"
                style={{
                  background: `linear-gradient(to top, ${bgColor} 0%, ${bgColor} 20%, rgba(248, 248, 248, 0) 100%)`,
                }}
              />
            </div>

            {/* Правая колонка - ДВИЖЕТСЯ ВВЕРХ */}
            <div className="relative h-full">
              <div
                className="absolute inset-0 overflow-hidden rounded-3xl"
                style={{
                  maskImage:
                    'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
              >
                <div
                  className="space-y-10"
                  style={{
                    animation: 'scrollUp 45s linear infinite',
                  }}
                >
                  {[...reviews, ...reviews, ...reviews].map((review, index) => (
                    <div
                      key={`right-${review.id}-${index}`}
                      className="hover:shadow-3xl rounded-3xl bg-white p-10 shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                    >
                      <div className="mb-6 flex items-start justify-between">
                        <div className="text-gray-200 text-4xl"></div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
                          <span className="text-2xl font-bold text-purple-600">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-8 text-xl leading-relaxed">{review.text}</p>

                      <div className="border-t pt-6">
                        <div className="text-xl font-bold">{review.name}</div>
                        <div className="text-gray-600 text-lg">{review.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 rounded-t-3xl"
                style={{
                  background: `linear-gradient(to bottom, ${bgColor} 0%, ${bgColor} 20%, rgba(248, 248, 248, 0) 100%)`,
                }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 rounded-b-3xl"
                style={{
                  background: `linear-gradient(to top, ${bgColor} 0%, ${bgColor} 20%, rgba(248, 248, 248, 0) 100%)`,
                }}
              />
            </div>
          </div>
        </div>

        <style
          jsx
          global
        >{`
          @keyframes scrollDown {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-33.333%);
            }
          }

          @keyframes scrollUp {
            0% {
              transform: translateY(-33.333%);
            }
            100% {
              transform: translateY(0);
            }
          }

          .hover\\:scale-\\[1\\.02\\]:hover {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    </section>
  )
}

export default ReviewsSection

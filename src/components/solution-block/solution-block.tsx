'use client'

// обязательно, так как используется GraphAnimated с useEffect
import Image from 'next/image'
import GraphAnimated from './graph-animated'

const features = [
  {
    title: 'Пишите и планируйте с лёгкостью',
    description: 'Создавайте и организовывайте ваши цели изадачи легко.',
    image: '/images/solution/1.jpg',
  },
  {
    title: 'Принятие решений на основе данных',
    description:
      'Отслеживайте показатели эффективности мгновенно, чтобы оптимизировать вашу стратегию.',
    image: '/images/solution/2.png',
  },
  {
    title: 'Публикуйте цели персонально для отдельных команд',
    description: 'Их будут видеть только члены тех команд, кому они адресованы.',
    image: '/images/solution/3.png',
  },
  {
    title: 'Получаейте заявки в систему уже сегодня',
    description: 'Быстрая синхронизация нашей системы с вашим бизнесом.',
    image: '/images/solution/4.png',
  },
]

export default function FeaturesSection() {
  return (
    <section id="solution">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm uppercase text-blue-500">Решения</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
          Что дает использование нашей СРМ
        </h2>
        <p className="text-gray-600 mx-auto mt-2 max-w-xl">
          Разработано чтобы дать пользователю удобную систему интеграции бизнеса.
        </p>

        {/* Сетка */}
        <div className="">
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Верхний ряд */}
            <div className="col-span-1 flex flex-col items-center rounded-3xl bg-white p-6 shadow-md">
              <div className="relative mb-4 h-32 w-32">
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-center text-xl font-semibold">{features[0].title}</h4>
              <p className="text-gray-600 mt-2 text-center">{features[0].description}</p>
            </div>

            <div className="col-span-1 rounded-3xl bg-white p-6 shadow-md lg:col-span-2">
              <h3 className="mb-4 text-2xl font-semibold">График эффективности</h3>
              <GraphAnimated
                data={[0, 50, 100, 75, 90, 60]}
                width={1200}
                height={200}
                strokeColor="#2469FE"
                strokeWidth={4}
                repeatDelay={2000} // задержка повторной анимации в ms
              />
            </div>
          </div>

          {/* Нижний ряд: оставшиеся 3 блока */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.slice(1).map((feature, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col items-center rounded-3xl bg-white p-6 shadow-md"
              >
                <div className="relative mb-4 h-32 w-32">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-center text-xl font-semibold">{feature.title}</h4>
                <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

interface FeatureItem {
  icon: string
  title: string
  description: string
  list: string[]
  link?: string
}

const features: FeatureItem[] = [
  {
    icon: '/images/icons/feat1.png',
    title: 'ORYX.TASK',
    description:
      'На одном тарифном плане вы можете активировать до 10ти аккаунтов для ваших сотрудников',
    list: [
      'Проекты и Канбан — группировка задач, управление этапами и гибкие доски для потоков задач',
      'Календарь и Почта — синхронизация встреч, дедлайнов, событий и интеграция переписки в системе',
      'Диаграммы и методологии — Ганта для сроков и зависимостей, интеллект-карты для структуры идей, SCRUM для спринтов и ретроспектив',
    ],
  },
  {
    icon: '/images/icons/feat2.png',
    title: 'ORYX.HRM',
    description:
      'Cтруктура/иерархия компании - Дерево подразделений, визуальная оргструктура, подчинённость',
    list: [
      'Cправочник по сотрудникам - Карточки сотрудников, контакты, должности, отделы',
      'Новостная лента - Внутренние объявления, корпоративные новости, события',
      'Подбор персонала (воронка) - Этапы найма: отклик → интервью → оффер → выход',
    ],
  },
  {
    icon: '/images/icons/feat3.png',
    title: 'ORYX.PIM',
    description:
      'Вы можете воспользоваться нашими дополениями для СРМ, если того требуют ваши задачи.',
    list: ['Легко расширить функционал', 'У каждого сотрудника свои дополнения', 'Удобно и легко!'],
  },
  {
    icon: '/images/icons/feat4.png',
    title: 'ORYX.BI',
    description:
      'Наш сервис исполььзует сквозное шифрование, поэтому ваши данные под надежной защитой!',
    list: ['Двухфакторная аутентификация', 'Сквозное шифрование', 'Безопасное хранение информации'],
  },
]

export default function FeatureTwoBlock() {
  return (
    <section
      id="about"
      className="feature-style-two-area overflow-hidden py-20"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-style-two rounded-[32px] bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <div className="icon relative mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                />
                {feature.link && (
                  <a
                    href={feature.link}
                    className="btn-arrow absolute right-0 top-0 text-blue-500 hover:text-blue-700"
                  >
                    <i className="fas fa-long-arrow-up"></i>
                  </a>
                )}
              </div>
              <div className="content">
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <ul className="text-gray-600 mt-4 list-inside list-disc space-y-1">
                  {feature.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

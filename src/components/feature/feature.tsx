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
    title: 'ORYX.CRM',
    description: 'Телефония — звонки прямо из системы, запись разговоров и аналитика эффективности',
    list: [
      'Клиенты и продажи — чат-бот 24/7, карточки клиентов, воронка продаж и контроль конверсии',
      'Документы и финансы — КП, счета, договоры и регулярные платежи для аренды и подписок.',
      'Автоматизация и планирование — онлайн-запись, уведомления и BPM для управления бизнес-процессами и задачами',
    ],
  },
  {
    icon: '/images/icons/feat2.png',
    title: 'ORYX.TASK',
    description: 'Постановка задач, контроль и приоритизация в удобном интерфейсе',
    list: [
      'Проекты и Канбан — группировка задач, управление этапами и гибкие доски для потоков задач',
      'Календарь и Почта — синхронизация встреч, дедлайнов, событий и интеграция переписки в системе',
      'Диаграммы и методологии — Ганта для сроков и зависимостей, интеллект-карты для структуры идей, SCRUM для спринтов и ретроспектив',
    ],
  },
  {
    icon: '/images/icons/feat3.png',
    title: 'ORYX.HRM',
    description:
      'Cтруктура/иерархия компании - Дерево подразделений, визуальная оргструктура, подчинённость',
    list: [
      'Команда и HR — справочник сотрудников, подбор персонала с воронкой, вакансии и интеграция с hh.ru, рейтинги и KPI',
      'Учёт и планирование — табель, тайм-трекинг задач, согласование отпусков, контроль занятости и календарь',
      'Развитие и коммуникации — новостная лента, опросы, база знаний, обучение сотрудников с курсами, тестами и отслеживанием прогресса',
    ],
  },
  {
    icon: '/images/icons/feat4.png',
    title: 'ORYX.PIM',
    description: 'Каталог товаров — централизованное хранение ассортимента',
    list: [
      'Цены и товары — гибкое управление прайс-листами, характеристиками и условиями',
      'Контент и медиа — описания, фото, видео, файлы и SEO-параметры в одном месте',
      'Интеграции — синхронизация данных с сайтами и маркетплейсами',
    ],
  },
]

export default function FeatureTwoBlock() {
  return (
    <section
      id="about"
      className="feature-style-two-area overflow-hidden pt-40"
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

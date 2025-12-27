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
    title: 'Несколько менеджеров',
    description:
      'На одном тарифном плане вы можете активировать до 10ти аккаунтов для ваших сотрудников.',
    list: [
      'Работать в команде',
      'Организовывать список задач по рабочим процессам',
      'Всегда указывать срок выполнения',
    ],
  },
  {
    icon: '/images/icons/feat2.png',
    title: 'Настройка под себя',
    description:
      'Вы можете настроить под себя интерфейс, активировать отображение нужных полей и многое другое.',
    list: [
      'Организовывать список задач по рабочим процессам',
      'Выбрать наиболее удобрый визуальный вид',
      'Разбивать большие задачи на мелкие',
    ],
  },
  {
    icon: '/images/icons/feat3.png',
    title: 'Расширения и дополнения',
    description:
      'Вы можете воспользоваться нашими дополениями для СРМ, если того требуют ваши задачи.',
    list: ['Легко расширить функционал', 'У каждого сотрудника свои дополнения', 'Удобно и легко!'],
  },
  {
    icon: '/images/icons/feat4.png',
    title: 'Надёжное шифрование',
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

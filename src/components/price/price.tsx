import PricingCard from '@/components/price/price-card'

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="pt-40"
    >
      <div className="container xl:max-w-[900px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Тарифные планы</h2>

          <p className="text-gray-500">для любого размера бизнеса</p>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-full xl:max-w-[900px]">
          <div className="grid gap-8 md:grid-cols-2">
            <PricingCard
              title="Тариф лайт"
              description="Подходит для небольших команд и старта"
              price="3000₽"
              period="/ в месяц"
              features={[
                'До 10ти аккаутов',
                'Базовые возможности настройки',
                'Основные инструменты аналитики',
                'Поддержка по электронной почте',
              ]}
              buttonText="Лайт тариф"
              cardClassName="bg-white text-secondary"
              buttonClassName="bg-tertiary text-white hover:opacity-90"
            />

            <PricingCard
              title="Тариф Про"
              description="Для команд, которым нужен максимум возможностей"
              price="9000₽"
              period="/ в месяц"
              features={[
                'До 50ти аккаунтов',
                'Полные возможности настроек',
                'Продвинутая система аналитики',
                'Приоритетная поддержка по электронной почте',
              ]}
              buttonText="Перейти на про"
              cardClassName="bg-tertiary text-white"
              buttonClassName="bg-white text-tertiary hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

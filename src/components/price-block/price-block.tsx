import PricingCard from '@/components/price-block/price-card'

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-tertiary px-6 py-2 text-sm text-white">
            Pricing
          </span>

          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Simple Plans for Every Need</h2>

          <p className="text-gray-500">Start small or go all-in — there’s a plan for you.</p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <PricingCard
            title="Тариф лайт"
            description="Подходит для небольших команд и старта"
            price="$29"
            period="/month"
            features={[
              'Up to 10 Pages',
              'Basic Customization Options',
              'Core Analytics Tools',
              'Email Support',
            ]}
            buttonText="Лайт тариф"
            cardClassName="bg-white text-secondary"
            buttonClassName="bg-tertiary text-white hover:opacity-90"
          />

          <PricingCard
            title="Тариф Про"
            description="Для команд, которым нужен максимум возможностей"
            price="$79"
            period="/month"
            features={[
              'Unlimited Pages',
              'Full Customization & Branding',
              'Advanced Analytics & A/B Testing',
              'Priority Email Support',
            ]}
            buttonText="Перейти на про"
            cardClassName="bg-tertiary text-white"
            buttonClassName="bg-white text-tertiary hover:bg-gray-100"
          />
        </div>
      </div>
    </section>
  )
}

'use client'

import { JSX } from 'react'
import Image from 'next/image'
import GraphAnimated from './graph-animated'

interface Feature {
  title: string
  description: string
  image: string
  chartType?: 'line' | 'pie' | 'bar' | 'donut'
  chartData?: number[]
  chartColors?: string[]
  row: 'top' | 'bottom'
}

const features: Feature[] = [
  {
    title: 'Пишите и планируйте с лёгкостью',
    description: 'Создавайте и организовывайте ваши цели и задачи легко.',
    image: '/images/solution/1.jpg',
    row: 'top',
  },
  {
    title: 'Принятие решений на основе данных',
    description:
      'Отслеживайте показатели эффективности мгновенно, чтобы оптимизировать вашу стратегию.',
    image: '/images/solution/2.png',
    chartType: 'donut',
    chartData: [30, 50, 70, 40, 60],
    chartColors: ['#2469FE', '#F87171', '#34D399', '#FBBF24', '#8B5CF6'],
    row: 'bottom',
  },
  {
    title: 'Публикуйте цели персонально для отдельных команд',
    description: 'Их будут видеть только члены тех команд, кому они адресованы.',
    image: '/images/solution/3.png',
    chartType: 'pie',
    chartData: [30, 70, 20],
    chartColors: ['#2469FE', '#F87171', '#34D399'],
    row: 'bottom',
  },
  {
    title: 'Получаейте заявки в систему уже сегодня',
    description: 'Быстрая синхронизация нашей системы с вашим бизнесом.',
    image: '/images/solution/4.png',
    chartType: 'bar',
    chartData: [5, 10, 7, 12],
    chartColors: ['#F87171', '#34D399', '#FBBF24', '#8B5CF6'],
    row: 'bottom',
  },
]

interface MiniChartProps {
  type: 'line' | 'pie' | 'bar' | 'donut'
  data: number[]
  colors?: string[]
}

interface MiniChartProps {
  type: 'line' | 'pie' | 'bar' | 'donut'
  data: number[]
  colors?: string[]
  donutWidth?: number // толщина "кольца" для donut
}

function MiniChart({ type, data, colors, donutWidth = 8 }: MiniChartProps) {
  if (type === 'pie' || type === 'donut') {
    const total = data.reduce((a, b) => a + b, 0)
    const radius = 16
    const center = radius
    const paths: JSX.Element[] = []
    let startAngle = 0

    data.forEach((value, i) => {
      const angle = (value / total) * 2 * Math.PI
      const x1 = center + radius * Math.cos(startAngle)
      const y1 = center + radius * Math.sin(startAngle)
      const x2 = center + radius * Math.cos(startAngle + angle)
      const y2 = center + radius * Math.sin(startAngle + angle)
      const largeArcFlag = angle > Math.PI ? 1 : 0

      if (type === 'pie') {
        // обычный круглый pie
        paths.push(
          <path
            key={i}
            d={`
              M ${center} ${center}
              L ${x1} ${y1}
              A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
              Z
            `}
            fill={colors?.[i] || '#2469FE'}
          />,
        )
      } else {
        // donut
        const innerRadius = radius - donutWidth
        const x1Inner = center + innerRadius * Math.cos(startAngle)
        const y1Inner = center + innerRadius * Math.sin(startAngle)
        const x2Inner = center + innerRadius * Math.cos(startAngle + angle)
        const y2Inner = center + innerRadius * Math.sin(startAngle + angle)

        paths.push(
          <path
            key={i}
            d={`
              M ${x1} ${y1}
              A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
              L ${x2Inner} ${y2Inner}
              A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}
              Z
            `}
            fill={colors?.[i] || '#2469FE'}
          />,
        )
      }

      startAngle += angle
    })

    return (
      <div className="mt-4 h-32 w-32">
        <svg
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          className="h-full w-full"
        >
          {paths}
        </svg>
      </div>
    )
  }

  if (type === 'bar') {
    const max = Math.max(...data)
    return (
      <div className="mt-4 flex h-24 w-full items-end justify-between gap-1">
        {data.map((value, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              height: `${(value / max) * 100}%`,
              width: `${100 / data.length - 5}%`,
              backgroundColor: colors?.[i] || '#34D399', // цвет по массиву или зелёный по умолчанию
            }}
          />
        ))}
      </div>
    )
  }

  // default: линейный график
  return (
    <div className="mt-4 h-20 w-full">
      <GraphAnimated
        data={data}
        width={300}
        height={80}
        strokeColor="#2469FE"
        strokeWidth={3}
        repeatDelay={2000}
      />
    </div>
  )
}

export default function FeaturesSection() {
  const topFeatures = features.filter((f) => f.row === 'top')
  const bottomFeatures = features.filter((f) => f.row === 'bottom')

  return (
    <section id="solution">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Детальная BI аналитика</h2>
        <p className="text-gray-600 mx-auto mt-2 max-w-xl">
          Принимай решения основываясь на данных!
        </p>

        {/* Верхний ряд */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {topFeatures.map((feature, index) => (
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

          {/* Большой график эффективности */}
          <div className="col-span-1 rounded-3xl bg-white p-6 shadow-md lg:col-span-2">
            <h3 className="mb-4 text-2xl font-semibold">График эффективности</h3>
            <GraphAnimated
              data={[0, 50, 100, 75, 90, 60]}
              width={1200}
              height={200}
              strokeColor="#2469FE"
              strokeWidth={4}
              repeatDelay={2000}
            />
          </div>
        </div>

        {/* Нижний ряд */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center justify-between rounded-3xl bg-white p-6 shadow-md"
            >
              {/* <div className="relative mb-4 h-32 w-32">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="rounded-full object-cover"
                />
              </div> */}
              <div>
                <h4 className="text-center text-xl font-semibold">{feature.title}</h4>
                <p className="text-gray-600 mt-2 text-center">{feature.description}</p>
              </div>

              {feature.chartType && feature.chartData && (
                <MiniChart
                  type={feature.chartType}
                  data={feature.chartData}
                  colors={feature.chartColors}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

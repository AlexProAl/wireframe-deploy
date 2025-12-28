import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface IFaqProps {
  className?: string
}

export const Faq = ({ className = '' }: IFaqProps) => {
  return (
    <section className={cn('pt-40', className)}>
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">FAQ</h2>
          <p className="text-gray-700 mx-auto max-w-xl text-lg">
            Часто задаваемые вопросы, на которые есть ответы
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="multiple"
          className="mx-auto max-w-3xl space-y-0"
        >
          <AccordionItem
            value="item-1"
            className="border-gray-200 rounded-2xl border bg-white px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Кто выдает учетную запись в СРМ?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700 pb-6">
              <p className="mb-2">
                1. Вы получаете ее при заключении с нами договора в запечатанном конверте
              </p>
              <p className="mb-2">
                2. Вы можете получить ее электронным способом на зарегистрированный email
              </p>
              <p>3. Вы моожете получить ключ через наше приложение на смартфоне</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-gray-200 rounded-2xl border bg-white px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Что мне даст СРМ?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700 pb-6">
              <p className="mb-2">
                1. Задачи — постановка, контроль и приоритизация в удобном интерфейсе.
              </p>
              <p className="mb-2">2. Проекты — группировка задач и управление этапами работы.</p>
              <p>3. Интеллект-карта — наглядная структура идей и процессов.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-gray-200 rounded-2xl border bg-white px-6"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Как написать в техподдержку?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700 pb-6">
              <p className="mb-2">1. Написать в техотдел через форму на нашем сайте</p>
              <p className="mb-2">2. Написать через форму в вашем мобильном приложении.</p>
              <p>3. Позвонить на на горячую линию.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

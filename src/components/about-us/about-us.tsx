import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface IAboutUsProps {
  className?: string
}

export const AboutUs = ({ className = '' }: IAboutUsProps) => {
  const styles = cn('', className)

  return (
    <section className={styles}>
      <div className="container">
        <h1 className="text-2xl font-bold">ABOUT US</h1>
        <p>The example of section</p>
        <p>
          The <b className="text-primary">primary</b> color; the{' '}
          <b className="text-secondary">secondary</b> color; the{' '}
          <b className="text-tertiary">tertiary</b> color and the <b className="text-gray">gray</b>{' '}
          color.
        </p>

        <Accordion type="multiple">
          <AccordionItem
            value="item-1"
            key="item-1"
          >
            <AccordionTrigger>Вопрос 1</AccordionTrigger>

            <AccordionContent>
              <p>Ответ</p>
              <p>Ответ</p>
              <p>Ответ</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            key="item-2"
          >
            <AccordionTrigger>Вопрос 2</AccordionTrigger>

            <AccordionContent>
              <p>Ответ</p>
              <p>Ответ</p>
              <p>Ответ</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            key="item-3"
          >
            <AccordionTrigger>Вопрос 3</AccordionTrigger>

            <AccordionContent>
              <p>Ответ</p>
              <p>Ответ</p>
              <p>Ответ</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

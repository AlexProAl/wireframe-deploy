import { cn } from '@/lib/utils'

interface IFooterProps {
  className?: string
}

export const Footer = ({ className = '' }: IFooterProps) => {
  const styles = cn('mt-10 bg-gray-200 p-4', className)

  return (
    <footer className={styles}>
      <div className="container">
        <div>FOOTER</div>
      </div>
    </footer>
  )
}

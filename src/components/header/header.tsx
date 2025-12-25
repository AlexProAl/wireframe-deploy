import { cn } from '@/lib/utils'

interface IHeaderProps {
  className?: string
}

export const Header = ({ className = '' }: IHeaderProps) => {
  const styles = cn('mb-10 bg-gray-200 p-4', className)

  return (
    <header className={styles}>
      <div className="container">
        <div>HEADER</div>
      </div>
    </header>
  )
}

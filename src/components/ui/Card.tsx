import { cn } from '@/lib/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'elevated'
}

export default function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-smooth'
  
  const variants = {
    default: 'bg-white shadow-neumorphic',
    elevated: 'bg-white shadow-neumorphic-lg hover:shadow-neumorphic-lg',
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}

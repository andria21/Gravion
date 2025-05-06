import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface UseCaseCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
}

export function UseCaseCard({ 
  title, 
  description, 
  icon: Icon,
  className,
  variant = 'primary'
}: UseCaseCardProps) {
  return (
    <div 
      className={cn(
        "group relative p-6 border bg-card/80 rounded-md reticle transition-all duration-300 hover:bg-card",
        {
          "border-primary/20 reticle": variant === 'primary',
          "border-secondary/20 reticle-secondary": variant === 'secondary',
          "border-accent/20 reticle-accent": variant === 'accent',
        },
        className
      )}
    >
      <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
        <Icon
          className={cn(
            "h-8 w-8",
            {
              "text-primary": variant === 'primary',
              "text-secondary": variant === 'secondary',
              "text-accent": variant === 'accent',
            }
          )}
        />
      </div>
      
      <h3 className="text-xl font-semibold tracking-wide mb-3">{title}</h3>
      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
        {description}
      </p>
    </div>
  )
}
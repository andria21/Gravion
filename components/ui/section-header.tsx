import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  eyebrow?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  children?: ReactNode
}

export function SectionHeader({ 
  title,
  eyebrow,
  description,
  align = 'left',
  className,
  children 
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "space-y-2 relative pb-4",
        {
          "text-left": align === 'left',
          "text-center": align === 'center',
          "text-right": align === 'right',
        },
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "eyebrow flex items-center gap-3 mb-3",
            align === 'center' && "justify-center",
            align === 'right' && "justify-end"
          )}
        >
          <span className="h-px w-8 bg-primary/60" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-primary/60" />}
        </div>
      )}

      <h2 className="text-2xl md:text-3xl font-bold tracking-wider relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-primary to-primary/0" />
      </h2>
      
      {description && (
        <p className={cn(
          "text-muted-foreground max-w-lg",
          align === 'center' && "mx-auto"
        )}>
          {description}
        </p>
      )}
      
      {children}
    </div>
  )
}
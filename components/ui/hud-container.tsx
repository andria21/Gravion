import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HudContainerProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
}

export function HudContainer({ 
  children, 
  className,
  variant = 'primary' 
}: HudContainerProps) {
  return (
    <div 
      className={cn(
        "relative p-6 border border-primary/20 bg-card/50 backdrop-blur-sm rounded hud-frame",
        {
          "border-primary/20": variant === 'primary',
          "border-secondary/20": variant === 'secondary',
          "border-accent/20": variant === 'accent',
        },
        className
      )}
    >
      <div className="hud-border-left" />
      <div className="hud-border-right" />
      {children}
    </div>
  )
}
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card = ({ children, className = '', hover = false }: CardProps) => {
  const hoverStyles = hover 
    ? 'hover:shadow-card-hover hover:scale-105 cursor-pointer' 
    : ''
  
  return (
    <div className={`bg-white rounded-[var(--radius-card)] shadow-card transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'cream' | 'gradient'
}

export const Section = ({ id, children, className = '', background = 'white' }: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    cream: 'bg-brand-cream',
    gradient: 'bg-gradient-to-br from-brand-pistachio-50 to-brand-cream'
  }
  
  return (
    <section 
      id={id} 
      className={`py-[var(--spacing-section)] ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  )
}

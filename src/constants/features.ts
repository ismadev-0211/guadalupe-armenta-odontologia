export interface Feature {
  id: string
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    id: 'experiencia',
    title: 'Experiencia Profesional',
    description: 'Equipo altamente capacitado con años de experiencia'
  },
  {
    id: 'tecnologia',
    title: 'Tecnología Avanzada',
    description: 'Equipamiento de última generación para mejores resultados'
  },
  {
    id: 'atencion',
    title: 'Atención Personalizada',
    description: 'Cada paciente es único y merece un trato especial'
  },
  {
    id: 'ambiente',
    title: 'Ambiente Confortable',
    description: 'Instalaciones modernas y acogedoras para tu comodidad'
  }
]

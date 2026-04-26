export interface NavItem {
  id: string
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' }
]

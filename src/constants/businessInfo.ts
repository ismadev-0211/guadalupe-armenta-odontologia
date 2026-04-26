export const BUSINESS_INFO = {
  name: 'Guadalupe Armenta Odontología',
  tagline: 'Especialista en Ortodoncia',
  fullName: 'Guadalupe Armenta Odontología — Especialista en Ortodoncia',
  description:
    'Consultorio dental especializado en ortodoncia, odontopediatría y endodoncia en San Felipe, Guanajuato. Cuidamos tu sonrisa con atención personalizada y tecnología moderna.',

  contact: {
    phone: '428 688 0942',
    phoneHref: 'tel:4286880942',
    whatsapp: '4281478697',
    whatsappHref: 'https://wa.me/4281478697',
    whatsappDefaultMsg:
      'Hola, me gustaría agendar una cita en Guadalupe Armenta Odontología.',
    address: {
      street: 'Jiménez #202',
      floor: 'Planta Alta',
      city: 'San Felipe',
      state: 'Guanajuato',
      short: 'Jiménez #202, Planta Alta',
      full: 'Jiménez #202, Planta Alta, San Felipe, Gto.',
    },
  },

  schedule: {
    weekdays: {
      days: 'Lunes – Viernes',
      hours: ['10:00 am – 2:00 pm', '4:00 pm – 8:00 pm'],
      open: true,
    },
    saturday: {
      days: 'Sábado',
      hours: ['10:00 am – 2:00 pm'],
      open: true,
    },
    sunday: {
      days: 'Domingo',
      hours: ['Cerrado'],
      open: false,
    },
  },

  social: {
    facebook: 'https://www.facebook.com/share/1E6CB3C5tr/',
    instagram: 'https://www.instagram.com/gaconsultoriodental',
  },

  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.0!2d-101.2142!3d21.4757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI4JzMyLjUiTiAxMDHCsDEyJzUxLjEiVw!5e0!3m2!1ses!2smx!4v1234567890',
    directionsUrl:
      'https://maps.google.com/?q=Jiménez+202,+San+Felipe,+Guanajuato',
  },

  logo: '/logo.jpeg',
} as const;

import { getAssetUrl } from '../utils/assets';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  whatsappMsg: string;
}

export const SERVICES: Service[] = [
  {
    id: 'ortodoncia',
    title: 'Tratamiento de Ortodoncia',
    description:
      'Corregimos la posición de tus dientes y mandíbula con brackets y alineadores modernos. Logramos una sonrisa perfecta, funcional y duradera adaptada a cada paciente.',
    image: getAssetUrl('/tratamiento_ortodoncia.jpeg'),
    alt: 'Tratamiento de ortodoncia con brackets en San Felipe Guanajuato',
    whatsappMsg: 'Hola, me interesa información sobre el Tratamiento de Ortodoncia.',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatra',
    description:
      'Cuidamos la salud bucal de los más pequeños con atención especializada, amigable y preventiva. Creamos experiencias positivas desde la primera visita al dentista.',
    image: getAssetUrl('/odontopediatra.jpeg'),
    alt: 'Odontopediatría, atención dental especializada para niños',
    whatsappMsg: 'Hola, me interesa información sobre Odontopediatría.',
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description:
      'Tratamiento de conductos para salvar dientes con infección o daño pulpar. Eliminamos el dolor y preservamos tu diente natural con técnicas modernas y mínimamente invasivas.',
    image: getAssetUrl('/endodoncia.jpeg'),
    alt: 'Tratamiento de endodoncia, tratamiento de conductos radiculares',
    whatsappMsg: 'Hola, me interesa información sobre Endodoncia.',
  },
];

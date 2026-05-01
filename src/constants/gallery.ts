import { getAssetUrl } from '../utils/assets';

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: getAssetUrl('/brackets_autoligado.jpeg'),
    alt: 'Brackets autoligado en ortodoncia',
    label: 'Brackets Autoligado',
  },
  {
    src: getAssetUrl('/tipos_de_mordidas.jpeg'),
    alt: 'Tipos de mordidas dentales',
    label: 'Tipos de Mordidas',
  },
  {
    src: getAssetUrl('/maloclusion.jpeg'),
    alt: 'Maloclusión dental y su tratamiento',
    label: 'Maloclusión',
  },
  {
    src: getAssetUrl('/biomecanica.jpeg'),
    alt: 'Biomecánica en ortodoncia',
    label: 'Biomecánica',
  },
  {
    src: getAssetUrl('/estetica.jpeg'),
    alt: 'Estética dental y sonrisa perfecta',
    label: 'Estética Dental',
  },
  {
    src: getAssetUrl('/que_es_ortodoncia_lingual.jpeg'),
    alt: 'Ortodoncia lingual, brackets por dentro',
    label: 'Ortodoncia Lingual',
  },
];

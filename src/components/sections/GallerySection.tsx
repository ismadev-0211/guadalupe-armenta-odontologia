import { GALLERY_IMAGES } from '../../constants/gallery';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function GallerySection() {
  const titleRef = useScrollAnimation<HTMLDivElement>({ translateY: [30, 0], opacity: [0, 1], duration: 700 });
  const gridRef = useScrollAnimation<HTMLDivElement>({ translateY: [40, 0], opacity: [0, 1], stagger: 80, duration: 600 });

  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 bg-[#F8F7F4]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="mb-12 lg:mb-16">
          <SectionTitle
            eyebrow="Galería Educativa"
            title="Conoce más sobre ortodoncia"
            subtitle="Imágenes informativas sobre los tratamientos y conceptos clave de la ortodoncia moderna."
            align="center"
          />
        </div>

        {/* Asymmetric grid */}
        <div ref={gridRef} className="gallery-grid">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.src}
              data-animate
              className={`gallery-item group relative overflow-hidden rounded-xl ${
                index === 0 ? 'aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#2C2C2C]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="block w-6 h-0.5 bg-[#B8A96A] mb-2 rounded-full" />
                  <p className="font-body text-white font-medium text-sm">{img.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center font-body text-sm text-[#6B6B6B]">
          Síguenos en redes sociales para más contenido educativo sobre salud bucal.
        </p>
      </div>
    </section>
  );
}

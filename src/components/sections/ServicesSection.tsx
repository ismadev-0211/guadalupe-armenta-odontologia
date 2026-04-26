import { SERVICES } from '../../constants/services';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export function ServicesSection() {
  const titleRef = useScrollAnimation<HTMLDivElement>({ translateY: [30, 0], opacity: [0, 1], duration: 700 });
  const gridRef = useScrollAnimation<HTMLDivElement>({ translateY: [60, 0], opacity: [0, 1], stagger: 150, duration: 700 });

  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-[#F8F7F4]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="mb-14 lg:mb-16">
          <SectionTitle
            eyebrow="Nuestros Servicios"
            title="¿En qué podemos ayudarte?"
            subtitle="Ofrecemos tratamientos especializados para cuidar tu salud bucal y la de toda tu familia, con atención personalizada y tecnología de vanguardia."
            align="center"
          />
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => {
            const waUrl = `${BUSINESS_INFO.contact.whatsappHref}?text=${encodeURIComponent(service.whatsappMsg)}`;
            return (
              <article
                key={service.id}
                data-animate
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gold accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B8A96A]" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#2C2C2C] mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[#6B6B6B] leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#B8A96A] font-body font-medium text-sm hover:gap-3 transition-all duration-200 group/link"
                    aria-label={`Más información sobre ${service.title} por WhatsApp`}
                  >
                    Más información
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-[#6B6B6B] mb-4">
            ¿Tienes dudas sobre qué tratamiento necesitas?
          </p>
          <a
            href={`${BUSINESS_INFO.contact.whatsappHref}?text=${encodeURIComponent(BUSINESS_INFO.contact.whatsappDefaultMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B8A96A] hover:bg-[#9A8B52] text-white font-body font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Consulta gratuita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

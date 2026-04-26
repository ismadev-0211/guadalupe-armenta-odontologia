import { BUSINESS_INFO } from '../../constants/businessInfo';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.5 2 6 5 6 8c0 4 3 7 6 10 3-3 6-6 6-10 0-3-2.5-6-6-6z" />
        <path d="M12 8v4M10 10h4" />
      </svg>
    ),
    title: 'Especialista Certificada',
    description: 'Formación especializada en ortodoncia con años de experiencia transformando sonrisas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Atención Personalizada',
    description: 'Cada paciente recibe un plan de tratamiento único, diseñado para sus necesidades específicas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Tecnología Moderna',
    description: 'Equipos de última generación para diagnósticos precisos y tratamientos más cómodos y eficientes.',
  },
];

export function AboutSection() {
  const imageRef = useScrollAnimation<HTMLDivElement>({ translateX: [-50, 0], opacity: [0, 1], duration: 700 });
  const textRef = useScrollAnimation<HTMLDivElement>({ translateX: [50, 0], opacity: [0, 1], duration: 700, delay: 150 });

  const whatsappUrl = `${BUSINESS_INFO.contact.whatsappHref}?text=${encodeURIComponent(
    BUSINESS_INFO.contact.whatsappDefaultMsg
  )}`;

  return (
    <section
      id="nosotros"
      className="py-20 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <div ref={imageRef} className="relative">
            {/* Decorative gold border offset */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#B8A96A]/30 z-0"
              aria-hidden="true"
            />
            {/* Gold dot accent */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#B8A96A]/15 z-0"
              aria-hidden="true"
            />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/alinea_tu_sonrisa.jpeg"
                alt="Alinea tu sonrisa con ortodoncia — Guadalupe Armenta Odontología"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto lg:h-[560px]"
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <p className="font-body text-xs text-[#6B6B6B] uppercase tracking-wider mb-0.5">Especialidad</p>
                <p className="font-display text-base font-semibold text-[#2C2C2C]">Ortodoncia</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div ref={textRef} className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Sobre Nosotros"
              title="Tu sonrisa en manos expertas"
              subtitle="En Guadalupe Armenta Odontología nos dedicamos a transformar sonrisas con tratamientos especializados, brindando atención de calidad en un ambiente cálido y profesional."
              align="left"
            />

            {/* Feature points */}
            <ul className="flex flex-col gap-5" role="list">
              {features.map((feat) => (
                <li key={feat.title} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#F0EAD2] flex items-center justify-center text-[#B8A96A]">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-[#2C2C2C] mb-1">{feat.title}</h3>
                    <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">{feat.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#B8A96A] hover:bg-[#9A8B52] text-white font-body font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Agendar mi cita
              </a>
              <a
                href={BUSINESS_INFO.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#B8A96A] text-[#B8A96A] hover:bg-[#B8A96A] hover:text-white font-body font-medium px-8 py-3.5 rounded-full transition-all duration-300"
              >
                {BUSINESS_INFO.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

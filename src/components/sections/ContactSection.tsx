import { BUSINESS_INFO } from '../../constants/businessInfo';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export function ContactSection() {
  const contentRef = useScrollAnimation<HTMLDivElement>({
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutExpo',
  });

  const whatsappUrl = `${BUSINESS_INFO.contact.whatsappHref}?text=${encodeURIComponent(
    BUSINESS_INFO.contact.whatsappDefaultMsg
  )}`;

  return (
    <section
      id="contacto"
      className="py-20 lg:py-28 bg-[#2C2C2C] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,169,106,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#B8A96A]" />
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#B8A96A]">
            Agenda tu Cita
          </span>
          <span className="block w-8 h-px bg-[#B8A96A]" />
        </div>

        {/* Title */}
        <h2
          id="contact-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight"
        >
          ¿Listo para transformar
          <br />
          <span className="text-[#B8A96A]">tu sonrisa?</span>
        </h2>

        <p className="font-body text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Contáctanos hoy mismo y agenda tu primera consulta. Estamos aquí para ayudarte a conseguir la sonrisa que siempre quisiste.
        </p>

        {/* Availability indicator */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 inline-block" />
          <span className="font-body text-sm text-gray-300">Respondemos en minutos</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Agendar por WhatsApp
          </a>
          <a
            href={BUSINESS_INFO.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 hover:border-[#B8A96A] text-white hover:text-[#B8A96A] font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
          >
            <PhoneIcon />
            {BUSINESS_INFO.contact.phone}
          </a>
        </div>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm font-body text-gray-400">
          <span>
            <span className="text-[#B8A96A] font-medium">WhatsApp:</span>{' '}
            {BUSINESS_INFO.contact.whatsapp}
          </span>
          <span className="hidden sm:block w-px h-4 bg-gray-600" />
          <span>
            <span className="text-[#B8A96A] font-medium">Tel:</span>{' '}
            {BUSINESS_INFO.contact.phone}
          </span>
          <span className="hidden sm:block w-px h-4 bg-gray-600" />
          <span>{BUSINESS_INFO.contact.address.full}</span>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <span className="font-body text-sm text-gray-500">Síguenos:</span>
          <a
            href={BUSINESS_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#B8A96A] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Facebook de Guadalupe Armenta Odontología"
          >
            <FacebookIcon />
          </a>
          <a
            href={BUSINESS_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#B8A96A] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Instagram de Guadalupe Armenta Odontología"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

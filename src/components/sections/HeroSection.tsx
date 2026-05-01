import { useEffect, useRef } from 'react';
import { animate, createTimeline, utils } from 'animejs';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { getAssetUrl } from '../../utils/assets';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const whatsappUrl = `${BUSINESS_INFO.contact.whatsappHref}?text=${encodeURIComponent(
    BUSINESS_INFO.contact.whatsappDefaultMsg
  )}`;

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      const els = heroRef.current?.querySelectorAll<HTMLElement>('.hero-anim');
      els?.forEach((el) => { el.style.opacity = '1'; });
      return;
    }

    // Set initial state
    utils.set('.hero-anim', { opacity: 0 });
    utils.set('.hero-badge', { translateY: -20 });
    utils.set('.hero-title', { translateY: -40 });
    utils.set('.hero-subtitle', { translateY: 20 });
    utils.set('.hero-text', { translateY: 20 });
    utils.set('.hero-ctas', { translateY: 20 });
    utils.set('.hero-deco', { scale: 0.8, opacity: 0 });

    const tl = createTimeline({ defaults: { ease: 'easeOutExpo' } });

    tl.add('.hero-deco', { opacity: [0, 0.6], scale: [0.8, 1], duration: 1200 })
      .add('.hero-badge', { opacity: [0, 1], translateY: [-20, 0], duration: 600 }, '-=900')
      .add('.hero-title', { opacity: [0, 1], translateY: [-40, 0], duration: 800 }, '-=400')
      .add('.hero-subtitle', { opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
      .add('.hero-text', { opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=400')
      .add('.hero-ctas', { opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=300');

    // Scroll indicator loop
    animate('.scroll-indicator', {
      translateY: [0, 8],
      opacity: [1, 0.4],
      duration: 1400,
      direction: 'alternate',
      loop: true,
      ease: 'easeInOutSine',
    });
  }, []);

  const scrollToServices = () => {
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#2C2C2C]"
      aria-label="Sección principal"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetUrl('/banner_horizontal.jpg')}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/90 via-[#2C2C2C]/70 to-[#2C2C2C]/30" />
      </div>

      {/* Decorative gold glow */}
      <div
        className="hero-deco hero-anim absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(184,169,106,0.15) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="hero-deco hero-anim absolute -right-20 top-1/4 w-80 h-80 rounded-full border border-[#B8A96A]/20 pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="hero-deco hero-anim absolute -right-10 top-1/3 w-48 h-48 rounded-full border border-[#B8A96A]/15 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <div className="hero-anim hero-badge inline-flex items-center gap-2 mb-6">
            <span className="block w-8 h-px bg-[#B8A96A]" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#B8A96A]">
              San Felipe, Guanajuato
            </span>
          </div>

          {/* Main title */}
          <h1 className="hero-anim hero-title font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-4">
            Guadalupe
            <br />
            <span className="text-[#B8A96A]">Armenta</span>
            <br />
            Odontología
          </h1>

          {/* Subtitle */}
          <p className="hero-anim hero-subtitle font-body text-sm sm:text-base uppercase tracking-[0.2em] text-[#D4C88A] font-medium mb-6">
            Especialista en Ortodoncia
          </p>

          {/* Description */}
          <p className="hero-anim hero-text font-body text-base sm:text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
            Transformamos sonrisas con tratamientos de ortodoncia, odontopediatría y endodoncia.
            Atención personalizada y tecnología moderna para toda la familia.
          </p>

          {/* CTAs */}
          <div className="hero-anim hero-ctas flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#B8A96A] hover:bg-[#9A8B52] text-white font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Agendar por WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-[#B8A96A] text-white hover:text-[#B8A96A] font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-body text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <div className="scroll-indicator text-[#B8A96A]">
          <ChevronDownIcon />
        </div>
      </div>
    </section>
  );
}

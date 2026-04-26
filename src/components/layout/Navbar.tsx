import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `${BUSINESS_INFO.contact.whatsappHref}?text=${encodeURIComponent(BUSINESS_INFO.contact.whatsappDefaultMsg)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          className="flex items-center gap-3 shrink-0"
          aria-label="Ir al inicio — Guadalupe Armenta Odontología"
        >
          <img
            src={BUSINESS_INFO.logo}
            alt="Logo Guadalupe Armenta Odontología"
            className="h-10 w-10 lg:h-12 lg:w-12 object-contain rounded-full"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span
            className={`font-display font-semibold text-sm lg:text-base leading-tight transition-colors duration-300 ${
              scrolled ? 'text-[#2C2C2C]' : 'text-white'
            }`}
          >
            <span className="block">Guadalupe Armenta</span>
            <span className="block text-[#B8A96A] text-xs font-body font-normal tracking-wider uppercase">
              Odontología
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-[#B8A96A] ${
                  scrolled ? 'text-[#4A4A4A]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#B8A96A] hover:bg-[#9A8B52] text-white text-sm font-medium font-body px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <WhatsAppIcon />
            Agendar Cita
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-[#4A4A4A] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-4 py-4 flex flex-col gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block px-4 py-3 rounded-lg font-body text-[#4A4A4A] hover:text-[#B8A96A] hover:bg-[#F8F7F4] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#B8A96A] text-white font-body font-medium px-5 py-3 rounded-full w-full transition-colors duration-200 hover:bg-[#9A8B52]"
            >
              <WhatsAppIcon />
              Agendar Cita por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

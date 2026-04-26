import { BUSINESS_INFO } from '../../constants/businessInfo';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1E1E] text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={BUSINESS_INFO.logo}
                alt="Logo Guadalupe Armenta Odontología"
                className="h-12 w-12 object-contain rounded-full bg-white/5 p-1"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <p className="font-display font-semibold text-white text-sm leading-tight">
                  Guadalupe Armenta
                </p>
                <p className="font-body text-[#B8A96A] text-xs uppercase tracking-wider">
                  Odontología
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">
              Especialistas en ortodoncia, odontopediatría y endodoncia en San Felipe, Guanajuato.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B8A96A] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B8A96A] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-body text-sm text-gray-400 hover:text-[#B8A96A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3 font-body text-sm text-gray-400" role="list">
              <li>
                <span className="block text-[#B8A96A] text-xs uppercase tracking-wider mb-0.5">Teléfono</span>
                <a href={BUSINESS_INFO.contact.phoneHref} className="hover:text-white transition-colors duration-200">
                  {BUSINESS_INFO.contact.phone}
                </a>
              </li>
              <li>
                <span className="block text-[#B8A96A] text-xs uppercase tracking-wider mb-0.5">WhatsApp</span>
                <a
                  href={`${BUSINESS_INFO.contact.whatsappHref}?text=${encodeURIComponent(BUSINESS_INFO.contact.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  {BUSINESS_INFO.contact.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-[#B8A96A] text-xs uppercase tracking-wider mb-0.5">Dirección</span>
                <address className="not-italic leading-relaxed">
                  {BUSINESS_INFO.contact.address.street},{' '}
                  {BUSINESS_INFO.contact.address.floor}
                  <br />
                  {BUSINESS_INFO.contact.address.city},{' '}
                  {BUSINESS_INFO.contact.address.state}
                </address>
              </li>
            </ul>
          </div>

          {/* Col 4: Schedule */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Horarios
            </h3>
            <ul className="flex flex-col gap-3 font-body text-sm text-gray-400" role="list">
              <li>
                <span className="block text-white font-medium mb-0.5">
                  {BUSINESS_INFO.schedule.weekdays.days}
                </span>
                {BUSINESS_INFO.schedule.weekdays.hours.map((h) => (
                  <span key={h} className="block">{h}</span>
                ))}
              </li>
              <li>
                <span className="block text-white font-medium mb-0.5">
                  {BUSINESS_INFO.schedule.saturday.days}
                </span>
                {BUSINESS_INFO.schedule.saturday.hours.map((h) => (
                  <span key={h} className="block">{h}</span>
                ))}
              </li>
              <li>
                <span className="block text-white font-medium mb-0.5">
                  {BUSINESS_INFO.schedule.sunday.days}
                </span>
                <span className="text-gray-500">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gray-500 text-center sm:text-left">
            © {year} Guadalupe Armenta Odontología. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-gray-600">
            {BUSINESS_INFO.contact.address.city}, {BUSINESS_INFO.contact.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}

import { BUSINESS_INFO } from '../../constants/businessInfo';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const scheduleRows = [
  {
    days: BUSINESS_INFO.schedule.weekdays.days,
    hours: BUSINESS_INFO.schedule.weekdays.hours,
    open: BUSINESS_INFO.schedule.weekdays.open,
  },
  {
    days: BUSINESS_INFO.schedule.saturday.days,
    hours: BUSINESS_INFO.schedule.saturday.hours,
    open: BUSINESS_INFO.schedule.saturday.open,
  },
  {
    days: BUSINESS_INFO.schedule.sunday.days,
    hours: BUSINESS_INFO.schedule.sunday.hours,
    open: BUSINESS_INFO.schedule.sunday.open,
  },
];

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export function ScheduleSection() {
  const titleRef = useScrollAnimation<HTMLDivElement>({ translateY: [30, 0], opacity: [0, 1], duration: 700 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ translateY: [30, 0], opacity: [0, 1], stagger: 100, duration: 600 });

  return (
    <section
      id="horarios"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="mb-12 lg:mb-16">
          <SectionTitle
            eyebrow="Horarios y Ubicación"
            title="Visítanos cuando gustes"
            subtitle="Estamos en San Felipe, Guanajuato, listos para atenderte en los siguientes horarios."
            align="center"
          />
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Schedule card */}
          <div data-animate className="bg-[#F8F7F4] rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F0EAD2] flex items-center justify-center text-[#B8A96A]">
                <ClockIcon />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#2C2C2C]">Horarios de Atención</h3>
            </div>

            <div className="flex flex-col gap-3">
              {scheduleRows.map((row) => (
                <div
                  key={row.days}
                  className={`flex items-start justify-between gap-4 p-4 rounded-xl ${
                    row.open ? 'bg-white' : 'bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="flex-1">
                    <p className="font-body font-semibold text-[#2C2C2C] text-sm mb-1">{row.days}</p>
                    {row.open ? (
                      <div className="flex flex-col gap-0.5">
                        {row.hours.map((h) => (
                          <p key={h} className="font-body text-sm text-[#6B6B6B]">{h}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="font-body text-sm text-[#6B6B6B]">Cerrado</p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-body font-medium px-2.5 py-1 rounded-full ${
                      row.open
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {row.open ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                        Abierto
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
                        Cerrado
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location card */}
          <div data-animate className="flex flex-col gap-6">
            {/* Address info */}
            <div className="bg-[#F8F7F4] rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F0EAD2] flex items-center justify-center text-[#B8A96A]">
                  <LocationIcon />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#2C2C2C]">Ubicación</h3>
              </div>
              <p className="font-body text-[#4A4A4A] leading-relaxed mb-5">
                {BUSINESS_INFO.contact.address.full}
              </p>
              <a
                href={BUSINESS_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B8A96A] hover:bg-[#9A8B52] text-white font-body font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <LocationIcon />
                ¿Cómo llegar?
              </a>
            </div>

            {/* Map iframe */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-[280px]">
              <iframe
                title="Ubicación de Guadalupe Armenta Odontología en San Felipe, Guanajuato"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d-101.2142!3d21.4757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b9e3b5b5b5b5b%3A0x0!2zSmltw6luZXogMjAyLCBTYW4gRmVsaXBlLCBHdWFuYWp1YXRv!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

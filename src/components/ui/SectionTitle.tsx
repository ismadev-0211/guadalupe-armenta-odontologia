interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean; // white text for dark backgrounds
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align];

  const titleColor = light ? 'text-white' : 'text-[#2C2C2C]';
  const subtitleColor = light ? 'text-gray-300' : 'text-[#6B6B6B]';
  const eyebrowColor = light ? 'text-[#D4C88A]' : 'text-[#B8A96A]';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`font-body text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}

      {/* Gold decorative line */}
      <span className="block w-10 h-0.5 bg-[#B8A96A] rounded-full" />

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight ${titleColor}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-body text-base sm:text-lg max-w-2xl leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

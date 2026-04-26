type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'whatsapp' | 'phone';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#B8A96A] text-white hover:bg-[#9A8B52] active:bg-[#8A7B42] shadow-sm hover:shadow-md',
  outline:
    'border-2 border-[#B8A96A] text-[#B8A96A] hover:bg-[#B8A96A] hover:text-white',
  ghost:
    'text-[#B8A96A] hover:bg-[#F0EAD2]',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1ebe5d] active:bg-[#17a852] shadow-sm hover:shadow-md',
  phone:
    'border-2 border-white text-white hover:bg-white hover:text-[#2C2C2C]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8A96A] select-none';

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}

interface TadarakLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const TadarakLogo = ({ size = 'md', showText = true }: TadarakLogoProps) => {
  const sizes = {
    sm: { icon: 40, text: 'text-lg' },
    md: { icon: 60, text: 'text-2xl' },
    lg: { icon: 100, text: 'text-4xl' },
  };

  const { icon, text } = sizes[size];

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Logo Icon - Pill with hand and clock */}
      <div className="relative" style={{ width: icon * 1.5, height: icon }}>
        <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
          {/* Hand outline */}
          <path
            d="M30 50C30 50 25 45 20 40C15 35 15 25 25 20C35 15 45 25 50 35C55 45 60 50 70 50C80 50 85 45 85 40"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Pill */}
          <ellipse cx="40" cy="45" rx="12" ry="18" fill="hsl(var(--primary))" transform="rotate(-30 40 45)" />
          <ellipse cx="48" cy="35" rx="6" ry="10" fill="hsl(174 63% 45%)" transform="rotate(-30 48 35)" />
          {/* Clock */}
          <circle cx="85" cy="25" r="15" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
          <path d="M85 18V25L90 28" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      
      {showText && (
        <div className="text-center">
          <h1 className={`${text} font-bold text-primary tracking-tight`}>Tadarak</h1>
          <p className="text-primary font-semibold text-lg" style={{ fontFamily: 'serif' }}>
            تدارك
          </p>
        </div>
      )}
    </div>
  );
};

export default TadarakLogo;

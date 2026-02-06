interface TadarakLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const TadarakLogo = ({ size = 'md', showText = true }: TadarakLogoProps) => {
  const sizes = {
    sm: { icon: 60, text: 'text-xl', arabic: 'text-2xl' },
    md: { icon: 80, text: 'text-2xl', arabic: 'text-3xl' },
    lg: { icon: 120, text: 'text-4xl', arabic: 'text-5xl' },
  };

  const { icon, text, arabic } = sizes[size];

  return (
    <div className="flex flex-col items-center">
      {/* Logo with text beside icon */}
      <div className="flex items-center gap-2">
        {/* Icon - Hand with pill, shield shape, and lines */}
        <div className="relative" style={{ width: icon, height: icon }}>
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            {/* Shield/Heart shape outline */}
            <path
              d="M50 10 C20 10 10 30 10 50 C10 75 50 95 50 95 C50 95 90 75 90 50 C90 30 80 10 50 10"
              stroke="#0f766e"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Hand */}
            <path
              d="M25 55 C25 55 30 50 40 50 C50 50 55 55 60 55 C65 55 70 52 70 52"
              stroke="#0d9488"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M30 60 C30 60 40 70 50 70 C60 70 65 65 65 65"
              fill="#0d9488"
            />
            {/* Pill */}
            <ellipse cx="45" cy="38" rx="8" ry="14" fill="#0f766e" transform="rotate(-45 45 38)" />
            <ellipse cx="50" cy="33" rx="5" ry="9" fill="#2dd4bf" transform="rotate(-45 50 33)" />
            {/* Speed lines */}
            <path d="M75 40 L85 40" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
            <path d="M72 50 L82 50" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
            <path d="M75 60 L85 60" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Clock icon */}
        {showText && (
          <div className="relative" style={{ width: icon * 0.5, height: icon * 0.5 }}>
            <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
              <circle cx="25" cy="25" r="20" stroke="#0f766e" strokeWidth="3" fill="none" />
              <path d="M25 12V25L32 30" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        )}
        
        {/* Tadarak text */}
        {showText && (
          <span className={`${text} font-bold text-primary`}>Tadarak</span>
        )}
      </div>
      
      {/* Arabic text below */}
      {showText && (
        <p className={`${arabic} font-bold text-primary mt-1`} style={{ fontFamily: 'serif' }}>
          تـــدارك
        </p>
      )}
    </div>
  );
};

// Login page logo - icon only without clock
export const TadarakIconLogo = ({ size = 60 }: { size?: number }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        {/* Shield/Heart shape outline */}
        <path
          d="M50 5 C15 5 5 30 5 50 C5 80 50 98 50 98 C50 98 95 80 95 50 C95 30 85 5 50 5"
          stroke="#0f766e"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Hand */}
        <path
          d="M20 58 C20 58 30 50 42 50 C54 50 60 55 65 55 C70 55 75 52 75 52"
          stroke="#0d9488"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M25 65 C25 65 40 78 50 78 C60 78 70 70 70 70"
          fill="#0d9488"
        />
        {/* Pill */}
        <ellipse cx="45" cy="35" rx="10" ry="16" fill="#0f766e" transform="rotate(-45 45 35)" />
        <ellipse cx="52" cy="28" rx="6" ry="10" fill="#2dd4bf" transform="rotate(-45 52 28)" />
        {/* Speed lines */}
        <path d="M78 38 L90 38" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
        <path d="M75 50 L87 50" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
        <path d="M78 62 L90 62" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default TadarakLogo;

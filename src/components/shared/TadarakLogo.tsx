import React from 'react';

interface TadarakLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const TadarakLogo = ({ size = 'lg', showText = true }: TadarakLogoProps) => {
  const sizes = {
    sm: 40,
    md: 60,
    lg: 180
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img 
        src="/11.png" 
        alt="Tadarak Logo" 
        className={`${sizes[size]} w-auto object-contain`} 
      />
      
    </div>
  );
};

export default TadarakLogo;

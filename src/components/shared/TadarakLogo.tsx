import React from 'react';

interface TadarakLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

// المكون الرئيسي الذي يحتوي على الصورة والنص
export const TadarakLogo = ({ size = 'md', showText = true }: TadarakLogoProps) => {
  const sizes = {
    sm: { icon: "h-10", text: 'text-xl', arabic: 'text-2xl' },
    md: { icon: "h-20", text: 'text-2xl', arabic: 'text-3xl' },
    lg: { icon: "h-32", text: 'text-4xl', arabic: 'text-5xl' },
  };

  const { icon, text, arabic } = sizes[size];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-3">
        {/* استخدام صورتك الخاصة هنا */}
        <img 
          src="/12.png" 
          alt="Tadarak Logo" 
          className={`${icon} w-auto object-contain`} 
        />
        
        {/* نص Tadarak بالإنجليزية */}
        {showText && (
          <span className={`${text} font-bold text-teal-700`}>Tadarak</span>
        )}
      </div>
      
      {/* نص تدارك بالعربية بالأسفل */}
      {showText && (
        <p className={`${arabic} font-bold text-teal-700 mt-1`}>
          تـــدارك
        </p>
      )}
    </div>
  );
};

// هذا المكون هو الذي تطلبه صفحة الـ Login وسيستخدم صورتك أيضاً
export const TadarakIconLogo = ({ size = 60 }: { size?: number }) => {
  return (
    <img 
      src="/12.png" 
      alt="Tadarak Icon" 
      style={{ width: size, height: 'auto' }}
      className="object-contain"
    />
  );
};

export default TadarakLogo;

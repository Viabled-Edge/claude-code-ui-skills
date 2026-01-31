import React, { useState } from 'react';

export interface GlassSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  className?: string;
}

export const GlassSection: React.FC<GlassSectionProps> = ({
  title,
  children,
  defaultOpen = true,
  icon,
  variant = 'frosted',
  theme = 'dark',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const borderColor = variant === 'frosted' ? 'border-white/10' : 'border-white/30';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const mutedColor = theme === 'dark' ? 'text-white/60' : 'text-gray-500';

  return (
    <div className={`border-b ${borderColor} ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between py-3 px-1
          transition-colors duration-200
          hover:${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}
          focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/20 focus:ring-inset
        `.trim().replace(/\s+/g, ' ')}
      >
        <div className="flex items-center gap-3">
          {icon && <span className={`w-5 h-5 ${mutedColor}`}>{icon}</span>}
          <span className={`font-medium ${textColor}`}>{title}</span>
        </div>
        <svg
          className={`
            w-4 h-4 ${mutedColor}
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `.trim().replace(/\s+/g, ' ')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `.trim().replace(/\s+/g, ' ')}
      >
        <div className="py-3 px-1">{children}</div>
      </div>
    </div>
  );
};

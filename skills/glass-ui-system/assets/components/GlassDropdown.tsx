import React, { useState, useRef, useEffect } from 'react';

export interface GlassDropdownOption {
  value: string;
  label: string;
}

export interface GlassDropdownProps {
  options: GlassDropdownOption[];
  value: string;
  onChange: (value: string) => void;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  className?: string;
}

export const GlassDropdown: React.FC<GlassDropdownProps> = ({
  options,
  value,
  onChange,
  variant = 'frosted',
  theme = 'dark',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const hoverBg = theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5';
  const dropdownBg = variant === 'frosted'
    ? 'bg-white/10 backdrop-blur-[20px] border-white/20'
    : 'bg-white/60 backdrop-blur-[8px] border-white/40';

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          inline-flex items-center gap-1.5 px-2 py-1 rounded-lg
          text-sm font-medium ${textColor}
          transition-colors duration-150
          ${hoverBg}
          focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/30
        `.trim().replace(/\s+/g, ' ')}
      >
        {selectedOption?.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`
            absolute z-50 mt-1 py-1 min-w-[120px] rounded-xl border
            ${dropdownBg}
          `.trim().replace(/\s+/g, ' ')}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`
                w-full px-3 py-1.5 text-left text-sm
                transition-colors duration-150
                ${option.value === value
                  ? `text-[#a78bfa] bg-[#a78bfa]/10`
                  : `${textColor} ${hoverBg}`
                }
              `.trim().replace(/\s+/g, ' ')}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

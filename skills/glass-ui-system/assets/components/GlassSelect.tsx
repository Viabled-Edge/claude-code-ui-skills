import React, { useState, useRef, useEffect } from 'react';

export interface GlassSelectOption {
  value: string;
  label: string;
}

export interface GlassSelectProps {
  options: GlassSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  className?: string;
  disabled?: boolean;
}

export const GlassSelect: React.FC<GlassSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  variant = 'frosted',
  theme = 'dark',
  className = '',
  disabled = false,
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

  const baseStyles = variant === 'frosted'
    ? 'bg-white/10 backdrop-blur-[20px] border-white/20 hover:border-white/30'
    : 'bg-white/50 backdrop-blur-[8px] border-white/40 hover:border-white/50';

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const mutedColor = theme === 'dark' ? 'text-white/50' : 'text-gray-400';

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-2.5 rounded-[16px] border
          flex items-center justify-between
          transition-all duration-200 ease-out
          focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/30
          disabled:opacity-50 disabled:cursor-not-allowed
          ${baseStyles}
          ${textColor}
        `.trim().replace(/\s+/g, ' ')}
      >
        <span className={selectedOption ? '' : mutedColor}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
            absolute z-50 w-full mt-2 py-1 rounded-[16px] border
            overflow-hidden
            ${baseStyles}
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
                w-full px-4 py-2.5 text-left
                transition-colors duration-150
                ${option.value === value
                  ? `bg-[#a78bfa]/20 ${textColor}`
                  : `${textColor} hover:bg-white/10`
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

import React from 'react';

export interface GlassToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
  label?: string;
}

const sizeStyles = {
  sm: { track: 'w-9 h-5', thumb: 'w-4 h-4', translate: 'translate-x-4' },
  md: { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
};

export const GlassToggle: React.FC<GlassToggleProps> = ({
  checked,
  onChange,
  variant = 'frosted',
  theme = 'dark',
  disabled = false,
  size = 'md',
  className = '',
  label,
}) => {
  const trackStyles = variant === 'frosted'
    ? checked
      ? 'bg-[#a78bfa] shadow-[0_0_20px_-5px_rgba(167,139,250,0.4)]'
      : 'bg-white/20'
    : checked
      ? 'bg-[#a78bfa] shadow-[0_0_20px_-5px_rgba(167,139,250,0.4)]'
      : 'bg-white/40';

  const sizes = sizeStyles[size];
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <label
      className={`
        inline-flex items-center gap-3 cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`
          relative inline-flex items-center shrink-0
          ${sizes.track} rounded-full
          transition-all duration-200 ease-out
          focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/30 focus:ring-offset-2
          focus:ring-offset-transparent
          ${trackStyles}
        `.trim().replace(/\s+/g, ' ')}
      >
        <span
          className={`
            ${sizes.thumb} bg-white rounded-full
            shadow-md
            transform transition-transform duration-200 ease-out
            ${checked ? sizes.translate : 'translate-x-0.5'}
          `.trim().replace(/\s+/g, ' ')}
        />
      </button>
      {label && <span className={`text-sm font-medium ${textColor}`}>{label}</span>}
    </label>
  );
};

import React from 'react';

export interface GlassSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  className?: string;
  onClear?: () => void;
}

export const GlassSearchInput: React.FC<GlassSearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  variant = 'frosted',
  theme = 'dark',
  className = '',
  onClear,
}) => {
  const baseStyles = variant === 'frosted'
    ? 'bg-white/10 backdrop-blur-[20px] border-white/20 focus-within:border-white/30'
    : 'bg-white/50 backdrop-blur-[8px] border-white/40 focus-within:border-white/50';

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const placeholderColor = theme === 'dark' ? 'placeholder:text-white/40' : 'placeholder:text-gray-400';
  const iconColor = theme === 'dark' ? 'text-white/40' : 'text-gray-400';

  return (
    <div
      className={`
        relative flex items-center gap-2 px-4 py-2.5
        border rounded-full
        transition-all duration-200 ease-out
        focus-within:ring-2 focus-within:ring-[#a78bfa]/20
        ${baseStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <svg
        className={`w-4 h-4 shrink-0 ${iconColor}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          flex-1 bg-transparent outline-none
          text-sm ${textColor} ${placeholderColor}
        `.trim().replace(/\s+/g, ' ')}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className={`
            shrink-0 p-0.5 rounded-full
            ${iconColor} hover:${textColor}
            transition-colors duration-150
            focus:outline-none
          `.trim().replace(/\s+/g, ' ')}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

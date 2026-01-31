import React from 'react';

export interface GlassSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  disabled?: boolean;
  className?: string;
  label?: string;
  showValue?: boolean;
}

export const GlassSlider: React.FC<GlassSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  variant = 'frosted',
  theme = 'dark',
  disabled = false,
  className = '',
  label,
  showValue = false,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  const trackBg = variant === 'frosted' ? 'bg-white/20' : 'bg-white/40';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const mutedColor = theme === 'dark' ? 'text-white/60' : 'text-gray-500';

  return (
    <div className={`${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className={`text-sm font-medium ${textColor}`}>{label}</span>}
          {showValue && <span className={`text-sm ${mutedColor}`}>{value}</span>}
        </div>
      )}
      <div className="relative">
        <div
          className={`
            h-2 rounded-full ${trackBg}
            ${disabled ? 'opacity-50' : ''}
          `.trim().replace(/\s+/g, ' ')}
        >
          <div
            className="h-full rounded-full bg-[#a78bfa] transition-all duration-100"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`
            absolute inset-0 w-full h-full opacity-0 cursor-pointer
            disabled:cursor-not-allowed
          `.trim().replace(/\s+/g, ' ')}
        />
        <div
          className={`
            absolute top-1/2 -translate-y-1/2 w-4 h-4
            bg-white rounded-full shadow-lg
            pointer-events-none
            transition-all duration-100
            ${disabled ? 'opacity-50' : 'shadow-[0_0_10px_rgba(167,139,250,0.3)]'}
          `.trim().replace(/\s+/g, ' ')}
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
    </div>
  );
};

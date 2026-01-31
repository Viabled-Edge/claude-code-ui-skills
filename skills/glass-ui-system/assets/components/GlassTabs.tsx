import React from 'react';

export interface GlassTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface GlassTabsProps {
  tabs: GlassTab[];
  value: string;
  onChange: (id: string) => void;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  className?: string;
}

export const GlassTabs: React.FC<GlassTabsProps> = ({
  tabs,
  value,
  onChange,
  variant = 'frosted',
  theme = 'dark',
  className = '',
}) => {
  const containerStyles = variant === 'frosted'
    ? 'bg-white/5 backdrop-blur-[20px] border-white/10'
    : 'bg-white/30 backdrop-blur-[8px] border-white/30';

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const mutedColor = theme === 'dark' ? 'text-white/60' : 'text-gray-500';

  return (
    <div
      className={`
        inline-flex p-1 rounded-full border
        ${containerStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === value;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full
              font-medium text-sm
              transition-all duration-200 ease-out
              ${isActive
                ? `bg-[#a78bfa] ${textColor} shadow-[0_0_20px_-5px_rgba(167,139,250,0.4)]`
                : `${mutedColor} hover:${textColor} hover:bg-white/10`
              }
            `.trim().replace(/\s+/g, ' ')}
          >
            {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

import React from 'react';

export interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const variantStyles = {
  frosted: {
    dark: 'bg-white/10 backdrop-blur-[20px] border-white/20 hover:border-white/30',
    light: 'bg-black/5 backdrop-blur-[20px] border-black/10 hover:border-black/20',
  },
  clear: {
    dark: 'bg-white/50 backdrop-blur-[8px] border-white/40 hover:border-white/50',
    light: 'bg-white/70 backdrop-blur-[8px] border-white/60 hover:border-white/70',
  },
};

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'frosted',
  theme = 'dark',
  className = '',
  padding = 'md',
  hover = true,
}) => {
  const baseStyles = `
    border rounded-[16px]
    transition-all duration-200 ease-out
    ${hover ? 'hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.2)]' : ''}
  `;

  return (
    <div
      className={`
        ${baseStyles}
        ${variantStyles[variant][theme]}
        ${paddingStyles[padding]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

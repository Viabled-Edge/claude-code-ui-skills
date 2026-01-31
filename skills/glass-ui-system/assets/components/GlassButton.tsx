import React from 'react';

export interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  glassVariant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  glassVariant = 'frosted',
  theme = 'dark',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = `
    font-medium rounded-full
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/30
    active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
  `;

  const variantStyles = {
    primary: `
      bg-[#a78bfa] text-white
      shadow-[0_0_20px_-5px_rgba(167,139,250,0.3)]
      hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.5)]
      hover:bg-[#8b5cf6]
    `,
    secondary: glassVariant === 'frosted'
      ? `
        bg-white/10 backdrop-blur-[20px]
        border border-white/20
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
        hover:bg-white/[0.15] hover:border-white/30
      `
      : `
        bg-white/50 backdrop-blur-[8px]
        border border-white/40
        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
        hover:bg-white/60 hover:border-white/50
      `,
    ghost: `
      bg-transparent
      ${theme === 'dark' ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-black/5'}
    `,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </button>
  );
};

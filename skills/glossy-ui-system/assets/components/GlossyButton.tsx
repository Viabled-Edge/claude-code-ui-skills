import React from 'react';

interface GlossyButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function GlossyButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
}: GlossyButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const baseClasses = `
    relative overflow-hidden
    inline-flex items-center justify-center
    font-semibold
    rounded-[12px]
    transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080b12]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    group
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-br from-[#3b82f6] to-[#06b6d4]
      text-white
      shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5),0_0_30px_-8px_rgba(59,130,246,0.35)]
      hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6),0_0_50px_-12px_rgba(59,130,246,0.45)]
      hover:-translate-y-0.5 hover:scale-[1.02]
      active:translate-y-0 active:scale-[0.98]
      focus:ring-[#3b82f6]/50
    `,
    secondary: `
      bg-[#121822]
      border border-white/10
      text-[#f1f5f9]
      shadow-[0_2px_8px_-2px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.2)]
      hover:bg-[#1a222e]
      hover:border-white/[0.18]
      hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5),0_2px_6px_-2px_rgba(0,0,0,0.3)]
      hover:-translate-y-0.5
      active:translate-y-0
      focus:ring-white/20
    `,
    ghost: `
      bg-transparent
      text-[#94a3b8]
      hover:bg-white/5
      hover:text-[#f1f5f9]
      active:bg-white/10
      focus:ring-white/10
    `,
  };

  const shineClasses = {
    primary: 'bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.15)_30%,transparent_55%)]',
    secondary: 'bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_25%,transparent_50%)]',
    ghost: '',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Shine overlay */}
      {variant !== 'ghost' && (
        <span className={`
          absolute inset-0 pointer-events-none
          ${shineClasses[variant]}
        `} />
      )}

      {/* Content with relative positioning */}
      <span className="relative inline-flex items-center gap-inherit">
        {children}
      </span>
    </button>
  );
}

export default GlossyButton;

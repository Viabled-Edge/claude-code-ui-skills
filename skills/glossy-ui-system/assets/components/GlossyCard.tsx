import React from 'react';

interface GlossyCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export function GlossyCard({
  children,
  className = '',
  glow = false,
  hover = true,
}: GlossyCardProps) {
  return (
    <div className={`relative ${glow ? 'group' : ''}`}>
      {/* Ambient glow halo - only when glow prop is true */}
      {glow && (
        <div className="
          absolute -inset-4
          bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]
          rounded-[28px]
          blur-xl
          opacity-0 group-hover:opacity-60
          transition-opacity duration-500
          pointer-events-none
        " />
      )}

      {/* Card */}
      <div className={`
        relative overflow-hidden
        bg-[#121822]
        border border-white/10
        rounded-[16px]
        shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5),0_2px_6px_-2px_rgba(0,0,0,0.3)]
        ${hover ? `
          hover:border-white/[0.18]
          hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),0_4px_12px_-4px_rgba(0,0,0,0.35)]
          hover:-translate-y-1
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        ` : ''}
        ${className}
      `}>
        {/* Depth gradient - wet surface effect */}
        <div className="
          absolute inset-0
          bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_30%,rgba(0,0,0,0.15)_100%)]
          pointer-events-none
        " />

        {/* Shine overlay */}
        <div className="
          absolute inset-0
          bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.1)_25%,transparent_50%)]
          pointer-events-none
        " />

        {/* Top edge highlight */}
        <div className="
          absolute top-0 left-6 right-6 h-px
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          pointer-events-none
        " />

        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}

export default GlossyCard;

import React from 'react';

interface GlossyBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  pulse?: boolean;
  className?: string;
}

const variantStyles = {
  default: {
    bg: 'rgba(59, 130, 246, 0.15)',
    text: '#60a5fa',
    glow: 'rgba(59, 130, 246, 0.4)',
    dot: '#3b82f6',
  },
  success: {
    bg: 'rgba(34, 197, 94, 0.15)',
    text: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.4)',
    dot: '#22c55e',
  },
  warning: {
    bg: 'rgba(245, 158, 11, 0.15)',
    text: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    dot: '#f59e0b',
  },
  error: {
    bg: 'rgba(239, 68, 68, 0.15)',
    text: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.4)',
    dot: '#ef4444',
  },
};

export function GlossyBadge({
  children,
  variant = 'default',
  pulse = true,
  className = '',
}: GlossyBadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-3 py-1.5
        rounded-full
        text-xs font-semibold
        ${className}
      `}
      style={{
        backgroundColor: styles.bg,
        color: styles.text,
        boxShadow: `0 0 20px -5px ${styles.glow}`,
      }}
    >
      {/* Pulsing indicator dot */}
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: styles.dot }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{
            backgroundColor: styles.dot,
            boxShadow: `0 0 8px ${styles.dot}`,
          }}
        />
      </span>

      {children}
    </span>
  );
}

export default GlossyBadge;

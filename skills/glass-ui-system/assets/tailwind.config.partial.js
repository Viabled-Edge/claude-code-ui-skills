/**
 * Glass UI - Tailwind Configuration (PREMIUM)
 *
 * Includes: Iridescent effects, multi-layer depth, shimmer animations, floating transforms
 *
 * Copy this into your tailwind.config.js theme.extend section.
 * Supports both frosted and clear variants with dark/light themes.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        glass: {
          // Background colors by variant
          bg: {
            frosted: 'rgba(255, 255, 255, 0.1)',
            'frosted-hover': 'rgba(255, 255, 255, 0.15)',
            'frosted-active': 'rgba(255, 255, 255, 0.2)',
            clear: 'rgba(255, 255, 255, 0.5)',
            'clear-hover': 'rgba(255, 255, 255, 0.6)',
            'clear-active': 'rgba(255, 255, 255, 0.7)',
          },
          // Border colors by variant
          border: {
            frosted: 'rgba(255, 255, 255, 0.2)',
            'frosted-hover': 'rgba(255, 255, 255, 0.3)',
            clear: 'rgba(255, 255, 255, 0.4)',
            'clear-hover': 'rgba(255, 255, 255, 0.5)',
          },
          // Primary accent - violet
          accent: {
            DEFAULT: '#a78bfa',
            light: '#c4b5fd',
            dark: '#8b5cf6',
            muted: 'rgba(167, 139, 250, 0.15)',
            glow: 'rgba(167, 139, 250, 0.4)',
            'glow-strong': 'rgba(167, 139, 250, 0.6)',
          },
          // Secondary accent - rose for variety
          rose: {
            DEFAULT: '#fb7185',
            light: '#fda4af',
            muted: 'rgba(251, 113, 133, 0.15)',
            glow: 'rgba(251, 113, 133, 0.4)',
          },
          // Tertiary accent - cyan
          cyan: {
            DEFAULT: '#22d3ee',
            light: '#67e8f9',
            muted: 'rgba(34, 211, 238, 0.15)',
            glow: 'rgba(34, 211, 238, 0.4)',
          },
          // Dark theme base colors
          dark: {
            bg: '#0f0f1a',
            'bg-gradient-from': '#1a1033',
            'bg-gradient-via': '#0f1a2e',
            'bg-gradient-to': '#1a0f2e',
            surface: '#1a1a2e',
            'surface-elevated': '#252540',
            text: '#ffffff',
            'text-muted': '#a1a1aa',
            'text-dim': '#71717a',
          },
          // Light theme base colors
          light: {
            bg: '#f8fafc',
            'bg-gradient-from': '#e0e7ff',
            'bg-gradient-via': '#fae8ff',
            'bg-gradient-to': '#e0f2fe',
            surface: '#ffffff',
            'surface-elevated': '#f1f5f9',
            text: '#0f172a',
            'text-muted': '#64748b',
            'text-dim': '#94a3b8',
          },
          // Semantic colors
          success: {
            DEFAULT: '#34d399',
            muted: 'rgba(52, 211, 153, 0.15)',
            glow: 'rgba(52, 211, 153, 0.4)',
          },
          warning: {
            DEFAULT: '#fbbf24',
            muted: 'rgba(251, 191, 36, 0.15)',
          },
          error: {
            DEFAULT: '#f87171',
            muted: 'rgba(248, 113, 113, 0.15)',
            glow: 'rgba(248, 113, 113, 0.4)',
          },
        },
      },
      backdropBlur: {
        'glass-frosted': '20px',
        'glass-frosted-lg': '30px',
        'glass-frosted-xl': '40px',
        'glass-clear': '8px',
        'glass-clear-lg': '12px',
      },
      borderRadius: {
        'glass': '16px',
        'glass-lg': '20px',
        'glass-xl': '24px',
        'glass-2xl': '32px',
        'glass-full': '9999px',
      },
      boxShadow: {
        // Multi-layer ambient shadows
        'glass-subtle': '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
        'glass-elevated': '0 16px 48px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.08)',
        'glass-floating': '0 24px 64px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.1)',
        // Glow effects
        'glass-glow': '0 0 30px -5px rgba(167, 139, 250, 0.4)',
        'glass-glow-lg': '0 0 50px -10px rgba(167, 139, 250, 0.5)',
        'glass-glow-xl': '0 0 80px -15px rgba(167, 139, 250, 0.6)',
        // Combined lift + glow
        'glass-lift': '0 16px 48px rgba(0, 0, 0, 0.15), 0 0 30px -5px rgba(167, 139, 250, 0.3)',
        'glass-lift-lg': '0 24px 64px rgba(0, 0, 0, 0.2), 0 0 50px -10px rgba(167, 139, 250, 0.4)',
        // Inner border effects
        'glass-border': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glass-border-strong': 'inset 0 0 0 1px rgba(255, 255, 255, 0.2)',
        // Inner highlight (top reflection)
        'glass-highlight': 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'glass-highlight-strong': 'inset 0 2px 0 rgba(255, 255, 255, 0.3)',
        // Light theme
        'glass-light': '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
        'glass-light-elevated': '0 16px 48px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        // Iridescent gradient (rainbow shimmer)
        'glass-iridescent': 'linear-gradient(135deg, rgba(167,139,250,0.3) 0%, rgba(251,113,133,0.2) 25%, rgba(34,211,238,0.2) 50%, rgba(167,139,250,0.3) 75%, rgba(251,113,133,0.2) 100%)',
        // Subtle gradient overlay for depth
        'glass-gradient-overlay': 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
        // Shine sweep for buttons
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, transparent 100%)',
        'glass-shine-sweep': 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%, transparent 100%)',
        // Noise texture for frosted effect
        'glass-noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        // Ambient glow backgrounds
        'glass-ambient-violet': 'radial-gradient(ellipse at center, rgba(167,139,250,0.15) 0%, transparent 70%)',
        'glass-ambient-rose': 'radial-gradient(ellipse at center, rgba(251,113,133,0.15) 0%, transparent 70%)',
        // Dark theme backgrounds
        'glass-dark-gradient': 'linear-gradient(135deg, #1a1033 0%, #0f1a2e 50%, #1a0f2e 100%)',
        // Light theme backgrounds
        'glass-light-gradient': 'linear-gradient(135deg, #e0e7ff 0%, #fae8ff 50%, #e0f2fe 100%)',
      },
      transitionDuration: {
        'glass': '200ms',
        'glass-slow': '300ms',
        'glass-slower': '500ms',
      },
      transitionTimingFunction: {
        'glass': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'glass-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'glass-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        // Glow pulse for status indicators
        'glass-glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(167, 139, 250, 0.3)' },
          '50%': { boxShadow: '0 0 35px -5px rgba(167, 139, 250, 0.5)' },
        },
        // Shimmer sweep for buttons/cards
        'glass-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        // Border color cycle (iridescent)
        'glass-border-iridescent': {
          '0%, 100%': { borderColor: 'rgba(167, 139, 250, 0.4)' },
          '33%': { borderColor: 'rgba(251, 113, 133, 0.4)' },
          '66%': { borderColor: 'rgba(34, 211, 238, 0.4)' },
        },
        // Floating animation
        'glass-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        // Subtle scale breath
        'glass-breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        // Shine sweep across element
        'glass-shine-sweep': {
          '0%': { transform: 'translateX(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) rotate(45deg)' },
        },
      },
      animation: {
        'glass-glow-pulse': 'glass-glow-pulse 2s ease-in-out infinite',
        'glass-shimmer': 'glass-shimmer 2s ease-in-out infinite',
        'glass-border-iridescent': 'glass-border-iridescent 4s ease-in-out infinite',
        'glass-float': 'glass-float 4s ease-in-out infinite',
        'glass-breathe': 'glass-breathe 3s ease-in-out infinite',
        'glass-shine-sweep': 'glass-shine-sweep 3s ease-in-out infinite',
      },
    },
  },
};

/**
 * USAGE PATTERNS:
 *
 * // Premium frosted card with lift
 * <div className="
 *   relative overflow-hidden
 *   bg-glass-bg-frosted
 *   backdrop-blur-glass-frosted
 *   border border-white/20
 *   rounded-glass-lg
 *   shadow-glass-subtle
 *   hover:bg-glass-bg-frosted-hover
 *   hover:border-white/30
 *   hover:shadow-glass-lift
 *   hover:-translate-y-1
 *   transition-all duration-glass ease-glass-out
 * ">
 *   {/* Inner highlight */}
 *   <div className="absolute inset-0 bg-glass-gradient-overlay pointer-events-none" />
 *   {/* Noise texture */}
 *   <div className="absolute inset-0 bg-glass-noise opacity-[0.02] pointer-events-none" />
 *   <div className="relative p-6">{content}</div>
 * </div>
 *
 * // Iridescent border card
 * <div className="
 *   bg-glass-bg-frosted
 *   backdrop-blur-glass-frosted
 *   border border-glass-accent/30
 *   animate-glass-border-iridescent
 *   rounded-glass-lg
 *   shadow-glass-glow
 * ">
 *
 * // Primary button with shimmer
 * <button className="
 *   relative overflow-hidden
 *   bg-glass-accent
 *   text-white font-semibold
 *   rounded-glass
 *   shadow-glass-lift
 *   hover:shadow-glass-lift-lg
 *   hover:-translate-y-0.5
 *   active:translate-y-0
 *   transition-all duration-glass ease-glass-out
 * ">
 *   {/* Shine sweep */}
 *   <span className="
 *     absolute inset-0
 *     bg-glass-shine
 *     pointer-events-none
 *   " />
 *   <span className="relative">Button</span>
 * </button>
 *
 * // Status badge with glow
 * <span className="
 *   inline-flex items-center gap-2
 *   px-3 py-1.5 rounded-glass-full
 *   bg-glass-success-muted
 *   text-glass-success
 *   shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)]
 * ">
 *   <span className="
 *     w-2 h-2 rounded-full
 *     bg-glass-success
 *     shadow-[0_0_10px_currentColor]
 *     animate-glass-glow-pulse
 *   " />
 *   Active
 * </span>
 *
 * // Floating hero element
 * <div className="animate-glass-float">
 *   <GlassCard>{hero content}</GlassCard>
 * </div>
 *
 * // Ambient glow background
 * <div className="relative">
 *   <div className="absolute inset-0 bg-glass-ambient-violet pointer-events-none" />
 *   <div className="relative">{content}</div>
 * </div>
 */

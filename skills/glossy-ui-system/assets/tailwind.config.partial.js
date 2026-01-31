/**
 * Glossy UI System - Tailwind Configuration
 *
 * Polished, luminous surfaces with wet reflections and premium sheen.
 * Merge this into your tailwind.config.js theme.extend
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        glossy: {
          // Backgrounds - deep with slight blue tint
          bg: {
            deep: '#080b12',
            base: '#0c1019',
            elevated: '#121822',
            surface: '#1a222e',
            hover: '#232d3b',
          },

          // Primary accent - luminous blue
          primary: {
            DEFAULT: '#3b82f6',
            light: '#60a5fa',
            dark: '#2563eb',
            glow: 'rgba(59, 130, 246, 0.5)',
            muted: 'rgba(59, 130, 246, 0.15)',
          },

          // Secondary accent - cyan
          secondary: {
            DEFAULT: '#06b6d4',
            light: '#22d3ee',
            glow: 'rgba(6, 182, 212, 0.4)',
            muted: 'rgba(6, 182, 212, 0.12)',
          },

          // Tertiary - violet for variety
          tertiary: {
            DEFAULT: '#8b5cf6',
            glow: 'rgba(139, 92, 246, 0.4)',
          },

          // Text hierarchy
          text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
            muted: '#64748b',
            inverse: '#0f172a',
          },

          // Borders
          border: {
            subtle: 'rgba(255, 255, 255, 0.06)',
            default: 'rgba(255, 255, 255, 0.1)',
            strong: 'rgba(255, 255, 255, 0.18)',
            shine: 'rgba(255, 255, 255, 0.25)',
            accent: 'rgba(59, 130, 246, 0.4)',
          },

          // Status colors with glow
          success: {
            DEFAULT: '#22c55e',
            glow: 'rgba(34, 197, 94, 0.4)',
            muted: 'rgba(34, 197, 94, 0.15)',
          },
          warning: {
            DEFAULT: '#f59e0b',
            glow: 'rgba(245, 158, 11, 0.4)',
            muted: 'rgba(245, 158, 11, 0.15)',
          },
          error: {
            DEFAULT: '#ef4444',
            glow: 'rgba(239, 68, 68, 0.4)',
            muted: 'rgba(239, 68, 68, 0.15)',
          },
        },
      },

      backgroundImage: {
        // Primary gradient
        'glossy-gradient': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        'glossy-gradient-vertical': 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',

        // Shine overlays - the signature glossy effect
        'glossy-shine': 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 25%, transparent 50%)',
        'glossy-shine-strong': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 30%, transparent 55%)',
        'glossy-shine-subtle': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 25%, transparent 50%)',

        // Wet surface effect - curved reflection
        'glossy-wet': 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)',

        // Edge highlight - top edge shine
        'glossy-edge': 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 3px)',

        // Ambient glow backgrounds
        'glossy-ambient-blue': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        'glossy-ambient-cyan': 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',

        // Card inner depth
        'glossy-depth': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 30%, rgba(0,0,0,0.15) 100%)',

        // Grain texture
        'glossy-grain': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      },

      boxShadow: {
        // Multi-layer shadows for depth
        'glossy-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.2)',
        'glossy-md': '0 4px 16px -4px rgba(0, 0, 0, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.3)',
        'glossy-lg': '0 8px 32px -8px rgba(0, 0, 0, 0.6), 0 4px 12px -4px rgba(0, 0, 0, 0.35)',
        'glossy-xl': '0 16px 48px -12px rgba(0, 0, 0, 0.7), 0 8px 20px -8px rgba(0, 0, 0, 0.4)',

        // Glow shadows - luminous halos
        'glossy-glow': '0 0 30px -5px rgba(59, 130, 246, 0.4)',
        'glossy-glow-lg': '0 0 50px -10px rgba(59, 130, 246, 0.5)',
        'glossy-glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.4)',

        // Combined lift + glow (for buttons, CTAs)
        'glossy-lift': '0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 0 30px -8px rgba(59, 130, 246, 0.35)',
        'glossy-lift-lg': '0 12px 32px -8px rgba(0, 0, 0, 0.6), 0 0 50px -12px rgba(59, 130, 246, 0.45)',

        // Inner shadow for inset effects
        'glossy-inset': 'inset 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 -1px 2px rgba(255, 255, 255, 0.05)',

        // Ring glow for focus states
        'glossy-ring': '0 0 0 4px rgba(59, 130, 246, 0.25), 0 0 20px -4px rgba(59, 130, 246, 0.3)',
      },

      borderRadius: {
        'glossy-sm': '8px',
        'glossy': '12px',
        'glossy-lg': '16px',
        'glossy-xl': '20px',
        'glossy-2xl': '24px',
        'glossy-full': '9999px',
      },

      transitionTimingFunction: {
        'glossy-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'glossy-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'glossy-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      animation: {
        'glossy-shine-sweep': 'glossy-shine-sweep 3s ease-in-out infinite',
        'glossy-glow-pulse': 'glossy-glow-pulse 2s ease-in-out infinite',
        'glossy-shimmer': 'glossy-shimmer 2s linear infinite',
        'glossy-float': 'glossy-float 4s ease-in-out infinite',
      },

      keyframes: {
        'glossy-shine-sweep': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glossy-glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px -4px rgba(59, 130, 246, 0.4)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 30px -4px rgba(59, 130, 246, 0.6)' },
        },
        'glossy-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'glossy-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },

      backdropBlur: {
        'glossy': '12px',
        'glossy-lg': '20px',
      },
    },
  },
};

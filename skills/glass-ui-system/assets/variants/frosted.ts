/**
 * Glass UI - Frosted Variant Configuration
 *
 * Heavy backdrop blur with low opacity backgrounds.
 * Best for: Dark backgrounds, photography, rich media interfaces.
 */

export const frostedConfig = {
  name: 'frosted',

  // Background styles
  background: {
    default: 'bg-white/10',
    hover: 'bg-white/[0.15]',
    active: 'bg-white/20',
    selected: 'bg-glass-accent/20',
  },

  // Border styles
  border: {
    default: 'border-white/20',
    hover: 'border-white/30',
    active: 'border-glass-accent/50',
    focus: 'ring-2 ring-glass-accent/30',
  },

  // Backdrop blur
  blur: {
    default: 'backdrop-blur-glass-frosted',
    lg: 'backdrop-blur-glass-frosted-lg',
  },

  // Complete card class
  card: `
    bg-white/10
    backdrop-blur-[20px]
    border border-white/20
    rounded-glass
    shadow-glass-subtle
    transition-all duration-glass ease-glass
    hover:border-white/30
  `,

  // Button variants
  button: {
    primary: `
      bg-glass-accent
      text-white
      rounded-glass-full
      shadow-glass-glow
      hover:shadow-glass-glow-lg
      active:scale-[0.98]
    `,
    secondary: `
      bg-white/10
      backdrop-blur-[20px]
      border border-white/20
      text-white
      rounded-glass-full
      hover:bg-white/[0.15]
      hover:border-white/30
    `,
    ghost: `
      bg-transparent
      text-white/80
      rounded-glass-full
      hover:bg-white/10
      hover:text-white
    `,
  },

  // Input styles
  input: `
    bg-white/10
    backdrop-blur-[20px]
    border border-white/20
    rounded-glass
    text-white
    placeholder:text-white/40
    focus:border-glass-accent/50
    focus:ring-2 focus:ring-glass-accent/20
  `,

  // Recommended backgrounds
  backgrounds: {
    gradient: 'bg-gradient-to-br from-glass-dark-bg-gradient-from to-glass-dark-bg-gradient-to',
    solid: 'bg-glass-dark-bg',
    image: 'Blur effect works best over images and videos',
  },
};

export type FrostedConfig = typeof frostedConfig;

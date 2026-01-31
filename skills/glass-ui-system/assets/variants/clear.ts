/**
 * Glass UI - Clear Variant Configuration
 *
 * Light backdrop blur with higher opacity backgrounds.
 * Best for: Clean interfaces, text-heavy content, light themes.
 */

export const clearConfig = {
  name: 'clear',

  // Background styles
  background: {
    default: 'bg-white/50',
    hover: 'bg-white/60',
    active: 'bg-white/70',
    selected: 'bg-glass-accent/30',
  },

  // Border styles
  border: {
    default: 'border-white/40',
    hover: 'border-white/50',
    active: 'border-glass-accent/60',
    focus: 'ring-2 ring-glass-accent/40',
  },

  // Backdrop blur
  blur: {
    default: 'backdrop-blur-glass-clear',
    lg: 'backdrop-blur-glass-clear-lg',
  },

  // Complete card class
  card: `
    bg-white/50
    backdrop-blur-[8px]
    border border-white/40
    rounded-glass
    shadow-glass-light
    transition-all duration-glass ease-glass
    hover:border-white/50
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
      bg-white/50
      backdrop-blur-[8px]
      border border-white/40
      text-glass-dark-text
      rounded-glass-full
      hover:bg-white/60
      hover:border-white/50
    `,
    ghost: `
      bg-transparent
      text-glass-dark-text/80
      rounded-glass-full
      hover:bg-white/30
      hover:text-glass-dark-text
    `,
  },

  // Input styles
  input: `
    bg-white/50
    backdrop-blur-[8px]
    border border-white/40
    rounded-glass
    text-glass-dark-text
    placeholder:text-glass-dark-text/40
    focus:border-glass-accent/60
    focus:ring-2 focus:ring-glass-accent/30
  `,

  // Recommended backgrounds
  backgrounds: {
    gradient: 'bg-gradient-to-br from-glass-light-bg-gradient-from to-glass-light-bg-gradient-to',
    solid: 'bg-glass-light-bg',
    image: 'Clear variant adds subtle depth without heavy blur distortion',
  },
};

export type ClearConfig = typeof clearConfig;

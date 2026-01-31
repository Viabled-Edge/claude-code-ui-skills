# Premium Effects Guide - Glass UI

This guide covers the "wow factor" effects that make Glass UI output stunning and dimensional rather than just transparent.

## 1. Multi-Layer Shadow System

Glass elements need layered shadows to feel truly floating above the background.

### Shadow Scale

```css
/* Subtle - resting state */
--shadow-glass-subtle: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);

/* Elevated - hover state */
--shadow-glass-elevated: 0 16px 48px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.08);

/* Floating - hero elements */
--shadow-glass-floating: 0 24px 64px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.1);
```

### Combined Lift + Glow

For buttons and CTAs, combine ambient shadow with accent glow:

```css
--shadow-glass-lift: 0 16px 48px rgba(0, 0, 0, 0.15), 0 0 30px -5px rgba(167, 139, 250, 0.3);
--shadow-glass-lift-lg: 0 24px 64px rgba(0, 0, 0, 0.2), 0 0 50px -10px rgba(167, 139, 250, 0.4);
```

```tsx
<button className="
  shadow-glass-lift
  hover:shadow-glass-lift-lg
  hover:-translate-y-0.5
  transition-all duration-glass ease-glass-out
">
```

## 2. Inner Gradient Overlay

Add depth and dimension with a subtle top-to-bottom gradient inside glass elements.

```tsx
<div className="relative overflow-hidden bg-glass-bg-frosted backdrop-blur-glass-frosted">
  {/* Inner depth gradient */}
  <div className="
    absolute inset-0
    bg-glass-gradient-overlay
    pointer-events-none
  " />

  {/* Content */}
  <div className="relative p-6">{content}</div>
</div>
```

The gradient creates:
- Slight lightening at the top (simulating light hitting the surface)
- Subtle darkening at the bottom (simulating shadow)

## 3. Noise Texture

Frosted glass in the real world has subtle texture. Add organic feel with noise overlay.

```tsx
<div className="relative overflow-hidden">
  {/* Glass panel */}
  <div className="bg-glass-bg-frosted backdrop-blur-glass-frosted" />

  {/* Noise texture - very subtle 2% opacity */}
  <div className="
    absolute inset-0
    bg-glass-noise
    opacity-[0.02]
    pointer-events-none
  " />

  {content}
</div>
```

**Important:** Keep noise very subtle (1-3% opacity). Too strong breaks the clean glass effect.

## 4. Iridescent Border Animation

Cycling border colors create an eye-catching, premium effect.

```tsx
<div className="
  bg-glass-bg-frosted
  backdrop-blur-glass-frosted
  border border-glass-accent/30
  animate-glass-border-iridescent
  rounded-glass-lg
  shadow-glass-glow
">
  Premium content
</div>
```

The animation cycles through:
- Violet (#a78bfa)
- Rose (#fb7185)
- Cyan (#22d3ee)

**Use for:**
- Featured cards
- Premium/pro features
- Important callouts
- Hero elements

## 5. Shine Overlay

Add a highlight reflection for premium button feel.

```tsx
<button className="
  relative overflow-hidden
  bg-glass-accent
  text-white font-semibold
  rounded-glass
  shadow-glass-lift
">
  {/* Shine gradient */}
  <span className="
    absolute inset-0
    bg-glass-shine
    pointer-events-none
  " />

  <span className="relative">Button Text</span>
</button>
```

### Animated Shine Sweep

For extra polish, use an animated shine that sweeps across:

```tsx
<button className="relative overflow-hidden group">
  {/* Animated shine sweep on hover */}
  <span className="
    absolute inset-0
    -translate-x-full
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    group-hover:translate-x-full
    transition-transform duration-700
    pointer-events-none
  " />

  <span className="relative">Hover me</span>
</button>
```

## 6. Hover Lift Transform

Glass elements should lift toward the viewer on hover.

```tsx
<div className="
  bg-glass-bg-frosted
  backdrop-blur-glass-frosted
  border border-white/20
  rounded-glass-lg
  shadow-glass-subtle
  hover:bg-glass-bg-frosted-hover
  hover:border-white/30
  hover:shadow-glass-elevated
  hover:-translate-y-2
  transition-all duration-glass ease-glass-out
">
```

**Key combination:**
1. Increase background opacity
2. Brighten border
3. Escalate shadow
4. Lift element (translateY)

## 7. Floating Animation

For hero elements or featured content, use floating animation for "magical" effect.

```tsx
<div className="animate-glass-float">
  <GlassCard>
    Hero content that gently floats
  </GlassCard>
</div>
```

**Use sparingly for:**
- Hero sections
- Featured products
- Premium indicators
- Empty state illustrations

## 8. Ambient Glow Backgrounds

Add atmospheric depth with radial glow behind content areas.

```tsx
<div className="relative">
  {/* Ambient violet glow */}
  <div className="
    absolute inset-0
    bg-glass-ambient-violet
    pointer-events-none
  " />

  {/* Or rose glow for warmth */}
  <div className="
    absolute inset-0
    bg-glass-ambient-rose
    pointer-events-none
  " />

  <div className="relative">{content}</div>
</div>
```

**Use behind:**
- Hero sections
- CTAs and important actions
- Featured content areas
- Modal backdrops

## 9. Status Indicators with Glow

Glass UI status badges need glow to feel alive.

```tsx
<span className="
  inline-flex items-center gap-2
  px-3 py-1.5
  rounded-glass-full
  bg-glass-success-muted
  text-glass-success
  shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)]
">
  {/* Pulsing dot */}
  <span className="
    w-2 h-2
    rounded-full
    bg-glass-success
    shadow-[0_0_10px_currentColor]
    animate-glass-glow-pulse
  " />
  Active
</span>
```

**Glow colors:**
- Success: `rgba(52, 211, 153, 0.4)`
- Warning: `rgba(251, 191, 36, 0.4)`
- Error: `rgba(248, 113, 113, 0.4)`
- Accent: `rgba(167, 139, 250, 0.4)`

## 10. Premium Background Setup

Glass effects need dramatic backgrounds to shine. Always set up properly:

### Dark Theme

```tsx
<div className="
  min-h-screen
  bg-glass-dark-gradient
  relative
">
  {/* Optional: Moving gradient orbs */}
  <div className="absolute top-20 left-20 w-96 h-96 bg-glass-accent/20 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-20 w-96 h-96 bg-glass-rose/20 rounded-full blur-3xl" />

  {/* Content */}
  <div className="relative">{content}</div>
</div>
```

### Light Theme

```tsx
<div className="
  min-h-screen
  bg-glass-light-gradient
  relative
">
  {/* Subtle orbs for light theme */}
  <div className="absolute top-20 left-20 w-96 h-96 bg-glass-accent/10 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-20 w-96 h-96 bg-glass-cyan/10 rounded-full blur-3xl" />

  <div className="relative">{content}</div>
</div>
```

## Complete Premium Card Example

```tsx
<div className="
  relative
  overflow-hidden
  bg-glass-bg-frosted
  backdrop-blur-glass-frosted
  border border-white/20
  rounded-glass-lg
  shadow-glass-subtle
  hover:bg-glass-bg-frosted-hover
  hover:border-white/30
  hover:shadow-glass-lift
  hover:-translate-y-1
  transition-all duration-glass ease-glass-out
  group
">
  {/* Inner gradient overlay */}
  <div className="absolute inset-0 bg-glass-gradient-overlay pointer-events-none" />

  {/* Noise texture */}
  <div className="absolute inset-0 bg-glass-noise opacity-[0.02] pointer-events-none" />

  {/* Iridescent top border */}
  <div className="
    absolute top-0 left-0 right-0 h-[1px]
    bg-glass-iridescent
    opacity-50
  " />

  {/* Content */}
  <div className="relative p-6">
    <h3 className="text-lg font-semibold text-white">Card Title</h3>
    <p className="text-white/70 mt-2">Card description goes here.</p>
  </div>
</div>
```

## Complete Premium Button Example

```tsx
<button className="
  relative
  overflow-hidden
  inline-flex items-center gap-2
  px-6 py-3
  bg-glass-accent
  text-white font-semibold
  rounded-glass
  shadow-glass-lift
  hover:shadow-glass-lift-lg
  hover:-translate-y-0.5 hover:scale-[1.02]
  active:translate-y-0 active:scale-[0.98]
  focus:outline-none focus:ring-2 focus:ring-glass-accent/50 focus:ring-offset-2 focus:ring-offset-transparent
  transition-all duration-glass ease-glass-out
">
  {/* Shine overlay */}
  <span className="absolute inset-0 bg-glass-shine pointer-events-none" />

  {/* Icon (scales on hover) */}
  <span className="relative group-hover:scale-110 transition-transform">
    <PlusIcon className="w-4 h-4" />
  </span>

  {/* Text */}
  <span className="relative">Add Item</span>
</button>
```

## Checklist for Impressive Output

- [ ] Glass cards have inner gradient overlay for depth
- [ ] Premium cards include noise texture at 2% opacity
- [ ] Buttons use shadow-glass-lift with shine overlay
- [ ] Hover states combine: opacity increase + border brighten + shadow escalate + lift transform
- [ ] Status indicators have colored glow + pulsing dots
- [ ] Featured elements use iridescent border animation
- [ ] Hero sections have floating animation
- [ ] Background includes gradient + ambient glow orbs
- [ ] Focus states use accent-colored ring with offset
- [ ] Custom easing (ease-glass-out) on all transitions

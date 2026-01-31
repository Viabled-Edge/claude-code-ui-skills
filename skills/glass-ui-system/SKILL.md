---
name: glass-ui-system
description: Complete design system for building stunning glassmorphism interfaces with iridescent borders, multi-layer shadows, floating transforms, and ambient glow effects. Provides 10 React/Tailwind components with frosted and clear variants, plus dark and light themes. Use when building modern dashboards, media apps, creative tools, or any UI needing depth through translucency with "wow factor". Includes design tokens, component library, premium effects guide, and philosophy documentation.
license: Complete terms in LICENSE.txt
tags:
  - ui-style
  - design
  - frontend
  - react
archetype: guidance
---

# Glass UI Design System

A complete design system for creating stunning glassmorphism interfaces with depth through translucency. Provides ready-to-use React components, Tailwind configuration, premium effects, and two distinct visual variants.

## Design Philosophy

The Glass UI system creates interfaces that feel layered, dimensional, and magical:

### Visual Identity

- **Translucent Layers**: Backgrounds with 10-50% opacity reveal content beneath
- **Backdrop Blur**: Frosted glass (20-30px) or clear pane (8-12px) effects
- **Iridescent Accents**: Animated borders cycling through violet → rose → cyan
- **Multi-Layer Shadows**: Stacked shadows create realistic floating depth
- **Ambient Glow**: Radial color backgrounds add atmosphere

### Premium Effects

- **Inner Gradient Overlay**: Top-to-bottom gradient adds interior dimension
- **Noise Texture**: Subtle grain (2% opacity) for organic frosted feel
- **Shine Overlays**: Light reflection on buttons and cards
- **Floating Animation**: Gentle vertical float for hero elements
- **Lift Transforms**: Elements rise toward viewer on hover

### Interaction Patterns

- Custom easing `ease-glass-out` (cubic-bezier(0.16, 1, 0.3, 1))
- Hover combines: opacity increase + border brighten + shadow escalate + lift
- Active states use scale(0.98) for tactile feedback
- Focus states use accent-colored rings with transparency

**Full philosophy**: See `references/design-philosophy.md`
**Premium patterns**: See `references/premium-effects.md`

## Mode Selection

This skill supports two operational modes. Detect mode from user request:

### Template Mode (Default)
**Triggers**: "template mode", "exact", "copy", "standard", "production-ready", specific component requests (e.g., "give me a GlassCard")

Use template mode when precision and consistency matter:
- Copy component code verbatim from `assets/components/`
- Apply design tokens exactly as specified
- Follow example patterns from `examples/` precisely
- Complete all checklist items literally

### Creative Mode
**Triggers**: "creative mode", "creatively", "interpret", "reimagine", "experiment", "novel", "fresh", "paint over", "apply to existing"

Use creative mode for exploration and adaptation:
- Honor Hard Boundaries (non-negotiable rules below)
- Interpret Extendable Rules freely
- Invent novel arrangements using the same tokens
- See Creative Mode section for detailed guidance

**Ambiguous?** If both signals present, ask: "Would you like exact template patterns or creative interpretation of the Glass UI aesthetic?"

## Quick Start

### 1. Add Tailwind Configuration

Copy `assets/tailwind.config.partial.js` to extend your config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        glass: {
          bg: {
            frosted: 'rgba(255, 255, 255, 0.1)',
            'frosted-hover': 'rgba(255, 255, 255, 0.15)',
            clear: 'rgba(255, 255, 255, 0.5)',
          },
          accent: { DEFAULT: '#a78bfa', muted: 'rgba(167, 139, 250, 0.15)', glow: 'rgba(167, 139, 250, 0.4)' },
          rose: { DEFAULT: '#fb7185', muted: 'rgba(251, 113, 133, 0.15)' },
          cyan: { DEFAULT: '#22d3ee', muted: 'rgba(34, 211, 238, 0.15)' },
          success: { DEFAULT: '#34d399', muted: 'rgba(52, 211, 153, 0.15)', glow: 'rgba(52, 211, 153, 0.4)' },
        }
      },
      boxShadow: {
        'glass-subtle': '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
        'glass-elevated': '0 16px 48px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.08)',
        'glass-lift': '0 16px 48px rgba(0, 0, 0, 0.15), 0 0 30px -5px rgba(167, 139, 250, 0.3)',
        'glass-glow': '0 0 30px -5px rgba(167, 139, 250, 0.4)',
      },
      backgroundImage: {
        'glass-gradient-overlay': 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, transparent 100%)',
        'glass-iridescent': 'linear-gradient(135deg, rgba(167,139,250,0.3) 0%, rgba(251,113,133,0.2) 25%, rgba(34,211,238,0.2) 50%, rgba(167,139,250,0.3) 75%, rgba(251,113,133,0.2) 100%)',
      },
      animation: {
        'glass-glow-pulse': 'glass-glow-pulse 2s ease-in-out infinite',
        'glass-border-iridescent': 'glass-border-iridescent 4s ease-in-out infinite',
        'glass-float': 'glass-float 4s ease-in-out infinite',
      }
    }
  }
}
```

### 2. Copy Components

Copy `assets/components/` to your project and import:

```tsx
import { GlassCard, GlassButton, GlassTabs, GlassSelect } from './components/glass-ui';
```

### 3. Choose Variant and Theme

```tsx
// Frosted variant (default), dark theme
<GlassCard variant="frosted">Frosted dark content</GlassCard>

// Clear variant, light theme
<GlassCard variant="clear" theme="light">Clear light content</GlassCard>
```

## Premium Effects

### Premium Card with Depth

```tsx
<div className="
  relative overflow-hidden
  bg-glass-bg-frosted
  backdrop-blur-[20px]
  border border-white/20
  rounded-[20px]
  shadow-glass-subtle
  hover:bg-glass-bg-frosted-hover
  hover:border-white/30
  hover:shadow-glass-lift
  hover:-translate-y-1
  transition-all duration-200 ease-glass-out
">
  {/* Inner gradient overlay */}
  <div className="absolute inset-0 bg-glass-gradient-overlay pointer-events-none" />

  {/* Noise texture */}
  <div className="absolute inset-0 bg-glass-noise opacity-[0.02] pointer-events-none" />

  <div className="relative p-6">Content</div>
</div>
```

### Primary Button with Shine

```tsx
<button className="
  relative overflow-hidden
  inline-flex items-center gap-2
  px-6 py-3
  bg-glass-accent
  text-white font-semibold
  rounded-[16px]
  shadow-glass-lift
  hover:shadow-glass-lift-lg
  hover:-translate-y-0.5 hover:scale-[1.02]
  active:translate-y-0 active:scale-[0.98]
  transition-all duration-200 ease-glass-out
">
  {/* Shine overlay */}
  <span className="absolute inset-0 bg-glass-shine pointer-events-none" />
  <span className="relative">Button Text</span>
</button>
```

### Iridescent Border Card

```tsx
<div className="
  bg-glass-bg-frosted
  backdrop-blur-[20px]
  border border-glass-accent/30
  animate-glass-border-iridescent
  rounded-[20px]
  shadow-glass-glow
">
  Featured content with cycling border colors
</div>
```

### Status Badge with Glow

```tsx
<span className="
  inline-flex items-center gap-2
  px-3 py-1.5 rounded-full
  bg-glass-success-muted
  text-glass-success
  shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)]
">
  <span className="
    w-2 h-2 rounded-full
    bg-glass-success
    shadow-[0_0_10px_currentColor]
    animate-glass-glow-pulse
  " />
  Active
</span>
```

### Floating Hero Element

```tsx
<div className="animate-glass-float">
  <GlassCard>Hero content that gently floats</GlassCard>
</div>
```

**Complete patterns**: See `references/premium-effects.md`

## Component Library

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| **GlassCard** | Container with blur | `variant`: frosted, clear |
| **GlassButton** | Action button | `variant`: primary, secondary, ghost |
| **GlassTabs** | Tab navigation | `tabs`, `value`, `onChange` |
| **GlassSelect** | Dropdown selector | `options`, `value`, `onChange` |
| **GlassToggle** | Boolean switch | `checked`, `onChange` |
| **GlassSlider** | Range input | `value`, `min`, `max`, `onChange` |
| **GlassSection** | Collapsible area | `title`, `defaultOpen` |
| **GlassDropdown** | Inline dropdown | `options`, `value`, `onChange` |
| **GlassSearchInput** | Search field | `value`, `onChange`, `placeholder` |
| **GlassTreeItem** | Tree navigation | `id`, `label`, `depth`, `isSelected` |

**Detailed API**: See `references/component-api.md`

## Design Tokens

### Colors

```
Primary:   #a78bfa  (violet)
Secondary: #fb7185  (rose)
Tertiary:  #22d3ee  (cyan)

Background - Frosted: rgba(255,255,255,0.1)
Background - Clear:   rgba(255,255,255,0.5)
Border - Frosted:     rgba(255,255,255,0.2)
Border - Clear:       rgba(255,255,255,0.4)
```

### Multi-Layer Shadows

```
glass-subtle:   0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)
glass-elevated: 0 16px 48px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)
glass-floating: 0 24px 64px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.1)
glass-lift:     0 16px 48px rgba(0,0,0,0.15), 0 0 30px -5px rgba(167,139,250,0.3)
glass-glow:     0 0 30px -5px rgba(167,139,250,0.4)
```

### Backdrop Blur

```
glass-frosted:    20px  (heavy blur)
glass-frosted-lg: 30px  (extra heavy)
glass-clear:      8px   (light blur)
glass-clear-lg:   12px  (moderate blur)
```

### Animations

```
glass-glow-pulse:        Pulsing glow for status indicators
glass-border-iridescent: Cycling border colors (violet → rose → cyan)
glass-float:             Gentle floating motion
glass-shimmer:           Background shimmer sweep
```

## Variant Selection

### Frosted (Heavy blur, dramatic)
- Rich visual backgrounds (photography, gradients)
- Immersive experiences (media players)
- Dark themes (blur effect shines)
- Layered interfaces

### Clear (Light blur, subtle)
- Text-heavy content (better readability)
- Light themes (more natural feel)
- Simple interfaces (subtlety preferred)
- Performance-sensitive contexts

**Full comparison**: See `references/variant-guide.md`

## Creative Mode

When operating in creative mode, distinguish between what MUST be preserved and what CAN be interpreted.

### Hard Boundaries (Never Violate)

These define Glass UI's structural identity. Violating these makes output "not Glass UI":

- **Backdrop blur range**: 8-30px (always present on glass elements)
- **Transparency levels**: 10-50% background opacity (never fully opaque)
- **Border opacity**: 20-40% white borders (never solid color borders)
- **No stacking blur**: Never layer glass elements on top of each other
- **Multi-layer shadows**: Always use ambient + close shadow combinations
- **Background requirement**: Glass must have gradient/image/colored background behind it

### Extendable Rules (Creative Territory)

Within hard boundaries, freely interpret these aspects:

- **Color palette**: Default is violet/rose/cyan, but customize freely:
  - Match brand colors for accent glows and iridescent borders
  - Create harmonious color sequences for border animations
  - Adapt ambient glow colors to complement the background
  - Use any colors that work well with translucency
  - **Pre-fab schemes available**: See `references/ui-color-schemes.md` for named aesthetics (Ocean, Sunset, Midnight, etc.), brand-inspired presets (Stripe, Linear, Notion), and functional themes (SaaS Dashboard, Marketing Landing, E-Commerce)
- **Layer depth hierarchies**: Create novel depth arrangements (3+ visual layers, asymmetric depth)
- **Blur intensity mapping**: Vary blur levels semantically (important = less blur, ambient = more blur)
- **Iridescent animation**: Apply border color cycling to unexpected elements or create new color sequences
- **Float choreography**: Orchestrate multiple floating elements with staggered timing
- **Transparency gradients**: Create opacity gradients across surfaces for emphasis
- **Background interaction**: Design new gradient/image backgrounds for glass to refract
- **Inner gradient variations**: Invent new depth-creating overlays beyond the standard top-to-bottom
- **Glow placement**: Apply ambient glow to unconventional elements (text, borders, icons)

### Paint-Over Guidance

When applying Glass UI aesthetic to existing code:

**1. Analyze Existing Design**
- Map current elements to Glass UI equivalents (cards, buttons, inputs)
- Identify layout structure to preserve
- Note background setup needed for glass to work

**2. Transform Systematically**
- Backgrounds → Semi-transparent with backdrop-blur
- Shadows → Multi-layer system (`shadow-glass-subtle`, `shadow-glass-elevated`)
- Borders → Opacity-based (`border-white/20`)
- Border-radius → Glass range (16-20px: `rounded-[16px]`, `rounded-[20px]`)
- Add inner gradient overlay for depth

**3. Enhance Appropriately**
- Add ambient background (gradient + glow orbs) behind glass
- Apply shine overlay to primary buttons
- Include lift + shadow escalation on hover
- Add iridescent border to featured elements

**Example transformation:**
```tsx
// Before: Generic card
<div className="bg-white shadow-md rounded-lg p-4">Content</div>

// After: Glass UI card
<div className="
  relative overflow-hidden
  bg-glass-bg-frosted
  backdrop-blur-[20px]
  border border-white/20
  rounded-[20px]
  shadow-glass-subtle
  hover:bg-glass-bg-frosted-hover
  hover:border-white/30
  hover:shadow-glass-lift
  hover:-translate-y-1
  transition-all duration-200 ease-glass-out
">
  <div className="absolute inset-0 bg-glass-gradient-overlay pointer-events-none" />
  <div className="relative p-6">Content</div>
</div>
```

## Anti-Patterns

**NEVER:**

- Use glass on solid white backgrounds (blur invisible)
- Stack multiple blur layers (performance + visual muddy)
- Use more than 3-4 glass elements per viewport (GPU intensive)
- Skip inner gradient overlay on cards
- Use flat single-layer shadows on glass elements
- Omit hover transforms on interactive glass

**ALWAYS:**

- Set up gradient/image backgrounds for glass to show against
- Add inner gradient overlay for depth
- Use multi-layer shadows (ambient + close)
- Include lift transform on hover
- Add shine overlay on buttons
- Use noise texture at 2% for organic feel
- Apply custom easing (ease-glass-out)

## Checklist for Impressive Output

- [ ] Glass cards have inner gradient overlay for depth
- [ ] Premium cards include noise texture at 2% opacity
- [ ] Buttons use shadow-glass-lift with shine overlay
- [ ] Hover states combine: opacity + border + shadow + lift
- [ ] Status indicators have colored glow + pulsing dots
- [ ] Featured elements use iridescent border animation
- [ ] Hero sections have floating animation
- [ ] Background includes gradient + ambient glow orbs
- [ ] Focus states use accent-colored ring with offset
- [ ] Custom easing (ease-glass-out) on all transitions

## Dependencies

- **Required**: React 18+, Tailwind CSS 3.4+
- **Recommended**: `tailwind-merge` for class merging
- **Optional**: `lucide-react` for icons

## Files Reference

| Path | Description |
|------|-------------|
| `assets/tailwind.config.partial.js` | Tailwind theme extension |
| `assets/tokens/css-variables.css` | CSS custom properties |
| `assets/tokens/design-tokens.json` | Platform-agnostic tokens |
| `assets/components/*.tsx` | React components |
| `assets/variants/frosted.ts` | Frosted variant config |
| `assets/variants/clear.ts` | Clear variant config |
| `references/design-philosophy.md` | Core aesthetic principles |
| `references/premium-effects.md` | Premium patterns guide |
| `references/variant-guide.md` | Frosted vs Clear comparison |
| `references/light-mode-guide.md` | Light theme specifics |
| `references/component-api.md` | Props documentation |
| `examples/frosted-dark-demo.tsx` | Frosted dark example |
| `examples/clear-light-demo.tsx` | Clear light example |

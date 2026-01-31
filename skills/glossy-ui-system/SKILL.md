---
name: glossy-ui-system
description: Polished, luminous design system with wet reflections, shine overlays, and premium sheen. Creates interfaces that look like polished lacquer or wet surfaces. Use when building premium dashboards, luxury product UIs, high-end SaaS applications, or any interface needing a sophisticated, polished feel. Combines soft-ui structure with glass-like shine effects. Includes design tokens, 10 React components, premium effects guide.
license: MIT - See LICENSE.txt
tags:
  - ui-style
  - design
  - frontend
  - react
archetype: guidance
---

# Glossy UI Design System

A premium design system for creating interfaces with polished, luminous surfaces. Think wet lacquer, polished metal, or freshly waxed surfaces - everything has a subtle shine and reflection.

## Design Philosophy

### Visual Identity

Glossy UI creates interfaces that feel **expensive and refined**:

- **Wet Surface Effect**: Every surface has a subtle top-to-bottom gradient simulating light reflection
- **Shine Overlays**: Diagonal highlights in the upper-left corner of interactive elements
- **Luminous Glows**: Soft colored halos behind cards and buttons
- **Deep Backgrounds**: Rich, dark bases that make shine effects pop
- **Multi-Layer Shadows**: Stacked shadows create realistic depth

### How It Differs from Other Styles

| Aspect | Soft UI | Glass UI | **Glossy UI** |
|--------|---------|----------|---------------|
| Surface | Matte gradients | Frosted/translucent | **Polished/reflective** |
| Signature | Rounded + shadows | Backdrop blur | **Shine overlays** |
| Feel | Friendly, approachable | Airy, layered | **Premium, expensive** |
| Light | Diffused | Filtered through | **Reflected off** |

### Premium Effects Stack

For maximum "wow factor", layer these effects:

1. **Base** - Deep dark background with subtle grain
2. **Surface** - Card with glossy-depth gradient
3. **Shine** - Diagonal highlight overlay
4. **Glow** - Ambient halo behind element
5. **Shadow** - Multi-layer shadow for depth

## Mode Selection

This skill supports two operational modes. Detect mode from user request:

### Template Mode (Default)
**Triggers**: "template mode", "exact", "copy", "standard", "production-ready", specific component requests (e.g., "give me a GlossyCard")

Use template mode when precision and consistency matter:
- Copy component code verbatim from `assets/components/`
- Apply design tokens exactly as specified
- Follow example patterns precisely
- Complete all checklist items literally

### Creative Mode
**Triggers**: "creative mode", "creatively", "interpret", "reimagine", "experiment", "novel", "fresh", "paint over", "apply to existing"

Use creative mode for exploration and adaptation:
- Honor Hard Boundaries (non-negotiable rules below)
- Interpret Extendable Rules freely
- Invent novel arrangements using the same tokens
- See Creative Mode section for detailed guidance

**Ambiguous?** If both signals present, ask: "Would you like exact template patterns or creative interpretation of the Glossy UI aesthetic?"

## Quick Start

### 1. Add Tailwind Configuration

Copy `assets/tailwind.config.partial.js` to extend your config:

```javascript
// tailwind.config.js
const glossyConfig = require('./glossy-ui/tailwind.config.partial.js');

module.exports = {
  theme: {
    extend: {
      ...glossyConfig.theme.extend,
    }
  }
}
```

### 2. Copy Components

```tsx
import { GlossyCard, GlossyButton, GlossyTabs } from './components/glossy-ui';
```

### 3. Set Up Background

Glossy effects need dark backgrounds to shine:

```tsx
<div className="min-h-screen bg-glossy-bg-deep">
  {/* Optional ambient glow */}
  <div className="fixed inset-0 bg-glossy-ambient-blue pointer-events-none" />

  {/* Grain texture */}
  <div className="fixed inset-0 bg-glossy-grain opacity-[0.02] pointer-events-none" />

  <div className="relative">{content}</div>
</div>
```

## Premium Patterns

### 1. The Glossy Card

The signature pattern - a card with wet surface effect and shine:

```tsx
<div className="
  relative overflow-hidden
  bg-glossy-bg-elevated
  border border-glossy-border-default
  rounded-glossy-lg
  shadow-glossy-md
  hover:border-glossy-border-strong
  hover:shadow-glossy-lg
  hover:-translate-y-1
  transition-all duration-200 ease-glossy-out
">
  {/* Wet surface effect - inner depth gradient */}
  <div className="absolute inset-0 bg-glossy-depth pointer-events-none" />

  {/* Shine overlay - diagonal highlight */}
  <div className="absolute inset-0 bg-glossy-shine pointer-events-none" />

  {/* Edge highlight - top border glow */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  <div className="relative p-6">{content}</div>
</div>
```

### 2. Premium Button with Shine

Buttons have pronounced shine and glow:

```tsx
<button className="
  relative overflow-hidden
  inline-flex items-center gap-2
  px-6 py-3
  bg-glossy-gradient
  text-white font-semibold
  rounded-glossy
  shadow-glossy-lift
  hover:shadow-glossy-lift-lg
  hover:-translate-y-0.5 hover:scale-[1.02]
  active:translate-y-0 active:scale-[0.98]
  transition-all duration-200 ease-glossy-out
">
  {/* Strong shine overlay */}
  <span className="absolute inset-0 bg-glossy-shine-strong pointer-events-none" />

  {/* Icon with scale on hover */}
  <span className="relative group-hover:scale-110 transition-transform">
    <PlusIcon className="w-4 h-4" />
  </span>

  <span className="relative">Add New</span>
</button>
```

### 3. Glowing Status Badge

Status indicators with luminous glow:

```tsx
<span className="
  inline-flex items-center gap-2
  px-3 py-1.5
  rounded-glossy-full
  bg-glossy-success-muted
  text-glossy-success
  shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]
">
  {/* Pulsing dot */}
  <span className="
    w-2 h-2 rounded-full
    bg-glossy-success
    shadow-[0_0_8px_currentColor]
    animate-glossy-glow-pulse
  " />
  Active
</span>
```

### 4. Shine Sweep Animation

Animated shine that sweeps across on hover:

```tsx
<div className="relative overflow-hidden group">
  {/* Base card content */}
  <div className="bg-glossy-bg-elevated rounded-glossy-lg p-6">
    Content here
  </div>

  {/* Animated shine sweep */}
  <div className="
    absolute inset-0
    -translate-x-full
    bg-gradient-to-r from-transparent via-white/10 to-transparent
    group-hover:translate-x-full
    transition-transform duration-700 ease-glossy-out
    pointer-events-none
  " />
</div>
```

### 5. Luminous Glow Card

Featured content with ambient glow halo:

```tsx
<div className="relative">
  {/* Glow halo behind card */}
  <div className="
    absolute -inset-4
    bg-glossy-ambient-blue
    rounded-[32px]
    blur-xl
    opacity-60
  " />

  {/* Card */}
  <div className="
    relative
    bg-glossy-bg-elevated
    border border-glossy-border-shine
    rounded-glossy-xl
    shadow-glossy-lg
    overflow-hidden
  ">
    <div className="absolute inset-0 bg-glossy-shine" />
    <div className="relative p-8">Featured content</div>
  </div>
</div>
```

### 6. Polished Input Field

Form inputs with shine and focus glow:

```tsx
<div className="relative">
  <input className="
    w-full
    px-4 py-3
    bg-glossy-bg-surface
    border border-glossy-border-default
    rounded-glossy
    text-glossy-text-primary
    placeholder:text-glossy-text-muted
    shadow-glossy-inset
    hover:border-glossy-border-strong
    focus:border-glossy-primary
    focus:shadow-glossy-ring
    focus:outline-none
    transition-all duration-200 ease-glossy-out
  " />

  {/* Subtle shine on top edge */}
  <div className="
    absolute top-0 left-4 right-4 h-px
    bg-gradient-to-r from-transparent via-white/10 to-transparent
    pointer-events-none
  " />
</div>
```

### 7. Glossy Tabs

Tab navigation with shine effects:

```tsx
<div className="
  inline-flex gap-1 p-1
  bg-glossy-bg-surface
  rounded-glossy-lg
  shadow-glossy-inset
">
  {tabs.map(tab => (
    <button
      key={tab.id}
      className={`
        relative px-5 py-2.5
        rounded-glossy
        font-medium text-sm
        transition-all duration-200 ease-glossy-out
        ${tab.active
          ? 'bg-glossy-gradient text-white shadow-glossy-md'
          : 'text-glossy-text-secondary hover:text-glossy-text-primary hover:bg-glossy-bg-hover'
        }
      `}
    >
      {tab.active && (
        <span className="absolute inset-0 bg-glossy-shine rounded-glossy" />
      )}
      <span className="relative">{tab.label}</span>
    </button>
  ))}
</div>
```

### 8. Data Table Row Hover

Table rows with subtle shine on hover:

```tsx
<tr className="
  group
  border-b border-glossy-border-subtle
  hover:bg-glossy-bg-hover/50
  transition-colors duration-150
">
  <td className="relative px-6 py-4">
    {/* Shine appears on hover */}
    <div className="
      absolute inset-0
      bg-glossy-shine-subtle
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
      pointer-events-none
    " />
    <span className="relative">{content}</span>
  </td>
</tr>
```

## Color Palette

### Primary Colors

```
Primary Blue:    #3b82f6 (luminous blue)
Secondary Cyan:  #06b6d4 (accent cyan)
Tertiary Violet: #8b5cf6 (highlight violet)
```

### Background Scale

```
Deep:     #080b12  (page background)
Base:     #0c1019  (sidebar, panels)
Elevated: #121822  (cards, modals)
Surface:  #1a222e  (inputs, wells)
Hover:    #232d3b  (hover states)
```

### Text Hierarchy

```
Primary:   #f1f5f9 (headings, emphasis)
Secondary: #94a3b8 (body text)
Muted:     #64748b (labels, captions)
```

## Shadow System

### Multi-Layer Depth

Every shadow uses multiple layers for realistic depth:

```css
/* Small - subtle depth */
shadow-glossy-sm: 0 2px 8px -2px rgba(0,0,0,0.4),
                  0 1px 2px rgba(0,0,0,0.2);

/* Medium - cards, buttons */
shadow-glossy-md: 0 4px 16px -4px rgba(0,0,0,0.5),
                  0 2px 6px -2px rgba(0,0,0,0.3);

/* Large - elevated, hover */
shadow-glossy-lg: 0 8px 32px -8px rgba(0,0,0,0.6),
                  0 4px 12px -4px rgba(0,0,0,0.35);
```

### Glow Shadows

Luminous halos for emphasis:

```css
/* Blue glow */
shadow-glossy-glow: 0 0 30px -5px rgba(59, 130, 246, 0.4);

/* Combined lift + glow */
shadow-glossy-lift: 0 8px 24px -6px rgba(0,0,0,0.5),
                    0 0 30px -8px rgba(59,130,246,0.35);
```

## Animation & Easing

### Custom Easing

```javascript
ease-glossy-out: cubic-bezier(0.16, 1, 0.3, 1)    // Smooth deceleration
ease-glossy-spring: cubic-bezier(0.34, 1.56, 0.64, 1) // Bouncy
```

### Signature Animations

```javascript
glossy-shine-sweep   // Shine moves across element
glossy-glow-pulse    // Pulsing glow for status
glossy-shimmer       // Loading shimmer effect
glossy-float         // Gentle floating motion
```

## Component Library

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| **GlossyCard** | Container with shine | `glow`: boolean |
| **GlossyButton** | Action button | `variant`: primary, secondary, ghost |
| **GlossyTabs** | Tab navigation | `tabs`, `value`, `onChange` |
| **GlossySelect** | Dropdown selector | `options`, `value`, `onChange` |
| **GlossyToggle** | Boolean switch | `checked`, `onChange` |
| **GlossySlider** | Range input | `value`, `min`, `max`, `onChange` |
| **GlossySection** | Collapsible area | `title`, `defaultOpen` |
| **GlossyDropdown** | Inline dropdown | `options`, `value`, `onChange` |
| **GlossySearchInput** | Search field | `value`, `onChange`, `placeholder` |
| **GlossyTreeItem** | Tree navigation | `id`, `label`, `depth`, `isSelected` |

**Component API**: See `references/component-api.md`

## Creative Mode

When operating in creative mode, distinguish between what MUST be preserved and what CAN be interpreted.

### Hard Boundaries (Never Violate)

These define Glossy UI's structural identity. Violating these makes output "not Glossy UI":

- **Shine overlay required**: Interactive surfaces must have diagonal shine overlay
- **Dark backgrounds only**: Use deep dark bases - shine invisible on light backgrounds
- **Multi-layer shadows**: Always use stacked shadows (never single-layer flat shadows)
- **Depth gradient**: Cards must have inner depth gradient for wet surface effect
- **Edge highlight**: Premium elements need top edge shine (via-white/20 gradient)

### Extendable Rules (Creative Territory)

Within hard boundaries, freely interpret these aspects:

- **Color palette**: Default is blue/cyan/violet, but customize freely:
  - Use any LUMINOUS colors that glow well against dark backgrounds
  - Gold/amber, emerald, ruby, etc. all work beautifully
  - Match brand colors for accent glows and gradients
  - Create harmonious gradient pairs for buttons and highlights
  - **Pre-fab schemes available**: See `references/ui-color-schemes.md` for named aesthetics (Ocean, Sunset, Midnight, etc.), brand-inspired presets (Stripe, Linear, Notion), and functional themes (SaaS Dashboard, Marketing Landing, E-Commerce)
- **Shine direction**: Vary shine angle (not just 135deg) for different light sources
- **Glow halo shapes**: Create non-circular ambient glows, animated glow patterns
- **Sweep animation variations**: Speed, direction, frequency of shine sweeps across surfaces
- **Surface reflectivity levels**: Create hierarchy through shine intensity (matte to high-gloss)
- **Edge highlight creativity**: Multiple edges, animated highlights, colored edge glows
- **Luminosity mapping**: Use bright/dim areas to create visual hierarchy
- **Depth stacking**: Create elaborate depth illusions with multiple surface layers
- **Ambient glow placement**: Position glow halos creatively behind featured elements

### Paint-Over Guidance

When applying Glossy UI aesthetic to existing code:

**1. Analyze Existing Design**
- Map current elements to Glossy UI equivalents (cards, buttons, inputs)
- Identify layout structure to preserve
- Note dark background setup needed

**2. Transform Systematically**
- Backgrounds → Deep dark scale (required for shine effects)
- Colors → Glossy palette OR adapt brand colors to luminous variants
- Shadows → Multi-layer system (`shadow-glossy-md`, `shadow-glossy-lg`)
- Borders → Subtle with shine (`border-glossy-border-default`)
- Add depth gradient overlay to cards
- Add shine overlay to interactive elements

**3. Enhance Appropriately**
- Add ambient glow halos behind featured elements
- Apply shine sweep animation on hover
- Include lift + shadow escalation on hover
- Add edge highlights to premium elements
- Include grain texture at 2% opacity on page

**Example transformation:**
```tsx
// Before: Generic card
<div className="bg-white shadow-md rounded-lg p-4">Content</div>

// After: Glossy UI card
<div className="
  relative overflow-hidden
  bg-glossy-bg-elevated
  border border-glossy-border-default
  rounded-glossy-lg
  shadow-glossy-md
  hover:border-glossy-border-strong
  hover:shadow-glossy-lg
  hover:-translate-y-1
  transition-all duration-200 ease-glossy-out
">
  <div className="absolute inset-0 bg-glossy-depth pointer-events-none" />
  <div className="absolute inset-0 bg-glossy-shine pointer-events-none" />
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  <div className="relative p-6">Content</div>
</div>
```

## Anti-Patterns

### NEVER:

1. **Skip the shine overlay** - it's the signature effect
   ```tsx
   // WRONG - flat, not glossy
   <div className="bg-glossy-bg-elevated rounded-glossy-lg">

   // CORRECT - includes shine
   <div className="relative bg-glossy-bg-elevated rounded-glossy-lg">
     <div className="absolute inset-0 bg-glossy-shine" />
   ```

2. **Use on light backgrounds** - shine won't be visible

3. **Overdo the glow** - max 2-3 glowing elements per viewport

4. **Use single-layer shadows** - always use multi-layer

5. **Forget the edge highlight** - the top edge shine adds premium feel

### ALWAYS:

1. Use deep dark backgrounds (`bg-glossy-bg-deep`)
2. Add shine overlay to cards and buttons
3. Include edge highlights on premium elements
4. Use multi-layer shadows
5. Add glow halos to featured content
6. Use custom easing (`ease-glossy-out`)
7. Include grain texture at 2% opacity

## Checklist for Impressive Output

- [ ] Page has deep dark background with grain texture
- [ ] Cards have shine overlay + depth gradient
- [ ] Buttons have strong shine + glow shadow
- [ ] Featured elements have ambient glow halo behind
- [ ] Inputs have inset shadow + focus ring glow
- [ ] Status badges have colored glow + pulsing dots
- [ ] Hover states include lift transform + shadow escalation
- [ ] Active tabs/buttons have shine overlay
- [ ] Table rows have subtle shine on hover
- [ ] All transitions use custom easing

## File Reference

| File | Purpose |
|------|---------|
| `assets/tailwind.config.partial.js` | Tailwind theme extension |
| `assets/tokens/css-variables.css` | CSS custom properties |
| `assets/tokens/design-tokens.json` | Platform-agnostic tokens |
| `assets/components/*.tsx` | React components |
| `references/design-philosophy.md` | Core aesthetic principles |
| `references/premium-effects.md` | Premium patterns guide |
| `references/component-api.md` | Props documentation |
| `examples/dashboard-demo.tsx` | Full dashboard example |

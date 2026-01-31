# Premium Effects Guide - Glossy UI

This guide covers the signature effects that make Glossy UI feel polished, expensive, and refined.

## 1. Shine Overlays (Signature Effect)

The diagonal shine is the defining characteristic of Glossy UI. It simulates light reflecting off a polished surface.

### Basic Shine

```tsx
<div className="relative overflow-hidden">
  {/* Base element */}
  <div className="bg-glossy-bg-elevated rounded-glossy-lg p-6">
    Content
  </div>

  {/* Shine overlay */}
  <div className="
    absolute inset-0
    bg-glossy-shine
    pointer-events-none
    rounded-glossy-lg
  " />
</div>
```

### Shine Intensity Levels

```css
/* Subtle - for backgrounds, large areas */
bg-glossy-shine-subtle: linear-gradient(135deg,
  rgba(255,255,255,0.15) 0%,
  rgba(255,255,255,0.05) 25%,
  transparent 50%);

/* Standard - for cards, panels */
bg-glossy-shine: linear-gradient(135deg,
  rgba(255,255,255,0.25) 0%,
  rgba(255,255,255,0.1) 25%,
  transparent 50%);

/* Strong - for buttons, CTAs */
bg-glossy-shine-strong: linear-gradient(135deg,
  rgba(255,255,255,0.4) 0%,
  rgba(255,255,255,0.15) 30%,
  transparent 55%);
```

### Animated Shine Sweep

For premium interactions, animate the shine across the element:

```tsx
<button className="relative overflow-hidden group">
  <span className="relative z-10">Click Me</span>

  {/* Animated sweep on hover */}
  <div className="
    absolute inset-0
    -translate-x-full
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    group-hover:translate-x-full
    transition-transform duration-700 ease-glossy-out
    pointer-events-none
  " />
</button>
```

## 2. Wet Surface Effect

Creates the impression of a freshly polished or wet surface with internal light reflection.

### Implementation

```tsx
<div className="relative overflow-hidden rounded-glossy-lg">
  {/* Base card */}
  <div className="bg-glossy-bg-elevated p-6">Content</div>

  {/* Wet surface gradient - light at top, dark at bottom */}
  <div className="
    absolute inset-0
    bg-glossy-depth
    pointer-events-none
  " />

  {/* Top edge highlight */}
  <div className="
    absolute top-0 left-0 right-0 h-px
    bg-gradient-to-r from-transparent via-white/25 to-transparent
  " />
</div>
```

### CSS Definition

```css
bg-glossy-depth: linear-gradient(180deg,
  rgba(255,255,255,0.08) 0%,    /* Light reflection at top */
  transparent 30%,               /* Fade to clear */
  rgba(0,0,0,0.15) 100%);       /* Subtle shadow at bottom */
```

## 3. Luminous Glow Halos

Ambient glows behind elements create a "floating" premium feel.

### Card with Glow Halo

```tsx
<div className="relative">
  {/* Glow halo - positioned behind */}
  <div className="
    absolute -inset-6
    bg-glossy-ambient-blue
    rounded-[40px]
    blur-2xl
    opacity-50
  " />

  {/* Card on top */}
  <div className="
    relative
    bg-glossy-bg-elevated
    border border-glossy-border-shine
    rounded-glossy-xl
    shadow-glossy-lg
    p-8
  ">
    Featured content
  </div>
</div>
```

### Multi-Color Glow

For extra impact, use multiple colored glows:

```tsx
<div className="relative">
  {/* Blue glow - left side */}
  <div className="
    absolute -left-20 top-1/4 w-40 h-40
    bg-glossy-primary rounded-full
    blur-3xl opacity-30
  " />

  {/* Cyan glow - right side */}
  <div className="
    absolute -right-20 bottom-1/4 w-40 h-40
    bg-glossy-secondary rounded-full
    blur-3xl opacity-25
  " />

  <div className="relative">{content}</div>
</div>
```

## 4. Edge Highlights

Thin highlights along edges simulate light catching the surface edge.

### Top Edge Shine

```tsx
<div className="relative">
  <div className="bg-glossy-bg-elevated rounded-glossy-lg p-6">
    Content
  </div>

  {/* Top edge highlight */}
  <div className="
    absolute top-0 left-4 right-4 h-px
    bg-gradient-to-r from-transparent via-white/20 to-transparent
  " />
</div>
```

### Full Border Shine

```tsx
<div className="
  relative
  bg-glossy-bg-elevated
  rounded-glossy-lg
  p-6
  before:absolute before:inset-0
  before:rounded-glossy-lg
  before:p-px
  before:bg-gradient-to-b before:from-white/20 before:to-transparent
  before:pointer-events-none
  before:-z-10
">
  Content with border shine
</div>
```

## 5. Multi-Layer Shadows

Realistic depth requires multiple shadow layers at different distances.

### Shadow Anatomy

```css
/* Each shadow has two layers: ambient (far) + contact (close) */

shadow-glossy-md:
  0 4px 16px -4px rgba(0, 0, 0, 0.5),   /* Ambient - soft, spread */
  0 2px 6px -2px rgba(0, 0, 0, 0.3);    /* Contact - sharp, close */
```

### Shadow Escalation on Hover

```tsx
<div className="
  shadow-glossy-md
  hover:shadow-glossy-lg
  hover:-translate-y-2
  transition-all duration-300 ease-glossy-out
">
  {/* Shadows escalate as element "lifts" toward viewer */}
</div>
```

### Glow + Shadow Combo

For CTAs and featured elements:

```tsx
<button className="
  shadow-glossy-lift
  hover:shadow-glossy-lift-lg
">
  {/* Combines ambient shadow with accent-colored glow */}
</button>
```

## 6. Status Indicators with Glow

Status badges need colored glow to feel "alive."

### Implementation

```tsx
<span className="
  inline-flex items-center gap-2
  px-3 py-1.5
  rounded-glossy-full
  bg-glossy-success-muted
  text-glossy-success
  shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]
">
  {/* Pulsing indicator dot */}
  <span className="
    relative flex h-2 w-2
  ">
    <span className="
      animate-ping absolute inline-flex h-full w-full
      rounded-full bg-glossy-success opacity-75
    " />
    <span className="
      relative inline-flex rounded-full h-2 w-2
      bg-glossy-success
      shadow-[0_0_8px_currentColor]
    " />
  </span>
  Active
</span>
```

### Color Variations

```tsx
// Success - green glow
shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]

// Warning - amber glow
shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)]

// Error - red glow
shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)]

// Info - blue glow
shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]
```

## 7. Input Field Treatments

Inputs need inset shadows and focus glows.

### Polished Input

```tsx
<input className="
  w-full px-4 py-3
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
```

### Focus Ring Glow

```css
shadow-glossy-ring:
  0 0 0 4px rgba(59, 130, 246, 0.25),  /* Outer ring */
  0 0 20px -4px rgba(59, 130, 246, 0.3); /* Glow */
```

## 8. Button Treatments

### Primary Button - Full Treatment

```tsx
<button className="
  relative overflow-hidden
  inline-flex items-center justify-center gap-2
  px-6 py-3
  bg-glossy-gradient
  text-white font-semibold
  rounded-glossy
  shadow-glossy-lift
  hover:shadow-glossy-lift-lg
  hover:-translate-y-0.5
  hover:scale-[1.02]
  active:translate-y-0
  active:scale-[0.98]
  focus:outline-none focus:ring-2 focus:ring-glossy-primary/50 focus:ring-offset-2 focus:ring-offset-glossy-bg-deep
  transition-all duration-200 ease-glossy-out
  group
">
  {/* Strong shine overlay */}
  <span className="absolute inset-0 bg-glossy-shine-strong pointer-events-none" />

  {/* Icon scales on hover */}
  <span className="relative transition-transform group-hover:scale-110">
    <IconComponent className="w-4 h-4" />
  </span>

  <span className="relative">Button Text</span>
</button>
```

### Secondary Button

```tsx
<button className="
  relative overflow-hidden
  px-6 py-3
  bg-glossy-bg-elevated
  border border-glossy-border-default
  text-glossy-text-primary font-medium
  rounded-glossy
  shadow-glossy-sm
  hover:bg-glossy-bg-surface
  hover:border-glossy-border-strong
  hover:shadow-glossy-md
  hover:-translate-y-0.5
  active:translate-y-0
  transition-all duration-200 ease-glossy-out
">
  {/* Subtle shine */}
  <span className="absolute inset-0 bg-glossy-shine-subtle pointer-events-none" />
  <span className="relative">Secondary</span>
</button>
```

## 9. Complete Premium Card

Combining all effects for maximum impact:

```tsx
<div className="relative group">
  {/* Ambient glow halo (optional - for featured content) */}
  <div className="
    absolute -inset-4
    bg-glossy-ambient-blue
    rounded-[28px]
    blur-xl
    opacity-0 group-hover:opacity-40
    transition-opacity duration-500
  " />

  {/* Card */}
  <div className="
    relative overflow-hidden
    bg-glossy-bg-elevated
    border border-glossy-border-default
    rounded-glossy-lg
    shadow-glossy-md
    group-hover:border-glossy-border-strong
    group-hover:shadow-glossy-lg
    group-hover:-translate-y-1
    transition-all duration-300 ease-glossy-out
  ">
    {/* Depth gradient */}
    <div className="absolute inset-0 bg-glossy-depth pointer-events-none" />

    {/* Shine overlay */}
    <div className="absolute inset-0 bg-glossy-shine pointer-events-none" />

    {/* Top edge highlight */}
    <div className="
      absolute top-0 left-6 right-6 h-px
      bg-gradient-to-r from-transparent via-white/20 to-transparent
    " />

    {/* Content */}
    <div className="relative p-6">
      <h3 className="text-lg font-semibold text-glossy-text-primary">
        Card Title
      </h3>
      <p className="mt-2 text-glossy-text-secondary">
        Card description with polished appearance.
      </p>
    </div>
  </div>
</div>
```

## 10. Page Background Setup

Always set up the page properly for glossy effects:

```tsx
<div className="min-h-screen bg-glossy-bg-deep relative">
  {/* Grain texture overlay */}
  <div className="
    fixed inset-0
    bg-glossy-grain
    opacity-[0.02]
    pointer-events-none
    z-50
  " />

  {/* Ambient color orbs */}
  <div className="
    fixed top-20 left-1/4 w-96 h-96
    bg-glossy-primary/10
    rounded-full blur-3xl
    pointer-events-none
  " />
  <div className="
    fixed bottom-20 right-1/4 w-96 h-96
    bg-glossy-secondary/10
    rounded-full blur-3xl
    pointer-events-none
  " />

  {/* Page content */}
  <div className="relative z-10">
    {children}
  </div>
</div>
```

## Checklist

- [ ] Every card has shine overlay + depth gradient
- [ ] Buttons have strong shine + lift shadow
- [ ] Featured elements have glow halo
- [ ] Inputs have inset shadow + focus ring glow
- [ ] Status badges have colored outer glow
- [ ] All interactive elements have hover lift
- [ ] Page has grain texture at 2% opacity
- [ ] Background has ambient color orbs
- [ ] Edge highlights on premium elements
- [ ] All transitions use ease-glossy-out

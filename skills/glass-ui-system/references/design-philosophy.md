# Glass UI - Design Philosophy

A guide to the aesthetic principles and visual language of the Glass UI system.

## Core Philosophy

Glass UI creates depth through **transparency and blur** rather than shadows and borders. The system makes interfaces feel layered and dimensional while maintaining clarity and usability.

### The Glassmorphism Effect

Glassmorphism relies on three key techniques:

1. **Backdrop Blur**: Using `backdrop-filter: blur()` to create frosted or clear glass effects
2. **Transparency**: Semi-transparent backgrounds that reveal content beneath
3. **Subtle Borders**: Thin borders with low opacity define edges without harsh lines

## Visual Principles

### Depth Through Layers

Instead of drop shadows, create depth by stacking translucent layers:

```
Background gradient/image
  └─ Glass card (blur + transparency)
      └─ Inner content (solid or subtle bg)
```

Each layer adds visual separation without heavy shadows.

### Light as Design Element

Glass effects interact with the background. Design your backgrounds to complement:

- **Gradients**: Purple-to-blue gradients create beautiful refraction
- **Images**: Photography and videos shine through the blur
- **Solid colors**: Work best with the clear variant

### The Violet Accent

The accent color (#a78bfa - violet) was chosen because:

- Complements both dark and light themes
- Creates distinctive glow effects
- Feels premium and modern
- High contrast against both variants

## Interaction Design

### Hover States

Hover effects should feel like light catching glass:

- Brighten borders slightly (white/20 → white/30)
- Add subtle glow for interactive elements
- Never dramatically change opacity

### Focus States

Focus indicators should be visible but not overwhelming:

- Use ring with accent color at 30% opacity
- Avoid full-opacity borders that break the glass illusion
- Maintain the translucent aesthetic

### Active/Selected States

Selected items use the accent color at low opacity:

- Background: `accent/20` for frosted, `accent/30` for clear
- Optional border highlight on one side
- Glow effect for emphasis

## Performance Considerations

### GPU Acceleration

`backdrop-filter` is GPU-accelerated but can be expensive:

- Limit to 3-4 glass elements per viewport
- Avoid animating blur values
- Use `will-change: transform` for elements that move

### Nesting Rules

Never stack multiple blur layers:

```tsx
// BAD: Double blur
<GlassCard>
  <GlassCard>Content</GlassCard>
</GlassCard>

// GOOD: Outer glass, inner solid
<GlassCard>
  <div className="bg-white/5">Content</div>
</GlassCard>
```

### Browser Support

`backdrop-filter` is supported in:
- Chrome 76+
- Firefox 103+
- Safari 9+
- Edge 79+

Provide fallbacks for older browsers with solid backgrounds.

## Color System

### Dark Theme Palette

| Token | Value | Usage |
|-------|-------|-------|
| `dark-bg` | #0f0f1a | Page background |
| `dark-surface` | #1a1a2e | Card backgrounds |
| `dark-text` | #ffffff | Primary text |
| `dark-text-muted` | #a1a1aa | Secondary text |

### Light Theme Palette

| Token | Value | Usage |
|-------|-------|-------|
| `light-bg` | #f8fafc | Page background |
| `light-surface` | #ffffff | Card backgrounds |
| `light-text` | #0f172a | Primary text |
| `light-text-muted` | #64748b | Secondary text |

## Typography

Glass UI works best with:

- **Sans-serif fonts**: Inter, SF Pro, system-ui
- **Medium weights**: 400-500 for body, 500-600 for headings
- **Adequate contrast**: Ensure text remains readable over blur

## Anti-Patterns

### Don't: Glass on Solid White

The blur effect is invisible against a solid white background:

```tsx
// WRONG
<div className="bg-white">
  <GlassCard variant="frosted">No effect visible</GlassCard>
</div>
```

### Don't: Too Many Glass Layers

Performance degrades with multiple blur elements:

```tsx
// WRONG: Grid of 20 glass cards
{items.map(item => <GlassCard key={item.id}>...</GlassCard>)}

// RIGHT: One glass container
<GlassCard>
  {items.map(item => <div key={item.id}>...</div>)}
</GlassCard>
```

### Don't: Animate Blur Values

Animating blur is expensive and janky:

```tsx
// WRONG
className="transition-all" // includes backdrop-blur

// RIGHT: Only animate transform/opacity
className="transition-[transform,opacity]"
```

## Inspiration Sources

Glass UI draws from:

- Apple's macOS Big Sur design language
- Microsoft's Fluent Design acrylic materials
- Modern dashboard and creative tool interfaces
- Physical frosted glass and light physics

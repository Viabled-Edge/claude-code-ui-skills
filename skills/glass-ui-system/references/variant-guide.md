# Glass UI - Variant Guide

A comprehensive comparison of the Frosted and Clear glass variants.

## Overview

Glass UI provides two distinct variants that control the intensity of the glassmorphism effect:

| Aspect | Frosted | Clear |
|--------|---------|-------|
| Blur amount | 20-30px | 8-12px |
| Background opacity | 10-20% | 40-60% |
| Visual effect | Heavy distortion | Subtle transparency |
| Best for | Rich backgrounds | Text content |
| Performance | More intensive | More efficient |

## Frosted Variant

### Characteristics

- **Heavy blur**: 20px default, 30px for large areas
- **Low opacity**: 10% background (white/10)
- **Strong effect**: Background content heavily distorted
- **Pronounced borders**: Need visibility through blur

### When to Use Frosted

1. **Rich visual backgrounds**
   - Photography and images
   - Video content
   - Complex gradients

2. **Immersive experiences**
   - Media players
   - Creative tools
   - Gaming interfaces

3. **Dark themes**
   - The blur effect is most visible on dark backgrounds
   - Creates depth without heavy shadows

4. **Layered interfaces**
   - Multiple overlapping panels
   - Modal dialogs over content
   - Floating toolbars

### Frosted Code Example

```tsx
<div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
  <GlassCard variant="frosted">
    <h2 className="text-xl font-semibold text-white">Frosted Card</h2>
    <p className="text-white/70">Content with heavy blur effect</p>
  </GlassCard>
</div>
```

## Clear Variant

### Characteristics

- **Light blur**: 8px default, 12px for large areas
- **Higher opacity**: 50% background (white/50)
- **Subtle effect**: Background content visible but softened
- **Clean borders**: Less emphasis needed

### When to Use Clear

1. **Text-heavy content**
   - Articles and documentation
   - Form-heavy interfaces
   - Data tables

2. **Light themes**
   - More natural feel on light backgrounds
   - Better readability

3. **Simple interfaces**
   - When subtlety is preferred
   - Minimalist designs
   - Professional/corporate contexts

4. **Performance concerns**
   - Less blur = better performance
   - Mobile-friendly option

### Clear Code Example

```tsx
<div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
  <GlassCard variant="clear" theme="light">
    <h2 className="text-xl font-semibold text-gray-900">Clear Card</h2>
    <p className="text-gray-600">Content with subtle glass effect</p>
  </GlassCard>
</div>
```

## Mixing Variants

You can use both variants in the same interface for visual hierarchy:

```tsx
// Primary container: frosted for prominence
<GlassCard variant="frosted" className="p-6">
  <h1>Main Content</h1>

  {/* Secondary elements: clear for subtlety */}
  <GlassCard variant="clear" className="mt-4">
    <p>Supporting content</p>
  </GlassCard>
</GlassCard>
```

**Caution**: Avoid nesting glass elements directly. Use solid backgrounds for nested content.

## Variant Selection Flowchart

```
Start
  │
  ├─ Is background visually rich? (image, video, gradient)
  │   ├─ Yes → Use FROSTED
  │   └─ No → Continue
  │
  ├─ Is content text-heavy?
  │   ├─ Yes → Use CLEAR
  │   └─ No → Continue
  │
  ├─ Is theme light?
  │   ├─ Yes → Use CLEAR
  │   └─ No → Continue
  │
  ├─ Is performance critical? (mobile, many elements)
  │   ├─ Yes → Use CLEAR
  │   └─ No → Use FROSTED (default)
  │
  └─ Default → FROSTED
```

## Theme Combinations

| Variant | Theme | Best Background |
|---------|-------|-----------------|
| Frosted | Dark | Purple/blue gradients, dark images |
| Frosted | Light | Pastel gradients, light images |
| Clear | Dark | Solid dark colors, subtle gradients |
| Clear | Light | White/gray backgrounds, light gradients |

## Performance Comparison

Tested on mid-range laptop (2020 MacBook Air):

| Scenario | Frosted FPS | Clear FPS |
|----------|-------------|-----------|
| 1 card | 60 | 60 |
| 5 cards | 58 | 60 |
| 10 cards | 45 | 55 |
| 20 cards | 30 | 45 |

**Recommendation**: Use Clear variant when displaying many glass elements.

## Accessibility Considerations

### Contrast

- Frosted variant may reduce text contrast over busy backgrounds
- Clear variant maintains better readability
- Always test with actual background content

### Motion Sensitivity

Both variants work well with `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .glass-card {
    backdrop-filter: none;
    background: rgba(0, 0, 0, 0.8); /* Solid fallback */
  }
}
```

### Screen Readers

Glass effects are purely visual and don't affect screen reader accessibility.

## Browser Fallbacks

For browsers without `backdrop-filter` support:

```css
.glass-frosted {
  /* Fallback: solid dark background */
  background: rgba(26, 26, 46, 0.95);
}

@supports (backdrop-filter: blur(20px)) {
  .glass-frosted {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
  }
}
```

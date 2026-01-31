# Glass UI - Light Mode Guide

Comprehensive guide for implementing Glass UI in light theme contexts.

## Overview

Light mode requires different considerations than dark mode for glassmorphism effects. This guide covers color adjustments, background recommendations, and best practices.

## Key Differences

| Aspect | Dark Mode | Light Mode |
|--------|-----------|------------|
| Glass bg | white/10-50% | black/5-10% or white/50-70% |
| Text color | White | Dark gray (#0f172a) |
| Blur visibility | High | Moderate |
| Recommended variant | Frosted | Clear |

## Color Palette

### Light Theme Tokens

```javascript
light: {
  bg: '#f8fafc',           // Page background
  'bg-gradient-from': '#e0e7ff',  // Gradient start (indigo tint)
  'bg-gradient-to': '#fae8ff',    // Gradient end (pink tint)
  surface: '#ffffff',       // Card backgrounds
  'surface-elevated': '#f1f5f9',  // Elevated surfaces
  text: '#0f172a',          // Primary text
  'text-muted': '#64748b',  // Secondary text
  'text-dim': '#94a3b8',    // Tertiary text
}
```

### Applying Light Mode

Pass `theme="light"` to all Glass UI components:

```tsx
<GlassCard variant="clear" theme="light">
  <GlassButton theme="light">Click me</GlassButton>
  <GlassSelect theme="light" options={...} />
</GlassCard>
```

## Background Recommendations

### Gradient Backgrounds

Light gradients work best with Glass UI:

```tsx
// Indigo to pink gradient
<div className="bg-gradient-to-br from-indigo-100 to-pink-100">
  <GlassCard variant="clear" theme="light">...</GlassCard>
</div>

// Blue to purple gradient
<div className="bg-gradient-to-br from-blue-50 to-purple-50">
  <GlassCard variant="clear" theme="light">...</GlassCard>
</div>
```

### Image Backgrounds

Light images work well with the clear variant:

```tsx
<div className="relative">
  <img src="light-photo.jpg" className="absolute inset-0 object-cover" />
  <GlassCard variant="clear" theme="light" className="relative z-10">
    Content overlaid on image
  </GlassCard>
</div>
```

### Solid Backgrounds

For solid backgrounds, use light grays or whites:

```tsx
<div className="bg-slate-100">
  <GlassCard variant="clear" theme="light">
    Subtle glass effect on light solid
  </GlassCard>
</div>
```

## Variant Selection

### Clear Variant (Recommended)

The clear variant works better in light mode:

- Higher opacity (50-70%) provides better contrast
- Light blur (8-12px) is more subtle
- Better readability for text content

### Frosted Variant

Frosted can work in light mode but requires care:

- Use darker glass backgrounds (black/5 instead of white/10)
- Ensure sufficient text contrast
- Works best over colorful backgrounds

## Component Adjustments

### GlassCard Light Mode

```tsx
<GlassCard variant="clear" theme="light">
  {/* Light mode card */}
</GlassCard>
```

CSS applied:
```css
.glass-card-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #0f172a;
}
```

### GlassButton Light Mode

```tsx
<GlassButton variant="secondary" theme="light">
  Light Button
</GlassButton>
```

Secondary buttons in light mode use:
- Background: white/50 → white/60 on hover
- Text: dark gray (#0f172a)
- Border: white/40 → white/50 on hover

### Form Inputs Light Mode

```tsx
<GlassSelect theme="light" options={...} />
<GlassSearchInput theme="light" placeholder="Search..." />
```

Inputs in light mode:
- Background: white/50 for visibility
- Placeholder: gray-400
- Focus ring: accent color at 30% opacity

## Contrast Considerations

### Text Contrast

Ensure text meets WCAG 2.1 AA standards:

| Element | Color | Min Contrast |
|---------|-------|--------------|
| Body text | #0f172a | 4.5:1 |
| Muted text | #64748b | 4.5:1 |
| Dim text | #94a3b8 | 3:1 (large text only) |

### Testing Contrast

Test your glass elements over actual backgrounds:

```tsx
// Test with your actual background
<div className="bg-gradient-to-br from-indigo-100 to-pink-100">
  <GlassCard variant="clear" theme="light">
    <p className="text-gray-900">This text should be readable</p>
    <p className="text-gray-500">This muted text too</p>
  </GlassCard>
</div>
```

## Accent Color in Light Mode

The violet accent (#a78bfa) works well in both modes:

```tsx
// Primary button - same in both modes
<GlassButton variant="primary" theme="light">
  Primary Action
</GlassButton>
```

For secondary accents, use the lighter variant:

```tsx
// Accent light for subtle highlights
<div className="border-l-2 border-[#c4b5fd] pl-4">
  Highlighted content
</div>
```

## Full Page Example

```tsx
function LightModeLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 px-6 py-4">
        <GlassCard variant="clear" theme="light" padding="sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900">Logo</span>
            <GlassSearchInput theme="light" placeholder="Search..." />
          </div>
        </GlassCard>
      </nav>

      {/* Main content */}
      <main className="pt-24 px-6">
        <GlassCard variant="clear" theme="light">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Light mode glass interface</p>

          <div className="mt-6 space-y-4">
            <GlassSection title="Settings" theme="light">
              <GlassToggle checked={true} onChange={() => {}} theme="light" label="Dark mode" />
            </GlassSection>
          </div>
        </GlassCard>
      </main>
    </div>
  );
}
```

## Common Issues

### Issue: Text Hard to Read

**Solution**: Use clear variant with higher opacity background

### Issue: Glass Effect Not Visible

**Solution**: Add gradient or image background instead of solid white

### Issue: Borders Too Visible

**Solution**: Use white/30 borders instead of white/40 in light mode

### Issue: Accent Glow Too Strong

**Solution**: Reduce glow opacity from 0.3 to 0.2 in light mode

## CSS Variables for Light Mode

Override these variables for light theme:

```css
[data-theme="light"] {
  --glass-bg: #f8fafc;
  --glass-text: #0f172a;
  --glass-text-muted: #64748b;
  --glass-shadow-subtle: 0 8px 32px rgba(0, 0, 0, 0.06);
  --glass-shadow-elevated: 0 16px 48px rgba(0, 0, 0, 0.08);
}
```

# Glass UI - Component API Reference

Complete props documentation for all Glass UI components.

## Shared Types

```typescript
type GlassVariant = 'frosted' | 'clear';
type GlassTheme = 'dark' | 'light';
```

---

## GlassCard

Container component with glassmorphism effect.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Card content |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `hover` | `boolean` | `true` | Enable hover glow effect |
| `className` | `string` | `''` | Additional CSS classes |

### Example

```tsx
<GlassCard variant="frosted" theme="dark" padding="lg">
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</GlassCard>
```

---

## GlassButton

Action button with glass styling.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Button content |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Button style |
| `glassVariant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect (secondary only) |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `() => void` | - | Click handler |
| `className` | `string` | `''` | Additional CSS classes |

### Examples

```tsx
// Primary (accent colored)
<GlassButton variant="primary">Submit</GlassButton>

// Secondary (glass styled)
<GlassButton variant="secondary" glassVariant="frosted">Cancel</GlassButton>

// Ghost (transparent)
<GlassButton variant="ghost">Learn More</GlassButton>
```

---

## GlassTabs

Tab navigation component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `GlassTab[]` | required | Tab definitions |
| `value` | `string` | required | Currently selected tab ID |
| `onChange` | `(id: string) => void` | required | Selection change handler |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `className` | `string` | `''` | Additional CSS classes |

### GlassTab Type

```typescript
interface GlassTab {
  id: string;
  label: string;
  icon?: ReactNode;
}
```

### Example

```tsx
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'settings', label: 'Settings' },
  { id: 'analytics', label: 'Analytics' },
];

<GlassTabs
  tabs={tabs}
  value="overview"
  onChange={(id) => setActiveTab(id)}
/>
```

---

## GlassSelect

Dropdown select component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `GlassSelectOption[]` | required | Available options |
| `value` | `string` | required | Selected value |
| `onChange` | `(value: string) => void` | required | Change handler |
| `placeholder` | `string` | `'Select...'` | Placeholder text |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Additional CSS classes |

### GlassSelectOption Type

```typescript
interface GlassSelectOption {
  value: string;
  label: string;
}
```

### Example

```tsx
<GlassSelect
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ]}
  value={country}
  onChange={setCountry}
  placeholder="Select country"
/>
```

---

## GlassToggle

Boolean toggle switch.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | required | Toggle state |
| `onChange` | `(checked: boolean) => void` | required | Change handler |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `size` | `'sm' \| 'md'` | `'md'` | Toggle size |
| `disabled` | `boolean` | `false` | Disabled state |
| `label` | `string` | - | Optional label text |
| `className` | `string` | `''` | Additional CSS classes |

### Example

```tsx
<GlassToggle
  checked={darkMode}
  onChange={setDarkMode}
  label="Dark mode"
/>
```

---

## GlassSlider

Range slider input.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | required | Current value |
| `onChange` | `(value: number) => void` | required | Change handler |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `disabled` | `boolean` | `false` | Disabled state |
| `label` | `string` | - | Optional label |
| `showValue` | `boolean` | `false` | Show current value |
| `className` | `string` | `''` | Additional CSS classes |

### Example

```tsx
<GlassSlider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  label="Volume"
  showValue
/>
```

---

## GlassSection

Collapsible section container.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Section title |
| `children` | `ReactNode` | required | Section content |
| `defaultOpen` | `boolean` | `true` | Initial open state |
| `icon` | `ReactNode` | - | Optional title icon |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `className` | `string` | `''` | Additional CSS classes |

### Example

```tsx
<GlassSection title="Advanced Settings" defaultOpen={false}>
  <GlassToggle checked={debug} onChange={setDebug} label="Debug mode" />
</GlassSection>
```

---

## GlassDropdown

Compact inline dropdown.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `GlassDropdownOption[]` | required | Available options |
| `value` | `string` | required | Selected value |
| `onChange` | `(value: string) => void` | required | Change handler |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `className` | `string` | `''` | Additional CSS classes |

### Example

```tsx
<span>
  Sort by: <GlassDropdown
    options={[
      { value: 'date', label: 'Date' },
      { value: 'name', label: 'Name' },
    ]}
    value={sortBy}
    onChange={setSortBy}
  />
</span>
```

---

## GlassSearchInput

Search input with icon.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | required | Input value |
| `onChange` | `(value: string) => void` | required | Change handler |
| `placeholder` | `string` | `'Search...'` | Placeholder text |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `onClear` | `() => void` | - | Clear button handler |
| `className` | `string` | `''` | Additional CSS classes |

### Example

```tsx
<GlassSearchInput
  value={query}
  onChange={setQuery}
  onClear={() => setQuery('')}
  placeholder="Search files..."
/>
```

---

## GlassTreeItem

Tree navigation item.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | required | Unique identifier |
| `label` | `string` | required | Display label |
| `depth` | `number` | `0` | Nesting depth |
| `isSelected` | `boolean` | `false` | Selected state |
| `isExpanded` | `boolean` | `false` | Expanded state |
| `hasChildren` | `boolean` | `false` | Has child items |
| `icon` | `ReactNode` | - | Optional icon |
| `variant` | `'frosted' \| 'clear'` | `'frosted'` | Glass effect intensity |
| `theme` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `onClick` | `() => void` | - | Click handler |
| `onToggle` | `() => void` | - | Expand/collapse handler |
| `className` | `string` | `''` | Additional CSS classes |

### Example

```tsx
<div>
  <GlassTreeItem
    id="root"
    label="Documents"
    hasChildren
    isExpanded={expanded}
    onToggle={() => setExpanded(!expanded)}
  />
  {expanded && (
    <>
      <GlassTreeItem id="doc1" label="Report.pdf" depth={1} />
      <GlassTreeItem id="doc2" label="Notes.md" depth={1} isSelected />
    </>
  )}
</div>
```

# Glassmorphism

## What is Glassmorphism?

Glassmorphism is a modern design trend that mimics the appearance of frosted glass. It uses blur, transparency, and borders to create a sleek, sophisticated look with depth and dimension.

## Key Properties

### Backdrop Filter
The `backdrop-filter` property applies effects behind an element:

```css
backdrop-filter: blur(10px);
```

### Transparency
Use semi-transparent backgrounds:

```css
background: rgba(255, 255, 255, 0.1);
```

### Border and Shadow
Add subtle borders and shadows:

```css
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
```

## Basic Glassmorphism Card

```css
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}
```

## Blur Intensity Levels

```css
/* Subtle blur */
.glass-light {
    backdrop-filter: blur(5px);
}

/* Medium blur */
.glass-medium {
    backdrop-filter: blur(10px);
}

/* Heavy blur */
.glass-heavy {
    backdrop-filter: blur(20px);
}
```

## Color Variations

### Light Glassmorphism
```css
.glass-light {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Dark Glassmorphism
```css
.glass-dark {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Colored Glassmorphism
```css
.glass-blue {
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.2);
}
```

## Multiple Backdrop Filters

Combine multiple effects:

```css
.glass-advanced {
    backdrop-filter: blur(10px) brightness(1.1) saturate(1.2);
}
```

### Available Filters
- `blur()` - Blur effect
- `brightness()` - Lighten or darken
- `contrast()` - Adjust contrast
- `grayscale()` - Remove color
- `hue-rotate()` - Change color hue
- `invert()` - Invert colors
- `opacity()` - Adjust transparency
- `saturate()` - Increase/decrease saturation
- `sepia()` - Brown tone effect

## Layered Glassmorphism

Create depth with multiple glass layers:

```css
.glass-layer-1 {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
}

.glass-layer-2 {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.15);
}

.glass-layer-3 {
    backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.2);
}
```

## Glassmorphism Navbar

```css
nav {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    position: sticky;
    top: 0;
}
```

## Glassmorphism Modal

```css
.modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.modal-content {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}
```

## Interactive Glassmorphism

Add hover and focus effects:

```css
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.glass-card:hover {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.45);
}
```

## Browser Support

- Chrome/Edge: 76+
- Firefox: 103+
- Safari: 9+
- Mobile Chrome: Supported
- Mobile Safari: 9+

## Accessibility Considerations

- Ensure sufficient contrast with background
- Don''t rely solely on blur for visual distinction
- Test with high contrast mode
- Provide alternative designs for older browsers
- Use `@supports` for feature detection

## Performance Tips

- Backdrop filter is GPU-accelerated in modern browsers
- Heavy blur on large areas can impact performance
- Use will-change sparingly
- Test on lower-end devices
- Consider reducing blur on mobile

## Best Practices

1. **Use subtle blur** - 10px is usually optimal
2. **Ensure contrast** - Background must be visible
3. **Limit transparency** - 10-20% opacity is typical
4. **Test backgrounds** - Glassmorphism looks different on different backgrounds
5. **Provide fallback** - Use @supports for non-supporting browsers
6. **Consider dark mode** - Adjust colors for dark backgrounds
7. **Keep text readable** - Ensure good contrast
8. **Animate transitions** - Smooth changes between states
9. **Don''t overuse** - Apply to key elements only
10. **Test on devices** - Verify performance and appearance

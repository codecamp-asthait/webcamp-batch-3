# Responsive Typography

## What is Responsive Typography?

Responsive typography is the practice of adjusting text sizes, line heights, and spacing across different screen sizes to ensure optimal readability and visual hierarchy. Unlike fixed sizes, responsive typography scales fluidly between breakpoints.

## Key Concepts

### Units
- **px (Pixels)**: Fixed size, not responsive. Use sparingly for borders and specific spacing
- **em**: Relative to parent element''s font size. Scales with context
- **rem**: Relative to root element''s font size. Consistent, predictable scaling
- **% (Percent)**: Relative to parent. Useful for responsive spacing
- **vw/vh**: Viewport width/height. Use carefully to avoid text overflow

### Base Font Size
Set your root font-size for consistent rem calculations:
```css
html { font-size: 16px; }  /* 1rem = 16px */
body { font-size: 1rem; }  /* Reset to root */
```

### Line Height
Maintain readability by adjusting line-height with font size:
```css
/* Mobile */
h1 { font-size: 1.8em; line-height: 1.2; }

/* Desktop */
@media (min-width: 768px) {
    h1 { font-size: 2.5em; line-height: 1.3; }
}
```

## Responsive Font Sizes

### Scaling Strategy
```css
/* Heading scaling example */
h1 {
    font-size: 1.5rem;  /* ~24px on 16px root */
}

@media (min-width: 480px) {
    h1 { font-size: 1.8rem; }
}

@media (min-width: 768px) {
    h1 { font-size: 2.2rem; }
}

@media (min-width: 1024px) {
    h1 { font-size: 2.5rem; }
}
```

### Fluid Typography with calc()
Scale font size smoothly between breakpoints:
```css
/* Scales from 1.5rem to 2.5rem between 320px and 1280px */
h1 {
    font-size: calc(1.5rem + (2.5 - 1.5) * (100vw - 320px) / (1280 - 320));
}
```

## Line Length

Optimal line length for readability is 45-75 characters. Adjust width based on font size:
```css
p {
    max-width: 65ch;  /* Characters - responsive to font size */
    margin: 0 auto;
}
```

## Spacing and Margins

Use relative units for responsive spacing:
```css
section {
    margin-bottom: 2rem;  /* Scales with font size */
    padding: 1.5rem;
}

@media (min-width: 768px) {
    section {
        margin-bottom: 3rem;
        padding: 2rem;
    }
}
```

## Typography Scale

Create a harmonious typographic hierarchy:
```
Base (16px)
Small: 14px (0.875rem)
Normal: 16px (1rem)
Large: 18px (1.125rem)
h6: 20px (1.25rem)
h5: 24px (1.5rem)
h4: 28px (1.75rem)
h3: 32px (2rem)
h2: 40px (2.5rem)
h1: 48px (3rem)
```

## Best Practices

- Use rem for font sizes to create predictable scaling
- Use em for component-level scaling (buttons, cards)
- Maintain consistent line-height ratios (1.2-1.6)
- Test readability on small and large screens
- Consider font weight changes on different sizes
- Adjust letter-spacing for larger headlines
- Keep mobile typography readable (minimum 16px for body text)
- Use calc() for gradual scaling between breakpoints
- Test with actual content, not just placeholders

## Common Typography Stacks

**System Fonts** (Fast, no downloads):
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

**Web Safe Stack**:
```css
font-family: Georgia, 'Times New Roman', Times, serif;
font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', sans-serif;
```

**Google Fonts Integration**:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

## Testing Typography

1. Test on smallest breakpoint (320px mobile)
2. Test on medium breakpoint (768px tablet)
3. Test on largest breakpoint (1920px desktop)
4. Check line wrapping and text overflow
5. Verify readability in low light
6. Test with different browsers and devices

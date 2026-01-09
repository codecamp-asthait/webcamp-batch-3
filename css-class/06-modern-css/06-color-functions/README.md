# CSS Color Functions (oklch, oklab)

## Overview
Modern CSS color functions like `oklch()` and `oklab()` provide perceptually uniform color spaces that make it easier to create consistent color palettes, adjust colors predictably, and ensure accessibility. These functions are part of the CSS Color Module Level 4.

## Why Use Modern Color Functions?

- **Perceptual Uniformity**: Colors appear more consistent to the human eye
- **Predictable Adjustments**: Easy to create lighter/darker variations
- **Accessibility**: Better control over contrast ratios
- **Consistent Palettes**: Easier to create harmonious color schemes
- **Modern Standard**: Latest CSS color specification

## OKLCH Color Space

OKLCH uses Lightness, Chroma, and Hue.

### Syntax
```css
color: oklch(lightness chroma hue);
```

### Parameters
- **Lightness**: 0% (black) to 100% (white)
- **Chroma**: 0 (gray) to ~0.4 (saturated)
- **Hue**: 0-360 degrees (color wheel)

### Examples

```css
/* Blue */
.element {
    background: oklch(60% 0.2 250);
}

/* Green */
.element {
    background: oklch(65% 0.2 150);
}

/* Red */
.element {
    background: oklch(55% 0.25 25);
}
```

## OKLAB Color Space

OKLAB uses Lightness, A-axis, and B-axis.

### Syntax
```css
color: oklab(lightness a b);
```

### Examples

```css
.element {
    background: oklab(70% 0.1 -0.1);
}
```

## Color Manipulation

### Adjusting Lightness

```css
.base {
    background: oklch(60% 0.2 250);
}

.lighter {
    background: oklch(75% 0.2 250); /* +15% lightness */
}

.darker {
    background: oklch(45% 0.2 250); /* -15% lightness */
}
```

### Adjusting Saturation (Chroma)

```css
.base {
    background: oklch(60% 0.2 250);
}

.more-saturated {
    background: oklch(60% 0.35 250); /* Higher chroma */
}

.less-saturated {
    background: oklch(60% 0.1 250); /* Lower chroma */
}
```

### Adjusting Hue

```css
.base {
    background: oklch(60% 0.2 250); /* Blue */
}

.variant {
    background: oklch(60% 0.2 280); /* Shifted hue */
}
```

## Creating Color Palettes

```css
:root {
    --primary: oklch(60% 0.2 250);
    --primary-light: oklch(75% 0.2 250);
    --primary-dark: oklch(45% 0.2 250);
    
    --secondary: oklch(55% 0.18 120);
    --accent: oklch(70% 0.25 30);
}
```

## Accessibility

OKLCH makes it easier to ensure proper contrast:

```css
.text {
    color: oklch(20% 0 0); /* Dark text */
}

.background {
    background: oklch(95% 0 0); /* Light background */
    /* High contrast ratio */
}
```

## Gradients

```css
.gradient {
    background: linear-gradient(135deg, 
        oklch(70% 0.2 250), 
        oklch(50% 0.25 300));
}
```

## Best Practices

1. **Use OKLCH**: Generally preferred over OKLAB
2. **Consistent Lightness**: Keep lightness consistent for palette
3. **Accessibility**: Test contrast ratios
4. **Fallbacks**: Provide fallback colors
5. **Testing**: Test across browsers
6. **Documentation**: Document color values
7. **Tools**: Use color pickers that support OKLCH

## Browser Support

- **OKLCH/OKLAB**: Chrome 111+, Firefox 113+, Safari 16.4+, Edge 111+
- Use feature queries:
  ```css
  @supports (color: oklch(0% 0 0)) {
      .element {
          background: oklch(60% 0.2 250);
      }
  }
  ```

## Fallback Strategy

```css
.element {
    background: #667eea; /* Fallback */
}

@supports (color: oklch(0% 0 0)) {
    .element {
        background: oklch(60% 0.2 250);
    }
}
```

## Common Use Cases

1. **Color Palettes**: Create consistent color systems
2. **Themes**: Build theme systems with color functions
3. **Accessibility**: Ensure proper contrast
4. **Gradients**: Create smooth color transitions
5. **Variations**: Generate color variations easily
6. **Design Systems**: Build comprehensive design systems

## Practice Exercises

1. Create a color palette using OKLCH
2. Build accessible color variations
3. Design smooth color transitions
4. Create a theme system with color functions
5. Build a color picker interface
6. Design a gradient system

## Additional Resources

- [MDN: OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
- [CSS Tricks: OKLCH](https://css-tricks.com/the-expanding-gamut-of-color-on-the-web/)
- [Can I Use: OKLCH](https://caniuse.com/css-oklch)

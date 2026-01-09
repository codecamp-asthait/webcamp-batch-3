# CSS Clipping and Masking

## Overview
CSS clipping and masking allow you to hide portions of elements, creating interesting visual effects. `clip-path` creates geometric shapes to clip elements, while `mask` uses images or gradients to control element visibility with more flexibility.

## Why Use Clipping and Masking?

- **Creative Shapes**: Create non-rectangular elements
- **Visual Effects**: Build modern, artistic designs
- **Performance**: Hardware-accelerated operations
- **Flexibility**: Works with any HTML element
- **Animations**: Can be animated for dynamic effects

## clip-path Property

The `clip-path` property creates a clipping region that defines which parts of an element are visible.

### Basic Shapes

#### Circle
```css
.element {
    clip-path: circle(50%);
    /* or */
    clip-path: circle(100px at 50% 50%);
}
```

#### Ellipse
```css
.element {
    clip-path: ellipse(60% 40% at 50% 50%);
}
```

#### Inset
```css
.element {
    clip-path: inset(20%);
    /* or with rounded corners */
    clip-path: inset(20% round 10px);
}
```

#### Polygon
```css
.element {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    /* Creates a triangle */
}
```

### Advanced Polygon Examples

```css
/* Star shape */
.star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* Hexagon */
.hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* Arrow */
.arrow {
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
}
```

## CSS Masking

The `mask` property uses images or gradients to control element visibility.

### Gradient Masks

```css
.element {
    mask: linear-gradient(to bottom, transparent, black);
    -webkit-mask: linear-gradient(to bottom, transparent, black);
}
```

### Radial Masks

```css
.element {
    mask: radial-gradient(circle, black 40%, transparent 70%);
    -webkit-mask: radial-gradient(circle, black 40%, transparent 70%);
}
```

### Image Masks

```css
.element {
    mask: url('mask-image.png');
    -webkit-mask: url('mask-image.png');
    mask-size: cover;
    mask-position: center;
}
```

## Common Patterns

### Text with Background Clip

```css
.text-clip {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%);
}
```

### Animated Clip Path

```css
.card {
    clip-path: circle(50%);
    transition: clip-path 0.5s ease;
}

.card:hover {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

### Image Gallery with Shapes

```css
.gallery-item {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transition: clip-path 0.3s ease;
}

.gallery-item:hover {
    clip-path: circle(50%);
}
```

## Best Practices

1. **Browser Support**: Always include `-webkit-` prefix for mask properties
2. **Performance**: clip-path is GPU-accelerated, use for animations
3. **Fallbacks**: Provide rectangular fallbacks for older browsers
4. **Accessibility**: Ensure clipped content remains accessible
5. **Testing**: Test on different screen sizes and browsers
6. **Polygon Tools**: Use online tools to generate polygon coordinates
7. **Animations**: Animate clip-path for smooth transitions

## Browser Support

- **clip-path**: Chrome 55+, Firefox 54+, Safari 9.1+, Edge 79+
- **mask**: Chrome 1+, Firefox 53+, Safari 3.2+, Edge 79+
- Use `@supports` for feature detection:
  ```css
  @supports (clip-path: circle(50%)) {
      .element {
          clip-path: circle(50%);
      }
  }
  ```

## Performance Considerations

- clip-path is hardware-accelerated
- Masking can be more expensive, use sparingly
- Animate clip-path for smooth effects
- Avoid applying to many elements simultaneously

## Common Use Cases

1. **Image Galleries**: Create unique image shapes
2. **Cards**: Design non-rectangular card layouts
3. **Text Effects**: Create clipped text backgrounds
4. **Icons**: Build custom icon shapes
5. **Overlays**: Create shaped overlays and modals
6. **Animations**: Animate shape changes

## Practice Exercises

1. Create a diamond-shaped image gallery
2. Build a card with an animated clip-path on hover
3. Design text with a gradient mask effect
4. Create a hexagon-based layout
5. Build an image overlay with custom clip-path
6. Design animated shape transitions

## Additional Resources

- [MDN: clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- [MDN: mask](https://developer.mozilla.org/en-US/docs/Web/CSS/mask)
- [CSS Tricks: clip-path](https://css-tricks.com/clipping-masking-css/)
- [Clippy - CSS clip-path generator](https://bennettfeely.com/clippy/)
- [Can I Use: clip-path](https://caniuse.com/css-clip-path)

# Gradients and Shadows

## Overview
CSS Gradients create smooth transitions between multiple colors, while box shadows and text shadows add depth and dimension to elements. Together, they're essential for creating modern, visually appealing designs.

## Why Use Gradients and Shadows?

- **Visual Appeal**: Create beautiful, modern designs
- **Depth**: Add dimension with shadows
- **Flexibility**: Multiple gradient types and shadow options
- **Performance**: Hardware-accelerated
- **No Images**: Pure CSS solution

## Linear Gradients

### Basic Syntax

```css
.element {
    background: linear-gradient(direction, color1, color2);
}
```

### Direction Examples

```css
/* Top to bottom (default) */
.element {
    background: linear-gradient(to bottom, #667eea, #764ba2);
}

/* Left to right */
.element {
    background: linear-gradient(to right, #667eea, #764ba2);
}

/* Diagonal */
.element {
    background: linear-gradient(to bottom right, #667eea, #764ba2);
}

/* Angle */
.element {
    background: linear-gradient(45deg, #667eea, #764ba2);
}
```

### Multiple Colors

```css
.element {
    background: linear-gradient(to right, #667eea, #764ba2, #f093fb);
}
```

### Color Stops

```css
.element {
    background: linear-gradient(to right, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

## Radial Gradients

### Basic Syntax

```css
.element {
    background: radial-gradient(shape size at position, color1, color2);
}
```

### Examples

```css
/* Circle at center */
.element {
    background: radial-gradient(circle, #667eea, #764ba2);
}

/* Ellipse */
.element {
    background: radial-gradient(ellipse, #667eea, #764ba2);
}

/* Positioned */
.element {
    background: radial-gradient(circle at top left, #667eea, #764ba2);
}
```

## Conic Gradients

### Basic Syntax

```css
.element {
    background: conic-gradient(color1, color2, color3);
}
```

### Examples

```css
/* Basic conic */
.element {
    background: conic-gradient(#667eea, #764ba2, #f093fb, #667eea);
}

/* With angles */
.element {
    background: conic-gradient(#667eea 0deg, #764ba2 90deg, #f093fb 180deg);
}
```

## Box Shadows

### Syntax

```css
.element {
    box-shadow: offset-x offset-y blur-radius spread-radius color;
}
```

### Examples

```css
/* Basic shadow */
.element {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Blur shadow */
.element {
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

/* Spread shadow */
.element {
    box-shadow: 0 4px 10px 5px rgba(0,0,0,0.2);
}

/* Inset shadow */
.element {
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.1);
}

/* Multiple shadows */
.element {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1),
                0 4px 8px rgba(0,0,0,0.1);
}

/* Colored shadow */
.element {
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}
```

## Text Shadows

### Syntax

```css
.element {
    text-shadow: offset-x offset-y blur-radius color;
}
```

### Examples

```css
/* Basic text shadow */
.element {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Blur text shadow */
.element {
    text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}

/* Multiple text shadows */
.element {
    text-shadow: 2px 2px 4px rgba(102, 126, 234, 0.5),
                 4px 4px 8px rgba(240, 147, 251, 0.5);
}

/* Glow effect */
.element {
    text-shadow: 0 0 10px rgba(102, 126, 234, 0.8),
                 0 0 20px rgba(102, 126, 234, 0.6);
}
```

## Common Patterns

### Card with Gradient and Shadow

```css
.card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    border-radius: 12px;
    padding: 30px;
}
```

### Button with Gradient

```css
.button {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
    border: none;
    padding: 15px 40px;
    border-radius: 25px;
}
```

### Text with Gradient

```css
.text-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

## Best Practices

1. **Use gradients sparingly**: Don't overuse
2. **Shadow depth**: Use appropriate shadow depth
3. **Performance**: Gradients and shadows are efficient
4. **Accessibility**: Ensure sufficient contrast
5. **Testing**: Test on different backgrounds
6. **Consistency**: Use consistent shadow styles
7. **Layering**: Use multiple shadows for depth

## Browser Support

- **Linear Gradients**: Chrome 26+, Firefox 16+, Safari 6.1+, Edge 12+
- **Radial Gradients**: Chrome 26+, Firefox 16+, Safari 6.1+, Edge 12+
- **Conic Gradients**: Chrome 69+, Firefox 75+, Safari 12.1+, Edge 79+
- **Box Shadows**: Universal support
- **Text Shadows**: Universal support

## Common Use Cases

1. **Card Designs**: Gradient backgrounds with shadows
2. **Buttons**: Gradient buttons with hover shadows
3. **Hero Sections**: Large gradient backgrounds
4. **Text Effects**: Gradient text and shadows
5. **UI Components**: Modern component styling
6. **Backgrounds**: Page and section backgrounds

## Practice Exercises

1. Create a card with gradient background and shadow
2. Build a button with gradient and hover shadow
3. Design text with gradient fill and shadow
4. Create a modern UI component using gradients and shadows
5. Build a hero section with gradient background
6. Design a navigation bar with gradient and shadow

## Additional Resources

- [MDN: Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)
- [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [MDN: text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [CSS Tricks: Gradients](https://css-tricks.com/css3-gradients/)
- [Can I Use: CSS Gradients](https://caniuse.com/css-gradients)

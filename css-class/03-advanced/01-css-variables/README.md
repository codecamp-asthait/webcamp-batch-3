# CSS Variables (Custom Properties)

## Overview
CSS Variables (Custom Properties) allow you to store values that can be reused throughout your stylesheet, making your CSS more maintainable, flexible, and dynamic.

## Why Use CSS Variables?

- **Maintainability**: Change values in one place
- **Theming**: Easy dark mode and theme switching
- **Dynamic**: Can be changed with JavaScript
- **Inheritance**: Variables cascade and inherit
- **Calculations**: Work with calc() function

## Syntax

### Declaring Variables
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --spacing: 16px;
}
```

### Using Variables
```css
.button {
    background-color: var(--primary-color);
    padding: var(--spacing);
}
```

### Fallback Values
```css
.element {
    color: var(--text-color, #333);
}
```

## Common Patterns

### Color Scheme
```css
:root {
    --primary: #667eea;
    --text: #333;
    --bg: #ffffff;
}
```

### Dark Mode
```css
[data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #f5f5f5;
}
```

### Spacing System
```css
:root {
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
}
```

## JavaScript Integration

```javascript
// Get variable
const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color');

// Set variable
document.documentElement.style
    .setProperty('--primary-color', '#e74c3c');
```

## Best Practices

1. Use :root for global variables
2. Use descriptive names (--color-primary not --c1)
3. Group related variables together
4. Provide fallback values for critical properties
5. Use for theming and dynamic styling
6. Combine with preprocessors when needed

## Browser Support

Supported in all modern browsers (Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+)

## Practice Exercises

1. Create a color system with primary/secondary colors
2. Build a dark mode toggle
3. Create a spacing scale
4. Make a button component with variable customization
5. Build a theme switcher with multiple color schemes

## Additional Resources

- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Tricks: Complete Guide to CSS Variables](https://css-tricks.com/a-complete-guide-to-custom-properties/)

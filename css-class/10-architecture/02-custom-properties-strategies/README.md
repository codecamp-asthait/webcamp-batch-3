# CSS Custom Properties Strategies

## Overview
CSS Custom Properties (CSS Variables) provide powerful ways to manage design tokens, create themes, and build maintainable CSS. Strategic use of custom properties can significantly improve code organization and flexibility.

## Design Tokens

Store design values as custom properties.

```css
:root {
    --color-primary: #667eea;
    --spacing-md: 1rem;
    --font-size-lg: 1.25rem;
}
```

## Theming Strategy

Use custom properties for theme switching.

```css
:root {
    --bg-color: #ffffff;
    --text-color: #333333;
}

.dark-theme {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
}
```

## Scoped Variables

Use component-scoped variables.

```css
.component {
    --component-color: #667eea;
    --component-spacing: 1.5rem;
    background: var(--component-color);
    padding: var(--component-spacing);
}
```

## Best Practices

1. **Design tokens**: Store design values
2. **Naming**: Use clear, consistent names
3. **Scoping**: Use appropriate scope
4. **Fallbacks**: Provide fallback values
5. **Organization**: Group related variables
6. **Documentation**: Document your variables

## Browser Support

- **CSS Custom Properties**: Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+
- Universal support in all modern browsers

## Common Use Cases

1. **Design Systems**: Centralized design tokens
2. **Theming**: Theme switching
3. **Components**: Component-specific variables
4. **Responsive**: Responsive values
5. **Maintainability**: Easy updates
6. **Flexibility**: Dynamic styling

## Practice Exercises

1. Create a design token system
2. Build theme switching functionality
3. Use scoped variables for components
4. Create responsive values with variables
5. Organize variables by category
6. Document your variable system

## Additional Resources

- [MDN: Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Tricks: Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)

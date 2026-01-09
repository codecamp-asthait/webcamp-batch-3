# CSS Reset and Normalize

## Overview
CSS Reset and Normalize are techniques to create consistent cross-browser styling. Resets remove all default styles, while Normalize preserves useful defaults and fixes browser inconsistencies.

## CSS Reset

Removes all default browser styles.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Popular Resets

- **Eric Meyer's Reset**: Classic reset
- **Modern Reset**: Updated with best practices

## Normalize.css

Preserves useful defaults and fixes inconsistencies.

```css
/* Normalize.css approach */
html {
    line-height: 1.15;
}
```

### Benefits

- Preserves useful defaults
- Fixes browser bugs
- Improves cross-browser consistency

## Modern Reset

Includes modern best practices.

```css
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

## Best Practices

1. **Choose approach**: Reset vs Normalize
2. **Include early**: Add at the start of CSS
3. **Customize**: Adapt to your needs
4. **Update**: Keep updated
5. **Test**: Test across browsers

## Browser Support

- **Reset/Normalize**: Universal support
- Works in all browsers

## Common Use Cases

1. **Cross-browser consistency**: Consistent styling
2. **Starting point**: Clean slate for styling
3. **Large projects**: Consistent base
4. **Team projects**: Shared base styles
5. **Modern development**: Best practices

## Practice Exercises

1. Create a custom CSS reset
2. Implement Normalize.css
3. Build a modern reset with best practices
4. Choose the right approach for your project
5. Customize reset/normalize for your needs
6. Test across different browsers

## Additional Resources

- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Modern CSS Reset](https://andy-bell.co.uk/a-modern-css-reset/)
- [CSS Reset vs Normalize](https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css)

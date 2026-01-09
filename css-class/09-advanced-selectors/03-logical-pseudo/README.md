# :is(), :where(), :not()

## Overview
Logical pseudo-classes (`:is()`, `:where()`, and `:not()`) provide powerful ways to group selectors and create complex selection logic. They help reduce CSS code duplication and make selectors more maintainable.

## :is() Selector

Groups multiple selectors together.

```css
/* Instead of */
h1, h2, h3 {
    color: blue;
}

/* Use */
:is(h1, h2, h3) {
    color: blue;
}
```

### Benefits

- Reduces code duplication
- More readable
- Easier to maintain

## :where() Selector

Similar to `:is()` but with zero specificity.

```css
:where(h1, h2, h3) {
    color: blue;
}
```

### Use Cases

- Override-friendly styles
- Reset styles
- Base styles

## :not() Selector

Selects elements that don't match the selector.

```css
/* All buttons except disabled */
button:not(.disabled) {
    cursor: pointer;
}

/* All items except first */
.item:not(:first-child) {
    margin-top: 10px;
}
```

### Multiple :not()

```css
.item:not(.disabled):not(.hidden) {
    display: block;
}
```

## Combining Selectors

### Complex Combinations

```css
/* Active items that are not disabled */
.item:not(.disabled):is(.active) {
    background: blue;
}
```

## Best Practices

1. **Use :is()**: For grouping selectors
2. **Use :where()**: For zero-specificity styles
3. **Use :not()**: For exclusions
4. **Combine wisely**: Create complex logic
5. **Performance**: All are efficient
6. **Readability**: Keep selectors readable

## Browser Support

- **:is()**: Chrome 88+, Firefox 78+, Safari 14+, Edge 88+
- **:where()**: Chrome 88+, Firefox 78+, Safari 14+, Edge 88+
- **:not()**: Universal support (enhanced in modern browsers)

## Common Use Cases

1. **Grouping**: Multiple selectors with :is()
2. **Overrides**: Zero-specificity with :where()
3. **Exclusions**: Exclude elements with :not()
4. **Complex Logic**: Combine all three
5. **Maintainability**: Reduce code duplication
6. **Flexibility**: Create flexible selectors

## Practice Exercises

1. Create grouped selectors with :is()
2. Build zero-specificity selectors with :where()
3. Design exclusion selectors with :not()
4. Combine logical selectors for complex patterns
5. Reduce code duplication with logical selectors
6. Create flexible, maintainable selectors

## Additional Resources

- [MDN: :is()](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
- [MDN: :where()](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)
- [MDN: :not()](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

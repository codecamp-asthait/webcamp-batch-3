# CSS Logical Properties

## Overview
CSS Logical Properties use writing-mode and text direction to determine their behavior, making layouts work correctly in any language direction (LTR, RTL) and writing mode (horizontal, vertical). This makes your CSS more international and accessible.

## Why Use Logical Properties?

- **Internationalization**: Works with any text direction
- **Accessibility**: Better support for different writing modes
- **Maintainability**: One set of styles for all directions
- **Future-proof**: Adapts to writing mode changes
- **Modern CSS**: Latest layout approach

## Block and Inline Dimensions

### Block and Inline Size

```css
/* Logical */
.element {
    inline-size: 300px;  /* width in horizontal */
    block-size: 200px;   /* height in horizontal */
}

/* Physical */
.element {
    width: 300px;
    height: 200px;
}
```

## Margin and Padding

### Logical Margins

```css
.element {
    margin-block-start: 20px;  /* top in horizontal */
    margin-block-end: 20px;    /* bottom in horizontal */
    margin-inline-start: 30px; /* left in LTR */
    margin-inline-end: 30px;   /* right in LTR */
}

/* Shorthand */
.element {
    margin-block: 20px;
    margin-inline: 30px;
}
```

### Logical Padding

```css
.element {
    padding-block-start: 20px;
    padding-block-end: 20px;
    padding-inline-start: 30px;
    padding-inline-end: 30px;
}

/* Shorthand */
.element {
    padding-block: 20px;
    padding-inline: 30px;
}
```

## Border Properties

```css
.element {
    border-block-start: 2px solid blue;
    border-block-end: 2px solid red;
    border-inline-start: 2px solid green;
    border-inline-end: 2px solid yellow;
}
```

## Position Properties

```css
.element {
    position: absolute;
    inset-block-start: 20px;
    inset-block-end: auto;
    inset-inline-start: 30px;
    inset-inline-end: auto;
}

/* Shorthand */
.element {
    inset: 20px 30px;
}
```

## Common Patterns

### RTL Support

```css
.card {
    margin-inline-start: 20px;
    padding-inline-start: 30px;
    /* Automatically adjusts for RTL */
}
```

### Vertical Writing

```css
.vertical-text {
    writing-mode: vertical-rl;
    inline-size: 200px;
    block-size: 300px;
}
```

## Property Mappings

| Physical | Logical |
|----------|---------|
| width | inline-size |
| height | block-size |
| top | inset-block-start |
| bottom | inset-block-end |
| left | inset-inline-start |
| right | inset-inline-end |
| margin-top | margin-block-start |
| margin-bottom | margin-block-end |
| margin-left | margin-inline-start |
| margin-right | margin-inline-end |

## Best Practices

1. **Use logical properties**: Prefer logical over physical
2. **Consistent approach**: Use logical throughout
3. **Test RTL**: Test with `dir="rtl"`
4. **Test vertical**: Test with vertical writing modes
5. **Fallbacks**: Provide fallbacks if needed
6. **Documentation**: Document direction assumptions
7. **Progressive enhancement**: Use feature queries

## Browser Support

- **Logical Properties**: Chrome 69+, Firefox 66+, Safari 12.1+, Edge 79+
- Use feature queries:
  ```css
  @supports (margin-inline-start: 0) {
      .element {
          margin-inline-start: 20px;
      }
  }
  ```

## Common Use Cases

1. **Internationalization**: Support multiple languages
2. **RTL Layouts**: Right-to-left text support
3. **Vertical Writing**: Vertical text layouts
4. **Responsive Design**: Adapt to writing modes
5. **Component Libraries**: Reusable components
6. **Accessibility**: Better accessibility support

## Practice Exercises

1. Create a layout that works in both LTR and RTL
2. Build a component with logical spacing
3. Design a navigation that adapts to writing mode
4. Create a responsive layout using logical properties
5. Build a card component with logical borders
6. Design a form with logical positioning

## Additional Resources

- [MDN: Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [CSS Tricks: Logical Properties](https://css-tricks.com/css-logical-properties/)
- [Can I Use: Logical Properties](https://caniuse.com/css-logical-props)

# CSS Math Functions

## Overview
CSS Math Functions (`calc()`, `clamp()`, `min()`, `max()`) allow you to perform calculations directly in CSS. They enable responsive designs, fluid typography, and dynamic sizing without JavaScript.

## calc() Function

Performs calculations with different units.

```css
.element {
    width: calc(100% - 40px);
    height: calc(50vh - 20px);
    margin: calc(2rem + 10px);
}
```

### Common Use Cases

- Responsive layouts
- Centering with known sizes
- Grid gaps
- Dynamic spacing

## clamp() Function

Clamps a value between minimum and maximum.

```css
.element {
    font-size: clamp(1rem, 2vw + 1rem, 2rem);
    width: clamp(200px, 50%, 600px);
}
```

### Syntax

```css
clamp(min, preferred, max)
```

## min() Function

Returns the smallest value.

```css
.element {
    width: min(300px, 50%);
}
```

## max() Function

Returns the largest value.

```css
.element {
    width: max(200px, 30%);
}
```

## Common Patterns

### Fluid Typography

```css
h1 {
    font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
}
```

### Responsive Width

```css
.container {
    width: clamp(320px, 90%, 1200px);
}
```

## Best Practices

1. **Use calc()**: For calculations
2. **Use clamp()**: For fluid typography
3. **Use min/max()**: For responsive sizing
4. **Performance**: Math functions are efficient
5. **Testing**: Test on different screen sizes
6. **Fallbacks**: Provide fallbacks when needed

## Browser Support

- **calc()**: Universal support
- **clamp()**: Chrome 79+, Firefox 75+, Safari 13.1+, Edge 79+
- **min()/max()**: Chrome 79+, Firefox 75+, Safari 13.1+, Edge 79+

## Common Use Cases

1. **Responsive Layouts**: Dynamic sizing
2. **Fluid Typography**: Scalable text
3. **Grid Gaps**: Calculated spacing
4. **Centering**: Dynamic centering
5. **Constraints**: Min/max constraints
6. **Calculations**: Complex calculations

## Practice Exercises

1. Create responsive layouts with calc()
2. Build fluid typography with clamp()
3. Design dynamic sizing with min() and max()
4. Create complex calculations for layouts
5. Build responsive components
6. Design fluid interfaces

## Additional Resources

- [MDN: calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
- [MDN: clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [MDN: min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)
- [MDN: max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max)

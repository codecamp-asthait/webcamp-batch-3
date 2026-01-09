# CSS :has() Selector

## Overview
The `:has()` selector is a parent selector that allows you to style an element based on what it contains. This is a powerful feature that enables conditional styling based on child elements, solving many layout problems that previously required JavaScript.

## Why Use :has()?

- **Parent Selection**: Style parents based on children
- **Conditional Styling**: Apply styles conditionally
- **No JavaScript**: Pure CSS solution
- **Flexibility**: Works with any selector
- **Modern CSS**: Latest selector feature

## Basic Syntax

```css
/* Style element if it has a specific child */
.parent:has(.child) {
    background: blue;
}

/* Style element if it has an image */
.card:has(img) {
    border: 2px solid blue;
}

/* Style element if it has a button */
.container:has(button) {
    padding: 20px;
}
```

## Common Patterns

### Card with Image

```css
.card:has(img) {
    display: flex;
    flex-direction: column;
}

.card:not(:has(img)) {
    padding: 30px;
}
```

### Form Validation

```css
.form-group:has(input:valid) {
    color: green;
}

.form-group:has(input:invalid) {
    color: red;
}
```

### Navigation Active State

```css
nav li:has(.active) {
    background: blue;
}

nav li:has(.active) a {
    color: white;
}
```

### Conditional Layouts

```css
.grid-item:has(button) {
    border: 2px solid blue;
}

.grid-item:has(.image) {
    display: flex;
    flex-direction: column;
}
```

## Advanced Examples

### Multiple Conditions

```css
.card:has(img):has(button) {
    /* Card has both image and button */
}
```

### Negation

```css
.card:not(:has(img)) {
    /* Card without image */
}
```

### Complex Selectors

```css
.container:has(.active > .submenu) {
    /* Container with active submenu */
}
```

## Best Practices

1. **Performance**: :has() can be expensive, use sparingly
2. **Specificity**: Be aware of specificity implications
3. **Testing**: Test thoroughly across browsers
4. **Fallbacks**: Provide fallbacks for older browsers
5. **Readability**: Keep :has() selectors readable
6. **Use Cases**: Use for conditional styling, not all styling
7. **Combine**: Works well with other selectors

## Browser Support

- **:has()**: Chrome 105+, Firefox 121+, Safari 15.4+, Edge 105+
- Use feature queries:
  ```css
  @supports selector(:has(*)) {
      .element:has(.child) {
          /* styles */
      }
  }
  ```

## Common Use Cases

1. **Card Layouts**: Different layouts based on content
2. **Form Validation**: Style based on input state
3. **Navigation**: Highlight parents with active children
4. **Conditional Grids**: Different grid layouts
5. **Content-Based Styling**: Style based on content presence
6. **Dynamic Layouts**: Adapt layouts to content

## Practice Exercises

1. Create a card that changes layout based on content
2. Build form validation styling using :has()
3. Design a navigation that highlights parent when child is active
4. Create conditional grid layouts based on content
5. Build a component that adapts to its children
6. Design a layout that changes based on element presence

## Additional Resources

- [MDN: :has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [CSS Tricks: :has()](https://css-tricks.com/the-css-has-selector/)
- [Can I Use: :has()](https://caniuse.com/css-has)

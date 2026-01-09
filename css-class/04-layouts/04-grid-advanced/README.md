# CSS Grid Advanced

## Overview
Advanced CSS Grid features include implicit grids, grid line names, minmax(), auto-fit/auto-fill, and advanced placement techniques. These features enable sophisticated, responsive layouts with precise control.

## Advanced Features

### Named Grid Lines

```css
.container {
    grid-template-columns: [start] 1fr [center] 1fr [end];
}

.item {
    grid-column: start / end;
}
```

### Minmax() Function

Creates flexible column/row sizes.

```css
.container {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
}
```

### Auto-fit and Auto-fill

Automatically creates columns based on available space.

```css
.container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Grid Template Areas

```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header {
    grid-area: header;
}
```

## Implicit vs Explicit Grid

### Explicit Grid

Defined by grid-template-columns/rows.

```css
.container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 100px);
}
```

### Implicit Grid

Created automatically for extra items.

```css
.container {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;  /* Implicit rows */
}
```

## Grid Alignment

### justify-items

Aligns items within their grid area (horizontal).

```css
.container {
    justify-items: start | center | end | stretch;
}
```

### align-items

Aligns items within their grid area (vertical).

```css
.container {
    align-items: start | center | end | stretch;
}
```

### place-items

Shorthand for justify-items and align-items.

```css
.container {
    place-items: center;  /* Both center */
}
```

## Common Patterns

### Responsive Grid

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### Dashboard Layout

```css
.dashboard {
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    grid-template-rows: auto repeat(2, 200px) auto;
    grid-template-areas:
        "header header header header"
        "sidebar widget1 widget2 widget3"
        "sidebar widget4 widget4 widget4"
        "footer footer footer footer";
}
```

## Best Practices

1. **Use named areas**: More maintainable
2. **Minmax for flexibility**: Responsive columns
3. **Auto-fit/auto-fill**: Responsive grids
4. **Combine techniques**: Use multiple features together
5. **Test responsiveness**: Test on different screens
6. **Performance**: Grid is efficient
7. **Documentation**: Comment complex grid layouts

## Browser Support

- **Advanced Grid**: Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+
- Universal support in all modern browsers

## Common Use Cases

1. **Complex Layouts**: Dashboard, magazine layouts
2. **Responsive Grids**: Auto-fit/auto-fill patterns
3. **Named Areas**: Maintainable complex layouts
4. **Flexible Columns**: Minmax for responsive columns
5. **Implicit Grids**: Dynamic content grids
6. **Alignment**: Precise item alignment

## Practice Exercises

1. Create a complex dashboard layout
2. Build a responsive grid with auto-fit
3. Design a magazine-style layout with named areas
4. Create a grid with minmax for flexible columns
5. Build an image gallery with implicit grid
6. Design a complex form layout

## Additional Resources

- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks: Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Can I Use: CSS Grid](https://caniuse.com/css-grid)

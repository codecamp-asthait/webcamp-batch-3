# CSS Subgrid

## Overview
CSS Subgrid allows a grid item to inherit the grid tracks of its parent grid, enabling nested grids to align with their parent's grid lines. This creates perfectly aligned layouts across nested elements without complex calculations.

## Why Use Subgrid?

- **Perfect Alignment**: Nested items align with parent grid lines
- **Simpler Code**: No need for complex nested grid calculations
- **Consistent Layouts**: Maintain alignment across different content sizes
- **Flexibility**: Works with both rows and columns
- **Modern CSS**: Latest grid enhancement

## Basic Syntax

```css
.parent-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.grid-item {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 2;
}
```

## Subgrid Rows

```css
.parent-grid {
    display: grid;
    grid-template-rows: repeat(3, 100px);
}

.grid-item {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
}
```

## Subgrid Columns

```css
.parent-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.grid-item {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 3;
}
```

## Common Patterns

### Card Layout with Aligned Headers

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
}

.card-item {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: 1 / 4;
}

.card-header {
    /* Aligns with parent grid */
}

.card-body {
    /* Aligns with parent grid */
}

.card-footer {
    /* Aligns with parent grid */
}
```

### Dashboard Grid

```css
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
}

.widget {
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    grid-column: span 2;
    grid-row: span 2;
}
```

## Best Practices

1. **Set parent grid**: Define grid tracks on parent first
2. **Span correctly**: Use appropriate span values
3. **Both axes**: Can use subgrid on rows, columns, or both
4. **Testing**: Test alignment across different content sizes
5. **Fallbacks**: Provide fallback for browsers without support
6. **Performance**: Subgrid is efficient
7. **Naming**: Use descriptive grid names

## Browser Support

- **Subgrid**: Chrome 117+, Firefox 71+, Safari 16+, Edge 117+
- Use feature queries for progressive enhancement:
  ```css
  @supports (grid-template-columns: subgrid) {
      .grid-item {
          grid-template-columns: subgrid;
      }
  }
  ```

## Fallback Strategy

```css
/* Fallback without subgrid */
.grid-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

/* Subgrid override */
@supports (grid-template-columns: subgrid) {
    .grid-item {
        grid-template-columns: subgrid;
    }
}
```

## Common Use Cases

1. **Card Layouts**: Aligned headers and footers across cards
2. **Dashboard Widgets**: Aligned dashboard components
3. **Form Layouts**: Aligned form fields
4. **Content Grids**: Aligned content sections
5. **Navigation**: Aligned navigation items
6. **Complex Layouts**: Multi-level grid alignment

## Practice Exercises

1. Create a card layout with aligned headers and footers
2. Build a dashboard grid with nested subgrids
3. Design a complex layout with multiple subgrid items
4. Create a responsive grid using subgrid for alignment
5. Build a form layout with subgrid alignment
6. Design a content grid with consistent alignment

## Additional Resources

- [MDN: Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
- [CSS Tricks: Subgrid](https://css-tricks.com/css-subgrid/)
- [Can I Use: Subgrid](https://caniuse.com/css-subgrid)

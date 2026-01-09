# Combining Flexbox and Grid

## Overview
Flexbox and Grid work together perfectly! Use **Grid for page layouts** (two-dimensional) and **Flexbox for components** (one-dimensional). Combining them gives you the best of both worlds.

## When to Use Each

### Use Grid For:
- Page layouts (header, sidebar, main, footer)
- Two-dimensional layouts
- Complex layouts with rows and columns
- Dashboard layouts
- Magazine-style layouts

### Use Flexbox For:
- Component layouts
- One-dimensional layouts (row OR column)
- Navigation bars
- Button groups
- Form elements
- Centering content

## Combining Strategies

### Grid Container, Flexbox Items

```css
/* Grid for layout */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Flexbox for component */
.card {
    display: flex;
    flex-direction: column;
}
```

### Flexbox Container, Grid Items

```css
/* Flexbox for container */
.container {
    display: flex;
    gap: 20px;
}

/* Grid for item layout */
.item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
```

## Common Patterns

### Page Layout with Flexbox Components

```css
/* Grid for page structure */
.page {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

/* Flexbox for header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Flexbox for navigation */
.nav {
    display: flex;
    gap: 20px;
}
```

### Card Grid with Flexbox Cards

```css
/* Grid for card container */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Flexbox for card component */
.card {
    display: flex;
    flex-direction: column;
}

.card-content {
    flex: 1;  /* Push button to bottom */
}
```

## Best Practices

1. **Grid for layout**: Use Grid for page/component structure
2. **Flexbox for components**: Use Flexbox for component internals
3. **Combine wisely**: Use each for its strengths
4. **Responsive**: Both work great with media queries
5. **Performance**: Both are efficient
6. **Maintainability**: Clear separation of concerns
7. **Testing**: Test combinations thoroughly

## Browser Support

- **Grid + Flexbox**: Universal support in all modern browsers
- Both are well-supported and can be used together

## Common Use Cases

1. **Page Layouts**: Grid structure with Flexbox components
2. **Card Grids**: Grid container with Flexbox cards
3. **Dashboards**: Grid layout with Flexbox widgets
4. **Forms**: Grid form layout with Flexbox form groups
5. **Navigation**: Grid page with Flexbox navigation
6. **Complex Components**: Grid container with Flexbox items

## Practice Exercises

1. Create a page layout using Grid with Flexbox components
2. Build a card grid where each card uses Flexbox internally
3. Design a dashboard with Grid layout and Flexbox widgets
4. Create a responsive layout combining both techniques
5. Build a form with Grid layout and Flexbox form groups
6. Design a complex component using both

## Additional Resources

- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks: Grid vs Flexbox](https://css-tricks.com/css-grid-vs-flexbox/)

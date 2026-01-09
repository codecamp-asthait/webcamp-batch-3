# CSS Grid Fundamentals

## Overview
CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns. Unlike Flexbox which is one-dimensional, Grid lets you work with both dimensions simultaneously, making it perfect for page layouts.

## Why Use CSS Grid?

- **Two-Dimensional**: Control both rows and columns
- **Complex Layouts**: Perfect for page layouts
- **Precise Control**: Exact placement of items
- **Responsive**: Easy responsive grid layouts
- **Modern**: Latest layout standard

## Basic Setup

### Create Grid Container

```css
.container {
    display: grid;
}
```

### Define Columns

```css
.container {
    grid-template-columns: 200px 200px 200px;
    /* or */
    grid-template-columns: 1fr 1fr 1fr;
    /* or */
    grid-template-columns: repeat(3, 1fr);
}
```

### Define Rows

```css
.container {
    grid-template-rows: 100px 200px 100px;
    /* or */
    grid-template-rows: repeat(3, 1fr);
}
```

## Grid Template Columns

### Fixed Sizes

```css
.container {
    grid-template-columns: 200px 300px 200px;
}
```

### Fractional Units (fr)

```css
.container {
    grid-template-columns: 1fr 2fr 1fr;  /* 1:2:1 ratio */
}
```

### Repeat Function

```css
.container {
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
}
```

### Auto-fit and Auto-fill

```css
.container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

## Grid Gap

```css
.container {
    gap: 20px;  /* Both row and column gap */
    /* or */
    row-gap: 20px;
    column-gap: 30px;
}
```

## Grid Areas

### Define Areas

```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}
```

### Assign Areas

```css
.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}
```

## Grid Item Placement

### Grid Lines

```css
.item {
    grid-column-start: 1;
    grid-column-end: 3;
    /* or */
    grid-column: 1 / 3;
    /* or */
    grid-column: 1 / span 2;
}
```

### Shorthand

```css
.item {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}
```

## Common Patterns

### Page Layout

```css
.layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    gap: 20px;
}
```

### Responsive Grid

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

## Best Practices

1. **Use for layouts**: Perfect for page and component layouts
2. **Combine with Flexbox**: Grid for layout, Flexbox for components
3. **Use fr units**: Flexible fractional units
4. **Gap property**: Use gap for spacing
5. **Grid areas**: Use named areas for clarity
6. **Responsive**: Use auto-fit/auto-fill
7. **Testing**: Test on different screen sizes

## Browser Support

- **CSS Grid**: Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+
- Universal support in all modern browsers

## Common Use Cases

1. **Page Layouts**: Header, sidebar, main, footer
2. **Image Galleries**: Responsive image grids
3. **Dashboards**: Complex dashboard layouts
4. **Card Grids**: Responsive card layouts
5. **Forms**: Complex form layouts
6. **Magazine Layouts**: Complex content layouts

## Practice Exercises

1. Create a page layout with header, sidebar, main, and footer
2. Build a responsive image gallery
3. Design a dashboard layout with grid
4. Create a card grid that adapts to screen size
5. Build a magazine-style layout
6. Design a complex form layout

## Additional Resources

- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks: Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden](https://cssgridgarden.com/) - Interactive game
- [Can I Use: CSS Grid](https://caniuse.com/css-grid)

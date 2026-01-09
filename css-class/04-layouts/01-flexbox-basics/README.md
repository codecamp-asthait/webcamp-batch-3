# Flexbox Fundamentals

## Overview
Flexbox (Flexible Box Layout) is a one-dimensional layout method for arranging items in rows or columns. It makes it easy to align items, distribute space, and create responsive layouts. Flexbox is perfect for components and small-scale layouts.

## Why Use Flexbox?

- **Easy Alignment**: Simple centering and alignment
- **Flexible**: Items can grow and shrink
- **Responsive**: Works great for responsive layouts
- **One-Dimensional**: Perfect for rows or columns
- **Modern**: Supported in all modern browsers

## Basic Setup

### Create Flex Container

```css
.container {
    display: flex;
}
```

### Flex Container Properties

- **flex-direction**: Row or column direction
- **justify-content**: Main axis alignment
- **align-items**: Cross axis alignment
- **flex-wrap**: Wrapping behavior
- **gap**: Space between items

## Flex Direction

Controls the direction of flex items.

```css
.container {
    flex-direction: row;           /* Default - left to right */
    flex-direction: row-reverse;   /* Right to left */
    flex-direction: column;       /* Top to bottom */
    flex-direction: column-reverse; /* Bottom to top */
}
```

## Justify Content

Aligns items along the main axis.

```css
.container {
    justify-content: flex-start;    /* Start of container */
    justify-content: flex-end;      /* End of container */
    justify-content: center;        /* Center */
    justify-content: space-between; /* Space between items */
    justify-content: space-around;  /* Space around items */
    justify-content: space-evenly;  /* Equal space everywhere */
}
```

## Align Items

Aligns items along the cross axis.

```css
.container {
    align-items: stretch;  /* Default - stretch to fill */
    align-items: flex-start; /* Start of cross axis */
    align-items: center;   /* Center */
    align-items: flex-end; /* End of cross axis */
    align-items: baseline; /* Baseline alignment */
}
```

## Flex Wrap

Controls whether items wrap to new lines.

```css
.container {
    flex-wrap: nowrap;  /* Default - no wrapping */
    flex-wrap: wrap;    /* Wrap to new line */
    flex-wrap: wrap-reverse; /* Wrap in reverse */
}
```

## Flex Item Properties

### flex-grow

Controls how much an item can grow.

```css
.item {
    flex-grow: 1;  /* Can grow */
    flex-grow: 0;  /* Cannot grow */
}
```

### flex-shrink

Controls how much an item can shrink.

```css
.item {
    flex-shrink: 1;  /* Can shrink */
    flex-shrink: 0;  /* Cannot shrink */
}
```

### flex-basis

Sets initial size before growing/shrinking.

```css
.item {
    flex-basis: 200px;
    flex-basis: auto;  /* Default */
}
```

### Shorthand

```css
.item {
    flex: 1;  /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
    flex: 0 1 auto;  /* Default */
}
```

## Common Patterns

### Centering Elements

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Navigation Bar

```css
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Equal Height Columns

```css
.container {
    display: flex;
}

.column {
    flex: 1;
}
```

### Sticky Footer

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main {
    flex: 1;
}
```

## Best Practices

1. **Use for components**: Perfect for small layouts
2. **One dimension**: Use for rows OR columns
3. **Combine with Grid**: Use Grid for page layouts
4. **Gap property**: Use gap for spacing
5. **Responsive**: Works great with media queries
6. **Accessibility**: Maintain logical order
7. **Testing**: Test on different screen sizes

## Browser Support

- **Flexbox**: Chrome 29+, Firefox 28+, Safari 9+, Edge 12+
- Universal support in all modern browsers

## Common Use Cases

1. **Navigation Bars**: Horizontal/vertical navigation
2. **Card Layouts**: Responsive card components
3. **Centering**: Center content easily
4. **Forms**: Align form elements
5. **Headers/Footers**: Page header and footer layouts
6. **Component Layouts**: Button groups, toolbars

## Practice Exercises

1. Create a centered card component
2. Build a navigation bar with flexbox
3. Design a responsive card layout
4. Create a form with flexbox alignment
5. Build a sticky footer layout
6. Design a button group with flexbox

## Additional Resources

- [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks: Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game
- [Can I Use: Flexbox](https://caniuse.com/flexbox)

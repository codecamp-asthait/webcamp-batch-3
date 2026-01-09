# Flexbox Advanced

## Overview
Advanced Flexbox techniques include align-content, order, align-self, and complex layouts. These properties give you fine-grained control over flex items and enable sophisticated layout patterns.

## Advanced Properties

### align-content

Aligns flex lines when there's extra space in the cross axis (only works with multiple lines).

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;    /* Lines at start */
    align-content: center;       /* Lines centered */
    align-content: space-between; /* Space between lines */
    align-content: space-around;  /* Space around lines */
}
```

### order

Changes the visual order of flex items without changing HTML.

```css
.item {
    order: 2;  /* Display second */
}

.item {
    order: -1; /* Display first */
}
```

### align-self

Overrides align-items for individual items.

```css
.item {
    align-self: flex-start;  /* Override container alignment */
    align-self: center;
    align-self: flex-end;
    align-self: stretch;
}
```

### flex-shrink

Controls how much an item can shrink.

```css
.item {
    flex-shrink: 0;  /* Don't shrink */
    flex-shrink: 1;  /* Can shrink (default) */
    flex-shrink: 2;  /* Shrink twice as much */
}
```

### flex-basis

Sets initial size before growing/shrinking.

```css
.item {
    flex-basis: 200px;
    flex-basis: auto;  /* Default */
    flex-basis: 50%;   /* Percentage */
}
```

## Complex Layouts

### Holy Grail Layout

```css
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header,
.footer {
    /* Header and footer */
}

.body {
    display: flex;
    flex: 1;
}

.sidebar {
    width: 200px;
}

.main {
    flex: 1;
}
```

### Card Layout

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
}

.card-content {
    flex: 1;  /* Push button to bottom */
}
```

## Best Practices

1. **Use order sparingly**: Can confuse screen readers
2. **Align-self**: Override alignment when needed
3. **Flex-basis**: Set initial sizes appropriately
4. **Complex layouts**: Combine with Grid for page layouts
5. **Responsive**: Test with different screen sizes
6. **Accessibility**: Maintain logical order in HTML
7. **Performance**: Flexbox is efficient

## Browser Support

- **Advanced Flexbox**: Chrome 29+, Firefox 28+, Safari 9+, Edge 12+
- Universal support in all modern browsers

## Common Use Cases

1. **Complex Components**: Advanced component layouts
2. **Reordering**: Visual reordering with order
3. **Individual Alignment**: align-self for specific items
4. **Multi-line Layouts**: align-content for wrapped items
5. **Form Layouts**: Advanced form alignment
6. **Dashboard**: Complex dashboard layouts

## Practice Exercises

1. Create a complex layout using order and align-self
2. Build a responsive card grid with flexbox
3. Design a form layout with proper alignment
4. Create a dashboard layout with flexbox
5. Build a holy grail layout
6. Design a component with advanced flex properties

## Additional Resources

- [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks: Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Can I Use: Flexbox](https://caniuse.com/flexbox)

# Structural Pseudo-classes

## Overview
Structural pseudo-classes select elements based on their position in the document tree. They allow you to target elements like the first child, last child, nth child, and more, providing powerful ways to style elements based on their structural relationships.

## Common Structural Pseudo-classes

### :first-child

Selects the first child element.

```css
li:first-child {
    font-weight: bold;
}
```

### :last-child

Selects the last child element.

```css
li:last-child {
    border-bottom: none;
}
```

### :nth-child()

Selects elements by their position.

```css
/* Every 2nd child */
li:nth-child(2n) {
    background: #f0f0f0;
}

/* Every 3rd child */
li:nth-child(3n) {
    color: blue;
}

/* First 3 children */
li:nth-child(-n+3) {
    font-weight: bold;
}
```

### :nth-of-type()

Selects elements of a specific type by position.

```css
p:nth-of-type(2) {
    color: red;
}
```

### :only-child

Selects elements that are the only child.

```css
.only-child {
    /* Styles for only child */
}
```

## Common Patterns

### Zebra Striping

```css
tr:nth-child(even) {
    background: #f0f0f0;
}
```

### Alternating Styles

```css
.card:nth-child(odd) {
    background: white;
}

.card:nth-child(even) {
    background: #f8f9fa;
}
```

## Best Practices

1. **Use appropriately**: Match selector to structure
2. **Performance**: Structural selectors are efficient
3. **Maintainability**: Clear and readable
4. **Testing**: Test with different structures
5. **Documentation**: Comment complex patterns

## Browser Support

- **Structural Pseudo-classes**: Universal support
- All modern browsers support all structural pseudo-classes

## Common Use Cases

1. **Lists**: Style first/last list items
2. **Tables**: Zebra striping
3. **Cards**: Alternating card styles
4. **Navigation**: First/last menu items
5. **Grids**: Pattern-based styling
6. **Forms**: First/last form fields

## Practice Exercises

1. Create zebra striping for tables
2. Build alternating card styles
3. Style first and last items
4. Create complex nth-child patterns
5. Design grid layouts with patterns
6. Build navigation with structural selectors

## Additional Resources

- [MDN: Structural Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#structural_pseudo-classes)
- [CSS Tricks: nth-child](https://css-tricks.com/useful-nth-child-recipies/)

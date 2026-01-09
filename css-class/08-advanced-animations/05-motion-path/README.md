# Motion Path

## Overview
The `motion-path` property allows you to animate an element along a custom path. This enables complex curved animations, circular paths, and custom trajectory movements that would be difficult to achieve with standard transform animations.

## Basic Syntax

```css
.element {
    motion-path: path('M 0 0 L 100 100');
    offset-path: path('M 0 0 L 100 100');
    animation: movePath 3s ease infinite;
}
```

## Path Types

### SVG Path

```css
.element {
    motion-path: path('M 50 100 Q 200 20, 350 100');
}
```

### Circle

```css
.element {
    motion-path: circle(100px at 150px 150px);
}
```

### Ellipse

```css
.element {
    motion-path: ellipse(100px 50px at 150px 150px);
}
```

## Offset Properties

### offset-distance

Controls position along the path.

```css
.element {
    offset-distance: 50%;  /* Halfway along path */
}
```

### offset-rotate

Controls rotation along the path.

```css
.element {
    offset-rotate: auto;  /* Follow path direction */
    offset-rotate: 0deg;  /* No rotation */
    offset-rotate: 90deg; /* Fixed rotation */
}
```

## Animation Along Path

```css
@keyframes movePath {
    from {
        offset-distance: 0%;
    }
    to {
        offset-distance: 100%;
    }
}

.element {
    animation: movePath 3s ease infinite;
}
```

## Best Practices

1. **Use SVG paths**: Define paths in SVG
2. **Offset distance**: Control position along path
3. **Offset rotate**: Control element rotation
4. **Performance**: Motion path is efficient
5. **Testing**: Test on different browsers
6. **Fallbacks**: Provide fallback for older browsers

## Browser Support

- **Motion Path**: Chrome 46+, Firefox 72+, Safari 15.4+, Edge 79+
- Good support in modern browsers

## Common Use Cases

1. **Curved Animations**: Complex curved paths
2. **Circular Motion**: Elements moving in circles
3. **Custom Trajectories**: Unique movement paths
4. **UI Animations**: Custom UI element movements
5. **Decorative Effects**: Animated decorative elements
6. **Interactive Elements**: Elements following paths

## Practice Exercises

1. Create custom curved path animations
2. Build circular motion paths
3. Design complex trajectory animations
4. Create motion paths with offset
5. Build animated elements along paths
6. Design interactive path animations

## Additional Resources

- [MDN: motion-path](https://developer.mozilla.org/en-US/docs/Web/CSS/motion-path)
- [MDN: offset-path](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path)
- [CSS Tricks: Motion Path](https://css-tricks.com/almanac/properties/m/motion-path/)

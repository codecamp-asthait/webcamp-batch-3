# CSS Transforms

## Overview
The `transform` property allows you to modify the coordinate space of elements. You can translate (move), rotate, scale, and skew elements. Transforms are hardware-accelerated and don't affect document flow, making them perfect for animations.

## Why Use Transforms?

- **Performance**: Hardware-accelerated
- **No Layout Shift**: Doesn't affect document flow
- **Smooth Animations**: Perfect for animated effects
- **Flexibility**: Multiple transform functions
- **3D Support**: 3D transform capabilities

## 2D Transform Functions

### translate()

Moves an element along X and/or Y axis.

```css
.element {
    transform: translateX(50px);  /* Move right */
    transform: translateY(50px);  /* Move down */
    transform: translate(50px, 30px);  /* Move X and Y */
}
```

### scale()

Scales an element's size.

```css
.element {
    transform: scale(1.5);  /* Scale both axes */
    transform: scaleX(1.5);  /* Scale X axis */
    transform: scaleY(1.5);  /* Scale Y axis */
    transform: scale(1.5, 0.8);  /* Scale X and Y */
}
```

### rotate()

Rotates an element.

```css
.element {
    transform: rotate(45deg);  /* Rotate 45 degrees */
    transform: rotate(90deg);  /* Rotate 90 degrees */
}
```

### skew()

Skews an element.

```css
.element {
    transform: skewX(20deg);  /* Skew X axis */
    transform: skewY(20deg);  /* Skew Y axis */
    transform: skew(20deg, 10deg);  /* Skew both */
}
```

## Combining Transforms

You can combine multiple transforms:

```css
.element {
    transform: translateX(50px) rotate(45deg) scale(1.2);
}
```

**Order matters!** Transforms are applied from right to left.

## Transform Origin

Controls the point around which transforms occur.

```css
.element {
    transform-origin: center;  /* Default */
    transform-origin: top left;
    transform-origin: 50% 50%;
    transform-origin: 0 0;
}
```

## 3D Transforms

### Perspective

Creates 3D space for child elements.

```css
.container {
    perspective: 1000px;
}

.element {
    transform: rotateX(45deg);
    transform: rotateY(45deg);
    transform: rotateZ(45deg);
}
```

### 3D Transform Functions

```css
.element {
    transform: translateZ(50px);
    transform: scaleZ(1.5);
    transform: rotateX(45deg);
    transform: rotateY(45deg);
    transform: rotateZ(45deg);
}
```

## Common Patterns

### Hover Scale

```css
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}
```

### Hover Rotate

```css
.icon {
    transition: transform 0.3s ease;
}

.icon:hover {
    transform: rotate(15deg);
}
```

### Center Element

```css
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## Best Practices

1. **Use for animations**: Perfect for animated effects
2. **Combine with transitions**: Smooth transform changes
3. **Hardware acceleration**: Use transform instead of position
4. **Transform origin**: Set appropriate origin point
5. **Performance**: Prefer transform over position changes
6. **3D transforms**: Use perspective for 3D effects
7. **Test thoroughly**: Test on different devices

## Browser Support

- **2D Transforms**: Chrome 36+, Firefox 16+, Safari 9+, Edge 12+
- **3D Transforms**: Chrome 36+, Firefox 16+, Safari 9+, Edge 12+
- Universal support in all modern browsers

## Performance Tips

1. **Use transform**: Instead of changing position
2. **Hardware acceleration**: Transform is GPU-accelerated
3. **Combine transforms**: More efficient than separate
4. **Avoid layout triggers**: Transform doesn't trigger layout
5. **Use will-change**: Hint browser about transforms

## Common Use Cases

1. **Hover Effects**: Scale, rotate on hover
2. **Animations**: Smooth animated movements
3. **Centering**: Center elements absolutely
4. **3D Effects**: Card flips, 3D rotations
5. **Image Galleries**: Transform effects
6. **Navigation**: Menu animations

## Practice Exercises

1. Create hover effects using transform
2. Build card flip animations
3. Design an image gallery with transform effects
4. Create a navigation menu with transform animations
5. Build a 3D card component
6. Design a loading spinner with rotation

## Additional Resources

- [MDN: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS Tricks: Transform](https://css-tricks.com/almanac/properties/t/transform/)
- [Can I Use: CSS Transforms](https://caniuse.com/css-transforms)

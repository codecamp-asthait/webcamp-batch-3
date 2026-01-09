# Animation Timing Functions

## Overview
Timing functions control the speed curve of animations, determining how the animation progresses over time. Understanding timing functions is crucial for creating natural, polished animations that feel right to users.

## Built-in Timing Functions

### ease (default)
Slow start, fast middle, slow end.

```css
.element {
    animation-timing-function: ease;
}
```

### linear
Constant speed throughout.

```css
.element {
    animation-timing-function: linear;
}
```

### ease-in
Slow start, fast end.

```css
.element {
    animation-timing-function: ease-in;
}
```

### ease-out
Fast start, slow end.

```css
.element {
    animation-timing-function: ease-out;
}
```

### ease-in-out
Slow start and end, fast middle.

```css
.element {
    animation-timing-function: ease-in-out;
}
```

## Cubic Bezier Functions

Custom timing curves using cubic-bezier.

```css
.element {
    animation-timing-function: cubic-bezier(x1, y1, x2, y2);
}
```

### Common Cubic Bezier Values

```css
/* Bounce effect */
.element {
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Smooth ease */
.element {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Sharp ease-in */
.element {
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
```

## Steps Functions

Creates discrete steps in animation.

```css
.element {
    animation-timing-function: steps(5, start);
    animation-timing-function: steps(5, end);
    animation-timing-function: steps(5, jump-both);
}
```

### Use Cases

- Sprite animations
- Loading indicators
- Progress bars
- Frame-by-frame animations

## Best Practices

1. **Choose appropriate timing**: Match animation to context
2. **Use ease-out**: Often feels most natural
3. **Custom curves**: Use cubic-bezier for unique effects
4. **Steps for sprites**: Perfect for sprite animations
5. **Test feel**: Ensure animations feel right
6. **Performance**: Timing functions are efficient
7. **Accessibility**: Consider reduced motion

## Browser Support

- **Timing Functions**: Universal support
- All modern browsers support all timing function types

## Common Use Cases

1. **UI Animations**: Button clicks, hovers
2. **Page Transitions**: Smooth page changes
3. **Loading States**: Animated loaders
4. **Micro-interactions**: Small animated details
5. **Sprite Animations**: Step-based animations
6. **Natural Motion**: Realistic movement

## Practice Exercises

1. Create custom cubic-bezier timing functions
2. Build step-based animations for sprite effects
3. Design bounce and elastic effects with timing functions
4. Create natural-feeling animations with proper timing
5. Build a loading animation with steps
6. Design smooth transitions with custom timing

## Additional Resources

- [MDN: animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
- [Cubic Bezier Tool](https://cubic-bezier.com/)
- [CSS Tricks: Timing Functions](https://css-tricks.com/ease-out-in-ease-in-out/)

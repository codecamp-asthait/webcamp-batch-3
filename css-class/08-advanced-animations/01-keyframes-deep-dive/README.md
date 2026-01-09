# Keyframe Animation Deep Dive

## Overview
Keyframe animations allow you to create complex, multi-step animations by defining specific states at different points in the animation timeline. This deep dive covers advanced keyframe techniques, multiple keyframes, and complex animation sequences.

## Multiple Keyframes

### Basic Multiple Keyframes

```css
@keyframes multiStep {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(100px);
    }
    50% {
        transform: translateX(200px);
    }
    75% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}
```

### Complex Sequences

```css
@keyframes complex {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }
    25% {
        transform: translate(100px, 0) rotate(90deg);
    }
    50% {
        transform: translate(100px, 100px) rotate(180deg);
    }
    75% {
        transform: translate(0, 100px) rotate(270deg);
    }
    100% {
        transform: translate(0, 0) rotate(360deg);
    }
}
```

## Animation Fill Modes

### fill-mode: none (default)

No styles applied before/after animation.

```css
.element {
    animation: fadeIn 1s ease;
    animation-fill-mode: none;
}
```

### fill-mode: forwards

Keeps final keyframe styles after animation.

```css
.element {
    animation: fadeIn 1s ease;
    animation-fill-mode: forwards;
}
```

### fill-mode: backwards

Applies first keyframe styles before animation starts.

```css
.element {
    animation: fadeIn 1s ease;
    animation-fill-mode: backwards;
    animation-delay: 1s;
}
```

### fill-mode: both

Combines forwards and backwards.

```css
.element {
    animation: fadeIn 1s ease;
    animation-fill-mode: both;
}
```

## Animation Direction

### normal (default)

Plays animation forward.

```css
.element {
    animation: moveRight 2s ease infinite;
    animation-direction: normal;
}
```

### reverse

Plays animation backward.

```css
.element {
    animation: moveRight 2s ease infinite;
    animation-direction: reverse;
}
```

### alternate

Alternates between forward and backward.

```css
.element {
    animation: moveRight 2s ease infinite;
    animation-direction: alternate;
}
```

### alternate-reverse

Starts backward, then alternates.

```css
.element {
    animation: moveRight 2s ease infinite;
    animation-direction: alternate-reverse;
}
```

## Multiple Animations

Apply multiple animations to the same element.

```css
.element {
    animation: rotate 2s linear infinite,
               pulse 1.5s ease infinite,
               colorChange 3s ease infinite;
}
```

## Animation Timing

### Duration

```css
.element {
    animation-duration: 2s;
    animation-duration: 500ms;
}
```

### Delay

```css
.element {
    animation-delay: 1s;
    animation-delay: 500ms;
}
```

### Iteration Count

```css
.element {
    animation-iteration-count: 1;      /* Once */
    animation-iteration-count: 3;      /* Three times */
    animation-iteration-count: infinite; /* Forever */
}
```

## Best Practices

1. **Use multiple keyframes**: Create smooth, complex animations
2. **Fill modes**: Control styles before/after animation
3. **Direction**: Use alternate for smooth back-and-forth
4. **Multiple animations**: Combine different effects
5. **Performance**: Use transform and opacity
6. **Testing**: Test on different devices
7. **Accessibility**: Respect prefers-reduced-motion

## Browser Support

- **Keyframe Animations**: Chrome 43+, Firefox 16+, Safari 9+, Edge 12+
- Universal support in all modern browsers

## Common Use Cases

1. **Complex Sequences**: Multi-step animations
2. **Loading States**: Animated loaders
3. **Transitions**: Page transitions
4. **Effects**: Complex visual effects
5. **Interactions**: Hover and click animations
6. **Micro-interactions**: Small animated details

## Practice Exercises

1. Create a complex multi-step animation sequence
2. Build an animation with different fill modes
3. Design multiple animations on the same element
4. Create a looping animation with alternate direction
5. Build a loading animation with multiple keyframes
6. Design a complex hover effect

## Additional Resources

- [MDN: @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- [MDN: animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [CSS Tricks: Animations](https://css-tricks.com/almanac/properties/a/animation/)

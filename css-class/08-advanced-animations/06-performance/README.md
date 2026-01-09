# Animation Performance

## Overview
Animation performance is crucial for smooth user experiences. Understanding which properties to animate, how to optimize animations, and when to use hardware acceleration can make the difference between smooth and janky animations.

## Hardware-Accelerated Properties

### ✅ Good to Animate

- **transform**: translate, rotate, scale, skew
- **opacity**: Fade in/out
- **filter**: Some filter properties

These properties are GPU-accelerated and don't trigger layout or paint.

### ❌ Avoid Animating

- **width, height**: Triggers layout
- **margin, padding**: Triggers layout
- **top, left, right, bottom**: Triggers layout
- **border**: Triggers paint

These properties trigger expensive layout recalculations.

## Will-Change Property

Hint the browser about upcoming changes.

```css
.element {
    will-change: transform;
}

.element:hover {
    transform: scale(1.1);
}
```

### Best Practices

- Use sparingly
- Remove when animation ends
- Don't apply to too many elements

## Transform vs Position

### ✅ Use Transform

```css
.element {
    animation: moveTransform 2s ease infinite;
}

@keyframes moveTransform {
    0%, 100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100px);
    }
}
```

### ❌ Avoid Position

```css
.element {
    animation: movePosition 2s ease infinite;
}

@keyframes movePosition {
    0%, 100% {
        left: 0;
    }
    50% {
        left: 100px;
    }
}
```

## Performance Tips

1. **Use transform and opacity**: GPU-accelerated
2. **Avoid layout properties**: width, height, margin, padding
3. **Use will-change**: Hint browser about changes
4. **Limit animations**: Don't animate too many elements
5. **Test performance**: Use browser dev tools
6. **Optimize keyframes**: Keep keyframes simple
7. **Remove will-change**: After animation completes

## Browser Dev Tools

Use browser dev tools to identify performance issues:

- Chrome DevTools Performance tab
- Firefox Performance tool
- Safari Web Inspector

## Best Practices

1. **Transform over position**: Always prefer transform
2. **Opacity for fades**: Use opacity for fade effects
3. **Will-change sparingly**: Only when needed
4. **Test on devices**: Test on lower-end devices
5. **Monitor FPS**: Aim for 60fps
6. **Reduce complexity**: Simpler animations perform better
7. **Use compositor**: Leverage GPU acceleration

## Common Use Cases

1. **Smooth Animations**: Optimized animations
2. **Performance**: Fast, smooth interactions
3. **Mobile**: Optimized for mobile devices
4. **Complex Animations**: Multiple animated elements
5. **Interactive**: Responsive user interactions
6. **Effects**: Visual effects with good performance

## Practice Exercises

1. Convert position animations to transform
2. Use will-change for upcoming animations
3. Avoid layout-triggering properties
4. Optimize animation performance
5. Test animations in dev tools
6. Create smooth 60fps animations

## Additional Resources

- [MDN: will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
- [Google: Rendering Performance](https://web.dev/rendering-performance/)
- [CSS Tricks: Performance](https://css-tricks.com/performance-animations/)

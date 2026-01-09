# Scroll-driven Animations

## Overview
Scroll-driven animations allow you to create animations that are triggered and controlled by scroll position. This enables parallax effects, reveal animations, and other scroll-based interactions that enhance user experience.

## Browser Support

⚠️ **Note**: Scroll-driven animations are a modern feature with limited browser support. Currently supported in Chrome 115+ and Edge 115+.

## Scroll Timeline

Link animations to scroll position.

```css
.element {
    animation: scrollAnim linear;
    animation-timeline: scroll();
}
```

## View Timeline

Animate based on element visibility.

```css
.element {
    animation: revealAnim linear;
    animation-timeline: view();
    animation-range: entry 0% entry 50%;
}
```

## Common Patterns

### Parallax Effect

```css
.parallax-layer {
    position: sticky;
    top: 0;
}
```

### Reveal on Scroll

```css
.reveal {
    animation: reveal linear;
    animation-timeline: view();
}
```

### Progress Indicator

```css
.progress {
    animation: progress linear;
    animation-timeline: scroll();
}
```

## Best Practices

1. **Check support**: Verify browser support
2. **Fallbacks**: Provide fallback animations
3. **Performance**: Use transform and opacity
4. **Accessibility**: Don't interfere with scrolling
5. **Testing**: Test on supported browsers
6. **Progressive enhancement**: Works without animations

## Browser Support

- **Scroll Animations**: Chrome 115+, Edge 115+
- Limited support - check before production use

## Common Use Cases

1. **Parallax Scrolling**: Layered parallax effects
2. **Reveal Animations**: Elements appearing on scroll
3. **Progress Indicators**: Scroll-based progress
4. **Scroll Triggers**: Animations triggered by scroll
5. **Sticky Animations**: Sticky element animations
6. **Scroll Effects**: Various scroll-based effects

## Practice Exercises

1. Create parallax scrolling effects
2. Build elements that reveal on scroll
3. Design progress indicators based on scroll
4. Create scroll-triggered animations
5. Build sticky element animations
6. Design scroll-based effects

## Additional Resources

- [MDN: Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [Chrome Developers: Scroll Animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations/)

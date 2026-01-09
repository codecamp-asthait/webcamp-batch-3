# Reduced Motion

## Overview
The `prefers-reduced-motion` media query allows you to respect users who prefer reduced motion. This is essential for users with vestibular disorders, motion sickness, or those who simply prefer less animation.

## prefers-reduced-motion

Detect when user prefers reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Respecting Animations

### Disable Animations

```css
@media (prefers-reduced-motion: reduce) {
    .animated {
        animation: none;
    }
}
```

### Disable Transitions

```css
@media (prefers-reduced-motion: reduce) {
    .transition {
        transition: none;
    }
}
```

## Alternative Approaches

### Instant Display

```css
@media (prefers-reduced-motion: reduce) {
    .fade-in {
        animation: none;
        opacity: 1;
    }
}
```

### Reduced Duration

```css
@media (prefers-reduced-motion: reduce) {
    .slide {
        animation-duration: 0.1s;
    }
}
```

## Best Practices

1. **Always respect**: Honor user preferences
2. **Provide alternatives**: Instant or reduced motion
3. **Test**: Test with reduced motion enabled
4. **Essential animations**: Keep essential animations
5. **Document**: Document your approach
6. **WCAG compliance**: Meet accessibility guidelines

## Browser Support

- **prefers-reduced-motion**: Chrome 74+, Firefox 103+, Safari 10.1+, Edge 79+
- Good support in modern browsers

## Common Use Cases

1. **Animations**: Respect reduced motion for animations
2. **Transitions**: Reduce or disable transitions
3. **Hover Effects**: Simplify hover effects
4. **Page Transitions**: Reduce page transitions
5. **Loading States**: Simplify loading animations
6. **Interactive Elements**: Reduce motion for interactions

## Practice Exercises

1. Create animations that respect prefers-reduced-motion
2. Provide alternative styles for reduced motion
3. Design accessible animations and transitions
4. Test with reduced motion enabled
5. Implement instant alternatives
6. Document your reduced motion approach

## Additional Resources

- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WCAG: Animation](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)
- [A11y Project: Reduced Motion](https://www.a11yproject.com/posts/understanding-animation-and-accessibility/)

# CSS Transitions

## Overview
CSS Transitions allow you to smoothly animate property changes over a specified duration. They provide a simple way to create smooth, animated effects when elements change state (like on hover or focus) without using JavaScript.

## Why Use Transitions?

- **Smooth Animations**: Create smooth, professional animations
- **No JavaScript**: Pure CSS solution
- **Performance**: Hardware-accelerated
- **User Experience**: Better visual feedback
- **Easy to Implement**: Simple syntax

## Basic Syntax

```css
.element {
    transition: property duration timing-function delay;
}
```

### Shorthand

```css
.element {
    transition: all 0.3s ease;
}
```

### Longhand

```css
.element {
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
```

## Transition Properties

### transition-property

Specifies which properties to transition.

```css
/* Single property */
.element {
    transition-property: background-color;
}

/* Multiple properties */
.element {
    transition-property: background-color, transform, opacity;
}

/* All properties */
.element {
    transition-property: all;
}
```

### transition-duration

Specifies how long the transition takes.

```css
.element {
    transition-duration: 0.3s;
    /* or */
    transition-duration: 300ms;
}
```

### transition-timing-function

Controls the speed curve of the transition.

```css
.element {
    transition-timing-function: ease;
    /* Options: ease, linear, ease-in, ease-out, ease-in-out */
}
```

### transition-delay

Specifies a delay before the transition starts.

```css
.element {
    transition-delay: 0.5s;
}
```

## Common Timing Functions

- **ease** - Slow start, fast middle, slow end (default)
- **linear** - Constant speed
- **ease-in** - Slow start
- **ease-out** - Slow end
- **ease-in-out** - Slow start and end
- **cubic-bezier()** - Custom timing function

## Common Patterns

### Button Hover

```css
.button {
    background: blue;
    transition: background 0.3s ease, transform 0.2s ease;
}

.button:hover {
    background: darkblue;
    transform: translateY(-2px);
}
```

### Card Hover

```css
.card {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

### Color Transition

```css
.link {
    color: blue;
    transition: color 0.3s ease;
}

.link:hover {
    color: red;
}
```

## Best Practices

1. **Use appropriate duration**: 0.2s-0.5s for most transitions
2. **Avoid transitioning all properties**: Specify only needed properties
3. **Use hardware-accelerated properties**: transform, opacity
4. **Test performance**: Ensure smooth animations
5. **Provide fallbacks**: Works without transitions
6. **Consider accessibility**: Respect prefers-reduced-motion
7. **Use meaningful timing**: Match timing to user expectations

## Browser Support

- **CSS Transitions**: Chrome 26+, Firefox 16+, Safari 6.1+, Edge 12+
- Universal support in all modern browsers

## Performance Tips

1. **Use transform and opacity**: These are hardware-accelerated
2. **Avoid transitioning layout properties**: width, height, margin, padding
3. **Use will-change**: Hint browser about upcoming changes
4. **Limit simultaneous transitions**: Too many can impact performance

## Common Use Cases

1. **Button Hover Effects**: Smooth color and transform changes
2. **Card Interactions**: Hover effects on cards
3. **Form Inputs**: Focus state transitions
4. **Navigation**: Menu item hover effects
5. **Image Galleries**: Smooth image transitions
6. **Modals**: Smooth show/hide animations

## Practice Exercises

1. Create button hover effects with smooth transitions
2. Build card components with transition effects
3. Design navigation items with color transitions
4. Style form inputs with focus transitions
5. Create image hover effects
6. Build a modal with transition animations

## Additional Resources

- [MDN: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [CSS Tricks: Transitions](https://css-tricks.com/almanac/properties/t/transition/)
- [Can I Use: CSS Transitions](https://caniuse.com/css-transitions)

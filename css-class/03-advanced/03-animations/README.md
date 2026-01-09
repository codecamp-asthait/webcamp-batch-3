# CSS Animations

## Overview
CSS Animations allow you to create complex, multi-step animations using keyframes. Unlike transitions which animate between two states, animations can have multiple keyframes and can run automatically or be triggered by events.

## Why Use Animations?

- **Complex Animations**: Multiple keyframes for complex effects
- **Automatic Playback**: Can run automatically
- **Reusable**: Define once, use multiple times
- **Performance**: Hardware-accelerated
- **Control**: Fine-grained control over animation

## Basic Syntax

### Define Keyframes

```css
@keyframes animationName {
    from {
        /* Starting state */
    }
    to {
        /* Ending state */
    }
}
```

### Apply Animation

```css
.element {
    animation: animationName 2s ease infinite;
}
```

## Keyframe Syntax

### Percentage Keyframes

```css
@keyframes slide {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}
```

### From/To Keyframes

```css
@keyframes fade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
```

## Animation Properties

### animation-name

Specifies the name of the keyframe animation.

```css
.element {
    animation-name: slide;
}
```

### animation-duration

Specifies how long the animation takes.

```css
.element {
    animation-duration: 2s;
}
```

### animation-timing-function

Controls the speed curve.

```css
.element {
    animation-timing-function: ease;
}
```

### animation-delay

Specifies a delay before animation starts.

```css
.element {
    animation-delay: 1s;
}
```

### animation-iteration-count

Specifies how many times animation should play.

```css
.element {
    animation-iteration-count: 3;
    /* or */
    animation-iteration-count: infinite;
}
```

### animation-direction

Specifies animation direction.

```css
.element {
    animation-direction: normal | reverse | alternate | alternate-reverse;
}
```

### animation-fill-mode

Specifies how styles are applied before/after animation.

```css
.element {
    animation-fill-mode: none | forwards | backwards | both;
}
```

### animation-play-state

Controls whether animation is running or paused.

```css
.element {
    animation-play-state: running | paused;
}
```

## Shorthand

```css
.element {
    animation: name duration timing-function delay iteration-count direction fill-mode;
}
```

## Common Animations

### Bounce

```css
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-30px);
    }
}

.element {
    animation: bounce 1s ease infinite;
}
```

### Pulse

```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

.element {
    animation: pulse 1.5s ease infinite;
}
```

### Spin

```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.element {
    animation: spin 2s linear infinite;
}
```

### Fade In

```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.element {
    animation: fadeIn 1s ease;
}
```

## Best Practices

1. **Use transform and opacity**: Hardware-accelerated
2. **Avoid animating layout properties**: width, height, margin
3. **Set appropriate duration**: 0.2s-1s for most animations
4. **Consider performance**: Limit simultaneous animations
5. **Provide controls**: Allow users to pause/stop
6. **Respect preferences**: Honor prefers-reduced-motion
7. **Test thoroughly**: Test on different devices

## Browser Support

- **CSS Animations**: Chrome 43+, Firefox 16+, Safari 9+, Edge 12+
- Universal support in all modern browsers

## Performance Tips

1. **Use transform and opacity**: Best performance
2. **Avoid layout triggers**: Don't animate width/height
3. **Use will-change**: Hint browser about animations
4. **Limit keyframes**: Too many can impact performance
5. **Test on mobile**: Ensure smooth on lower-end devices

## Common Use Cases

1. **Loading Spinners**: Rotating indicators
2. **Button Effects**: Pulse, shake animations
3. **Page Transitions**: Fade, slide effects
4. **Notifications**: Slide-in animations
5. **Hover Effects**: Complex hover animations
6. **Loading States**: Skeleton screens

## Practice Exercises

1. Create a loading spinner animation
2. Build a button with pulse animation
3. Design a card entrance animation
4. Create a notification slide-in animation
5. Build a skeleton loading animation
6. Design a hover effect with animation

## Additional Resources

- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Tricks: Animations](https://css-tricks.com/almanac/properties/a/animation/)
- [Can I Use: CSS Animations](https://caniuse.com/css-animation)

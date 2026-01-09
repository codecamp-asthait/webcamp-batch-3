# CSS Scroll Snap

## Overview
CSS Scroll Snap allows you to create smooth, controlled scrolling experiences. It snaps scroll positions to specific points, creating a carousel-like or slide-show effect without JavaScript. Perfect for image galleries, card carousels, and full-page sections.

## Why Use Scroll Snap?

- **Better UX**: Smooth, predictable scrolling behavior
- **No JavaScript**: Pure CSS solution
- **Mobile Friendly**: Great for touch scrolling
- **Performance**: Hardware-accelerated
- **Accessibility**: Works with keyboard navigation

## scroll-snap-type Property

Defines the scroll container's snap behavior.

### Syntax
```css
.container {
    scroll-snap-type: x mandatory;
    /* or */
    scroll-snap-type: y proximity;
}
```

### Values

- **none** - No scroll snapping
- **x** - Horizontal snapping
- **y** - Vertical snapping
- **block** - Block-axis snapping (vertical in horizontal writing)
- **inline** - Inline-axis snapping (horizontal in horizontal writing)
- **both** - Both axes snapping
- **mandatory** - Always snaps to position
- **proximity** - Snaps when close enough

### Examples

```css
/* Horizontal mandatory snap */
.horizontal-scroll {
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    display: flex;
}

/* Vertical proximity snap */
.vertical-scroll {
    scroll-snap-type: y proximity;
    overflow-y: auto;
    height: 400px;
}
```

## scroll-snap-align Property

Defines how child elements align within the scroll container.

### Syntax
```css
.item {
    scroll-snap-align: start;
}
```

### Values

- **none** - No alignment
- **start** - Aligns to start of container
- **end** - Aligns to end of container
- **center** - Aligns to center of container

### Examples

```css
.slide {
    scroll-snap-align: start;
    flex: 0 0 100%;
}

.card {
    scroll-snap-align: center;
    flex: 0 0 300px;
}
```

## scroll-snap-stop Property

Controls whether scrolling must stop at snap points.

### Syntax
```css
.item {
    scroll-snap-stop: always;
}
```

### Values

- **normal** - Can skip snap points
- **always** - Must stop at each snap point

## Common Patterns

### Horizontal Image Gallery

```css
.gallery {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
}

.gallery-item {
    flex: 0 0 300px;
    scroll-snap-align: start;
    scroll-snap-stop: always;
}
```

### Vertical Full-Page Sections

```css
.container {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
}

.section {
    height: 100vh;
    scroll-snap-align: start;
}
```

### Card Carousel

```css
.carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
}

.card {
    flex: 0 0 280px;
    scroll-snap-align: center;
}
```

## Best Practices

1. **Mandatory vs Proximity**: Use mandatory for strict snapping, proximity for flexible
2. **Performance**: Works best with hardware acceleration
3. **Touch Scrolling**: Add `-webkit-overflow-scrolling: touch` for iOS
4. **Gap Spacing**: Use gap property for spacing between items
5. **Accessibility**: Ensure keyboard navigation works
6. **Testing**: Test on different devices and browsers
7. **Fallbacks**: Provide fallback for browsers without support

## Browser Support

- **scroll-snap-type**: Chrome 69+, Firefox 68+, Safari 11+, Edge 79+
- Use feature queries for progressive enhancement:
  ```css
  @supports (scroll-snap-type: x mandatory) {
      .container {
          scroll-snap-type: x mandatory;
      }
  }
  ```

## Performance Considerations

- Scroll snap is hardware-accelerated
- Works best with fixed-size items
- Avoid too many snap points
- Test on mobile devices

## Common Use Cases

1. **Image Galleries**: Horizontal scrolling image galleries
2. **Card Carousels**: Product or content card carousels
3. **Full-Page Sections**: Vertical full-page scrolling
4. **Mobile Menus**: Scrollable navigation menus
5. **Timeline Views**: Horizontal timeline scrolling
6. **Dashboard Widgets**: Scrollable widget containers

## Practice Exercises

1. Create a horizontal image gallery with scroll snap
2. Build a vertical full-page scroll experience
3. Design a card carousel with center alignment
4. Create a mobile-friendly scrollable menu
5. Build a timeline with horizontal scroll snap
6. Design a dashboard with multiple scroll areas

## Additional Resources

- [MDN: scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
- [MDN: scroll-snap-align](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)
- [CSS Tricks: Scroll Snap](https://css-tricks.com/practical-css-scroll-snapping/)
- [Can I Use: CSS Scroll Snap](https://caniuse.com/css-scroll-snap)

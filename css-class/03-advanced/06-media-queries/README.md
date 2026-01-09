# Media Queries and Responsive Design

## Overview
Media queries allow you to apply CSS styles based on device characteristics like screen width, height, orientation, and resolution. They're essential for creating responsive designs that work across all devices - from mobile phones to large desktop screens.

## Why Use Media Queries?

- **Responsive Design**: Adapt layouts to different screen sizes
- **Better UX**: Optimize experience for each device
- **Mobile-First**: Design for mobile, enhance for desktop
- **Flexibility**: One codebase for all devices
- **Modern Standard**: Essential for modern web development

## Basic Syntax

```css
@media (condition) {
    /* CSS rules */
}
```

## Common Media Query Types

### Width-Based Queries

```css
/* Maximum width */
@media (max-width: 768px) {
    .element {
        /* Styles for screens up to 768px */
    }
}

/* Minimum width */
@media (min-width: 769px) {
    .element {
        /* Styles for screens 769px and above */
    }
}

/* Range */
@media (min-width: 768px) and (max-width: 1024px) {
    .element {
        /* Styles for tablets */
    }
}
```

### Orientation

```css
@media (orientation: portrait) {
    .element {
        /* Portrait styles */
    }
}

@media (orientation: landscape) {
    .element {
        /* Landscape styles */
    }
}
```

### Multiple Conditions

```css
@media (min-width: 768px) and (orientation: landscape) {
    .element {
        /* Styles for landscape tablets */
    }
}
```

## Common Breakpoints

### Mobile First Approach

```css
/* Mobile (default) */
.element {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .element {
        width: 50%;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .element {
        width: 33.333%;
    }
}
```

### Desktop First Approach

```css
/* Desktop (default) */
.element {
    width: 33.333%;
}

/* Tablet */
@media (max-width: 1024px) {
    .element {
        width: 50%;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .element {
        width: 100%;
    }
}
```

## Common Breakpoint Values

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## Common Patterns

### Responsive Grid

```css
.grid {
    display: grid;
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### Responsive Typography

```css
.heading {
    font-size: 2em;
}

@media (min-width: 768px) {
    .heading {
        font-size: 2.5em;
    }
}

@media (min-width: 1024px) {
    .heading {
        font-size: 3em;
    }
}
```

### Responsive Navigation

```css
.nav-menu {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .nav-menu {
        flex-direction: row;
    }
}
```

## Best Practices

1. **Mobile-First**: Start with mobile, enhance for larger screens
2. **Use relative units**: em, rem, %, vw, vh
3. **Test thoroughly**: Test on real devices
4. **Breakpoint strategy**: Use consistent breakpoints
5. **Performance**: Don't overuse media queries
6. **Content first**: Design around content, not devices
7. **Flexible images**: Use max-width: 100% for images

## Browser Support

- **Media Queries**: Chrome 1+, Firefox 3.5+, Safari 4+, Edge 12+
- Universal support in all modern browsers

## Common Use Cases

1. **Responsive Layouts**: Adapt grid and flexbox layouts
2. **Navigation**: Mobile menu vs desktop menu
3. **Typography**: Scale text for different screens
4. **Images**: Responsive image sizing
5. **Forms**: Optimize forms for mobile
6. **Cards**: Adjust card layouts

## Practice Exercises

1. Create a responsive navigation menu
2. Build a grid layout that adapts to screen size
3. Design typography that scales with viewport
4. Create a mobile-first responsive design
5. Build a responsive image gallery
6. Design a responsive form layout

## Additional Resources

- [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS Tricks: Media Queries](https://css-tricks.com/css-media-queries/)
- [Can I Use: Media Queries](https://caniuse.com/css-mediaqueries)

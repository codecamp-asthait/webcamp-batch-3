# CSS Container Queries

## Overview
Container queries allow you to apply styles based on the size of a containing element rather than the viewport. This enables truly component-based responsive design, where components adapt to their container's size, making them reusable and independent of the viewport.

## Why Use Container Queries?

- **Component-Based**: Components adapt to their container, not viewport
- **Reusability**: Same component works in different contexts
- **Better Architecture**: More maintainable and modular CSS
- **Flexibility**: Components work in sidebars, cards, grids, etc.
- **Modern CSS**: Latest responsive design technique

## Setting Up Container Queries

### container-type Property

```css
.container {
    container-type: inline-size;
    /* or */
    container-type: block-size;
    /* or */
    container-type: size;
}
```

### container-name Property

```css
.container {
    container-type: inline-size;
    container-name: card;
}
```

## Basic Container Query Syntax

```css
@container (min-width: 300px) {
    .element {
        /* Styles applied when container is at least 300px wide */
    }
}
```

### Named Container Queries

```css
@container card (min-width: 400px) {
    .card-content {
        display: flex;
    }
}
```

## Container Query Types

### Width Queries

```css
@container (min-width: 300px) {
    .element {
        font-size: 1.2em;
    }
}
```

### Height Queries

```css
@container (min-height: 200px) {
    .element {
        padding: 30px;
    }
}
```

### Inline Size Queries

```css
@container (min-inline-size: 400px) {
    .element {
        flex-direction: row;
    }
}
```

## Container Query Units

- **cqw** - Container query width (1% of container width)
- **cqh** - Container query height (1% of container height)
- **cqi** - Container query inline-size
- **cqb** - Container query block-size
- **cqmin** - Smaller of cqi or cqb
- **cqmax** - Larger of cqi or cqb

### Example

```css
.element {
    width: 50cqw; /* 50% of container width */
    height: 30cqh; /* 30% of container height */
}
```

## Common Patterns

### Responsive Card Component

```css
.card-container {
    container-type: inline-size;
    container-name: card;
}

.card {
    display: flex;
    flex-direction: column;
}

@container card (min-width: 400px) {
    .card {
        flex-direction: row;
    }
}
```

### Sidebar Layout

```css
.layout {
    container-type: inline-size;
    container-name: layout;
    display: flex;
}

@container layout (max-width: 600px) {
    .layout {
        flex-direction: column;
    }
}
```

## Best Practices

1. **Set container-type**: Always define container-type on parent
2. **Use named containers**: Makes queries more maintainable
3. **Combine with Grid/Flexbox**: Works great with modern layouts
4. **Test thoroughly**: Test components in different containers
5. **Progressive enhancement**: Provide fallbacks for older browsers
6. **Performance**: Container queries are efficient
7. **Naming**: Use descriptive container names

## Browser Support

- **Container Queries**: Chrome 105+, Firefox 110+, Safari 16+, Edge 105+
- Use feature queries for progressive enhancement:
  ```css
  @supports (container-type: inline-size) {
      .container {
          container-type: inline-size;
      }
  }
  ```

## Fallback Strategy

```css
/* Fallback using media queries */
.card {
    display: flex;
    flex-direction: column;
}

@media (min-width: 400px) {
    .card {
        flex-direction: row;
    }
}

/* Container query override */
@supports (container-type: inline-size) {
    .card-container {
        container-type: inline-size;
    }
    
    @container (min-width: 400px) {
        .card {
            flex-direction: row;
        }
    }
}
```

## Common Use Cases

1. **Card Components**: Adapt card layout to container size
2. **Sidebars**: Responsive sidebar layouts
3. **Grid Items**: Components in CSS Grid
4. **Modals**: Responsive modal content
5. **Widgets**: Dashboard widgets
6. **Navigation**: Responsive navigation components

## Practice Exercises

1. Create a card component that adapts to its container
2. Build a sidebar layout using container queries
3. Design a responsive grid using container queries
4. Create a component that switches layout at different container sizes
5. Build a dashboard widget with container queries
6. Design a modal that adapts to its container

## Additional Resources

- [MDN: Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [CSS Tricks: Container Queries](https://css-tricks.com/a-complete-guide-to-css-container-queries/)
- [Can I Use: Container Queries](https://caniuse.com/css-container-queries)

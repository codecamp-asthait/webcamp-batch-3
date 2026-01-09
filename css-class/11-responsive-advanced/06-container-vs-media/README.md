# Container Queries vs Media Queries

## Understanding the Difference

### Media Queries
Media queries respond to **viewport size** - the browser window:

```css
/* Viewport is wider than 768px */
@media (min-width: 768px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

**Limitation**: A component looks different based on viewport size, not the space available to it.

### Container Queries
Container queries respond to **container size** - the parent element:

```css
/* Parent container is wider than 400px */
@container (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

**Benefit**: The same component responds to its actual available space, not viewport.

## When to Use Each

### Use Media Queries When:
- Designing layout for the entire page
- You need broad, page-level adjustments
- Supporting older browsers is critical
- Viewport size is the primary concern
- You''re working with fixed layouts

### Use Container Queries When:
- Building reusable, flexible components
- The same component appears in different contexts
- Component behavior should be independent
- You need responsive components within components
- Future-proofing your component library

## Container Query Syntax

### Container Type
Define which component is the container:

```css
/* Inline-size: respond to container width */
.sidebar {
    container-type: inline-size;
}

/* Size: respond to both width and height */
.widget {
    container-type: size;
}
```

### Named Containers
Query specific parent containers:

```css
.page-layout {
    container-type: inline-size;
    container-name: page;
}

@container page (min-width: 800px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

### Container Size Units
New units relative to container dimensions:

```css
/* Percentage of container width */
.item {
    width: 50cqw;  /* 50% of container width */
    padding: 2cqh;  /* 2% of container height */
}

/* Minimum of width or height */
.item {
    font-size: 2cqmin;  /* 2% of smaller dimension */
    border: 1cqmax;     /* 1% of larger dimension */
}
```

## Practical Examples

### Card Component - Media Query Approach

```css
.card {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

**Problem**: Card layout depends on viewport, not where it''s used.

### Card Component - Container Query Approach

```css
.card {
    container-type: inline-size;
}

.card-inner {
    display: flex;
    flex-direction: column;
}

@container (min-width: 300px) {
    .card-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

**Benefit**: Card layout depends on available space, making it reusable.

## Real-World Scenario

Imagine a sidebar and main content area:

### With Media Queries:
```css
/* Sidebar layout on mobile */
@media (max-width: 767px) {
    .card { display: block; }
}

/* Sidebar layout on desktop */
@media (min-width: 768px) {
    .card { 
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

Sidebar cards always look like mobile layout on mobile, even when sidebar is wide.

### With Container Queries:
```css
.sidebar {
    container-type: inline-size;
}

@container (min-width: 300px) {
    .card { 
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

Sidebar cards adapt to actual sidebar width, whether on mobile or desktop.

## Browser Support and Fallbacks

### Current Support (2024)
- Chrome/Edge 105+
- Firefox: Experimental, behind flag
- Safari: Experimental, behind flag
- Mobile browsers: Limited

### Progressive Enhancement
```css
/* Fallback for browsers without container queries */
.card {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

/* Override if container queries are supported */
@supports (container-type: inline-size) {
    .card {
        display: flex;
        flex-direction: column;
    }

    @container (min-width: 400px) {
        .card {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
}
```

## Container Query vs Media Query Comparison

| Aspect | Media Queries | Container Queries |
|--------|---------------|-------------------|
| Response to | Viewport size | Container size |
| Best for | Page layout | Component layout |
| Browser support | Excellent | Modern only |
| Reusability | Limited | Excellent |
| Complexity | Simple | Moderate |
| Performance | Excellent | Good |

## Advanced Container Query Features

### Query Container Styles
Reference container properties in queries (proposed):

```css
@container style(--theme: dark) {
    .card {
        background: #333;
        color: white;
    }
}
```

### Container Relative Units

- `cqw`: 1% of container width
- `cqh`: 1% of container height
- `cqi`: 1% of container inline size
- `cqb`: 1% of container block size
- `cqmin`: 1% of smaller dimension
- `cqmax`: 1% of larger dimension

## Migration Strategy

### For Existing Projects:
1. Keep media queries for page layout
2. Add container queries to components
3. Test in supported browsers
4. Provide fallbacks for older browsers

### For New Projects:
1. Use container queries for components
2. Use media queries for page layout
3. Use @supports to detect support
4. Plan for progressive enhancement

## Best Practices

1. **Use media queries for layout** - Page-level structural changes
2. **Use container queries for components** - Reusable, context-independent styling
3. **Test in multiple contexts** - Sidebar, main content, cards within cards
4. **Provide fallbacks** - For browsers without container query support
5. **Document your approach** - Clarify which technique is used where
6. **Use container-type: inline-size** - Most common use case
7. **Name containers** - For complex multi-container scenarios
8. **Avoid deeply nested containers** - Can impact performance
9. **Use container units** - cqw, cqh for container-relative sizing
10. **Monitor browser support** - Check Can I Use for latest updates

## The Future of Responsive Design

Container queries represent the future of responsive design, enabling truly modular, reusable component systems. As browser support improves, they will likely become the primary way to build responsive components, while media queries remain for page layout and global viewport changes.

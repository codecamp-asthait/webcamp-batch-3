# CSS Positioning

## Overview
The `position` property defines how an element is positioned in the document. Understanding positioning is crucial for creating complex layouts and overlays.

## Position Values

### Static (Default)
```css
position: static;
```
- Default positioning
- Elements follow normal document flow
- `top`, `right`, `bottom`, `left`, `z-index` have no effect

### Relative
```css
position: relative;
top: 20px;
left: 30px;
```
- Positioned relative to its normal position
- Original space is preserved
- Can use `top`, `right`, `bottom`, `left`
- Creates positioning context for absolute children

### Absolute
```css
position: absolute;
top: 0;
right: 0;
```
- Removed from normal document flow
- Positioned relative to nearest positioned ancestor
- If no positioned ancestor, uses document body
- Doesn't take up space in layout

### Fixed
```css
position: fixed;
top: 0;
left: 0;
```
- Removed from normal document flow
- Positioned relative to viewport
- Stays in place when scrolling
- Great for navigation bars, modals

### Sticky
```css
position: sticky;
top: 0;
```
- Hybrid of relative and fixed
- Relative until scroll threshold, then becomes fixed
- Must specify at least one of: `top`, `right`, `bottom`, `left`
- Great for headers

## Z-Index

Controls stacking order of positioned elements:

```css
z-index: 1;    /* Lower values = behind */
z-index: 10;   /* Higher values = in front */
z-index: -1;   /* Behind static elements */
```

**Important**: Only works on positioned elements (not static)

## Positioning Properties

```css
top: 20px;      /* Distance from top */
right: 10px;    /* Distance from right */
bottom: 30px;   /* Distance from bottom */
left: 15px;     /* Distance from left */
```

## Common Patterns

### Center Absolute Element
```css
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### Full Coverage
```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### Sticky Header
```css
header {
    position: sticky;
    top: 0;
    z-index: 100;
}
```

### Corner Badge
```css
.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

## Stacking Context

Elements create a stacking context when:
- `position: absolute/relative/fixed/sticky` with `z-index` other than auto
- `opacity` less than 1
- `transform`, `filter`, `perspective`
- Flexbox/Grid with `z-index`

## Best Practices

1. Use relative positioning for small adjustments
2. Absolute positioning for overlays and tooltips
3. Fixed positioning for persistent UI elements
4. Sticky positioning for headers and navigation
5. Always set z-index explicitly when stacking
6. Remember: absolute elements use nearest positioned ancestor

## Common Issues

### Positioned Element Overflow
```css
.container {
    position: relative;
    overflow: hidden; /* Clips absolute children */
}
```

### Z-index Not Working
- Check if element is positioned
- Check for stacking contexts
- Verify parent hierarchy

### Sticky Not Working
- Parent must not have `overflow: hidden`
- Must specify threshold (top/bottom/left/right)
- Check browser support

## Browser Support

All positioning values are well supported across modern browsers. Sticky positioning requires prefixes for older browsers.

## Practice Exercises

1. Create a fixed navigation bar
2. Build a modal overlay
3. Position a badge on a card corner
4. Create a sticky sidebar
5. Center an element absolutely
6. Build a tooltip with positioning

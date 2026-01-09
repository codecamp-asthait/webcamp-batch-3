# Box Shadows

## What is Box Shadow?

The `box-shadow` property adds shadow effects to elements. Shadows can be used to create depth, emphasis, and visual hierarchy. They''re essential for modern, polished web design.

## Box Shadow Syntax

```css
box-shadow: [inset] <offset-x> <offset-y> [blur-radius] [spread-radius] [color];
```

### Parameters
- **offset-x**: Horizontal distance from element (positive = right)
- **offset-y**: Vertical distance from element (positive = down)
- **blur-radius**: How blurry the shadow is (optional, 0 = sharp)
- **spread-radius**: Expand or shrink shadow size (optional)
- **color**: Shadow color (default = black)
- **inset**: Shadow inside element instead of outside

## Basic Shadows

### Simple Drop Shadow
```css
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
```

### Multiple Shadows
Stack multiple shadows for complex effects:
```css
box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
```

### Inset Shadow
Shadow inside the element:
```css
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
```

## Shadow Variations

### Soft Shadow
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

### Hard Shadow
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
```

### Elevated Shadow
```css
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
```

### Long Shadow
```css
box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2),
            10px 10px 0 rgba(0, 0, 0, 0.15),
            15px 15px 0 rgba(0, 0, 0, 0.1);
```

## Colored Shadows

Shadows don''t have to be black:
```css
/* Red shadow */
box-shadow: 0 4px 6px rgba(255, 0, 0, 0.3);

/* Blue shadow */
box-shadow: 0 4px 6px rgba(0, 0, 255, 0.3);

/* Multiple colored shadows */
box-shadow: 5px 0 15px rgba(255, 0, 0, 0.3),
            -5px 0 15px rgba(0, 0, 255, 0.3);
```

## Animated Shadows

Animate shadows for interactive effects:
```css
.card {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
```

## Material Design Shadows

Google Material Design uses specific shadow elevations:

```css
/* Material Elevation 2 */
.elevation-2 {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

/* Material Elevation 4 */
.elevation-4 {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

/* Material Elevation 8 */
.elevation-8 {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
```

## Shadow Use Cases

### Cards and Containers
Elevate cards with shadows for depth:
```css
.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

### Buttons
Add shadows to buttons for press effect:
```css
button {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:active {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
```

### Navigation
Separate nav from content with shadow:
```css
nav {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Depth Layers
Create depth with varying shadow intensity:
```css
.layer-1 { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); }
.layer-2 { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12); }
.layer-3 { box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16); }
```

## Performance Considerations

- Shadows are GPU-accelerated in modern browsers
- Multiple shadows can impact performance if overused
- Blur radius affects performance more than spread radius
- Test on lower-end devices for performance

## Accessibility

- Don''t rely solely on shadows to convey information
- Ensure sufficient contrast around shadows
- Shadows should enhance, not obscure content
- Test with multiple color backgrounds

## Best Practices

1. **Use subtle shadows** - Shadows should enhance, not dominate
2. **Keep color opacity low** - 0.1 to 0.3 is usually sufficient
3. **Consistent shadows** - Use the same shadow pattern throughout
4. **Test on different backgrounds** - Shadows look different on different colors
5. **Animate shadows** - Transition shadows for smooth interactions
6. **Use inset sparingly** - Inset shadows can be hard to read
7. **Layer shadows** - Combine multiple shadows for depth
8. **Consider dark mode** - Adjust shadow opacity for dark backgrounds
9. **Don''t overuse blur** - Large blur values can look unnatural
10. **Test for readability** - Ensure shadows don''t harm readability

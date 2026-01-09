# Neumorphism

## What is Neumorphism?

Neumorphism (new skeuomorphism) is a design trend that creates a soft, extruded appearance using subtle shadows and highlights. It combines flat design with a tactile, 3D feel.

## Key Properties

### Shadows for Depth
Use light and dark shadows to create dimension:

```css
box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.7),
            inset 2px 2px 5px rgba(0, 0, 0, 0.1);
```

### Background Color
Use subtle, neutral colors (grays, off-whites):

```css
background: #e0e5ec;
```

### Soft Edges
Use large border-radius for smooth appearance:

```css
border-radius: 20px;
```

## Basic Neumorphic Button

```css
.neumorphic-button {
    background: #e0e5ec;
    border: none;
    border-radius: 20px;
    padding: 15px 40px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 5px 5px 10px #b8b9be,
                -5px -5px 10px #ffffff;
    transition: all 0.3s ease;
}

.neumorphic-button:hover {
    box-shadow: 3px 3px 7px #b8b9be,
                -3px -3px 7px #ffffff;
}

.neumorphic-button:active {
    box-shadow: inset 3px 3px 7px #b8b9be,
                inset -3px -3px 7px #ffffff;
}
```

## Neumorphic Card

```css
.neumorphic-card {
    background: #e0e5ec;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 5px 5px 15px #b8b9be,
                -5px -5px 15px #ffffff;
}
```

## Inset vs Outset Effects

### Outset (Raised)
```css
.neumorphic-raised {
    box-shadow: 5px 5px 10px #b8b9be,
                -5px -5px 10px #ffffff;
}
```

### Inset (Pressed)
```css
.neumorphic-pressed {
    box-shadow: inset 5px 5px 10px #b8b9be,
                inset -5px -5px 10px #ffffff;
}
```

## Color Variations

### Light Neumorphism
```css
.neumorphic-light {
    background: #f0f0f3;
    box-shadow: 0.5px 0.5px 3px #b8b8b8,
                -0.5px -0.5px 3px #ffffff;
}
```

### Medium Neumorphism
```css
.neumorphic-medium {
    background: #e0e5ec;
    box-shadow: 5px 5px 10px #b8b9be,
                -5px -5px 10px #ffffff;
}
```

### Dark Neumorphism
```css
.neumorphic-dark {
    background: #d1d5db;
    box-shadow: 5px 5px 10px #a0a0a8,
                -5px -5px 10px #f8f8fa;
}
```

## Neumorphic Input Fields

```css
input.neumorphic {
    background: #e0e5ec;
    border: none;
    border-radius: 20px;
    padding: 15px 20px;
    box-shadow: inset 2px 2px 5px #b8b9be,
                inset -2px -2px 5px #ffffff;
}

input.neumorphic:focus {
    outline: none;
    box-shadow: inset 3px 3px 7px #b8b9be,
                inset -3px -3px 7px #ffffff;
}
```

## Neumorphic Toggle

```css
.toggle {
    background: #e0e5ec;
    border-radius: 30px;
    padding: 3px;
    box-shadow: inset 2px 2px 5px #b8b9be,
                inset -2px -2px 5px #ffffff;
}

.toggle-switch {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #e0e5ec;
    box-shadow: 2px 2px 5px #b8b9be,
                -2px -2px 5px #ffffff;
    transition: transform 0.3s ease;
}

.toggle.active .toggle-switch {
    transform: translateX(24px);
}
```

## Advantages of Neumorphism

1. **Modern aesthetic** - Contemporary, polished look
2. **Tactile feel** - Creates sense of depth and tangibility
3. **Accessibility friendly** - Works well with dark mode
4. **Minimal design** - Reduces visual clutter
5. **Soft appearance** - Gentle on the eyes

## Disadvantages and Considerations

1. **Contrast issues** - Can reduce readability
2. **Limited color palette** - Works best with neutral colors
3. **Browser support** - Requires modern browsers for shadows
4. **Performance** - Multiple shadows can impact performance
5. **Accessibility** - Must ensure sufficient contrast

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- All modern browsers supported

## Best Practices

1. **Maintain high contrast** - Essential for readability
2. **Use neutral colors** - Grays and off-whites work best
3. **Test with high contrast mode** - Ensure accessibility
4. **Combine with other styles** - Don''t rely solely on shadows
5. **Provide clear focus states** - For keyboard navigation
6. **Test across devices** - Shadows appear different on screens
7. **Use consistent shadow direction** - Light from top-left
8. **Animate smoothly** - Transitions between states
9. **Consider dark mode** - Adapt shadows for dark backgrounds
10. **Keep it subtle** - Avoid excessive shadow depth

## Use Cases

- Button interfaces
- Card-based layouts
- Form inputs
- Toggle switches
- Navigation menus
- Dashboard designs
- Mobile applications
- Minimalist interfaces

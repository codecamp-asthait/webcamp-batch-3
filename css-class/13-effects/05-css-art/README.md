# CSS Art

## What is CSS Art?

CSS Art is the practice of creating visual art using pure CSS without images. It demonstrates CSS mastery and creative problem-solving through shapes, gradients, animations, and clever use of borders and shadows.

## Basic Shapes

### Circles
```css
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #667eea;
}
```

### Triangles
```css
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #667eea;
}
```

### Rectangles with Borders
```css
.rectangle {
    width: 100px;
    height: 50px;
    border: 3px solid #667eea;
    background: transparent;
}
```

## Advanced Shapes

### Stars
```css
.star {
    position: relative;
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 35px solid #667eea;
}

.star::after {
    content: "";
    position: absolute;
    top: -25px;
    left: -50px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 35px solid #667eea;
    transform: rotate(36deg);
}
```

### Hearts
```css
.heart {
    position: relative;
    width: 100px;
    height: 100px;
}

.heart::before,
.heart::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 160px;
    background: #667eea;
    border-radius: 100px 100px 0 0;
}

.heart::before {
    left: 100px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}
```

## Gradients and Patterns

### Linear Gradients
```css
.gradient {
    background: linear-gradient(90deg, red, orange, yellow, green, blue);
}
```

### Radial Gradients
```css
.radial {
    background: radial-gradient(circle, #667eea, #764ba2);
}
```

### Conic Gradients
```css
.conic {
    background: conic-gradient(from 0deg, red, yellow, lime, cyan, blue, magenta, red);
}
```

## Complex Art

### Faces
Create characters using basic shapes:
```css
/* Eyes */
.eye {
    width: 20px;
    height: 30px;
    background: black;
    border-radius: 50%;
}

/* Mouth */
.mouth {
    width: 80px;
    height: 40px;
    border: 2px solid black;
    border-top: none;
    border-radius: 0 0 80px 80px;
}
```

### Landscapes
Combine shapes and gradients for scenery

## Animated Art

### Rotating Shapes
```css
@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.animated {
    animation: rotate 2s linear infinite;
}
```

### Morphing Shapes
```css
@keyframes morph {
    0% { border-radius: 60% 40% 30% 70%; }
    50% { border-radius: 30% 60% 70% 40%; }
    100% { border-radius: 60% 40% 30% 70%; }
}

.blob {
    animation: morph 4s ease-in-out infinite;
}
```

## Use Cases

1. **Portfolio Projects** - Showcase CSS skills
2. **Demonstrations** - Teach CSS techniques
3. **Branding** - Create unique visual identities
4. **Animations** - Engage users with moving art
5. **Educational** - Learn advanced CSS properties

## Advanced Techniques

### Box-Shadow for Details
Use multiple box-shadows to create detailed designs

### CSS Masks
Control visibility of elements with complex shapes

### SVG with CSS
Combine SVG shapes with CSS styling

## Tools and Resources

- CSS Generators for shapes
- Color palette tools
- Animation libraries
- CSS art galleries for inspiration

## Performance Considerations

- Complex shapes with many pseudo-elements impact performance
- Animations can be resource-intensive
- Test on lower-end devices
- Use will-change for animated elements
- Consider reducing complexity for older browsers

## Accessibility

- CSS art is purely visual, provide text alternatives
- Avoid animations that trigger motion sensitivity
- Use sufficient color contrast
- Test with screen readers (provide fallback content)

## Best Practices

1. **Start simple** - Master basic shapes first
2. **Use meaningful names** - Comment your code
3. **Optimize animations** - Don''t sacrifice performance
4. **Test across browsers** - Ensure compatibility
5. **Provide fallbacks** - Support older browsers
6. **Document techniques** - Share knowledge
7. **Experiment creatively** - Push CSS boundaries
8. **Consider performance** - Monitor frame rates
9. **Maintain accessibility** - Include text alternatives
10. **Keep file size reasonable** - Minimize code complexity

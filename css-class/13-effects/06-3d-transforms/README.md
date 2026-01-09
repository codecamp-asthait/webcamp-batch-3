# 3D Transforms in CSS

## Overview
3D transforms allow you to manipulate elements in three-dimensional space. They work with the `transform` property and related properties to create realistic depth effects, rotations, and perspective transformations.

## Key Concepts

### What are 3D Transforms?
3D transforms extend 2D transforms by adding depth (Z-axis). This creates effects like:
- Rotating objects in 3D space
- Creating perspective illusions
- Building 3D scenes with CSS
- Creating interactive UI effects

### The 3D Coordinate System
- **X-axis**: Horizontal (left-right)
- **Y-axis**: Vertical (up-down)
- **Z-axis**: Depth (toward/away from viewer)

## 3D Transform Functions

### 1. **rotateX()**
Rotates element around the X-axis.

```css
.card {
    transform: rotateX(45deg);
}
```

**Parameters:**
- `angle`: Rotation angle in degrees (can be negative)

**Use Cases:**
- Flip cards horizontally
- Create 3D book effects
- Tilt UI elements

### 2. **rotateY()**
Rotates element around the Y-axis.

```css
.cube {
    transform: rotateY(45deg);
}
```

**Parameters:**
- `angle`: Rotation angle in degrees

**Use Cases:**
- Flip cards vertically
- Create 3D cube faces
- Rotate pages

### 3. **rotateZ()**
Rotates element around the Z-axis (similar to 2D rotate).

```css
.icon {
    transform: rotateZ(45deg);
}
```

### 4. **rotate3d()**
Rotates around a custom 3D axis.

```css
.element {
    transform: rotate3d(1, 1, 0, 45deg);
}
```

**Parameters:**
- `x, y, z`: Axis direction (normalized)
- `angle`: Rotation angle

### 5. **translateZ()**
Moves element along Z-axis.

```css
.element {
    transform: translateZ(50px);
}
```

**Parameters:**
- `length`: Distance in pixels/units (positive = toward viewer)

### 6. **translate3d()**
Moves element in 3D space.

```css
.element {
    transform: translate3d(50px, 50px, 20px);
}
```

**Parameters:**
- `x, y, z`: Distances for each axis

### 7. **scaleZ()**
Scales element along Z-axis.

```css
.element {
    transform: scaleZ(1.5);
}
```

**Note:** Has limited visual effect without perspective.

### 8. **scale3d()**
Scales in all three dimensions.

```css
.element {
    transform: scale3d(1.5, 1.2, 0.8);
}
```

## Related Properties

### **transform-origin**
Sets the point around which transformation occurs.

```css
.element {
    transform-origin: center center;
    transform: rotateX(45deg);
}
```

**Common Values:**
- `center` (default)
- `50% 50%` (percentage-based)
- `left top`, `right bottom` (keyword-based)
- Pixel values: `100px 50px`

For 3D transforms:
```css
.element {
    transform-origin: 50% 50% 0;
}
```

### **transform-style**
Controls how nested elements render in 3D space.

```css
.container {
    transform-style: preserve-3d;
}
```

**Values:**
- `flat` (default): 2D rendering
- `preserve-3d`: Enable 3D for children

### **perspective**
Defines viewing distance for 3D effects.

```css
.scene {
    perspective: 1000px;
}
```

**Common Values:**
- `600px` - Strong perspective
- `1000px` - Moderate perspective
- `2000px` - Subtle perspective

### **perspective-origin**
Sets the vanishing point for perspective.

```css
.scene {
    perspective: 1000px;
    perspective-origin: 50% 50%;
}
```

### **backface-visibility**
Controls visibility of element''s back side.

```css
.card {
    backface-visibility: hidden;
}
```

**Values:**
- `visible` (default)
- `hidden`: Hide back face

## Combining Multiple Transforms

Stack transforms with spaces:

```css
.element {
    transform: rotateX(30deg) rotateY(45deg) translateZ(50px);
}
```

**Order matters!** Transforms are applied left to right.

## Common Patterns

### 3D Card Flip
```css
.card {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card.flipped {
    transform: rotateY(180deg);
}

.front, .back {
    backface-visibility: hidden;
}

.back {
    transform: rotateY(180deg);
}
```

### 3D Cube
```css
.cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
}

.face {
    position: absolute;
    width: 200px;
    height: 200px;
    backface-visibility: hidden;
}

.front  { transform: translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }
```

### Floating Card Effect
```css
.card {
    transition: transform 0.3s;
}

.card:hover {
    transform: translateZ(30px) rotateX(5deg) rotateY(-5deg);
}
```

## Transform Functions Table

| Function | Purpose |
|----------|---------|
| `rotateX()` | Rotate around X-axis |
| `rotateY()` | Rotate around Y-axis |
| `rotateZ()` | Rotate around Z-axis |
| `rotate3d()` | Rotate around custom axis |
| `translateZ()` | Move along Z-axis |
| `translate3d()` | Move in 3D space |
| `scaleZ()` | Scale along Z-axis |
| `scale3d()` | Scale in 3D space |

## Performance Considerations

1. **Use `will-change` for animations:**
```css
.animated {
    will-change: transform;
}
```

2. **GPU Acceleration:**
   - 3D transforms trigger GPU acceleration
   - Better performance for animations

3. **Backface Visibility:**
   - Use `backface-visibility: hidden` for hidden faces
   - Reduces rendering overhead

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| 3D Transforms | 12+ | 10+ | 4+ | 12+ |
| preserve-3d | 12+ | 10+ | 4+ | 12+ |
| perspective | 12+ | 10+ | 4+ | 12+ |

## Best Practices

1. **Use perspective with 3D rotations** - More realistic effect
2. **Combine with transitions** - Smooth animations
3. **Test on devices** - 3D may perform differently on mobile
4. **Use transform for animations** - Better performance than position changes
5. **Hide back faces** - When appropriate for visual clarity
6. **Group related elements** - Use transform-style: preserve-3d
7. **Consider accessibility** - Reduce motion with `prefers-reduced-motion`
8. **Optimize for performance** - Not all browsers render equally

## Summary

3D transforms bring depth and dimension to web interfaces. Key points:
- Use `rotateX()`, `rotateY()`, `rotateZ()` for 3D rotation
- Combine with `perspective` for realistic effects
- Use `transform-origin` to control pivot points
- `backface-visibility: hidden` hides back sides
- Combine multiple transforms for complex effects
- GPU-accelerated for smooth animations

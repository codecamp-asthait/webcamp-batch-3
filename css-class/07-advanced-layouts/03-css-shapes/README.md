# CSS Shapes

## Overview
CSS Shapes allow you to wrap content around non-rectangular shapes, creating more interesting and creative layouts inspired by print design.

## Basic Properties

### shape-outside
Defines the shape around which content flows.

```css
.circle {
    shape-outside: circle(50%);
    width: 200px;
    height: 200px;
    float: left;
}
```

## Shape Functions

### circle()
Creates a circular shape:
```css
.element {
    shape-outside: circle(50% at center);
}
```

### ellipse()
Creates an elliptical shape:
```css
.element {
    shape-outside: ellipse(30% 40% at 50% 50%);
}
```

### polygon()
Creates custom polygon shapes:
```css
.element {
    shape-outside: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
```

### inset()
Creates rectangular shapes with rounded corners:
```css
.element {
    shape-outside: inset(20px round 10px);
}
```

## Shape Margin
Controls spacing between content and shape boundary:
```css
.element {
    shape-outside: circle(50%);
    shape-margin: 20px;
}
```

## Image-based Shapes
Use image transparency for complex shapes:
```css
.element {
    shape-outside: url(shape.png);
    shape-image-threshold: 0.5;
}
```

## Browser Support
Supported in modern browsers. Check caniuse.com for specifics.

## Best Practices
1. Use for text wrapping only
2. Keep shapes simple
3. Test readability
4. Provide fallbacks
5. Consider accessibility impact

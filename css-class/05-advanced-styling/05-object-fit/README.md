# Object-fit and Object-position

## Overview
The `object-fit` property controls how replaced elements (like images and videos) are resized to fit their container. The `object-position` property controls the positioning of the object within its container. These properties are essential for responsive image handling.

## Why Use Object-fit?

- **Responsive Images**: Handle images of different aspect ratios
- **Consistent Layouts**: Maintain consistent sizing across images
- **No Distortion**: Avoid stretching or squishing images
- **Better Control**: Precise control over image display
- **Modern CSS**: Native solution without JavaScript

## object-fit Property

### Syntax
```css
img {
    object-fit: cover;
}
```

### Values

1. **fill** - Stretches the object to fill the container (may distort)
2. **contain** - Scales object to fit entirely within container
3. **cover** - Scales object to fill container (may crop)
4. **none** - Object keeps original size
5. **scale-down** - Like none or contain, whichever is smaller

### Examples

```css
/* Fill container (may distort) */
.image-fill {
    width: 100%;
    height: 200px;
    object-fit: fill;
}

/* Fit entire image */
.image-contain {
    width: 100%;
    height: 200px;
    object-fit: contain;
}

/* Fill container, crop if needed */
.image-cover {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

/* Keep original size */
.image-none {
    width: 100%;
    height: 200px;
    object-fit: none;
}
```

## object-position Property

Controls where the object is positioned within its container.

### Syntax
```css
img {
    object-position: center top;
}
```

### Values

- **Keywords**: center, top, bottom, left, right
- **Percentages**: 25% 75%
- **Lengths**: 20px 30px
- **Combinations**: center top, left bottom, etc.

### Examples

```css
/* Center the image */
.image-center {
    object-fit: cover;
    object-position: center;
}

/* Position at top */
.image-top {
    object-fit: cover;
    object-position: top;
}

/* Custom position */
.image-custom {
    object-fit: cover;
    object-position: 25% 75%;
}
```

## Common Patterns

### Profile Pictures

```css
.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
```

### Image Gallery

```css
.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
}
```

### Hero Images

```css
.hero-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}
```

### Thumbnails

```css
.thumbnail {
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
}
```

## Best Practices

1. **Use cover for galleries**: Maintains consistent sizing
2. **Use contain for logos**: Preserves aspect ratio
3. **Set dimensions**: Always set width and height
4. **Combine with aspect-ratio**: For modern responsive design
5. **Test different images**: Ensure it works with various aspect ratios
6. **Accessibility**: Provide alt text for all images
7. **Performance**: Optimize images before using object-fit

## Browser Support

- **object-fit**: Chrome 31+, Firefox 36+, Safari 10+, Edge 16+
- **object-position**: Chrome 31+, Firefox 36+, Safari 10+, Edge 16+
- Use feature queries for progressive enhancement:
  ```css
  @supports (object-fit: cover) {
      img {
          object-fit: cover;
      }
  }
  ```

## Common Use Cases

1. **Image Galleries**: Consistent thumbnail sizing
2. **Profile Pictures**: Circular or square avatars
3. **Hero Images**: Full-width background images
4. **Card Images**: Consistent card image sizing
5. **Video Players**: Responsive video containers
6. **Product Images**: E-commerce product displays

## Practice Exercises

1. Create a responsive image gallery with cover fit
2. Build a profile picture component with circular crop
3. Design a hero section with positioned background image
4. Create a card layout with properly fitted images
5. Build a thumbnail grid with consistent sizing
6. Design a video player with object-fit

## Additional Resources

- [MDN: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [MDN: object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- [CSS Tricks: object-fit](https://css-tricks.com/almanac/properties/o/object-fit/)
- [Can I Use: object-fit](https://caniuse.com/object-fit)

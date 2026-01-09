# CSS Aspect Ratio

## Overview
The `aspect-ratio` property allows you to set a preferred aspect ratio for an element. This is especially useful for responsive images, videos, and containers, eliminating the need for padding hacks or JavaScript calculations. It's a modern CSS solution for maintaining consistent proportions.

## Why Use Aspect Ratio?

- **Responsive Design**: Maintain consistent proportions across screen sizes
- **No Padding Hacks**: Eliminates the need for percentage padding tricks
- **Simpler Code**: Clean, semantic CSS
- **Better Performance**: No JavaScript calculations needed
- **Modern Standard**: Native CSS solution

## Basic Syntax

```css
.element {
    aspect-ratio: 16 / 9;
    /* or */
    aspect-ratio: 1;
}
```

## Common Aspect Ratios

### Square (1:1)
```css
.square {
    aspect-ratio: 1 / 1;
    /* or */
    aspect-ratio: 1;
}
```

### Widescreen (16:9)
```css
.widescreen {
    aspect-ratio: 16 / 9;
}
```

### Standard (4:3)
```css
.standard {
    aspect-ratio: 4 / 3;
}
```

### Ultrawide (21:9)
```css
.ultrawide {
    aspect-ratio: 21 / 9;
}
```

### Portrait (9:16)
```css
.portrait {
    aspect-ratio: 9 / 16;
}
```

## Common Patterns

### Image Containers

```css
.image-container {
    width: 100%;
    aspect-ratio: 16 / 9;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Video Embeds

```css
.video-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    position: relative;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

### Card Layouts

```css
.card {
    width: 100%;
}

.card-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}
```

### Gallery Grid

```css
.gallery-item {
    aspect-ratio: 1 / 1;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Combining with Object-fit

```css
.responsive-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}
```

## Best Practices

1. **Set width or height**: Always set at least one dimension
2. **Use with object-fit**: Combine for responsive images
3. **Common ratios**: Use standard ratios (16:9, 4:3, 1:1)
4. **Responsive**: Works great with max-width
5. **Fallbacks**: Provide fallback for older browsers
6. **Testing**: Test on different screen sizes
7. **Performance**: More efficient than padding hacks

## Browser Support

- **aspect-ratio**: Chrome 88+, Firefox 89+, Safari 15+, Edge 88+
- Use feature queries for progressive enhancement:
  ```css
  @supports (aspect-ratio: 16 / 9) {
      .container {
          aspect-ratio: 16 / 9;
      }
  }
  ```

## Fallback for Older Browsers

```css
.container {
    /* Fallback */
    height: 0;
    padding-bottom: 56.25%; /* 16:9 ratio */
}

@supports (aspect-ratio: 16 / 9) {
    .container {
        padding-bottom: 0;
        aspect-ratio: 16 / 9;
    }
}
```

## Common Use Cases

1. **Image Galleries**: Consistent image container sizes
2. **Video Embeds**: Responsive video containers
3. **Card Layouts**: Consistent card image ratios
4. **Thumbnails**: Square or standard ratio thumbnails
5. **Hero Images**: Full-width hero sections
6. **Product Images**: E-commerce product displays

## Practice Exercises

1. Create a responsive image gallery with consistent ratios
2. Build a video embed container with 16:9 ratio
3. Design a card layout with square image containers
4. Create a responsive grid with different aspect ratios
5. Build a thumbnail gallery with 1:1 ratio
6. Design a hero section with flexible aspect ratio

## Additional Resources

- [MDN: aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
- [CSS Tricks: aspect-ratio](https://css-tricks.com/almanac/properties/a/aspect-ratio/)
- [Can I Use: aspect-ratio](https://caniuse.com/mdn-css_properties_aspect-ratio)

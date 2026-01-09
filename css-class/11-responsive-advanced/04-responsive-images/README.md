# Responsive Images

## Why Responsive Images Matter

Different devices need different image sizes and formats. Serving large desktop images to mobile devices wastes bandwidth and slows down pages. Responsive images ensure optimal file sizes and visual quality for every device.

## Image Size Units

Images should be responsive to their containers:
```css
/* Responsive images */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* SVG responsiveness */
svg {
    max-width: 100%;
    height: auto;
}
```

## The Picture Element

The `<picture>` element provides multiple image sources for different conditions:

```html
<picture>
    <!-- Mobile: portrait orientation -->
    <source media="(max-width: 479px)" srcset="image-mobile.jpg">
    
    <!-- Tablet: medium screens -->
    <source media="(max-width: 767px)" srcset="image-tablet.jpg">
    
    <!-- Desktop: large screens -->
    <source media="(min-width: 768px)" srcset="image-desktop.jpg">
    
    <!-- Fallback for older browsers -->
    <img src="image-default.jpg" alt="Description">
</picture>
```

## The srcset Attribute

Serve different resolution images based on device pixel ratio:

```html
<!-- Basic srcset -->
<img src="image.jpg" 
     srcset="image-small.jpg 480w,
             image-medium.jpg 768w,
             image-large.jpg 1280w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
     alt="Responsive image">

<!-- Device pixel ratio -->
<img src="image.jpg"
     srcset="image-1x.jpg 1x,
             image-2x.jpg 2x,
             image-3x.jpg 3x"
     alt="High DPI image">
```

### Sizes Attribute
The `sizes` attribute tells the browser how wide the image will be at different breakpoints:

```html
<img src="image.jpg"
     srcset="image-small.jpg 500w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            calc(33.333vw - 20px)"
     alt="Description">
```

## Background Images

Control background images with media queries:

```css
/* Mobile background */
.hero {
    background-image: url('hero-mobile.jpg');
    background-size: cover;
}

/* Tablet background */
@media (min-width: 768px) {
    .hero {
        background-image: url('hero-tablet.jpg');
    }
}

/* Desktop background */
@media (min-width: 1024px) {
    .hero {
        background-image: url('hero-desktop.jpg');
    }
}
```

## Modern Image Formats

### WebP Format
WebP offers better compression than JPEG/PNG:

```html
<picture>
    <source type="image/webp" 
            srcset="image.webp">
    <source type="image/jpeg" 
            srcset="image.jpg">
    <img src="image.jpg" alt="Description">
</picture>
```

### AVIF Format
AVIF provides even better compression than WebP:

```html
<picture>
    <source type="image/avif" 
            srcset="image.avif">
    <source type="image/webp" 
            srcset="image.webp">
    <source type="image/jpeg" 
            srcset="image.jpg">
    <img src="image.jpg" alt="Description">
</picture>
```

## Lazy Loading

Use native lazy loading to defer off-screen images:

```html
<img src="image.jpg" 
     alt="Description"
     loading="lazy">
```

## Object-Fit and Object-Position

Control how images fill their containers:

```css
/* Maintain aspect ratio, fill container */
img {
    width: 100%;
    height: 300px;
    object-fit: cover;  /* crop to fill */
    object-position: center;
}

/* Other object-fit values */
object-fit: contain;   /* fit inside, no crop */
object-fit: fill;      /* stretch to fill */
object-fit: scale-down; /* smaller of contain or original */
```

## Aspect Ratio

Prevent layout shift by defining aspect ratio:

```css
img {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
}

.video-container {
    aspect-ratio: 16 / 9;
    overflow: hidden;
}
```

## Image Optimization Tools

### Command Line Tools
- **ImageMagick**: Convert and resize images
- **ImageOptim**: Lossy and lossless compression
- **mozjpeg**: High-quality JPEG compression
- **WebP Converter**: Convert to WebP format

### Online Tools
- **TinyPNG/TinyJPG**: Compress PNG and JPEG
- **Squoosh**: Google's image compression tool
- **CloudConvert**: Convert between formats

### CDN and Build Tools
- **Cloudinary**: Cloud image service with automatic optimization
- **imgix**: Dynamic image optimization
- **Next.js Image**: Automatic optimization in Next.js
- **Astro Image**: Optimized images in Astro

## Best Practices

1. **Use max-width: 100%** on all images for responsiveness
2. **Provide srcset** for different resolutions
3. **Use picture element** for art direction (different crops)
4. **Optimize file size** before using on web
5. **Use modern formats** (WebP, AVIF) with fallbacks
6. **Set explicit dimensions** to prevent layout shift
7. **Use aspect-ratio** property when height is known
8. **Lazy load off-screen** images for performance
9. **Use object-fit** to control fill behavior
10. **Test on real devices** and networks

## Performance Metrics

- **LCP (Largest Contentful Paint)**: Optimize hero images
- **CLS (Cumulative Layout Shift)**: Use aspect-ratio to prevent shift
- **FID (First Input Delay)**: Keep image code efficient
- **Page Size**: Serve appropriate image sizes to reduce bandwidth

## Responsive Image Checklist

- [ ] All images have max-width: 100%
- [ ] Images have height: auto or aspect-ratio set
- [ ] Images have descriptive alt text
- [ ] Use srcset for multiple resolutions
- [ ] Use picture for art direction
- [ ] Images are optimized for file size
- [ ] Modern formats (WebP/AVIF) with fallbacks
- [ ] Lazy loading enabled for below-fold images
- [ ] Background images have media queries
- [ ] Testing on multiple devices completed

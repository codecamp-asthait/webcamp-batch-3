# Critical CSS

## Overview
Critical CSS is the CSS needed to render the above-the-fold content. Inlining critical CSS reduces render-blocking and improves initial page load performance, leading to faster First Contentful Paint (FCP).

## Strategy

### 1. Identify Critical CSS

Determine styles needed for above-the-fold content.

### 2. Extract Critical CSS

Extract only the necessary styles.

### 3. Inline Critical CSS

Place critical CSS in `<head>`.

```html
<style>
/* Critical CSS here */
.header { }
.hero { }
</style>
```

### 4. Defer Non-Critical CSS

Load remaining CSS asynchronously.

```html
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## Tools

- **Critical**: Extract critical CSS
- **Penthouse**: Generate critical CSS
- **Addy Osmani's Critical**: Automated extraction

## Best Practices

1. **Identify correctly**: Get above-the-fold styles
2. **Keep small**: Critical CSS should be small
3. **Update regularly**: Keep critical CSS updated
4. **Test**: Test on different devices
5. **Measure**: Measure performance improvements

## Browser Support

- **Critical CSS**: Universal support
- Works in all browsers

## Common Use Cases

1. **Fast FCP**: Faster First Contentful Paint
2. **Better Performance**: Improved load times
3. **SEO**: Better page speed scores
4. **User Experience**: Faster perceived load
5. **Mobile**: Especially important on mobile

## Practice Exercises

1. Extract critical CSS for your pages
2. Inline critical CSS in HTML
3. Defer non-critical CSS loading
4. Measure performance improvements
5. Use tools to automate extraction
6. Test on different devices

## Additional Resources

- [Critical CSS Tools](https://github.com/addyosmani/critical)
- [Google: Critical CSS](https://web.dev/extract-critical-css/)
- [Penthouse](https://github.com/pocketjins/penthouse)

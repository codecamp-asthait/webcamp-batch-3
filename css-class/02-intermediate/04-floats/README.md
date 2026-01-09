# Floats and Clearing

## Overview
The `float` property was originally designed for wrapping text around images, but it became a popular layout technique before Flexbox and Grid existed. The `clear` property prevents elements from floating next to floated elements.

**Note:** While modern layouts use Flexbox and Grid, understanding floats is important for legacy code and specific use cases like text wrapping around images.

## Why Learn Floats?

- **Legacy Code**: Many websites still use floats
- **Text Wrapping**: Perfect for wrapping text around images
- **Understanding CSS**: Important for understanding CSS layout history
- **Specific Use Cases**: Still useful for certain scenarios
- **Foundation**: Helps understand modern layout techniques

## Float Property

### Syntax
```css
.element {
    float: left | right | none | inherit;
}
```

### Values

- **left** - Element floats to the left
- **right** - Element floats to the right
- **none** - Element doesn't float (default)
- **inherit** - Inherits float value from parent

### Examples

```css
/* Float left */
.image {
    float: left;
    margin-right: 20px;
}

/* Float right */
.sidebar {
    float: right;
    width: 200px;
}
```

## Clear Property

The `clear` property prevents elements from floating next to floated elements.

### Syntax
```css
.element {
    clear: left | right | both | none | inherit;
}
```

### Values

- **left** - Clears left floats
- **right** - Clears right floats
- **both** - Clears both left and right floats
- **none** - No clearing (default)
- **inherit** - Inherits clear value from parent

### Examples

```css
/* Clear left float */
.content {
    clear: left;
}

/* Clear both floats */
.footer {
    clear: both;
}
```

## Common Patterns

### Text Wrapping Around Image

```css
.article-image {
    float: left;
    margin-right: 20px;
    margin-bottom: 15px;
}

.article-text {
    /* Text automatically wraps around floated image */
}
```

### Two-Column Layout (Legacy)

```css
.sidebar {
    float: left;
    width: 200px;
}

.main-content {
    margin-left: 200px;
}
```

### Clearfix Technique

```css
/* Modern clearfix */
.container::after {
    content: "";
    display: table;
    clear: both;
}

/* Or use overflow */
.container {
    overflow: hidden;
}
```

## Best Practices

1. **Use for Text Wrapping**: Floats are perfect for wrapping text around images
2. **Avoid for Layouts**: Use Flexbox or Grid for modern layouts
3. **Always Clear**: Clear floats when needed to prevent layout issues
4. **Use Clearfix**: Use clearfix to prevent container collapse
5. **Responsive**: Consider responsive behavior when using floats
6. **Modern Alternatives**: Prefer Flexbox/Grid for new projects
7. **Legacy Support**: Understand floats for maintaining legacy code

## Common Issues and Solutions

### Container Collapse

**Problem:** Container collapses when all children are floated.

**Solution:** Use clearfix or overflow: hidden

```css
.container {
    overflow: hidden; /* Contains floats */
}
```

### Elements Not Clearing

**Problem:** Elements don't clear floats properly.

**Solution:** Use appropriate clear value

```css
.element {
    clear: both; /* Clears all floats */
}
```

## Browser Support

- **Float**: All modern browsers (universal support)
- **Clear**: All modern browsers (universal support)

## When to Use Floats

### Good Use Cases

1. **Text Wrapping**: Wrapping text around images
2. **Legacy Code**: Maintaining existing float-based layouts
3. **Simple Layouts**: Very simple two-column layouts
4. **Print Styles**: Sometimes useful in print stylesheets

### Avoid Using Floats For

1. **Complex Layouts**: Use Grid or Flexbox instead
2. **Modern Projects**: Prefer modern layout techniques
3. **Responsive Design**: Flexbox/Grid handle responsive better
4. **Centering**: Use Flexbox or Grid for centering

## Modern Alternatives

### Instead of Float Layout, Use:

```css
/* Flexbox */
.container {
    display: flex;
    gap: 20px;
}

/* CSS Grid */
.container {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;
}
```

## Practice Exercises

1. Create text wrapping around an image
2. Build a simple two-column layout using floats
3. Implement a clearfix solution
4. Create multiple floated elements in a row
5. Fix a collapsed container issue
6. Convert a float layout to Flexbox/Grid

## Additional Resources

- [MDN: float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [MDN: clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
- [CSS Tricks: All About Floats](https://css-tricks.com/all-about-floats/)
- [CSS Tricks: Clearfix](https://css-tricks.com/snippets/css/clear-fix/)

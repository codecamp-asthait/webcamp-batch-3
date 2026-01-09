# Advanced Attribute Selectors

## Overview
Attribute selectors allow you to select elements based on their attributes and attribute values. Advanced attribute selectors provide powerful ways to target elements with specific attribute patterns, making CSS more flexible and maintainable.

## Attribute Selector Types

### Exact Match [attr="value"]

Selects elements with exact attribute value.

```css
input[type="text"] {
    /* Styles for text inputs */
}
```

### Begins With [attr^="value"]

Selects elements where attribute starts with value.

```css
a[href^="https://"] {
    /* Styles for HTTPS links */
}
```

### Ends With [attr$="value"]

Selects elements where attribute ends with value.

```css
a[href$=".pdf"] {
    /* Styles for PDF links */
}
```

### Contains [attr*="value"]

Selects elements where attribute contains value.

```css
[data-info*="important"] {
    /* Styles for elements with "important" in data-info */
}
```

### Word Match [attr~="value"]

Selects elements where attribute contains word (space-separated).

```css
[class~="primary"] {
    /* Styles for elements with "primary" class word */
}
```

### Starts With [attr|="value"]

Selects elements where attribute starts with value followed by hyphen.

```css
[lang|="en"] {
    /* Styles for lang="en" or lang="en-US" */
}
```

## Common Use Cases

### Input Types

```css
input[type="email"] {
    border-color: blue;
}

input[type="password"] {
    border-color: red;
}
```

### External Links

```css
a[href^="http://"],
a[href^="https://"] {
    /* External link styles */
}
```

### File Types

```css
a[href$=".pdf"] {
    /* PDF link styles */
}

a[href$=".jpg"],
a[href$=".png"] {
    /* Image link styles */
}
```

## Best Practices

1. **Be specific**: Use exact matches when possible
2. **Combine selectors**: Combine with other selectors
3. **Performance**: Attribute selectors are efficient
4. **Maintainability**: Use for dynamic content
5. **Testing**: Test with different attribute values
6. **Documentation**: Comment complex selectors

## Browser Support

- **Attribute Selectors**: Universal support
- All modern browsers support all attribute selector types

## Common Use Cases

1. **Form Styling**: Style inputs by type
2. **Link Styling**: Style links by destination
3. **Data Attributes**: Target elements by data attributes
4. **Internationalization**: Style by language attributes
5. **Dynamic Content**: Style dynamically generated content
6. **Component Styling**: Style components by attributes

## Practice Exercises

1. Create selectors for specific input types
2. Style external vs internal links
3. Target elements by data attributes
4. Build complex attribute selector combinations
5. Style elements by language attributes
6. Create dynamic styling with attributes

## Additional Resources

- [MDN: Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [CSS Tricks: Attribute Selectors](https://css-tricks.com/attribute-selectors/)

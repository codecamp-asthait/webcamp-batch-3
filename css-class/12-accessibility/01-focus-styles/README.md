# Focus Styles and :focus-visible

## Overview
Focus styles are essential for keyboard navigation accessibility. The `:focus-visible` pseudo-class allows you to show focus indicators only when the user is navigating with a keyboard, providing a better experience for both keyboard and mouse users.

## Why Focus Styles Matter

- **Keyboard Navigation**: Essential for keyboard users
- **Accessibility**: Required by WCAG guidelines
- **User Experience**: Clear indication of focus
- **Legal Compliance**: Required for accessibility

## Basic :focus

```css
button:focus {
    outline: 3px solid blue;
    outline-offset: 2px;
}
```

## :focus-visible

Shows focus only for keyboard navigation.

```css
button:focus-visible {
    outline: 3px solid blue;
    outline-offset: 2px;
}

button:focus:not(:focus-visible) {
    outline: none;
}
```

## Custom Focus Styles

### Outline

```css
.element:focus-visible {
    outline: 3px dashed blue;
    outline-offset: 4px;
}
```

### Box Shadow

```css
.element:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.5);
}
```

### Border

```css
.element:focus-visible {
    border-color: blue;
    box-shadow: 0 0 0 4px rgba(0, 0, 255, 0.2);
}
```

## :focus-within

Styles parent when child is focused.

```css
.form:focus-within {
    border-color: blue;
    box-shadow: 0 0 0 4px rgba(0, 0, 255, 0.1);
}
```

## Best Practices

1. **Always provide focus styles**: Never remove without alternatives
2. **Use :focus-visible**: Better UX for mouse users
3. **High contrast**: Ensure focus is visible
4. **Sufficient size**: At least 2px outline
5. **Test keyboard navigation**: Test with Tab key
6. **WCAG compliance**: Meet accessibility guidelines

## WCAG Requirements

- **2.4.7 Focus Visible**: Focus indicator must be visible
- **Minimum size**: At least 2px outline
- **Contrast**: Sufficient color contrast

## Browser Support

- **:focus**: Universal support
- **:focus-visible**: Chrome 86+, Firefox 85+, Safari 15.4+, Edge 86+
- **:focus-within**: Chrome 60+, Firefox 52+, Safari 10.1+, Edge 79+

## Common Use Cases

1. **Buttons**: Clear focus indicators
2. **Forms**: Input focus styles
3. **Links**: Accessible link focus
4. **Navigation**: Menu focus styles
5. **Interactive Elements**: All focusable elements
6. **Custom Components**: Custom focus styles

## Practice Exercises

1. Create custom focus indicators for buttons
2. Implement :focus-visible for better UX
3. Design accessible form focus styles
4. Build focus styles that meet WCAG guidelines
5. Test keyboard navigation
6. Create focus styles for custom components

## Additional Resources

- [MDN: :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [MDN: :focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
- [WCAG: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

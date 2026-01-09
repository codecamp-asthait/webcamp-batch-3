# Screen Reader Only Content

## Overview
Screen reader only content is text that is accessible to screen readers but visually hidden. This technique is essential for providing additional context, labels, and instructions to users who rely on assistive technologies.

## Screen Reader Only Class

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

## Focusable Screen Reader Only

```css
.sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
}
```

## Common Use Cases

### Icon Buttons

```html
<button>
    <span class="sr-only">Close dialog</span>
    <span aria-hidden="true">×</span>
</button>
```

### Form Labels

```html
<label for="email" class="sr-only">Email Address</label>
<input type="email" id="email" placeholder="Enter email">
```

### Contextual Information

```html
<button>
    Download
    <span class="sr-only">PDF file, 2.5 MB</span>
</button>
```

## Best Practices

1. **Provide context**: Add helpful information
2. **Don't abuse**: Only when necessary
3. **Test**: Test with screen readers
4. **Clear labels**: Use clear, descriptive text
5. **Focusable**: Make focusable when needed
6. **Accessibility**: Enhance accessibility

## Browser Support

- **Screen Reader Only**: Universal support
- Works with all screen readers

## Common Use Cases

1. **Icon Buttons**: Text labels for icons
2. **Form Labels**: Hidden labels for inputs
3. **Skip Links**: Navigation skip links
4. **Context**: Additional context
5. **Instructions**: Hidden instructions
6. **Error Messages**: Accessible error text

## Practice Exercises

1. Create screen reader only class
2. Add hidden labels for form inputs
3. Provide contextual information for screen readers
4. Create skip links for navigation
5. Test with screen readers
6. Enhance accessibility with hidden text

## Additional Resources

- [MDN: Screen Reader Only](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [A11y Project: Screen Reader Only](https://www.a11yproject.com/posts/how-to-hide-content/)
- [WebAIM: Screen Reader Only](https://webaim.org/techniques/css/invisiblecontent/)

# Skip Links

## Overview
Skip links allow keyboard users to skip repetitive navigation and jump directly to main content. This is essential for accessibility, especially for users who navigate with keyboards or screen readers.

## Basic Skip Link

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #667eea;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    z-index: 1000;
}

.skip-link:focus {
    top: 0;
}
```

## Multiple Skip Links

```html
<nav class="skip-nav">
    <a href="#main-content">Skip to main content</a>
    <a href="#navigation">Skip to navigation</a>
    <a href="#footer">Skip to footer</a>
</nav>
```

## Best Practices

1. **Visible on focus**: Show when focused
2. **First in tab order**: Place at page start
3. **Clear labels**: Use descriptive text
4. **High contrast**: Ensure visibility
5. **Test**: Test with keyboard navigation
6. **Multiple links**: Provide multiple skip options

## WCAG Requirements

- **2.4.1 Bypass Blocks**: Provide way to skip repetitive content
- **2.4.2 Page Titled**: Page has descriptive title
- **2.4.3 Focus Order**: Logical focus order

## Browser Support

- **Skip Links**: Universal support
- Works in all browsers and screen readers

## Common Use Cases

1. **Main Content**: Skip to main content
2. **Navigation**: Skip to navigation
3. **Search**: Skip to search
4. **Footer**: Skip to footer
5. **Forms**: Skip to form
6. **Multiple Sections**: Multiple skip options

## Practice Exercises

1. Create skip to main content link
2. Build multiple skip links for different sections
3. Design accessible skip link styling
4. Test skip links with keyboard navigation
5. Implement skip links in your projects
6. Ensure skip links are visible on focus

## Additional Resources

- [MDN: Skip Links](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#skip_links)
- [WCAG: Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)
- [WebAIM: Skip Navigation Links](https://webaim.org/techniques/skipnav/)

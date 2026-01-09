# High Contrast Mode

## Overview
High Contrast Mode is an accessibility feature that increases contrast for better visibility. Supporting high contrast mode ensures your website is accessible to users with visual impairments who rely on high contrast settings.

## prefers-contrast Media Query

Detect when user prefers high contrast.

```css
@media (prefers-contrast: high) {
    .element {
        background: ButtonFace;
        color: ButtonText;
        border: 2px solid ButtonText;
    }
}
```

## System Colors

Use system color keywords for better compatibility.

```css
.element {
    background: ButtonFace;
    color: ButtonText;
    border: 2px solid ButtonText;
}
```

### Common System Colors

- `ButtonFace` - Button background
- `ButtonText` - Button text
- `Window` - Window background
- `WindowText` - Window text
- `Highlight` - Selection background
- `HighlightText` - Selection text

## Best Practices

1. **Use system colors**: Better high contrast support
2. **Avoid background images**: May not show in high contrast
3. **Test**: Test with high contrast mode enabled
4. **Provide alternatives**: Text alternatives for images
5. **Sufficient contrast**: Ensure good contrast ratios
6. **Respect user preferences**: Honor high contrast settings

## Browser Support

- **prefers-contrast**: Chrome 89+, Firefox 113+, Safari 15.4+, Edge 89+
- **System Colors**: Universal support

## Common Use Cases

1. **Buttons**: High contrast button styles
2. **Forms**: Accessible form elements
3. **Text**: High contrast text
4. **Borders**: Visible borders in high contrast
5. **Interactive Elements**: All interactive elements
6. **Custom Components**: Custom high contrast styles

## Practice Exercises

1. Create styles that work with prefers-contrast
2. Use system colors for better compatibility
3. Design high contrast compatible components
4. Test your site in high contrast mode
5. Provide alternatives for background images
6. Ensure sufficient contrast ratios

## Additional Resources

- [MDN: prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)
- [MDN: System Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors)
- [WCAG: Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

# Color Contrast and WCAG

## Overview
Color contrast is crucial for accessibility. WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios to ensure text is readable for users with visual impairments. Meeting these guidelines makes your content accessible to more users.

## WCAG Contrast Ratios

### Level AA (Minimum)

- **Normal Text**: 4.5:1 contrast ratio
- **Large Text** (18pt+ or 14pt+ bold): 3:1 contrast ratio

### Level AAA (Enhanced)

- **Normal Text**: 7:1 contrast ratio
- **Large Text** (18pt+ or 14pt+ bold): 4.5:1 contrast ratio

## Calculating Contrast

Contrast ratio = (L1 + 0.05) / (L2 + 0.05)

Where:
- L1 = Relative luminance of lighter color
- L2 = Relative luminance of darker color

## Best Practices

1. **Meet minimum ratios**: At least WCAG AA
2. **Test regularly**: Use contrast checking tools
3. **Consider context**: Background affects contrast
4. **Large text**: Lower ratio for larger text
5. **Interactive elements**: Higher contrast for buttons/links
6. **Test tools**: Use automated testing tools

## Testing Tools

- **WebAIM Contrast Checker**: Online tool
- **Chrome DevTools**: Built-in contrast checker
- **axe DevTools**: Automated testing
- **Color Contrast Analyzer**: Desktop tool

## Browser Support

- **Contrast checking**: Available in dev tools
- All modern browsers support contrast checking

## Common Use Cases

1. **Text**: Ensure readable text
2. **Buttons**: High contrast buttons
3. **Links**: Visible link colors
4. **Forms**: Accessible form text
5. **Navigation**: Clear navigation text
6. **Error Messages**: High contrast errors

## Practice Exercises

1. Create text with WCAG AA compliance
2. Design text with WCAG AAA compliance
3. Test contrast ratios with tools
4. Fix insufficient contrast issues
5. Ensure all text meets minimum ratios
6. Test with different backgrounds

## Additional Resources

- [WCAG: Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN: Color Contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)

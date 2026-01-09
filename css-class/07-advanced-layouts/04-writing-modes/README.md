# Writing Modes

## Overview
CSS Writing Modes allow you to change the direction and orientation of text, enabling vertical text layouts and right-to-left language support.

## Writing Mode Property
```css
.element {
    writing-mode: vertical-rl;
}
```

## Values

### Horizontal
- **horizontal-tb** (default): Text flows left to right, top to bottom

### Vertical
- **vertical-rl**: Text flows top to bottom, right to left
- **vertical-lr**: Text flows top to bottom, left to right

### Deprecated
- **tb-rl**: Old syntax, use vertical-rl instead

## Text Orientation
Controls how individual characters are oriented:
```css
.element {
    text-orientation: mixed;
}
```

### Values
- **mixed**: Characters rotate as needed (default for vertical)
- **upright**: Characters remain upright
- **sideways**: Characters rotated 90 degrees

## Logical Properties
Use logical properties instead of physical (left, right, top, bottom):
```css
.element {
    margin-inline-start: 20px; /* left in LTR */
    padding-block-start: 10px;  /* top in horizontal */
}
```

## Use Cases
1. **CJK Languages**: Chinese, Japanese, Korean
2. **Design**: Creative text layouts
3. **Accessibility**: Support for multiple languages
4. **Typography**: Artistic text designs

## Browser Support
Widely supported in modern browsers. Check caniuse.com.

## Best Practices
1. Use for specific content sections
2. Provide text alternatives for accessibility
3. Test readability
4. Consider language support
5. Use logical properties for international content

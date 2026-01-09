# Multi-Column Layouts

## Overview
CSS Multi-Column Layout provides a way to flow content into multiple columns, similar to newspaper or magazine layouts.

## Key Properties

### column-count
Specifies the number of columns:
```css
.article {
    column-count: 3;
}
```

### column-width
Specifies the ideal width of each column:
```css
.article {
    column-width: 300px;
}
```

### columns (Shorthand)
Combines column-count and column-width:
```css
.article {
    columns: 3 300px;
}
```

## Column Gap and Rules

### column-gap
Controls space between columns:
```css
.article {
    column-gap: 40px;
}
```

### column-rule
Adds a divider line between columns:
```css
.article {
    column-rule: 2px solid #ccc;
}
```

## Content Control

### break-inside
Prevents content breaks within elements:
```css
.card {
    break-inside: avoid;
}
```

### column-span
Allows element to span all columns:
```css
h2 {
    column-span: all;
}
```

## Best Practices
1. Use for text-heavy content only
2. Test on mobile devices
3. Consider readability
4. Combine with media queries
5. Be careful with interactive elements
6. Use column-fill: balance for readability

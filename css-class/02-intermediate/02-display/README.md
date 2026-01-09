# CSS Display Property

## Overview
The `display` property is one of the most important CSS properties for controlling layout. It determines how an element is displayed and how it behaves in the document flow.

## Display Values

### Block
```css
display: block;
```
- Takes up the full width available
- Starts on a new line
- Respects width, height, margin, and padding
- Examples: `<div>`, `<p>`, `<h1>`, `<section>`

### Inline
```css
display: inline;
```
- Takes only necessary width
- Does not start on a new line
- Width and height properties have no effect
- Only horizontal margin and padding work
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`

### Inline-Block
```css
display: inline-block;
```
- Hybrid of inline and block
- Flows inline but respects width/height
- Respects all margin and padding
- Great for navigation menus and buttons

### None
```css
display: none;
```
- Removes element from document flow
- Element takes no space
- Different from `visibility: hidden` (which keeps space)

### Flex
```css
display: flex;
```
- Creates a flex container
- Children become flex items
- Modern layout method
- One-dimensional layout

### Grid
```css
display: grid;
```
- Creates a grid container
- Children become grid items
- Modern layout method
- Two-dimensional layout

### Inline-Flex
```css
display: inline-flex;
```
- Flex container that behaves inline

### Inline-Grid
```css
display: inline-grid;
```
- Grid container that behaves inline

## Display Table Values

```css
display: table;
display: table-row;
display: table-cell;
display: table-column;
```
- Mimics HTML table behavior
- Rarely used today (Flexbox/Grid preferred)

## Contents
```css
display: contents;
```
- Element itself generates no box
- Children rendered as if they were siblings of parent
- Useful for semantic HTML without affecting layout

## Comparison Chart

| Property | New Line | Width/Height | Margins | Use Case |
|----------|----------|--------------|---------|----------|
| block | Yes | Yes | All | Sections, containers |
| inline | No | No | Horizontal only | Text formatting |
| inline-block | No | Yes | All | Buttons, navigation |
| none | - | - | - | Hide elements |
| flex | Yes | Yes | All | One-dimensional layouts |
| grid | Yes | Yes | All | Two-dimensional layouts |

## Common Use Cases

### Navigation Menu
```css
nav ul {
    display: flex;
}
nav li {
    display: inline-block;
    margin: 0 15px;
}
```

### Centering
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Responsive Grid
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### Toggle Visibility
```css
.hidden {
    display: none;
}
.mobile-only {
    display: block;
}
@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
}
```

## Display vs Visibility

```css
/* Element removed from flow, takes no space */
display: none;

/* Element hidden but takes space */
visibility: hidden;

/* Element transparent but takes space */
opacity: 0;
```

## Best Practices

1. Use `display: flex` or `display: grid` for modern layouts
2. Use `display: inline-block` for inline elements needing dimensions
3. Avoid `display: table` (use Flexbox/Grid instead)
4. Use `display: none` for conditional visibility
5. Remember: changing display can affect accessibility

## Browser Support

All basic display values have excellent browser support. Flexbox and Grid are supported in all modern browsers.

## Practice Exercises

1. Create a horizontal navigation bar
2. Build a card layout with inline-block
3. Toggle element visibility with display: none
4. Create a flex-based button group
5. Experiment with display: contents

# Pseudo-classes and Pseudo-elements

## Overview
**Pseudo-classes** select elements based on their state or position (like `:hover`, `:first-child`). **Pseudo-elements** style specific parts of an element (like `::before`, `::after`). They're powerful tools for styling without adding extra HTML.

## Pseudo-classes vs Pseudo-elements

- **Pseudo-classes** (`:`) - Select elements in a specific state
- **Pseudo-elements** (`::`) - Style specific parts of an element

**Note:** Both `:` and `::` work for pseudo-elements, but `::` is the modern standard.

## Common Pseudo-classes

### Link States

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: red;
}

a:active {
    color: orange;
}
```

### Form States

```css
input:focus {
    border-color: blue;
    outline: none;
}

input:disabled {
    background: #f0f0f0;
}

input:checked {
    accent-color: blue;
}
```

### Structural Pseudo-classes

```css
/* First child */
li:first-child {
    font-weight: bold;
}

/* Last child */
li:last-child {
    border-bottom: none;
}

/* Nth child */
li:nth-child(2) {
    color: blue;
}

li:nth-child(even) {
    background: #f0f0f0;
}

li:nth-child(odd) {
    background: white;
}
```

### State Pseudo-classes

```css
button:hover {
    background: darkblue;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: 2px solid blue;
}

button:enabled {
    cursor: pointer;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## Common Pseudo-elements

### ::before and ::after

```css
.element::before {
    content: '';
    /* Creates a pseudo-element before */
}

.element::after {
    content: '';
    /* Creates a pseudo-element after */
}
```

**Important:** `content` property is required for `::before` and `::after` to work.

### ::first-letter

```css
p::first-letter {
    font-size: 3em;
    font-weight: bold;
    float: left;
    margin-right: 8px;
}
```

### ::first-line

```css
p::first-line {
    font-weight: bold;
    color: blue;
}
```

### ::selection

```css
::selection {
    background: blue;
    color: white;
}
```

## Common Patterns

### Decorative Elements

```css
.quote::before {
    content: '"';
    font-size: 3em;
    color: blue;
}

.quote::after {
    content: '"';
    font-size: 3em;
    color: blue;
}
```

### Icons with ::before

```css
.icon::before {
    content: '📋';
    margin-right: 10px;
}
```

### Breadcrumb Separators

```css
.breadcrumb a:not(:last-child)::after {
    content: ' / ';
    margin: 0 10px;
}
```

### Custom Checkbox

```css
input[type="checkbox"] {
    display: none;
}

label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid blue;
    border-radius: 4px;
}

input:checked + label::before {
    background: blue;
}

input:checked + label::after {
    content: '✓';
    color: white;
}
```

## Combining Pseudo-classes

```css
/* First link in a list */
li:first-child a {
    font-weight: bold;
}

/* Hover on even items */
li:nth-child(even):hover {
    background: #f0f0f0;
}

/* Focus on enabled inputs */
input:enabled:focus {
    border-color: blue;
}
```

## Best Practices

1. **Use :: for pseudo-elements**: Modern standard
2. **Content property**: Required for ::before and ::after
3. **Accessibility**: Don't rely solely on :hover for important information
4. **Performance**: Pseudo-elements are efficient
5. **Specificity**: Be aware of specificity when combining
6. **Testing**: Test all states (hover, focus, active)
7. **Documentation**: Document complex pseudo-class combinations

## Browser Support

- **Pseudo-classes**: Universal support in all browsers
- **Pseudo-elements**: Universal support (use `::` for modern syntax)
- Some newer pseudo-classes may have limited support

## Common Use Cases

1. **Interactive Elements**: Hover, focus, active states
2. **Form Styling**: Focus, disabled, checked states
3. **List Styling**: First, last, nth-child patterns
4. **Decorative Elements**: ::before and ::after for icons, quotes
5. **Text Effects**: ::first-letter, ::first-line
6. **Custom Components**: Custom checkboxes, radio buttons

## Practice Exercises

1. Create interactive buttons with hover and active states
2. Style form inputs with focus states
3. Create decorative elements using ::before and ::after
4. Build a navigation menu with hover effects
5. Style a list with :nth-child() patterns
6. Create a custom checkbox using pseudo-elements
7. Design a breadcrumb navigation with separators

## Additional Resources

- [MDN: Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [MDN: Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [CSS Tricks: Pseudo-classes](https://css-tricks.com/pseudo-class-selectors/)
- [CSS Tricks: Pseudo-elements](https://css-tricks.com/pseudo-element-roundup/)

# CSS Box Model

## Overview
The CSS Box Model is fundamental to understanding how elements are sized and spaced on a web page. Every element is treated as a rectangular box.

## The Box Model Components

From outside to inside:

1. **Margin** - Space outside the border (transparent)
2. **Border** - The border around padding and content
3. **Padding** - Space inside the border (transparent)
4. **Content** - The actual content (text, images, etc.)

```
┌─────────────────────────────────┐
│         Margin (outside)         │
│  ┌───────────────────────────┐  │
│  │     Border                │  │
│  │  ┌─────────────────────┐ │  │
│  │  │    Padding          │ │  │
│  │  │  ┌───────────────┐ │ │  │
│  │  │  │   Content     │ │ │  │
│  │  │  └───────────────┘ │ │  │
│  │  └─────────────────────┘ │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

## Box-Sizing Property

### content-box (default)
- Width and height apply to content only
- Padding and border are added to the total size
- Total width = width + padding + border

### border-box (recommended)
- Width and height include padding and border
- Total width = width (includes padding and border)
- Makes sizing more predictable

```css
/* Recommended global setting */
* {
    box-sizing: border-box;
}
```

## Margin Properties

### Individual Sides
```css
margin-top: 20px;
margin-right: 15px;
margin-bottom: 20px;
margin-left: 15px;
```

### Shorthand
```css
margin: 20px;                  /* all sides */
margin: 20px 15px;             /* top/bottom left/right */
margin: 20px 15px 10px;        /* top left/right bottom */
margin: 20px 15px 10px 5px;    /* top right bottom left */
```

### Auto Margin
```css
margin: 0 auto;  /* Centers block element horizontally */
```

### Margin Collapse
- Vertical margins between elements collapse
- The larger margin wins
- Horizontal margins don't collapse

## Padding Properties

Same syntax as margin:
```css
padding: 20px;
padding: 20px 15px;
padding: 20px 15px 10px;
padding: 20px 15px 10px 5px;
```

## Width and Height

```css
/* With content-box */
width: 300px;
padding: 20px;
border: 5px solid black;
/* Total width = 300 + 40 + 10 = 350px */

/* With border-box */
width: 300px;
padding: 20px;
border: 5px solid black;
/* Total width = 300px (padding and border included) */
```

## Calculating Total Size

### Content-box (default)
```
Total Width = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right

Total Height = height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom
```

### Border-box
```
Total Width = width + margin-left + margin-right
Total Height = height + margin-top + margin-bottom
```

## Best Practices

1. Use `box-sizing: border-box` globally
2. Use margin for spacing between elements
3. Use padding for spacing inside elements
4. Be aware of margin collapse
5. Use developer tools to visualize the box model

## Common Issues

### Margin Collapse
```css
/* These margins will collapse to 30px, not 50px */
.element1 { margin-bottom: 30px; }
.element2 { margin-top: 20px; }
```

### Overflowing Content
```css
/* Content can overflow if container is too small */
.container {
    width: 200px;
    overflow: hidden; /* or auto, scroll */
}
```

## Practice Exercises

1. Create three boxes with different box-sizing values
2. Experiment with margin collapse
3. Center a box horizontally using margin
4. Create a card with proper padding and margin
5. Use browser DevTools to inspect the box model

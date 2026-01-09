# Colors and Backgrounds

## Color Values

### Named Colors
```css
color: red;
color: blue;
color: green;
```

### Hex Colors
```css
color: #3498db;
color: #ff0000; /* red */
color: #00ff00; /* green */
```

### RGB Colors
```css
color: rgb(52, 152, 219);
color: rgb(255, 0, 0); /* red */
```

### RGBA Colors (with transparency)
```css
color: rgba(52, 152, 219, 0.5); /* 50% opacity */
background-color: rgba(255, 0, 0, 0.3); /* 30% opacity */
```

### HSL Colors
```css
color: hsl(210, 70%, 50%);
/* Hue (0-360), Saturation (%), Lightness (%) */
```

## Background Properties

### Background Color
```css
background-color: #3498db;
```

### Background Image
```css
background-image: url('image.jpg');
```

### Background Repeat
```css
background-repeat: repeat; /* default */
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
```

### Background Size
```css
background-size: cover; /* covers entire element */
background-size: contain; /* fits within element */
background-size: 100px 100px; /* specific size */
```

### Background Position
```css
background-position: center;
background-position: top right;
background-position: 50% 50%;
background-position: 10px 20px;
```

### Background Shorthand
```css
background: color image repeat position/size;
background: #3498db url('img.jpg') no-repeat center/cover;
```

## Opacity

```css
opacity: 0.5; /* 50% opacity */
opacity: 1; /* fully opaque */
opacity: 0; /* fully transparent */
```

Note: Opacity affects the entire element, while rgba() only affects the color.



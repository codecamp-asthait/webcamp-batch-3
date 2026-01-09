# Less

## Overview
Less (Leaner Style Sheets) is another popular CSS preprocessor similar to Sass, offering variables, mixins, nesting, and functions.

## Key Features

### Variables
```less
@primary-color: #667eea;
@base-size: 16px;

body {
    color: @primary-color;
    font-size: @base-size;
}
```

### Nesting
```less
.navbar {
    background: @primary-color;
    
    &:hover {
        opacity: 0.9;
    }
    
    .nav-item {
        color: white;
    }
}
```

### Mixins
```less
.rounded-corners(@radius: 4px) {
    border-radius: @radius;
    -moz-border-radius: @radius;
    -webkit-border-radius: @radius;
}

.button {
    .rounded-corners(8px);
}
```

### Operations
Perform math operations:
```less
@base-size: 16px;
.heading {
    font-size: @base-size * 2;
    padding: @base-size / 2;
}
```

### Functions
Built-in color and math functions:
```less
.darker {
    color: darken(@primary-color, 20%);
    background: lighten(@primary-color, 10%);
}
```

## Installation
```bash
npm install -g less
lessc styles.less styles.css
```

## Less vs Sass
- **Less**: More like CSS syntax
- **Sass**: More powerful features
- **Less**: Client and server compilation
- **Sass**: Only server compilation

## Advantages
- Easy to learn
- Clean syntax similar to CSS
- Powerful mixins and functions
- Client-side compilation option
- Large community support

## Getting Started
1. Install Node.js
2. Install Less: `npm install -g less`
3. Create `.less` files
4. Compile: `lessc input.less output.css`

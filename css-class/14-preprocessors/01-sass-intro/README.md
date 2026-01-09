# Sass Introduction

## What is Sass?
Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that extends CSS with powerful features like variables, nesting, mixins, and functions.

## Why Use Sass?

### Variables
Store reusable values:
```scss
$primary-color: #667eea;
$spacing-unit: 8px;

body {
    color: $primary-color;
    margin: $spacing-unit * 2;
}
```

### Nesting
Organize related selectors:
```scss
.card {
    padding: 20px;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .card-header {
        font-size: 1.2em;
    }
}
```

### Mixins
Reusable style blocks:
```scss
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    @include flex-center;
}
```

### Functions
Compute values:
```scss
$base-size: 16px;
@function scale($factor) {
    @return $base-size * $factor;
}
```

### Partials & Import
Organize code:
```scss
@import 'variables';
@import 'mixins';
@import 'components';
```

## Compilation
Sass compiles to standard CSS:
```bash
sass input.scss output.css
```

## Key Benefits
- DRY (Don't Repeat Yourself)
- Better organization
- Easier maintenance
- Reduced CSS file size
- Enhanced functionality

## Getting Started
1. Install Node.js
2. Install Sass: `npm install -g sass`
3. Create `.scss` files
4. Compile: `sass style.scss style.css`
5. Or watch mode: `sass --watch .`

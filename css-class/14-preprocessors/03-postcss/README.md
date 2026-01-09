# PostCSS

## What is PostCSS?
PostCSS is a tool for transforming CSS with JavaScript. It parses CSS and allows plugins to analyze, transform, and modify CSS code.

## How PostCSS Works
1. Parse CSS into AST (Abstract Syntax Tree)
2. Run plugins to transform the AST
3. Output the modified CSS

## Popular PostCSS Plugins

### Autoprefixer
Adds vendor prefixes automatically:
```css
display: grid;

/* becomes */
display: -ms-grid;
display: grid;
```

### CSSnano
Minifies and optimizes CSS:
```javascript
require('cssnano')
```

### PostCSS Preset Env
Converts modern CSS to compatible code:
```javascript
require('postcss-preset-env')
```

### PostCSS Import
Inline @import rules:
```css
@import 'variables.css';
```

## Installation
```bash
npm install -g postcss postcss-cli
npm install autoprefixer
```

## Configuration
Create `postcss.config.js`:
```javascript
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')
    ]
}
```

## Usage
```bash
postcss input.css -o output.css
```

## Key Advantages
- Modular plugin system
- Community-driven ecosystem
- Powerful transformations
- Easy integration with build tools
- No new syntax to learn
- Works with standard CSS

## Comparison with Preprocessors
- **Preprocessors** (Sass, Less): New syntax, compile to CSS
- **PostCSS**: Transform CSS with plugins, uses standard CSS syntax
- **Complementary**: Use both Sass + PostCSS together

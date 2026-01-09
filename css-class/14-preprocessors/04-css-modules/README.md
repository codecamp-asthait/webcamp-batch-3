# CSS Modules

## What are CSS Modules?
CSS Modules is a CSS file in which all class names and animation names are scoped locally by default. This prevents naming conflicts and enables component-level styling.

## Problem Solved
Global CSS namespace causes:
- Naming conflicts across components
- Unintended style cascading
- Difficulty in refactoring
- Hard-to-track dependencies

## How CSS Modules Work

### File Structure
```
Button.jsx
Button.module.css
```

### CSS Module File
```css
/* Button.module.css */
.primary {
    background: blue;
    color: white;
}

.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

### Usage in Component
```javascript
import styles from './Button.module.css';

function Button() {
    return <button className={styles.primary}>Click me</button>;
}
```

### Compiled CSS
```css
/* Generated unique class names */
.Button_primary__2x4c {
    background: blue;
    color: white;
}

.Button_disabled__3k9l {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## Key Features

### Scoped Styles
Classes are locally scoped to prevent conflicts

### Explicit Dependencies
Clear which styles are used where

### Dead Code Elimination
Unused styles can be identified and removed

### Composition
Import and compose styles from other modules

## Configuration
Works with:
- Create React App (built-in)
- Next.js (built-in)
- Webpack (with loader configuration)
- Vite (with plugin)

## Advantages
- No naming conflicts
- Easy component styling
- Better maintainability
- Explicit dependencies
- Refactoring-friendly
- Works with JS frameworks

## Best Practices
1. Use camelCase for class names
2. Keep styles close to components
3. Use composition for shared styles
4. Document style dependencies
5. Avoid deeply nested selectors

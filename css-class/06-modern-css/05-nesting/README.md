# CSS Nesting

## Overview
CSS Nesting allows you to nest CSS rules inside other rules, similar to how HTML elements are nested. This makes CSS more organized, readable, and maintainable, bringing it closer to preprocessor syntax like Sass.

## Why Use CSS Nesting?

- **Organization**: Group related styles together
- **Readability**: More intuitive code structure
- **Maintainability**: Easier to understand and modify
- **Less Repetition**: Avoid repeating parent selectors
- **Modern CSS**: Native nesting support

## Basic Nesting Syntax

```css
.card {
    padding: 20px;
    border-radius: 8px;
    
    h3 {
        color: blue;
        margin-bottom: 10px;
    }
    
    p {
        color: #666;
        line-height: 1.6;
    }
}
```

## Nested Selectors

```css
.parent {
    background: white;
    
    .child {
        color: blue;
    }
    
    .sibling {
        color: red;
    }
}
```

## Nested Pseudo-classes

```css
.button {
    background: blue;
    color: white;
    
    &:hover {
        background: darkblue;
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    &:focus {
        outline: 2px solid blue;
    }
}
```

## The & Selector

The `&` represents the parent selector:

```css
.card {
    border: 1px solid #ccc;
    
    &-header {
        padding: 20px;
    }
    
    &-body {
        padding: 20px;
    }
    
    &.active {
        border-color: blue;
    }
}
```

## Nested Media Queries

```css
.container {
    padding: 20px;
    
    @media (max-width: 768px) {
        padding: 15px;
    }
    
    @media (max-width: 480px) {
        padding: 10px;
    }
}
```

## Complex Nesting

```css
.navigation {
    background: white;
    
    ul {
        list-style: none;
        
        li {
            display: inline-block;
            
            a {
                color: blue;
                text-decoration: none;
                
                &:hover {
                    color: darkblue;
                }
            }
        }
    }
}
```

## Best Practices

1. **Don't over-nest**: Keep nesting levels reasonable (2-3 levels)
2. **Use & wisely**: Use & for pseudo-classes and modifiers
3. **Organize logically**: Group related styles together
4. **Readability**: Ensure nested code remains readable
5. **Performance**: Nesting doesn't impact performance
6. **Consistency**: Use consistent nesting patterns
7. **Comments**: Add comments for complex nesting

## Browser Support

- **CSS Nesting**: Chrome 112+, Firefox 117+, Safari 16.5+, Edge 112+
- Use feature queries:
  ```css
  @supports selector(&) {
      .element {
          & .child {
              /* nested styles */
          }
      }
  }
  ```

## Common Patterns

### Component Nesting

```css
.card {
    background: white;
    border-radius: 8px;
    
    &-header {
        padding: 20px;
    }
    
    &-body {
        padding: 20px;
    }
    
    &-footer {
        padding: 15px;
    }
}
```

### BEM with Nesting

```css
.block {
    padding: 20px;
    
    &__element {
        color: blue;
        
        &--modifier {
            color: red;
        }
    }
}
```

## Common Use Cases

1. **Component Styles**: Organize component styles
2. **Navigation**: Nest navigation styles
3. **Forms**: Group form-related styles
4. **Cards**: Organize card component styles
5. **Buttons**: Nest button variants
6. **Layouts**: Organize layout styles

## Practice Exercises

1. Create a component with nested styles
2. Build a navigation with nested selectors
3. Design a card component with nested pseudo-classes
4. Create a responsive layout with nested media queries
5. Build a form with nested validation styles
6. Design a button component with nested states

## Additional Resources

- [MDN: CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [CSS Tricks: CSS Nesting](https://css-tricks.com/css-nesting/)
- [Can I Use: CSS Nesting](https://caniuse.com/css-nesting)

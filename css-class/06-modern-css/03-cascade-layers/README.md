# CSS Cascade Layers (@layer)

## Overview
CSS Cascade Layers (`@layer`) allow you to control the cascade order of CSS rules explicitly. This helps manage specificity conflicts and organize styles from different sources (frameworks, components, utilities) in a predictable way.

## Why Use Cascade Layers?

- **Control Specificity**: Manage style conflicts without increasing specificity
- **Organization**: Organize styles from different sources
- **Predictability**: Explicit layer order
- **Maintainability**: Easier to manage large codebases
- **Framework Integration**: Better integration with CSS frameworks

## Basic Syntax

```css
@layer base, components, utilities;

@layer base {
    body {
        font-family: Arial, sans-serif;
    }
}

@layer components {
    .button {
        padding: 10px 20px;
    }
}

@layer utilities {
    .text-center {
        text-align: center;
    }
}
```

## Layer Order

Layers are ordered by declaration. Later layers have higher priority:

```css
@layer first, second, third;

@layer first {
    .element { color: red; }
}

@layer second {
    .element { color: blue; } /* Wins */
}
```

## Anonymous Layers

```css
@layer {
    .element {
        color: red;
    }
}
```

## Nested Layers

```css
@layer components {
    @layer buttons {
        .btn {
            padding: 10px;
        }
    }
    
    @layer cards {
        .card {
            border: 1px solid #ccc;
        }
    }
}
```

## Layer Import

```css
@import url('framework.css') layer(framework);
@import url('components.css') layer(components);
```

## Unlayered Styles

Styles not in a layer have the highest priority:

```css
/* Unlayered - highest priority */
.element {
    color: red;
}

@layer base {
    .element {
        color: blue; /* Red wins */
    }
}
```

## Common Patterns

### Framework Organization

```css
@layer reset, framework, components, utilities;

@layer reset {
    * { margin: 0; padding: 0; }
}

@layer framework {
    @import url('bootstrap.css') layer(framework);
}

@layer components {
    .my-component { /* styles */ }
}

@layer utilities {
    .text-center { text-align: center; }
}
```

### Component Layers

```css
@layer base, components, utilities;

@layer components {
    @layer buttons {
        .btn { /* button styles */ }
    }
    
    @layer cards {
        .card { /* card styles */ }
    }
}
```

## Best Practices

1. **Define order first**: Declare layer order at the top
2. **Consistent naming**: Use clear, descriptive layer names
3. **Organize by source**: Group styles by their origin
4. **Document layers**: Comment layer purposes
5. **Avoid mixing**: Keep unlayered styles minimal
6. **Test thoroughly**: Verify layer order works as expected
7. **Progressive enhancement**: Use feature queries

## Browser Support

- **Cascade Layers**: Chrome 99+, Firefox 97+, Safari 15.4+, Edge 99+
- Use feature queries:
  ```css
  @supports (@layer) {
      @layer base {
          /* layer styles */
      }
  }
  ```

## Common Use Cases

1. **Framework Integration**: Organize framework and custom styles
2. **Component Libraries**: Separate component styles
3. **Utility Classes**: Manage utility class priority
4. **Theme Systems**: Organize theme layers
5. **Third-party Styles**: Control third-party CSS priority
6. **Large Projects**: Manage complex style hierarchies

## Practice Exercises

1. Create a layer structure for base, components, and utilities
2. Organize framework styles in separate layers
3. Create nested layers for complex projects
4. Manage specificity conflicts using layers
5. Build a component library with layers
6. Design a theme system using layers

## Additional Resources

- [MDN: @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [CSS Tricks: Cascade Layers](https://css-tricks.com/css-cascade-layers/)
- [Can I Use: Cascade Layers](https://caniuse.com/css-cascade-layers)

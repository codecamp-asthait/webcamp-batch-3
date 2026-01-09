# CSS Methodologies

## Overview
CSS methodologies provide structured approaches to writing and organizing CSS. Popular methodologies like BEM (Block Element Modifier), OOCSS (Object-Oriented CSS), and SMACSS help maintain scalable, maintainable CSS codebases.

## BEM (Block Element Modifier)

### Naming Convention

```
Block__Element--Modifier
```

### Example

```css
.card { }                    /* Block */
.card__header { }           /* Element */
.card__body { }             /* Element */
.card__button { }           /* Element */
.card__button--primary { }  /* Modifier */
```

### Benefits

- Clear naming
- High specificity
- Easy to understand
- Scalable

## OOCSS (Object-Oriented CSS)

### Principles

1. **Separate structure from skin**
2. **Separate container from content**

### Example

```css
/* Structure */
.media-object {
    display: flex;
}

/* Skin */
.button-primary {
    background: blue;
}
```

## SMACSS (Scalable and Modular CSS)

### Categories

1. **Base**: Default styles
2. **Layout**: Page structure
3. **Module**: Reusable components
4. **State**: State-based styles
5. **Theme**: Theming

## Best Practices

1. **Choose a methodology**: Stick to one
2. **Be consistent**: Follow conventions
3. **Document**: Document your approach
4. **Team agreement**: Get team buy-in
5. **Flexibility**: Adapt as needed

## Browser Support

- **Methodologies**: Not browser-dependent
- All methodologies work in all browsers

## Common Use Cases

1. **Large Projects**: Scalable CSS
2. **Team Projects**: Consistent naming
3. **Maintainability**: Easy to maintain
4. **Reusability**: Reusable components
5. **Organization**: Well-organized code
6. **Collaboration**: Team-friendly

## Practice Exercises

1. Create components using BEM naming
2. Build reusable objects with OOCSS
3. Organize structure with SMACSS
4. Choose the right methodology for your project
5. Refactor existing CSS to use a methodology
6. Document your CSS methodology

## Additional Resources

- [BEM Methodology](http://getbem.com/)
- [OOCSS](https://github.com/stubbornella/oocss/wiki)
- [SMACSS](http://smacss.com/)

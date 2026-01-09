# Text Effects

## What are Text Effects?

Text effects enhance typography with visual flair. CSS provides powerful tools for creating shadows, glows, outlines, and other decorative text treatments.

## Text Shadow

The `text-shadow` property adds shadows to text:

```css
text-shadow: <offset-x> <offset-y> [blur-radius] [color];
```

### Basic Text Shadow
```css
/* Single shadow */
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Multiple shadows */
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
                 -2px -2px 4px rgba(255, 255, 255, 0.3);
}
```

## Text Stroke

Add an outline to text (webkit only):

```css
-webkit-text-stroke: <width> <color>;

h1 {
    -webkit-text-stroke: 1px #667eea;
    color: transparent;
}
```

## Text Fill

Control text color for stroke effects:

```css
-webkit-text-fill-color: <color>;

h1 {
    -webkit-text-stroke: 2px #333;
    -webkit-text-fill-color: white;
}
```

## Glow Effects

Create glowing text using shadows:

```css
h1 {
    text-shadow: 0 0 10px #667eea,
                 0 0 20px #667eea,
                 0 0 30px #667eea;
    color: #667eea;
}
```

## 3D Text Effect

Stack multiple shadows for 3D appearance:

```css
h1 {
    text-shadow: 1px 1px 0 #ccc,
                 2px 2px 0 #bbb,
                 3px 3px 0 #aaa,
                 4px 4px 0 #999;
}
```

## Outlined Text

Combine stroke and fill:

```css
h1 {
    color: white;
    -webkit-text-stroke: 2px #333;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

## Text Decoration Properties

### Underline Customization
```css
a {
    text-decoration: underline;
    text-decoration-color: #667eea;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
}
```

### Text Decoration Styles
```css
/* Dotted underline */
text-decoration-line: underline;
text-decoration-style: dotted;

/* Wavy underline */
text-decoration-style: wavy;

/* Dashed underline */
text-decoration-style: dashed;
```

## Text Color and Background

### Gradient Text
```css
background: linear-gradient(135deg, #667eea, #764ba2);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
color: transparent;
```

### Multiple Text Colors
```css
p {
    background: linear-gradient(90deg, red 0%, blue 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

## Text Animation

### Blinking Text
```css
@keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
}

.blink {
    animation: blink 1s infinite;
}
```

### Glowing Animation
```css
@keyframes glow {
    0%, 100% {
        text-shadow: 0 0 5px #667eea;
    }
    50% {
        text-shadow: 0 0 20px #667eea;
    }
}

.glow-text {
    animation: glow 2s infinite;
}
```

## Text Transform

Control text appearance:

```css
text-transform: uppercase;    /* ALL CAPS */
text-transform: lowercase;    /* all lowercase */
text-transform: capitalize;   /* Capitalize Each Word */
text-transform: none;         /* Default */
```

## Letter Spacing

Adjust spacing between characters:

```css
h1 {
    letter-spacing: 2px;      /* Increased spacing */
    letter-spacing: -1px;     /* Decreased spacing */
}
```

## Word Spacing

Adjust space between words:

```css
p {
    word-spacing: 4px;        /* Wider word space */
}
```

## Text Gradient Effects

### Linear Gradient
```css
.gradient-text {
    background: linear-gradient(90deg, red, blue);
    -webkit-background-clip: text;
    color: transparent;
}
```

### Radial Gradient
```css
.gradient-text {
    background: radial-gradient(circle, #667eea, #764ba2);
    -webkit-background-clip: text;
    color: transparent;
}
```

## Performance Considerations

- Text shadows are lightweight
- Multiple text shadows have minimal performance impact
- Text-stroke (webkit only) has good performance
- Avoid excessive animations on text
- Use will-change sparingly for animated text

## Accessibility

- Ensure text remains readable with effects applied
- Don''t rely solely on color in gradients (provide fallback)
- Test effects with high contrast mode
- Maintain sufficient color contrast
- Test with screen readers for semantic content

## Best Practices

1. **Keep text readable** - Effects should enhance, not obscure
2. **Use subtle shadows** - Heavy shadows reduce readability
3. **Test color contrast** - Ensure WCAG compliance
4. **Limit glow intensity** - Bright glows can be distracting
5. **Test across browsers** - webkit properties need fallbacks
6. **Use transitions** - Animate effects smoothly
7. **Consider mobile** - Text effects can be more pronounced on small screens
8. **Avoid excessive animation** - Blinking text annoys users
9. **Provide fallbacks** - Not all browsers support all effects
10. **Test readability** - Ensure effects don''t harm readability

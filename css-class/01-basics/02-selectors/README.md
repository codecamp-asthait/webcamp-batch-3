# CSS Selectors

Selectors are patterns used to select HTML elements you want to style.

## Types of Selectors

### 1. Element Selector
Selects all elements of a specific type.
```css
p { color: blue; }
```

### 2. Class Selector (.)
Selects elements with a specific class attribute.
```css
.highlight { background: yellow; }
```

### 3. ID Selector (#)
Selects an element with a specific ID. IDs must be unique!
```css
#header { background: blue; }
```

### 4. Descendant Selector (space)
Selects elements that are descendants of another element.
```css
div p { color: red; }
```

### 5. Child Selector (>)
Selects direct children only.
```css
div > p { color: red; }
```

### 6. Multiple Classes
An element can have multiple classes.
```css
.red { color: red; }
.large { font-size: 24px; }
```

### 7. Attribute Selector
Selects elements based on attributes.
```css
a[href^="https"] { color: blue; }
input[type="text"] { border: 1px solid; }
```

### 8. Universal Selector (*)
Selects all elements.
```css
* { margin: 0; }
```

## Selector Specificity

1. Inline styles (1000)
2. IDs (100)
3. Classes, attributes, pseudo-classes (10)
4. Elements, pseudo-elements (1)

Higher specificity wins!



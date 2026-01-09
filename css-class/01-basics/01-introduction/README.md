# CSS Introduction

## What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, or in other media.

## Three Ways to Add CSS

### 1. Inline CSS
- Added directly to HTML elements using the `style` attribute
- Highest specificity
- Not recommended for large projects
- Example: `<p style="color: red;">Text</p>`

### 2. Internal CSS
- Added within `<style>` tags in the HTML `<head>`
- Good for single-page websites
- Example:
```html
<style>
    p { color: blue; }
</style>
```

### 3. External CSS (Recommended)
- Separate `.css` file linked to HTML
- Best practice for maintainability
- Example: `<link rel="stylesheet" href="styles.css">`

## CSS Syntax

```css
selector {
    property: value;
    property: value;
}
```

- **Selector**: Targets HTML elements
- **Property**: What you want to change (e.g., color, font-size)
- **Value**: The value for the property (e.g., red, 16px)

## Key Concepts

- **Cascading**: Styles cascade from top to bottom
- **Specificity**: More specific selectors override less specific ones
- **Inheritance**: Some properties are inherited by child elements



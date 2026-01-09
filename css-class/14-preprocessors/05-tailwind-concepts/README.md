# Tailwind CSS Concepts

## What is Tailwind CSS?
Tailwind is a utility-first CSS framework that lets you build modern designs without leaving your HTML.

## Utility-First Approach
Instead of writing custom CSS:
```css
.card {
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

Use utility classes:
```html
<div class="p-5 bg-white rounded-lg shadow-md">
    Content
</div>
```

## Core Concepts

### Responsive Design
Built-in responsive utilities:
```html
<div class="text-sm md:text-base lg:text-lg">
    Responsive text
</div>
```

### Customization
Extend Tailwind in config:
```javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                'brand': '#667eea'
            }
        }
    }
}
```

### Dark Mode
Easy dark mode support:
```html
<div class="bg-white dark:bg-gray-900">
    Content
</div>
```

### State Variants
Built-in hover, focus, active states:
```html
<button class="bg-blue-500 hover:bg-blue-700">
    Click me
</button>
```

## Advantages
- Rapid development
- Consistent design system
- Small file sizes with PurgeCSS
- No naming conventions to learn
- Highly customizable
- Great documentation

## Disadvantages
- HTML can become cluttered
- Learning curve for utility names
- Not ideal for complex designs
- More markup than CSS

## Best Practices
1. Extract repeated patterns with @apply
2. Use config for brand colors
3. Organize component classes
4. Use plugins for custom utilities
5. Leverage PurgeCSS for production
6. Keep HTML readable

## Getting Started
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Use in HTML:
```html
<div class="flex justify-center items-center h-screen">
    <h1 class="text-4xl font-bold text-center">
        Welcome!
    </h1>
</div>
```

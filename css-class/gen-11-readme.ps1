# Generate content for all modules 11-15
cd "c:\Users\User\Desktop\css-class"

# Module 11-02 Breakpoints README
$readme = @'
# Understanding Breakpoints

## What are Breakpoints?
Breakpoints are specific screen widths where your design adapts and changes. They define the thresholds at which your layout, typography, or other styles should adjust to provide optimal viewing experience.

## Common Standard Breakpoints
- Extra Small (XS): 0px - 479px (phones)
- Small (SM): 480px - 767px (large phones, small tablets)
- Medium (MD): 768px - 1023px (tablets)
- Large (LG): 1024px - 1279px (small desktops)
- Extra Large (XL): 1280px+ (large desktops)
- XXL: 1400px+ (very large screens)

## Setting Breakpoints
Start with mobile-first approach and use min-width media queries to progressively enhance your design for larger screens.

## Best Practices
1. Use analytics to understand your audience's devices
2. Keep 3-5 main breakpoints maximum
3. Test on real devices, not just browser resize
4. Use consistent naming across projects
5. Document your breakpoint strategy
6. Organize CSS by breakpoint logically
'@
Set-Content "11-responsive-advanced\02-breakpoints\README.md" $readme
Write-Host "11-02 README: Done"

# Module 11-03 Responsive Typography README  
$readme = @'
# Responsive Typography

## Why Responsive Typography?
Text sizing should adapt to different screens. Using flexible units and scaling ensures readability across all devices.

## Units for Responsive Typography
- **rem**: Relative to root font-size (recommended)
- **em**: Relative to parent element's font-size
- **%**: Percentage of parent element
- **px**: Fixed size (not responsive)
- **vw/vh**: Viewport width/height (use carefully)

## Font Scaling Strategy
```css
/* Mobile base */
html {
    font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    html {
        font-size: 18px;
    }
}
```

## Line Length and Spacing
- Optimal line length: 45-75 characters
- Adjust margins and padding with media queries
- Increase line-height for better readability on small screens

## Best Practices
1. Use relative units (rem, em)
2. Scale entire typography system with breakpoints
3. Maintain readable line lengths
4. Test readability on actual devices
5. Consider system fonts for performance
'@
Set-Content "11-responsive-advanced\03-responsive-typography\README.md" $readme
Write-Host "11-03 README: Done"

# Module 11-04 Responsive Images README
$readme = @'
# Responsive Images

## Why Responsive Images?
Images should adapt to different screen sizes. Serving appropriate image sizes reduces bandwidth and improves performance.

## Approaches to Responsive Images

### CSS background-image
```css
.hero {
    background-image: url(small.jpg);
}

@media (min-width: 768px) {
    .hero {
        background-image: url(large.jpg);
    }
}
```

### HTML Picture Element
```html
<picture>
    <source media="(min-width: 768px)" srcset="large.jpg">
    <img src="small.jpg" alt="Description">
</picture>
```

### srcset Attribute
```html
<img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(min-width: 768px) 50vw, 100vw"
     src="medium.jpg" alt="Description">
```

## Image Optimization
- Use appropriate file formats (WebP for modern browsers)
- Compress images before serving
- Use responsive widths
- Lazy load images below the fold
- Include alt text for accessibility

## Best Practices
1. Always provide fallback images
2. Test on slow connections
3. Consider device pixel ratio
4. Use modern image formats
5. Optimize file sizes for mobile
'@
Set-Content "11-responsive-advanced\04-responsive-images\README.md" $readme
Write-Host "11-04 README: Done"

# Module 11-05 Fluid Layouts README
$readme = @'
# Fluid Layouts

## What are Fluid Layouts?
Fluid layouts use percentages and flexible units instead of fixed pixels. They adapt smoothly to any screen size without breaking at specific breakpoints.

## Principles
- Use percentages for widths
- Use relative units for fonts and spacing
- Avoid fixed widths on containers
- Use calc() for flexible spacing
- Implement min/max-width constraints

## Implementation
```css
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.sidebar {
    width: 25%;
    float: left;
}

.content {
    width: 75%;
    float: left;
}
```

## Modern Fluid Approach with CSS Grid
```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

## Advantages
- Smooth scaling without breakpoints
- Better use of available space
- Easier to maintain
- Modern and elegant approach

## Best Practices
1. Set reasonable max-widths
2. Use min-content and max-content
3. Combine with media queries
4. Test at various sizes
5. Prioritize readability
'@
Set-Content "11-responsive-advanced\05-fluid-layouts\README.md" $readme
Write-Host "11-05 README: Done"

# Module 11-06 Container vs Media Queries README
$readme = @'
# Container Queries vs Media Queries

## Media Queries
Traditional responsive design approach based on viewport size.

### Pros
- Wide browser support
- Well-established patterns
- Simple to implement
- Great for global layout changes

### Cons
- Based on viewport, not component size
- Difficult with component-based architecture
- Requires global knowledge

## Container Queries
Modern approach based on container size instead of viewport.

### Syntax
```css
@container (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

### Pros
- Component-focused
- Reusable components at any size
- Perfect for modern frameworks
- More intuitive for developers

### Cons
- Limited browser support
- Newer specification
- Requires more specific targeting

## When to Use Each
- **Media Queries**: Page layouts, global responsive design
- **Container Queries**: Component-level responsiveness, design systems
- **Both**: Hybrid approach for best results

## Future of Responsive Design
Container queries represent the future of responsive web design, enabling truly reusable, size-agnostic components.
'@
Set-Content "11-responsive-advanced\06-container-vs-media\README.md" $readme
Write-Host "11-06 README: Done"

Write-Host "Module 11 README files generation complete!"

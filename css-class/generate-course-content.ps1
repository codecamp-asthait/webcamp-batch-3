# CSS Course - Content Generation Script
# This script creates all lesson directories and placeholder files

$lessons = @(
    # Module 2 - Intermediate (remaining)
    @{Path="02-intermediate/04-floats"; Title="Floats and Clearing"},
    @{Path="02-intermediate/05-pseudo-classes-elements"; Title="Pseudo-classes and Pseudo-elements"},
    
    # Module 3 - Advanced
    @{Path="03-advanced/01-css-variables"; Title="CSS Variables (Custom Properties)"},
    @{Path="03-advanced/02-transitions"; Title="CSS Transitions"},
    @{Path="03-advanced/03-animations"; Title="CSS Animations"},
    @{Path="03-advanced/04-transforms"; Title="CSS Transforms"},
    @{Path="03-advanced/05-gradients-shadows"; Title="Gradients and Shadows"},
    @{Path="03-advanced/06-media-queries"; Title="Media Queries and Responsive Design"},
    
    # Module 4 - Layouts
    @{Path="04-layouts/01-flexbox-basics"; Title="Flexbox Fundamentals"},
    @{Path="04-layouts/02-flexbox-advanced"; Title="Flexbox Advanced"},
    @{Path="04-layouts/03-grid-basics"; Title="CSS Grid Fundamentals"},
    @{Path="04-layouts/04-grid-advanced"; Title="CSS Grid Advanced"},
    @{Path="04-layouts/05-flexbox-grid-combined"; Title="Combining Flexbox and Grid"},
    
    # Module 5 - Advanced Styling
    @{Path="05-advanced-styling/01-filters"; Title="CSS Filters and Backdrop Filters"},
    @{Path="05-advanced-styling/02-blend-modes"; Title="Blend Modes"},
    @{Path="05-advanced-styling/03-clipping-masking"; Title="Clipping and Masking"},
    @{Path="05-advanced-styling/04-scroll-snap"; Title="Scroll Snap"},
    @{Path="05-advanced-styling/05-object-fit"; Title="Object-fit and Object-position"},
    @{Path="05-advanced-styling/06-aspect-ratio"; Title="Aspect Ratio"},
    
    # Module 6 - Modern CSS
    @{Path="06-modern-css/01-container-queries"; Title="CSS Container Queries"},
    @{Path="06-modern-css/02-subgrid"; Title="CSS Subgrid"},
    @{Path="06-modern-css/03-cascade-layers"; Title="CSS Cascade Layers (@layer)"},
    @{Path="06-modern-css/04-has-selector"; Title="CSS :has() Selector"},
    @{Path="06-modern-css/05-nesting"; Title="CSS Nesting"},
    @{Path="06-modern-css/06-color-functions"; Title="CSS Color Functions (oklch, oklab)"},
    @{Path="06-modern-css/07-logical-properties"; Title="CSS Logical Properties"},
    
    # Module 7 - Advanced Layouts
    @{Path="07-advanced-layouts/01-multi-column"; Title="Multi-column Layout"},
    @{Path="07-advanced-layouts/02-sticky-advanced"; Title="Sticky Positioning Advanced"},
    @{Path="07-advanced-layouts/03-css-shapes"; Title="CSS Shapes"},
    @{Path="07-advanced-layouts/04-writing-modes"; Title="Writing Modes and Direction"},
    @{Path="07-advanced-layouts/05-css-regions"; Title="CSS Regions (Experimental)"},
    
    # Module 8 - Advanced Animations
    @{Path="08-advanced-animations/01-keyframes-deep-dive"; Title="Keyframe Animation Deep Dive"},
    @{Path="08-advanced-animations/02-timing-functions"; Title="Animation Timing Functions"},
    @{Path="08-advanced-animations/03-view-transitions"; Title="View Transitions API"},
    @{Path="08-advanced-animations/04-scroll-animations"; Title="Scroll-driven Animations"},
    @{Path="08-advanced-animations/05-motion-path"; Title="Motion Path"},
    @{Path="08-advanced-animations/06-performance"; Title="Animation Performance"},
    
    # Module 9 - Advanced Selectors
    @{Path="09-advanced-selectors/01-attribute-selectors"; Title="Advanced Attribute Selectors"},
    @{Path="09-advanced-selectors/02-structural-pseudo"; Title="Structural Pseudo-classes"},
    @{Path="09-advanced-selectors/03-logical-pseudo"; Title=":is(), :where(), :not()"},
    @{Path="09-advanced-selectors/04-math-functions"; Title="CSS Math Functions (calc, clamp)"},
    @{Path="09-advanced-selectors/05-comparison-functions"; Title="CSS Comparison Functions"},
    
    # Module 10 - Architecture
    @{Path="10-architecture/01-methodologies"; Title="CSS Methodologies (BEM, OOCSS)"},
    @{Path="10-architecture/02-custom-properties-strategies"; Title="CSS Custom Properties Strategies"},
    @{Path="10-architecture/03-reset-normalize"; Title="CSS Reset and Normalize"},
    @{Path="10-architecture/04-organizing-projects"; Title="Organizing Large CSS Projects"},
    @{Path="10-architecture/05-performance"; Title="CSS Performance Optimization"},
    @{Path="10-architecture/06-critical-css"; Title="Critical CSS"},
    
    # Module 11 - Responsive Advanced
    @{Path="11-responsive-advanced/01-mobile-first"; Title="Mobile-First Design"},
    @{Path="11-responsive-advanced/02-breakpoints"; Title="Breakpoint Strategies"},
    @{Path="11-responsive-advanced/03-responsive-typography"; Title="Responsive Typography"},
    @{Path="11-responsive-advanced/04-responsive-images"; Title="Responsive Images"},
    @{Path="11-responsive-advanced/05-fluid-layouts"; Title="Fluid Layouts"},
    @{Path="11-responsive-advanced/06-container-vs-media"; Title="Container vs Media Queries"},
    
    # Module 12 - Accessibility
    @{Path="12-accessibility/01-focus-styles"; Title="Focus Styles and :focus-visible"},
    @{Path="12-accessibility/02-high-contrast"; Title="High Contrast Mode"},
    @{Path="12-accessibility/03-reduced-motion"; Title="Reduced Motion"},
    @{Path="12-accessibility/04-color-contrast"; Title="Color Contrast and WCAG"},
    @{Path="12-accessibility/05-screen-reader-only"; Title="Screen Reader Only Content"},
    @{Path="12-accessibility/06-skip-links"; Title="Skip Links"},
    
    # Module 13 - Effects
    @{Path="13-effects/01-box-shadows"; Title="Advanced Box Shadows"},
    @{Path="13-effects/02-text-effects"; Title="Text Effects and Text Shadows"},
    @{Path="13-effects/03-glassmorphism"; Title="Glassmorphism"},
    @{Path="13-effects/04-neumorphism"; Title="Neumorphism"},
    @{Path="13-effects/05-css-art"; Title="CSS Art and Illustrations"},
    @{Path="13-effects/06-3d-transforms"; Title="3D Transforms"},
    @{Path="13-effects/07-perspective"; Title="Perspective and 3D Space"},
    
    # Module 14 - Preprocessors
    @{Path="14-preprocessors/01-sass-intro"; Title="Introduction to Sass/SCSS"},
    @{Path="14-preprocessors/02-less"; Title="Less CSS"},
    @{Path="14-preprocessors/03-postcss"; Title="PostCSS"},
    @{Path="14-preprocessors/04-css-modules"; Title="CSS Modules"},
    @{Path="14-preprocessors/05-tailwind-concepts"; Title="Tailwind CSS Concepts"},
    
    # Module 15 - Advanced Topics
    @{Path="15-advanced-topics/01-houdini"; Title="CSS Houdini"},
    @{Path="15-advanced-topics/02-paint-api"; Title="CSS Paint API"},
    @{Path="15-advanced-topics/03-layout-api"; Title="CSS Layout API"},
    @{Path="15-advanced-topics/04-properties-values-api"; Title="Properties and Values API"},
    @{Path="15-advanced-topics/05-anchor-positioning"; Title="CSS Anchor Positioning"},
    @{Path="15-advanced-topics/06-scope-rule"; Title="CSS @scope Rule"},
    @{Path="15-advanced-topics/07-future-features"; Title="Future CSS Features"},
    
    # Module 16 - Projects
    @{Path="16-projects/01-responsive-nav"; Title="Responsive Navigation"},
    @{Path="16-projects/02-card-system"; Title="Card Layout System"},
    @{Path="16-projects/03-image-gallery"; Title="Image Gallery with Grid"},
    @{Path="16-projects/04-landing-page"; Title="Animated Landing Page"},
    @{Path="16-projects/05-dashboard"; Title="Dashboard Layout"},
    @{Path="16-projects/06-ecommerce"; Title="E-commerce Product Page"},
    @{Path="16-projects/07-blog-layout"; Title="Blog Layout"},
    @{Path="16-projects/08-portfolio"; Title="Portfolio Website"}
)

$baseDir = "C:\Users\User\Desktop\css-class"

Write-Host "Creating CSS Course Structure..." -ForegroundColor Green
Write-Host "Total Lessons: $($lessons.Count)" -ForegroundColor Cyan

foreach ($lesson in $lessons) {
    $fullPath = Join-Path $baseDir $lesson.Path
    
    # Create directory if it doesn't exist
    if (-not (Test-Path $fullPath)) {
        New-Item -Path $fullPath -ItemType Directory -Force | Out-Null
        Write-Host "Created: $($lesson.Path)" -ForegroundColor Yellow
    }
    
    # Create README.md
    $readmePath = Join-Path $fullPath "README.md"
    if (-not (Test-Path $readmePath)) {
        $readmeContent = @"
# $($lesson.Title)

## Overview
This lesson covers $($lesson.Title.ToLower()), an important concept in CSS development.

## Key Concepts

### Introduction
[Content to be added - detailed explanation of the topic]

### Syntax
``````css
/* Example syntax */
``````

### Properties

1. **Property 1** - Description
2. **Property 2** - Description
3. **Property 3** - Description

## Common Patterns

``````css
/* Common use case */
``````

## Best Practices

1. Best practice guideline 1
2. Best practice guideline 2
3. Best practice guideline 3

## Browser Support

Check [Can I Use](https://caniuse.com/) for current browser support.

## Practice Exercises

1. Exercise 1
2. Exercise 2
3. Exercise 3

## Additional Resources

- [MDN Documentation](https://developer.mozilla.org/)
- Related tutorials and articles
"@
        Set-Content -Path $readmePath -Value $readmeContent
    }
    
    # Create index.html
    $htmlPath = Join-Path $fullPath "index.html"
    if (-not (Test-Path $htmlPath)) {
        $htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$($lesson.Title) - CSS Course</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>$($lesson.Title)</h1>
        
        <section class="section">
            <h2>Introduction</h2>
            <p>This lesson demonstrates $($lesson.Title.ToLower()).</p>
        </section>

        <section class="section">
            <h2>Example 1</h2>
            <div class="demo-box">
                <div class="example">Example Content</div>
            </div>
        </section>

        <section class="section">
            <h2>Example 2</h2>
            <div class="demo-box">
                <div class="example">More Examples</div>
            </div>
        </section>

        <section class="section practice">
            <h2>Practice Area</h2>
            <p>Experiment with the styles in styles.css!</p>
            <div class="practice-box">
                <p>Practice area for hands-on learning</p>
            </div>
        </section>
    </div>
</body>
</html>
"@
        Set-Content -Path $htmlPath -Value $htmlContent
    }
    
    # Create styles.css
    $cssPath = Join-Path $fullPath "styles.css"
    if (-not (Test-Path $cssPath)) {
        $cssContent = @"
/* $($lesson.Title) - Styles */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

h1 {
    color: #667eea;
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5em;
}

h2 {
    color: #764ba2;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 3px solid #667eea;
}

.section {
    margin-bottom: 40px;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 8px;
}

.demo-box {
    background: white;
    padding: 20px;
    border: 2px dashed #ddd;
    margin: 15px 0;
    min-height: 100px;
}

.example {
    background: #3498db;
    color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
}

.practice {
    background: #fff3cd;
    border: 2px dashed #856404;
}

.practice-box {
    background: white;
    padding: 30px;
    margin-top: 15px;
    border-radius: 5px;
    border: 2px solid #667eea;
    text-align: center;
}

/* Add your custom styles below */
"@
        Set-Content -Path $cssPath -Value $cssContent
    }
}

Write-Host "`nCourse structure created successfully!" -ForegroundColor Green
Write-Host "Total lessons created: $($lessons.Count)" -ForegroundColor Cyan
Write-Host "`nEach lesson includes:" -ForegroundColor White
Write-Host "  - README.md (theory and explanations)" -ForegroundColor Gray
Write-Host "  - index.html (interactive examples)" -ForegroundColor Gray
Write-Host "  - styles.css (styling and practice)" -ForegroundColor Gray

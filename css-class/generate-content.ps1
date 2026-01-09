$basePath = "c:\Users\User\Desktop\css-class"

# Module 11 - 01 Mobile First
$content11_1_readme = @"
# Mobile-First Design

## Overview
Mobile-first design is a strategy where you design for mobile devices first, then progressively enhance the experience for larger screens using media queries.

## Key Concepts

### What is Mobile-First?
- Start with styles for the smallest screens
- Add complexity and features for larger screens
- Results in cleaner, more maintainable code
- Better performance on mobile devices
- Focuses on essential content first

### Benefits
1. Performance: Mobile users get minimal CSS first
2. Simplicity: Forces you to prioritize content
3. Accessibility: Better semantic structure
4. Maintainability: Easier to scale up than down
5. User Experience: Optimized for primary audience

## Common Breakpoints
- Mobile: 320px - 479px
- Tablet: 480px - 767px
- Desktop: 768px+

## Best Practices
1. Always start with mobile viewport
2. Use min-width media queries
3. Organize CSS by breakpoint
4. Test on actual mobile devices
5. Use relative units (em, rem)
"@

Set-Content -Path "$basePath\11-responsive-advanced\01-mobile-first\README.md" -Value $content11_1_readme -Encoding UTF8

Write-Host "Module 11-01 README updated"

#!/usr/bin/env pwsh
# Generate content for CSS modules 11-15

$basePath = "c:\Users\User\Desktop\css-class"

# Helper function to create files
function Create-ModuleFiles {
    param(
        [string]$ModuleNumber,
        [string]$ModuleName,
        [string]$Title,
        [string]$ReadmeContent,
        [string]$HtmlContent,
        [string]$CssContent
    )
    
    $path = "$basePath\$ModuleNumber-$ModuleName"
    
    # Create README
    Set-Content -Path "$path\README.md" -Value $ReadmeContent -Encoding UTF8
    
    # Create HTML
    Set-Content -Path "$path\index.html" -Value $HtmlContent -Encoding UTF8
    
    # Create CSS
    Set-Content -Path "$path\styles.css" -Value $CssContent -Encoding UTF8
    
    Write-Host "$ModuleNumber - $Title: Created"
}

# Module 11-02: Breakpoints
$readme_11_2 = @'
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

### CSS Media Queries
```css
/* Mobile first */
.container {
    width: 100%;
}

/* Small devices */
@media (min-width: 480px) {
    .container {
        width: 90%;
    }
}

/* Medium devices */
@media (min-width: 768px) {
    .container {
        width: 85%;
    }
}

/* Large devices */
@media (min-width: 1024px) {
    .container {
        width: 960px;
    }
}
```

## Tips for Choosing Breakpoints
1. Look at your analytics to see device distribution
2. Consider common device sizes
3. Use your content as a guide - break where needed
4. Keep breakpoints consistent
5. Test on actual devices
6. Don't target specific devices - target ranges

## Best Practices
- Use mobile-first approach (min-width)
- Keep breakpoints to 3-5 main points
- Use meaningful names
- Document your breakpoint strategy
- Be consistent across projects
'@

# Module 11-02: Breakpoints HTML
$html_11_2 = @'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Breakpoints - CSS Course</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Understanding Breakpoints</h1>
        
        <section class="info-section">
            <h2>What are Breakpoints?</h2>
            <p>Breakpoints define specific screen widths where your responsive design adapts. They're essential for creating layouts that work across different devices.</p>
        </section>

        <section class="breakpoints-section">
            <h2>Common Breakpoints</h2>
            <div class="breakpoints-grid">
                <div class="breakpoint-card">
                    <h3>XS (Extra Small)</h3>
                    <p class="size">0px - 479px</p>
                    <p>Phones</p>
                </div>
                <div class="breakpoint-card">
                    <h3>SM (Small)</h3>
                    <p class="size">480px - 767px</p>
                    <p>Large phones, tablets</p>
                </div>
                <div class="breakpoint-card">
                    <h3>MD (Medium)</h3>
                    <p class="size">768px - 1023px</p>
                    <p>Tablets</p>
                </div>
                <div class="breakpoint-card">
                    <h3>LG (Large)</h3>
                    <p class="size">1024px - 1279px</p>
                    <p>Small desktops</p>
                </div>
                <div class="breakpoint-card">
                    <h3>XL (Extra Large)</h3>
                    <p class="size">1280px+</p>
                    <p>Large desktops</p>
                </div>
            </div>
        </section>

        <section class="responsive-demo">
            <h2>Responsive Example</h2>
            <div class="responsive-container">
                <div class="responsive-content">
                    <p>This layout changes based on screen size. Resize the window to see breakpoints in action.</p>
                </div>
            </div>
        </section>

        <section class="info-section">
            <h2>Testing Breakpoints</h2>
            <div class="tips">
                <div class="tip">Check your analytics</div>
                <div class="tip">Test on real devices</div>
                <div class="tip">Keep 3-5 breakpoints</div>
                <div class="tip">Document your strategy</div>
            </div>
        </section>
    </div>
</body>
</html>
'@

# Module 11-02: Breakpoints CSS
$css_11_2 = @'
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
    max-width: 100%;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    color: #667eea;
    margin-bottom: 30px;
    font-size: 2em;
}

h2 {
    color: #333;
    margin: 25px 0 15px;
    padding-bottom: 10px;
    border-bottom: 3px solid #667eea;
    font-size: 1.5em;
}

h3 {
    color: #667eea;
    margin-bottom: 10px;
}

section {
    margin-bottom: 30px;
}

.info-section {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.breakpoints-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 20px;
}

.breakpoint-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.breakpoint-card h3 {
    color: white;
    font-size: 1.3em;
    margin-bottom: 10px;
}

.breakpoint-card .size {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 10px;
}

.responsive-demo {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
}

.responsive-container {
    background: white;
    padding: 30px;
    border: 2px solid #667eea;
    border-radius: 8px;
    text-align: center;
}

.responsive-content {
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.responsive-content p {
    color: #666;
    font-size: 1.1em;
}

.tips {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 15px;
}

.tip {
    background: #667eea;
    color: white;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    font-weight: 500;
}

/* Tablet - SM breakpoint (480px) */
@media (min-width: 480px) {
    .container {
        padding: 30px;
    }

    h1 {
        font-size: 2.3em;
    }

    .breakpoints-grid {
        grid-template-columns: 1fr 1fr;
    }

    .tips {
        grid-template-columns: 1fr 1fr;
    }
}

/* Tablet - MD breakpoint (768px) */
@media (min-width: 768px) {
    body {
        padding: 40px;
    }

    .container {
        max-width: 900px;
        padding: 40px;
    }

    h1 {
        font-size: 2.8em;
    }

    h2 {
        font-size: 1.8em;
    }

    .breakpoints-grid {
        grid-template-columns: repeat(5, 1fr);
    }

    .tips {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Desktop - LG breakpoint (1024px) */
@media (min-width: 1024px) {
    .container {
        max-width: 1000px;
    }

    .responsive-demo {
        background: white;
        padding: 30px;
        border: 2px solid #667eea;
    }
}

/* Large Desktop - XL breakpoint (1280px) */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }

    h1 {
        font-size: 3em;
    }

    .breakpoint-card {
        padding: 30px;
    }
}
'@

Create-ModuleFiles -ModuleNumber "11-responsive-advanced\02-breakpoints" -ModuleName "breakpoints" -Title "Breakpoints" -ReadmeContent $readme_11_2 -HtmlContent $html_11_2 -CssContent $css_11_2

Write-Host "Module 11-02 generation complete"

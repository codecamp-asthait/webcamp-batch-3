# Next.js Rendering Methods Demo - For Students

## Prerequisites
- Node.js (v18+) installed
- A code editor (VS Code recommended)
- Terminal/Command Prompt knowledge

---

## Step 1: Install Next.js with Pages Router

```bash
npx create-next-app@latest nextjs-rendering-demo
```

**Answer prompts:**
- TypeScript: No (for simplicity)
- ESLint: Yes
- Tailwind CSS: No
- `src/` directory: No
- App Router: **No** (important!)
- Import alias: `@/*`

```bash
cd nextjs-rendering-demo
npm run dev
```

Visit `http://localhost:3000` to verify installation.

---

## Step 2: Understanding Project Structure (Pages Router)

```
nextjs-rendering-demo/
├── pages/
│   ├── api/           # API routes
│   ├── _app.js        # App wrapper
│   ├── _document.js   # HTML document
│   └── index.js       # Home page
├── public/            # Static files
├── package.json
└── next.config.js
```

---

## Step 3: Demonstrate SSR (Server-Side Rendering)

**Concept:** Page renders on server for each request.

Create `pages/ssr.js`:

```javascript
export default function SSRPage({ data }) {
  return (
    <div>
      <h1>SSR Demo - Server Side Rendering</h1>
      <p>Generated at: {new Date().toLocaleTimeString()}</p>
      <p>Data from server: {data.message}</p>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: {
        message: "This page was rendered on the server!"
      }
    }
  };
}
```

**Key Point:** `getServerSideProps` runs on every request.

---

## Step 4: Demonstrate SSG (Static Site Generation)

**Concept:** Page builds once at build time, served as static HTML.

Create `pages/ssg.js`:

```javascript
export default function SSGPage({ data }) {
  return (
    <div>
      <h1>SSG Demo - Static Site Generation</h1>
      <p>Built at build time: {data.buildTime}</p>
      <p>Content: {data.content}</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: {
        buildTime: new Date().toISOString(),
        content: "This page was built at compile time!"
      }
    }
  };
}
```

**Key Point:** `getStaticProps` runs only once during build.

---

## Step 5: Demonstrate ISR (Incremental Static Regeneration)

**Concept:** Static page regenerates after a specified interval.

Create `pages/isr.js`:

```javascript
export default function ISRPage({ data }) {
  return (
    <div>
      <h1>ISR Demo - Incremental Static Regeneration</h1>
      <p>Generated at: {data.timestamp}</p>
      <p>Visit count: {data.visitCount}</p>
      <p><em>Wait 10 seconds and refresh to see regeneration!</em></p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: {
        timestamp: new Date().toLocaleTimeString(),
        visitCount: Math.floor(Math.random() * 100)
      }
    },
    revalidate: 10
  };
}
```

**Key Point:** `revalidate: 10` means regenerate every 10 seconds when accessed.

---

## Step 6: Comparison Page

Create `pages/index.js` with navigation to all demos:

```javascript
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Next.js Rendering Methods Demo</h1>
      <nav>
        <ul>
          <li><Link href="/ssr">SSR Demo</Link></li>
          <li><Link href="/ssg">SSG Demo</Link></li>
          <li><Link href="/isr">ISR Demo</Link></li>
        </ul>
      </nav>
    </div>
  );
}
```

---

## Summary Table

| Method | When Renders | Use Case |
|--------|--------------|----------|
| **SSR** | Every request | User-specific data, real-time |
| **SSG** | Build time | Blogs, documentation, landing pages |
| **ISR** | Build + periodic | E-commerce, dashboards |

---

## Run Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## Verification Checklist

- [ ] Project runs on localhost:3000
- [ ] SSR page shows new time on each refresh
- [ ] SSG page shows same build time (check terminal)
- [ ] ISR page updates after 10 seconds

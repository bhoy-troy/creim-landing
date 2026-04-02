# CREIM Landing

Marketing site for **CREIM** — Connected Resource & Energy Intelligence Monitoring.

Built with [Next.js 15](https://nextjs.org/) (App Router), [Tailwind CSS v4](https://tailwindcss.com/), and TypeScript.

---

## Requirements

- Node.js 18+
- npm 9+

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

---

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Compile TypeScript and build an optimised production bundle |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Production build

```bash
npm run build
npm run start
```

The build output is written to `.next/`. Tailwind CSS is compiled automatically as part of the build via the `@tailwindcss/postcss` plugin — no separate CSS compile step is needed.

---

## Project structure

```
creim-landing/
├── app/                        # Next.js App Router pages & layout
│   ├── globals.css             # Tailwind @import + @theme colour tokens
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home  /
│   ├── not-found.tsx           # 404
│   ├── features/page.tsx       # /features
│   ├── how-it-works/page.tsx   # /how-it-works
│   ├── use-cases/page.tsx      # /use-cases
│   ├── pricing/page.tsx        # /pricing
│   ├── about/page.tsx          # /about
│   └── contact/page.tsx        # /contact
├── components/                 # Shared React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── PageHero.tsx
├── styles/                     # Per-component Tailwind CSS modules (@apply)
│   ├── navbar.module.css
│   ├── footer.module.css
│   ├── pageHero.module.css
│   ├── home.module.css
│   ├── features.module.css
│   ├── howItWorks.module.css
│   ├── useCases.module.css
│   ├── pricing.module.css
│   ├── contact.module.css
│   ├── about.module.css
│   └── notFound.module.css
├── public/                     # Static assets
├── next.config.ts
├── postcss.config.mjs          # @tailwindcss/postcss
└── tsconfig.json               # Path alias: @/* → project root
```

---

## Tailwind CSS

Tailwind v4 is configured via PostCSS (`postcss.config.mjs`). The design tokens (colours etc.) are defined in `app/globals.css` using the `@theme` block:

```css
@theme {
  --color-navy:  #0A1F44;
  --color-teal:  #00C2CB;
  --color-grey:  #6B7280;
  --color-light: #F0F4F8;
  --color-dark:  #060E1F;
}
```

All component styles live in `styles/*.module.css` files and use `@apply` to compose Tailwind utilities. There is no separate Tailwind CLI step — it compiles automatically via Next.js.


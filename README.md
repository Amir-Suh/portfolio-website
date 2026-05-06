# Portfolio Website

Professional technical portfolio built with Next.js 16, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 16.2 (App Router, React 19)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Theming**: next-themes (light / dark / system)
- **Icons**: Lucide React

## Development

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm run lint    # Lint
```

## Branch Strategy

- `main` — production-ready, stable code only
- `development` — integration branch
- `build/*` — feature branches (merged into development via PR)

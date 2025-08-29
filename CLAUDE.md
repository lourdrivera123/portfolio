# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Tech Stack
- React
- Next.js
- Tailwind CSS
- Headless UI
- MDX
- Vercel

## Project Structure
- `/pages` - Contains Next.js pages including the updated meta tags
- `/components` - Houses reusable React components for the website
- `/images` - Stores images used in the portfolio
- `/styles` - Contains Tailwind CSS configuration and utility classes
- `/lib` - Includes additional libraries or utilities for the project

## Project Architecture

This is a Next.js portfolio website using the Pages Router with the following key architectural patterns:

### Core Technologies
- **Next.js 12** with Pages Router (not App Router)
- **React 18** with JSX components
- **Tailwind CSS** with extensive custom typography configuration
- **MDX** for article content with syntax highlighting via Prism
- **Headless UI** for accessible interactive components

### Key Architectural Patterns

**Page Structure**: Uses traditional Next.js pages structure with custom `_app.jsx` and `_document.jsx`. Root path `/` redirects to `/home` via Next.js redirects in `next.config.mjs`.

**Content Management**: 
- Articles are MDX files in `/src/pages/articles/` directory
- Dynamic article loading via `getAllArticles()` function in `/src/lib/getAllArticles.js`
- Static project data defined in `/src/pages/projects.jsx`

**Theming**: Dark mode support implemented via Tailwind's `dark:` class variants with extensive custom prose styling in `tailwind.config.js`.

**Layout System**: 
- Global layout wrapper in `_app.jsx` with fixed background and responsive container
- Reusable layout components: `SimpleLayout`, `ArticleLayout`, `Container`
- Header/Footer components provide consistent navigation

**Component Architecture**: 
- All components use function declarations (not arrow functions)
- Consistent use of `clsx` for conditional classes
- Image optimization via Next.js `Image` component from `next/future/image`

### Important File Locations
- Global styles: `/src/styles/tailwind.css` and `/src/styles/prism.css`
- Reusable components: `/src/components/`
- Static assets: `/public/` and `/src/images/`
- Content utilities: `/src/lib/`

### Development Notes
- Uses `@` path alias for `/src` directory
- MDX content supports GFM (GitHub Flavored Markdown) via remark-gfm
- Custom Tailwind typography configuration with extensive prose styling
- RSS feed generation capability in `/src/lib/generateRssFeed.js`
- Prettier configured with Tailwind plugin for class sorting
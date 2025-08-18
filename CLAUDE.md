# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build`
- **Production server**: `npm start` 
- **Linting**: `npm run lint`

## Project Architecture

This is a Next.js 15 portfolio application using the App Router architecture with the following structure:

- **Framework**: Next.js 15.4.6 with App Router
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to `./src/*`)
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`
- **Linting**: ESLint with Next.js recommended configurations

### Key Files

- `src/app/layout.tsx`: Root layout with font loading and metadata
- `src/app/page.tsx`: Homepage component 
- `src/app/globals.css`: Global styles with CSS variables and dark mode support
- `next.config.ts`: Next.js configuration (currently minimal)
- `tsconfig.json`: TypeScript configuration with strict settings

### Styling System

The project uses Tailwind CSS v4 with a custom theming system:
- CSS variables defined in `globals.css` for colors (`--background`, `--foreground`)
- Automatic dark mode support via `prefers-color-scheme`
- Custom Tailwind theme configuration using `@theme inline`

This is currently a fresh Next.js installation that can be developed into a portfolio website.
# Prince Sah Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and Three.js.

This project highlights my work, skills, and contact links in a clean single-page experience with interactive visual elements and a custom 3D background.

## Live Site

`https://portfolio-pink-kappa-t07rl019cb.vercel.app/`

## Overview

- Responsive layout for mobile, tablet, and desktop
- Three.js powered animated background
- Clear single-page flow with Hero, About, Projects, Skills, and Contact sections
- Reusable React component structure
- Project list managed from a central constants file
- Fast development and production builds with Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Three.js
- React Three Fiber
- ESLint

## Sections

- `Hero`: Intro, title, and primary call-to-action
- `About`: Short profile and focus area
- `Projects`: Selected projects with stack details and GitHub links
- `Skills`: Frontend, backend, and tools overview
- `Contact`: Email, GitHub, and LinkedIn links

## Project Structure

```text
src/
  components/
    anime/
    sections/
    three/
    ui/
  constants/
  hooks/
```

## Local Setup

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

## Featured Projects

This portfolio currently highlights:

- Best Practice Backend
- Code Editor
- Chat App with AI
- Netflix GPT

Project entries live in `src/constants/projects.ts`.

## Customization

You can personalize the site by updating:

- `src/components/sections/*` for content
- `src/components/ui/Navbar.tsx` for navigation
- `src/constants/projects.ts` for featured projects
- `src/index.css` and component classes for styling

## Quality Checks

- `npm run build` passes
- `npm run lint` passes

## Author

Prince Sah

- GitHub: `https://github.com/PrinceSah06`
- LinkedIn: `https://www.linkedin.com/in/prince-sah-dev/`
- Email: `princesah@gmail.com`

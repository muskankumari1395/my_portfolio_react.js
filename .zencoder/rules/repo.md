---
description: Repository Information Overview
alwaysApply: true
---

# Portfolio Website Information

## Summary
A modern portfolio website built with React and Vite, featuring 3D elements using Three.js and styled with TailwindCSS. The project showcases a developer's work through interactive sections including a hero section, project showcase, experience timeline, and tech stack display.

## Structure
- **src/**: Core application code including React components and sections
  - **components/**: Reusable UI components (NavBar, Button, GlowCard, etc.)
  - **sections/**: Main page sections (Hero, Experience, TechStack, etc.)
  - **constants/**: Data constants and configuration
- **public/**: Static assets including images, 3D models, and other media
  - **images/**: Image assets for the portfolio
  - **models/**: 3D model files (.glb) for Three.js rendering
- **dist/**: Production build output

## Language & Runtime
**Language**: JavaScript (React)
**Version**: React 19.1.0
**Build System**: Vite 7.0.4
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React (^19.1.0) and React DOM (^19.1.0)
- Three.js (^0.178.0) with React Three Fiber (^9.3.0) and Drei (^10.6.1)
- GSAP (^3.13.0) with React integration (@gsap/react ^2.1.2)
- TailwindCSS (^4.1.11)
- React CountUp (^6.5.3) for animated counters
- React Responsive (^10.0.1) for responsive design

**Development Dependencies**:
- ESLint (^9.30.1) with React plugins
- TypeScript types for React
- Vite plugins (@vitejs/plugin-react ^4.6.0)

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Main Files
**Entry Point**: src/main.jsx
**App Component**: src/App.jsx
**Key Sections**:
- Hero.jsx: Main landing section
- ShowcaseSection.jsx: Portfolio project showcase
- Experience.jsx: Work experience timeline
- TechStack.jsx: Technologies and skills display

**Configuration**:
- vite.config.js: Vite bundler configuration
- eslint.config.js: ESLint configuration
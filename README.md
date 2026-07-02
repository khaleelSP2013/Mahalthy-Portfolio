# Mahalthy Khaleel Ahmed — Portfolio

A responsive personal portfolio built with **React 18 + TypeScript + Vite**, generated from the resume content.

## Design concept

The page uses a "blueprint / systems architecture" visual language — a nod to the enterprise
architecture and event-driven systems work in the resume. The signature element is the
**Experience section**, laid out as an event bus: each role is a node on a Kafka-style dashed
line, with an "offset" (dates) and a "payload" (achievements), echoing the event-driven
architecture described in the résumé itself.

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/resume.ts        # typed resume content (edit this to update copy)
  components/
    Nav.tsx              # sticky nav, mobile menu
    Hero.tsx              # intro + summary + CTAs
    Experience.tsx        # event-bus timeline (signature element)
    Projects.tsx           # Key Projects cards
    PocProjects.tsx        # Gen AI / Agentic AI POC cards with live demo links
    Skills.tsx              # technical skills, grouped chips
    Education.tsx            # education list
    Footer.tsx                 # contact details
  index.css              # design tokens + all styling (CSS variables, responsive)
  App.tsx                # page assembly
  main.tsx               # React entry point
```

## Editing content

All resume content lives in `src/data/resume.ts` as typed objects (`contact`, `summary`,
`skills`, `experience`, `keyProjects`, `pocProjects`, `education`). Update this file to change
copy — no need to touch component markup.

## Deploying

The app builds to static files in `dist/` after `npm run build`, so it can be deployed to
Vercel, Netlify, GitHub Pages, or any static host.

# Yoann's Portfolio

> Interactive analytics-inspired portfolio showcasing Full-Stack development, Data Analytics, and operational impact through a modern dashboard experience.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-black" />
  <img src="https://img.shields.io/badge/Recharts-Data_Visualizations-orange" />
</p>

---

## 📖 Overview

This project is a personal portfolio built as an **interactive analytics dashboard** rather than a traditional portfolio website.

Instead of static pages and long descriptions, visitors explore:

- Professional experiences
- Technical projects
- Business impact
- Technical capabilities
- Learning journey
- Operational and analytical thinking

The goal is to present a profile the same way a company explores business data: through filters, metrics, timelines, and contextual insights.

---

## ✨ Key Features

### Executive Summary Hero

- Professional positioning
- Quick profile overview
- KPI highlights
- Recruiter-focused call-to-actions

### Interactive Profile Explorer

A dashboard-style exploration experience combining:

- Pseudo SQL query interface
- Dynamic filtering
- KPI cards
- Timeline visualizations
- Project exploration
- Experience exploration
- Modal-based deep dives

### Featured Case Studies

Detailed walkthroughs of selected projects:

- Budget Construction Platform
- StaffPicks
- Operational Analytics Projects

### Technical Capabilities

Organized by domain:

- Frontend
- Backend
- Data & Analytics
- Product & Operations

### Multilingual Support

Built-in localization system:

- 🇬🇧 English
- 🇫🇷 French

Language selection is fully type-safe through TypeScript and localStorage persistence.

---

## 🧠 Portfolio Philosophy

This portfolio intentionally avoids:

- Giant "About Me" pages
- Buzzword-heavy descriptions
- Endless logo clouds
- Generic storytelling

Instead, it focuses on:

- Evidence
- Business context
- Measurable outcomes
- Systems thinking
- Technical decision-making

---

## 🏗️ Architecture

```text
src/
├── components/
├── pages/
├── context/
│   └── LanguageContext.tsx
├── i18n/
│   ├── en.ts
│   └── fr.ts
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── metrics.ts
│   ├── skills.ts
│   ├── queries.ts
│   ├── labels.ts
│   └── types.ts
├── lib/
│   ├── translate.ts
│   └── filters.ts
└── assets/
```

---

## 🌍 Localization System

The application uses a strongly typed localization architecture.

### UI Content

```ts
copy.filters.reset;
copy.sections.projects;
```

### Portfolio Content

```ts
translate(project.title, locale);
translate(project.summary, locale);
```

Benefits:

- Type-safe translations
- Compile-time locale validation
- Easy future language expansion
- Separation between UI copy and portfolio content

---

## 📊 Dashboard Experience

Users can explore content through:

### Filters

- Project Type
- Domain
- Company
- Skills

### Visualizations

- KPI Cards
- Timeline Views
- Activity Charts
- Project Heatmaps

### Deep Dive Modals

Each project or experience can expose:

- Problem
- Solution
- Technologies
- Business Context
- KPIs
- Impact

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS v4

### UI & Visualization

- Framer Motion
- Recharts

### Engineering Practices

- Strong TypeScript modeling
- Localization-ready architecture
- Component-driven development
- Data-driven UI structure

---

## 🎯 MVP Scope

### Included

- Hero Section
- Dashboard Explorer
- Filters
- KPI Cards
- Timeline
- Project Modals
- Case Studies
- Technical Capabilities
- Contact Section
- Language Switcher

### Future Enhancements

- Query history
- Saved views
- GitHub activity integration
- Advanced dashboard transitions
- Enhanced analytics visualizations

---

## 👨‍💻 Author

**Yoann R.**

Full-Stack Developer & Data Analytics Enthusiast

Building practical tools combining:

- Software Engineering
- Data Analytics
- Automation
- Business Systems

---

## 📄 License

This personal portfolio and showcase project is provided under an
[all-rights-reserved license](./LICENSE).

# Portfolio Revamp — Project Summary

**Public website:** [luneroka.dev](https://luneroka.dev)  
**Public repository:** [github.com/luneroka/yoann-dev](https://github.com/luneroka/yoann-dev)  
**Project status:** Live portfolio with ongoing content and presentation maintenance  
**Latest repository state reviewed:** `main`, including Vercel Web Analytics integration on July 1, 2026  
**Origin:** Clean rebuild of the previous portfolio into an analytics-inspired interactive résumé

---

## 1. Project Overview

Portfolio Revamp is a frontend web application presenting Yoann Robert's hybrid profile across Full-Stack Development, Data Analytics, operational performance, and business-oriented product work.

The project deliberately avoids the structure of a conventional developer portfolio. Instead of a sequence of static project cards and a long biography, it uses the visual and interaction language of an internal analytics product:

- filters;
- KPI cards;
- generated SQL previews;
- comparative charts;
- timelines;
- structured project data;
- expandable capability cards;
- modal-based project deep dives.

The portfolio is itself part of the demonstration. Its interface is intended to prove frontend architecture, data modeling, localization, analytical reasoning, and product thinking rather than only listing those skills.

The final product is a bilingual, responsive, single-page portfolio deployed under the **Luneroka** identity.

---

## 2. Product Direction

### Primary audience

The portfolio is primarily designed for:

- technical recruiters;
- hiring managers;
- engineering and data teams;
- potential clients or collaborators;
- visitors evaluating both development and analytics capabilities.

The experience is optimized for visitors who need to understand the profile quickly while retaining the ability to inspect individual projects in depth.

### Product positioning

The portfolio is positioned as an **interactive résumé and project analytics dashboard**, not as:

- a generic personal homepage;
- a decorative agency-style portfolio;
- a terminal or cyberpunk interface;
- a large chronological autobiography;
- a collection of disconnected technology logos.

Its central positioning is the combination of:

- software development;
- data analysis;
- operational experience;
- business-process understanding;
- internal-tool and product thinking.

### Narrative principles

The portfolio tells the professional story through evidence and interaction:

- the Hero establishes the hybrid positioning;
- the Journey provides the high-level career progression;
- the Project Explorer lets visitors filter and compare evidence;
- project modals provide technical and business context;
- Skills & Expertise aggregates capabilities demonstrated by real projects;
- Contact provides a direct professional call to action.

The narrative should remain concise, analytical, and evidence-driven.

### Language conventions

- The site supports English and French.
- UI copy is stored in dedicated locale dictionaries.
- Project-specific content is stored as bilingual structured data.
- Source code and technical identifiers use English.
- The browser language is used when no preference has been saved.
- French is the fallback language.
- The selected language is persisted in `localStorage`.

---

## 3. Redesign from the Previous Portfolio

### Concepts retained

The rebuild retained the useful source material from the previous portfolio:

- personal and professional identity;
- project descriptions;
- technical skills;
- professional initiatives;
- GitHub and LinkedIn links;
- project screenshots and other reusable assets;
- the need to present both development and data work.

### Earlier structure replaced

The previous approach was replaced rather than incrementally refactored.

The rebuild introduced:

- a new clean repository;
- a dedicated `frontend/` application root;
- a new design system;
- a new component architecture;
- a typed project-content model;
- a bilingual content system;
- a dashboard-style information architecture;
- project filtering and calculated metrics;
- a modal system for detailed case studies;
- a responsive mobile navigation drawer;
- light and dark themes;
- Vercel deployment and analytics.

### Design direction replaced

The final design rejects terminal-style or cyberpunk presentation in favor of:

- white and blue product surfaces;
- orange accents for analytics and data-oriented elements;
- strong spacing and visual hierarchy;
- dashboard cards and panels;
- subtle gradients and topographic decoration;
- restrained animation;
- responsive layouts;
- accessible interactive controls.

---

## 4. Confirmed Technical Architecture

| Layer | Confirmed technology and responsibility |
| --- | --- |
| Application | Single-page frontend application with one public route |
| Core frontend | React 19, TypeScript 6, Vite 8 |
| Styling | Tailwind CSS 4 with CSS design tokens and custom light/dark variables |
| Routing | React Router 7 using `createBrowserRouter` |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons, and `country-flag-icons` |
| Visualization | Custom dashboard visualizations, with Recharts available as a dependency |
| Content source | Local typed TypeScript modules; no runtime database |
| Localization | Typed English/French dictionaries plus localized project records |
| State | React component state and context providers for language and theme |
| Deployment | Vercel, with SPA rewrites to `index.html` |
| Analytics | Vercel Web Analytics |
| Quality commands | ESLint, TypeScript type checking, production build |
| Backend | None in the current portfolio application |
| Authentication | None; all portfolio content is public |

### Application bootstrap

The application is wrapped by two global providers:

```text
ThemeProvider
└── LanguageProvider
    └── App
        ├── RouterProvider
        └── Vercel Analytics
```

`ThemeProvider` controls light and dark display modes. `LanguageProvider` controls the active English or French content.

### Routing

The router currently exposes one route:

```text
/
└── HomePage
```

The portfolio is intentionally a single-page narrative. Navigation between major sections uses controlled smooth scrolling rather than separate pages or persistent URL hashes.

---

## 5. Confirmed Content and Data Model

### `Locale` and `LocalizedString`

The supported locale contract is:

```ts
type Locale = "en" | "fr";
type LocalizedString = Record<Locale, string>;
```

Every localized project field must contain both English and French values.

This gives compile-time coverage when content is added or modified.

### `Project`

The main content entity is `Project`.

Each project can contain:

- identifier;
- bilingual title;
- company;
- bilingual role;
- one or more tracks;
- industry;
- product type;
- technologies;
- skills;
- project metrics;
- deliverables;
- summary;
- problem;
- solution;
- impact statements;
- screenshots;
- GitHub and live-demo links;
- start and end period;
- featured status.

The same structure supports personal web applications, analytics projects, Excel tools, and operational initiatives.

### Project taxonomy

The current typed taxonomy includes:

```text
Track
├── dev
└── data

Industry
├── logistics
├── retail
├── construction
└── technology

Product type
├── saas
├── internal-tool
├── web-app
└── analysis

Company
├── Amazon
└── Solo
```

Technologies and skills are represented through stable IDs rather than display strings. Localized label maps translate those IDs for the active language.

### Project metrics

Each project contains:

- `hoursInvested`;
- one project-specific context metric.

The context metric can represent values such as:

- users affected;
- filter dimensions;
- reporting impact;
- performance improvement;
- another project-specific quantitative result.

### Current project registry

The explorer currently registers 12 project records:

1. Construction Budget Platform;
2. Construction Budget Excel Tool;
3. StaffPicks;
4. E-Commerce Data Analysis;
5. Aguera showcase website;
6. Ma Bibli;
7. HelpInvest;
8. Portfolio Revamp;
9. Amazon Attendance Tool;
10. Amazon Labor Cost initiative;
11. Amazon Picking Performance initiative;
12. Amazon End-of-Shift Bridge.

This registry mixes personal projects and professional operational initiatives in one consistent, filterable structure.

### Derived project data

Project records are enriched at runtime with values such as:

- deliverable count;
- technology count;
- formatted project period.

Aggregate explorer metrics are calculated from the currently filtered records rather than stored separately.

---

## 6. Core Experience Rules

### 6.1 Local project data is the source of truth

The portfolio has no runtime content API or database.

All project content is imported from typed TypeScript modules. Components render and derive information from those records.

This keeps the current application:

- fast;
- easy to deploy;
- deterministic;
- statically analyzable;
- independent from backend availability.

### 6.2 Filters control the entire explorer

The Project Explorer filters the same project dataset used for:

- SQL preview generation;
- KPI calculations;
- impact ranking;
- technology distribution;
- latest-project cards;
- project modal selection.

A single filter state therefore controls the full dashboard.

### 6.3 Filter logic

The explorer supports filtering by:

- date range;
- track;
- industry;
- product type;
- technology;
- skill.

Selected values within one dimension use inclusive matching: a project can match any selected value in that dimension.

Different dimensions are combined, so a project must satisfy the active conditions across those dimensions.

Date filtering uses project-period overlap rather than requiring the project to start and end entirely within the chosen range.

### 6.4 SQL is explanatory, not executable

The SQL interface is a generated, read-only representation of the active filters.

Examples include:

```sql
SELECT * FROM projects;
```

and:

```sql
SELECT *
FROM projects
WHERE track IN ('dev')
  AND industry IN ('construction');
```

There is no SQL server, database connection, or arbitrary query execution.

The SQL preview communicates:

- familiarity with SQL syntax;
- structured filtering logic;
- the relationship between user controls and data queries;
- an analytics-oriented mental model.

### 6.5 KPIs are calculated from filtered results

The explorer recalculates:

```text
Hours Invested
= sum of selected project hours

Project Deliverables
= sum of selected project deliverables

Skills Demonstrated
= count of unique selected-project skills
```

The fourth KPI displays a project context metric. When several non-zero context metrics are available, the card rotates between them automatically.

### 6.6 Project details remain contextual

Selecting a project opens a modal rather than navigating away from the dashboard.

The modal can display:

- summary;
- track badges;
- company;
- role;
- period;
- industry and product type;
- hours and context metrics;
- technologies;
- skills;
- problem;
- solution;
- impact;
- deliverables;
- screenshot gallery;
- GitHub link;
- live-demo link.

The modal closes through its close control, backdrop interaction, or the Escape key.

### 6.7 Language and theme preferences persist

The selected locale and theme are stored in `localStorage`.

Language initialization follows this order:

1. saved locale;
2. supported browser locale;
3. French fallback.

Theme initialization follows this order:

1. saved light or dark preference;
2. light theme fallback.

---

## 7. Main User Workflows

### Landing and positioning

1. The visitor opens `luneroka.dev`.
2. The Hero identifies the profile as Full-Stack Development and Data Analytics.
3. The introduction frames the website as an interactive résumé.
4. Four highlight cards summarize operational experience, industries, analytics tools, and full-stack architecture.
5. Primary actions lead to the Project Explorer or Contact section.

### Professional Journey

1. The visitor moves from the Hero to the Journey section.
2. A visual timeline presents four major stages:
   - Apple, 2016–2017;
   - Amazon, 2017–2023;
   - Lidl, 2024;
   - Web & Data, 2024–present.
3. Each stage contains concise operational or technical highlights.
4. The final timeline item transitions the narrative toward current development and analytics work.

### Project exploration

1. The visitor opens the Project Explorer.
2. The filter help tooltip explains the interaction.
3. The visitor selects one or more filters.
4. The generated SQL preview updates.
5. KPI cards recalculate.
6. Charts and latest-project cards update.
7. The visitor selects a project for a detailed modal view.
8. External project links remain available from the modal.

### Skills exploration

1. The visitor reaches Skills & Expertise.
2. Four capability cards summarize:
   - Frontend Development;
   - Backend Engineering;
   - Data & Analytics;
   - Domain Expertise.
3. Each card displays concise capability statements.
4. The visitor expands a card for evidence derived from project data.
5. Technical cards expose tools and related projects.
6. Domain Expertise exposes industries and product types.
7. Selecting a related project opens the same project-details modal.

### Contact

The final section exposes three direct contact channels:

- email;
- LinkedIn;
- GitHub.

The current implementation uses direct links rather than an embedded contact form.

---

## 8. Frontend Information Architecture

### Current page structure

The live homepage renders sections in this order:

```text
Navbar
└── Main
    ├── Hero
    ├── Journey
    ├── Project Explorer
    ├── Skills & Expertise
    └── Contact
Footer
```

### Navigation items

Desktop and mobile navigation expose:

```text
Home
Journey
Projects
Skills
Contact
```

The navbar is fixed and changes appearance after scrolling:

- transparent at the top;
- blurred background, border, and shadow after scrolling.

### Mobile navigation

On smaller screens:

- desktop links are replaced by a menu button;
- a left-side drawer opens over a blurred backdrop;
- the drawer contains the same section links;
- the real profile photo remains the home control;
- language and theme controls remain visible in the navbar.

### Section transitions

Hero, Journey, Explorer, and Skills use visual downward prompts to guide visitors to the next section.

This creates a controlled narrative without introducing separate pages.

---

## 9. Project Explorer Dashboard

### Dashboard shell

The explorer is structured as:

```text
Project Explorer
├── Filter sidebar
└── Dashboard content
    ├── Generated SQL preview
    ├── KPI cards
    └── Visualizations
```

On large screens, the dashboard uses an approximate `220px / remaining width` grid.

On smaller screens, filters move above the dashboard content.

### Filter panel

The filter panel includes:

- date-range controls;
- track selection;
- industry selection;
- product-type selection;
- technology selection;
- skill selection;
- reset action;
- a help tooltip.

The available options are derived from the currently registered project data. Empty or unused taxonomy values are not presented as active filter choices.

### Generated SQL preview

The SQL bar translates active filters into an equivalent query.

It is explicitly labeled as:

- read only;
- automatically generated from the filters.

The user does not need SQL knowledge to use the explorer.

### KPI cards

The dashboard currently shows four KPI cards:

1. Hours Invested;
2. Project Deliverables;
3. Skills Demonstrated;
4. rotating Context Metric.

The cards update automatically when filters change.

### Visualizations

#### Projects by hours invested

A horizontal bar visualization ranks filtered projects by invested hours.

Each row:

- displays the hour count;
- scales relative to the highest selected value;
- exposes the project title through a tooltip;
- opens the project modal when selected.

#### Technologies covered

A donut-style visualization groups technologies between the Development and Data tracks.

The panel shows:

- total technologies represented;
- percentage assigned to each track;
- the same blue and orange visual language used elsewhere in the portfolio.

#### Latest projects

The timeline panel shows the two most recent matching projects.

Each card includes:

- project title;
- formatted period;
- Development and/or Data badges;
- direct access to the project modal.

### Empty state

When no project matches the filters, the KPI shell remains stable while the chart area displays a localized empty-state message.

---

## 10. Project Detail Experience

### Modal role

The project modal replaces both:

- separate project pages;
- a standalone featured-case-study section.

It gives the visitor a complete case study without leaving the current dashboard context.

### Header

The modal header can include:

- project title;
- summary;
- Development and Data badges;
- GitHub action;
- live-demo action.

### Summary information

The first detail row presents:

- project period;
- company;
- role.

### Screenshot gallery

Projects with screenshots receive a responsive gallery.

The gallery supports:

- previous and next controls;
- localized alternative text;
- localized captions;
- image counters;
- direct image selection indicators.

The Construction Budget project currently contains Power BI screenshots for:

- project overview;
- financial monitoring;
- supplier analysis;
- detailed cost analysis.

### Narrative content

Each project can present:

```text
Problem
Solution
Impact
Deliverables
Technologies
Skills
Metrics
```

This keeps technical decisions connected to business purpose and measurable results.

---

## 11. Skills & Expertise

### Purpose

Skills & Expertise provides a compact capability summary without reverting to a large technology-logo cloud.

The section is evidence-based: supporting tools, industries, and related projects are derived from the same project dataset used by the explorer.

### Capability cards

#### Frontend Development

Current capability themes include:

- React component architecture;
- type-safe TypeScript interfaces;
- responsive dashboard layouts;
- client-side filtering and interaction;
- localization-ready interfaces.

#### Backend Engineering

Current capability themes include:

- REST API design;
- relational data modeling;
- business-workflow modeling;
- PostgreSQL and SQLAlchemy;
- Docker-based environments.

#### Data & Analytics

Current capability themes include:

- SQL analysis;
- KPI tracking;
- reporting;
- Power BI and Tableau;
- data modeling;
- operational performance analysis.

#### Domain Expertise

Current capability themes include:

- business-process understanding;
- operational workflows;
- internal tools;
- SaaS and product thinking;
- data-driven decision support.

### Expandable evidence

Each card can be expanded independently.

Expanded technical cards show:

- core tools;
- related project buttons.

The Domain Expertise card shows:

- covered industries;
- represented product types.

Selecting a project from these cards reuses the central project modal.

---

## 12. Localization, Theme, and Accessibility

### Localization architecture

The project separates two content layers:

```text
frontend/src/i18n/
└── reusable UI copy

frontend/src/data/
└── localized portfolio records
```

Static interface copy is retrieved through:

```ts
copy.some.path
```

Localized data fields are retrieved through:

```ts
translate(project.title, locale)
```

The English dictionary defines the structural content schema, and the French dictionary must conform to the same shape.

### Language behavior

The navbar language button:

- toggles between English and French;
- uses cross-platform flag components;
- stores the selection;
- updates the document `lang` attribute.

### Theme behavior

The theme button:

- toggles light and dark display;
- stores the preference;
- applies a `.dark` class to the root element;
- updates the browser color scheme.

The current default is light mode.

### Accessibility-oriented behavior

Implemented accessibility measures include:

- semantic buttons for interactive controls;
- `aria-label` values on icon-only actions;
- focus-visible outlines;
- modal dialog semantics;
- Escape-key modal closing;
- body-scroll locking while a modal is open;
- descriptive screenshot alternative text;
- localized control labels;
- keyboard-accessible filter and navigation controls;
- responsive layouts down to a 320px minimum viewport.

---

## 13. Branding and Visual System

### Public identity

The public brand is **Luneroka**.

Confirmed public identity:

- domain: `luneroka.dev`;
- HTML title: `Luneroka | Full-Stack Developer & Data Analyst`;
- repository: `luneroka/yoann-dev`.

### Personal and brand separation

The implementation separates the person from the broader brand identity:

- the real profile photo is used as the navbar and mobile-drawer home control;
- the panda identity is used as the favicon and can serve as the wider Luneroka brand mark;
- the Hero currently displays `Yoann R.`.

### Typography

The current typography system uses:

- **Merriweather** for headings;
- **Lato** for body and interface text;
- a monospace fallback stack for SQL-style content.

### Color system

The core light-theme palette uses:

- white background;
- dark blue-gray text;
- saturated blue primary actions;
- orange accent elements;
- pale blue-gray secondary surfaces.

The dark theme maps the same semantic tokens to dark blue surfaces while preserving blue and orange emphasis.

### Interface characteristics

The visual system uses:

- rounded dashboard cards;
- soft, medium, and large shadow tokens;
- restrained borders;
- translucent card surfaces;
- backdrop blur;
- topographic Hero decoration;
- subtle radial gradients;
- full-height narrative sections;
- short staggered entrance animations;
- compact hover movement.

Motion is used to clarify hierarchy and interaction rather than as decoration alone.

---

## 14. Deployment and Runtime

### Repository structure

The repository uses a dedicated frontend application directory:

```text
yoann-dev/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   └── sections/
│   │   │       ├── explorer/
│   │   │       └── hero/
│   │   ├── context/
│   │   ├── data/
│   │   │   ├── projects/
│   │   │   └── sql-editor/
│   │   ├── i18n/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── router/
│   ├── package.json
│   └── vercel.json
├── README.md
└── LICENSE
```

### Vercel deployment

The Vercel project uses `frontend/` as the application root.

The SPA rewrite configuration sends all paths to:

```text
/index.html
```

This allows React Router to handle client-side routes.

### Analytics

Vercel Web Analytics is mounted globally beside the router.

The analytics integration was added to the main branch on July 1, 2026.

### Runtime characteristics

The deployed site requires:

- static frontend assets;
- client-side JavaScript;
- no application server;
- no database;
- no authentication service;
- no file-storage service.

Contact currently relies on direct external links and a `mailto:` action.

---

## 15. Current Implementation State

The portfolio is implemented and publicly deployed rather than remaining a design proposal.

The following areas are implemented:

- clean React and TypeScript application;
- Vite and Tailwind CSS 4 setup;
- single-page router;
- fixed responsive navbar;
- mobile navigation drawer;
- personal avatar home control;
- English/French localization;
- browser-locale detection;
- persisted language preference;
- light and dark themes;
- persisted theme preference;
- redesigned Hero;
- four-card professional Journey;
- interactive Project Explorer;
- date, track, industry, product-type, technology, and skill filters;
- generated SQL preview;
- filter-driven KPI calculations;
- project-hours visualization;
- technology-coverage visualization;
- latest-project timeline;
- project-detail modal;
- screenshot galleries;
- GitHub and live-demo project links;
- expandable Skills & Expertise cards;
- direct Email, LinkedIn, and GitHub contact actions;
- responsive mobile refinements;
- cross-platform language flags;
- Vercel SPA deployment configuration;
- custom domain and favicon;
- Vercel Web Analytics;
- public README and all-rights-reserved license.

### Current content state

The project dataset contains 12 records spanning:

- Full-Stack web applications;
- analytics projects;
- Excel and VBA tooling;
- Power BI reporting;
- Amazon operational initiatives;
- personal product development.

The Construction Budget project has been expanded from a development-only case study into a combined Development and Data project covering:

```text
React/FastAPI application
→ PostgreSQL
→ analytics views
→ Power BI model
→ DAX measures
→ interactive financial dashboards
```

### Current quality setup

The frontend exposes commands for:

```text
npm run lint
npm run typecheck
npm run build
```

No automated unit or end-to-end test command is currently defined in `frontend/package.json`.

---

## 16. Decisions Superseded Since the Original Structure

| Earlier proposal or working assumption | Current decision |
| --- | --- |
| A large single page with separate Profile Dashboard, SQL Explorer, Flagship Project, Data & Analytics, Projects, Systems Architecture, Journey, Skills, and Contact sections | The final page is consolidated into Hero, Journey, Project Explorer, Skills & Expertise, and Contact |
| No dedicated Journey section | A dedicated four-stage Journey timeline is implemented between Hero and Project Explorer |
| SQL editor occupying a permanent left panel | The left panel now contains practical filters; generated read-only SQL appears in a compact bar above the dashboard |
| Separate project and professional-experience entities | The current explorer uses one `Project` model; professional operational initiatives are represented as project records |
| Separate Featured Case Studies section | Case studies are delivered through reusable project-detail modals |
| Separate Technical Capabilities section | Technical and business capabilities are consolidated into Skills & Expertise |
| Separate About page or large biography | Personal context is distributed across Hero, Journey, project records, project modals, and Domain Expertise |
| Static KPI examples | KPIs are calculated from the active filtered project set |
| Company as a primary visible filter | Company remains supported by the data/query model, but the current visible filter panel focuses on date, track, industry, product type, technologies, and skills |
| A pseudo-SQL editor with future autocomplete | The current feature is a generated read-only SQL preview, not an editable query interface |
| English as a fixed initial language | The application checks saved preference, then browser locale, with French as fallback |
| Text or emoji flags | Cross-platform country-flag components are used |
| Hero social icons | Social actions are concentrated in the Contact section |
| Embedded contact form in the MVP | The current site uses direct Email, LinkedIn, and GitHub actions |
| Personal domain centered on the full name | The public identity is Luneroka and the site is hosted at `luneroka.dev` |
| Generic document title such as `Yoann Robert` | The HTML title is `Luneroka | Full-Stack Developer & Data Analyst` |
| Older repository naming such as `yoannrobert-dev` | The active public repository is `luneroka/yoann-dev` |
| Portfolio project treated only as a future foundation | The portfolio is live, responsive, bilingual, theme-aware, and tracked with Vercel Analytics |

---

## 17. Remaining Improvements and Future Extensions

### Documentation alignment

The repository contains a few historical references that should be aligned with the current implementation:

- the internal Portfolio Revamp project record still references the older `yoannrobert-dev` repository URL;
- the older structure document describes sections that no longer exist separately;
- the README still reflects parts of the initial information architecture more than the final consolidated homepage.

### Content enhancements

Potential content work includes:

- adding screenshots for the Portfolio Revamp project itself;
- keeping project metrics and periods synchronized with current project progress;
- expanding project galleries where visual proof is useful;
- adding or revising project records as new work is completed;
- reviewing professional dates and role wording against the current CV.

### Product enhancements

Possible later extensions include:

- saved explorer views;
- query history;
- richer SQL explanation;
- additional visualizations;
- live GitHub activity;
- structured CV download;
- embedded contact-form delivery;
- dedicated shareable project URLs;
- Open Graph and richer social metadata;
- automated accessibility checks;
- unit and end-to-end test coverage.

These additions should preserve the current strengths:

- one consistent project data model;
- bilingual content;
- filter-driven metrics;
- recruiter-friendly navigation;
- evidence-first storytelling;
- a lightweight static deployment.

---

## 18. One-Sentence Product Description

Portfolio Revamp is a bilingual React portfolio that presents a hybrid Full-Stack and Data profile as an interactive analytics dashboard, allowing recruiters to explore projects, operational initiatives, skills, metrics, and professional context from one responsive interface.

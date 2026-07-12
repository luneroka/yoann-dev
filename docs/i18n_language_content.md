# i18n Language Config and Data Content

## Overview

The frontend currently has two complementary localization layers:

- UI copy lives in `frontend/src/i18n`.
- Portfolio data content is modeled in `frontend/src/data/types.ts` with localized fields.

The active language is controlled by `LanguageProvider` in
`frontend/src/context/LanguageContext.tsx`. Components can use this context to
read the current locale, switch languages, and access the correct UI copy.

## Locale Contract

The supported languages are defined by the `Locale` union in
`frontend/src/data/types.ts`:

```ts
export type Locale = 'en' | 'fr';
```

This type is the root contract for both UI translations and data translations.
Any place that depends on available languages should use `Locale` rather than a
loose `string`.

Localized data fields use this type through `LocalizedString`:

```ts
export type LocalizedString = Record<Locale, string>;
```

That means every localized content value must provide one string for each
supported locale:

```ts
{
  en: 'Project',
  fr: 'Projet',
}
```

If a new locale is added to `Locale`, TypeScript will require every
`LocalizedString` record to include that locale too.

## UI Copy Dictionaries

UI-level text is split into one file per language:

- `frontend/src/i18n/en.ts`
- `frontend/src/i18n/fr.ts`

The English file is the source shape for the UI copy schema:

```ts
type ContentSchema<T> = {
  readonly [Key in keyof T]: T[Key] extends string ? string : ContentSchema<T[Key]>;
};

export type Content = ContentSchema<typeof en>;
```

`ContentSchema<typeof en>` derives a recursive object shape from `en`. Leaf
values are strings, and nested objects must match the same keys. This makes the
English dictionary the structural reference for the rest of the UI translations.

The exported `content` object then maps every supported locale to a dictionary:

```ts
export const content = {
  en,
  fr,
} satisfies Record<Locale, Content>;
```

The `satisfies Record<Locale, Content>` check enforces two things:

- every locale in `Locale` has an entry in `content`;
- each entry conforms to the `Content` shape.

For example, if `Locale` includes `'fr'`, then `content.fr` must exist. If the
English copy has `sections.metrics`, each locale dictionary must also provide
that path.

## Language Context

`LanguageProvider` stores the active locale in React state:

```ts
const [locale, setLocaleState] = useState<Locale>('en');
```

On mount, it checks `localStorage` for a saved locale:

```ts
const savedLocale = localStorage.getItem('locale');

if (savedLocale === 'en' || savedLocale === 'fr') {
  setLocaleState(savedLocale);
}
```

Only known locale values are accepted. This keeps arbitrary stored strings from
entering the typed language state.

The context exposes:

- `locale`: the active `Locale`;
- `setLocale(locale)`: updates state and persists the value to `localStorage`;
- `toggleLocale()`: switches between English and French;
- `copy`: the UI dictionary for the active locale.

`copy` is selected directly from the i18n map:

```ts
copy: content[locale],
```

Components should call `useLanguage()` to access these values. The hook throws
if it is used outside `LanguageProvider`, which catches incorrect provider setup
early during development.

## Data Content Model

`frontend/src/data/types.ts` defines the portfolio domain model. The important
i18n detail is that user-facing content inside data records is not pulled from
the global UI dictionaries. It is stored inline as `LocalizedString`.

For metrics:

```ts
export interface Metric {
  label: LocalizedString;
  display: LocalizedString;
}
```

For profile items:

```ts
export interface ProfileItem {
  title: LocalizedString;
  summary: LocalizedString;
  problem?: LocalizedString;
  solution?: LocalizedString;
  impact: LocalizedString[];
  period: LocalizedString;
}
```

This separates reusable UI copy from portfolio-specific content:

- UI copy answers questions like "what is the label for the filters section?"
- data content answers questions like "what is this project title in French?"

That distinction lets the app render the same data object in different
languages by translating individual fields with the active locale.

## Translating Data Fields

`frontend/src/i18n/translate.ts` provides the helper for localized data fields:

```ts
export function translate(text: LocalizedString, locale: Locale): string {
  return text[locale];
}
```

Use this for data fields whose type is `LocalizedString`:

```ts
const title = translate(item.title, locale);
const summary = translate(item.summary, locale);
```

Use `copy` from `useLanguage()` for global UI text:

```ts
const { locale, copy } = useLanguage();

copy.filters.reset;
translate(item.title, locale);
```

In short:

- `copy.some.path` for static UI labels from `frontend/src/i18n`;
- `translate(record.field, locale)` for localized fields from data records.

## Label Maps

`frontend/src/data/labels.ts` bridges typed enum-like values to localized display
labels.

Examples:

- `typeLabels` maps `ProfileItemType` values such as `project` and
  `experience`;
- `trackLabels` maps `Track` values such as `dev`, `data`, and `analytics`;
- `domainLabels` maps `Domain` values such as `logistics` and `retail`;
- `skillLabels` maps `SkillId` values such as `typescript` and `react`;
- metric label maps cover units, categories, and confidence levels.

Each map uses `satisfies Record<SomeType, LocalizedString>`. That gives strong
coverage checks in both directions:

- every allowed typed value needs a display label;
- every display label needs all supported locales.

For example, adding a new `SkillId` in `types.ts` requires adding a matching
entry in `skillLabels`.

## Current Data State

Several content modules are currently placeholders with no records:

- `frontend/src/data/projects.ts`
- `frontend/src/data/experience.ts`
- `frontend/src/data/metrics.ts`
- `frontend/src/data/skills.ts`
- `frontend/src/data/queries.ts`

The type system and label maps are already prepared for localized content. When
records are added, user-facing fields should follow the `LocalizedString`
contract instead of storing plain strings.

## Adding a Locale

To add another language:

1. Add the new locale code to `Locale` in `frontend/src/data/types.ts`.
2. Create a matching dictionary file in `frontend/src/i18n`.
3. Add the dictionary to `content` in `frontend/src/i18n/index.ts`.
4. Update the saved-locale validation in `LanguageContext.tsx`.
5. Update `toggleLocale()` if the app still needs a single-button toggle.
6. Add the new locale to every `LocalizedString` in data records and label maps.

For more than two languages, `toggleLocale()` will need to become an explicit
locale selector. The current implementation is intentionally binary:

```ts
setLocale(locale === 'en' ? 'fr' : 'en');
```

## Adding Localized Content

When adding a new project, experience, metric, or label:

1. Use the domain IDs from `types.ts` for non-translated values.
2. Use `LocalizedString` for text shown to users.
3. Use `satisfies` where practical so TypeScript checks locale coverage.
4. Render localized fields with `translate(field, locale)`.
5. Render shared UI labels from `copy`.

Example data shape:

```ts
const item: ProfileItem = {
  id: 'example',
  type: 'project',
  title: {
    en: 'Budget tracking platform',
    fr: 'Plateforme de suivi budgétaire',
  },
  track: ['fullstack', 'data'],
  domains: ['construction'],
  skills: ['typescript', 'react', 'postgresql'],
  metricIds: [],
  summary: {
    en: 'Built a dashboard for tracking project budgets.',
    fr: 'Création d’un tableau de bord pour suivre les budgets de projets.',
  },
  impact: [
    {
      en: 'Improved budget visibility for stakeholders.',
      fr: 'Amélioration de la visibilité budgétaire pour les parties prenantes.',
    },
  ],
  period: {
    en: '2025',
    fr: '2025',
  },
};
```

## Mental Model

The app uses `Locale` as the single source of truth for language support.
`LanguageContext` chooses one active locale at runtime. UI dictionaries provide
static interface text for that locale. Data records carry their own localized
fields, and `translate()` extracts the active-language string from those records.

This keeps the language system type-safe while allowing portfolio content to
remain structured, filterable, and independent from presentation copy.

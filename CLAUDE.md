# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website for Gerardo Kohatus built as a Single Page Application using Next.js 15 (App Router), TypeScript, and Tailwind CSS. The portfolio features smooth scroll navigation, dark/light theme switching, and animations with Framer Motion.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

## Architecture Overview

### Single Page Application Structure

This is a true SPA where all content lives on one page (`app/page.tsx`) with smooth scroll navigation between sections. The sections are rendered in order: Hero → About → Experience → Projects → Skills → Contact → Footer.

### Key Architectural Patterns

**1. Centralized Data Management**
- All portfolio content (personal info, experiences, skills, projects) is centralized in `lib/data.ts`
- This is the single source of truth for portfolio content
- To update portfolio content, only edit `lib/data.ts`

**2. Theme System**
- Custom theme provider implementation in `components/theme-provider.tsx` (not using external library)
- Themes are stored in localStorage and sync with system preferences
- Theme state is managed via React Context and accessed with `useTheme()` hook
- Default theme is "dark" as specified in `app/layout.tsx`

**3. Internationalization (i18n)**
- Supports Spanish (es) and English (en) languages
- Language provider implementation in `components/language-provider.tsx`
- All translations centralized in `lib/translations.ts`
- Language state is managed via React Context and accessed with `useLanguage()` hook
- Default language is Spanish ("es")
- Language preference is stored in localStorage
- Language toggle button in Navbar shows current language (ES/EN)

**4. Component Organization**
- `app/` - Next.js App Router files (layout, page, global styles)
- `components/sections/` - Individual page sections (hero, about, experience, etc.)
- `components/` - Shared components (navbar, footer, theme-provider, language-provider)
- `lib/` - Utilities, data, and translations
- `public/` - Static assets including CV PDF

**5. Styling Approach**
- Tailwind CSS 4.x with custom configuration
- `cn()` utility from `lib/utils.ts` for conditional class merging (clsx + tailwind-merge)
- Responsive design with mobile-first approach
- Navbar uses backdrop blur and transforms on scroll

**6. Navigation System**
- Navbar uses hash-based navigation (`#home`, `#about`, etc.) for smooth scrolling
- Mobile menu with slide-in animation using Framer Motion
- Navbar changes appearance on scroll (transparent → backdrop blur with border)
- Close mobile menu on link click for better UX

## Important Technical Details

### Path Aliases
- `@/*` maps to root directory (configured in `tsconfig.json:22`)
- Use `@/components/...`, `@/lib/...` etc. for imports

### Next.js Configuration
- React strict mode enabled
- Image domains configured for localhost
- Using App Router (not Pages Router)

### Deployment
- Optimized for Vercel (see DEPLOY.md for details)
- Automatic deployment on push to main branch
- No environment variables currently required

## Content Updates

To modify portfolio content:

### Static Data (technologies, contact info, etc.)
Edit `lib/data.ts` which exports:
- `personalInfo` - Name, title, contact info (email, location, social links)
- `experiences` - Work experience array (technologies only)
- `skills` - Categorized skills (frontend, backend, database, tools)
- `projects` - Project showcase array (technologies, links, github)

### Translated Content (text shown to users)
Edit `lib/translations.ts` to update text in both languages:
- `personalInfo` - Name, title, description (user-facing text)
- `nav` - Navigation labels
- `hero` - Hero section text
- `about` - About section content and highlights
- `experience.experiences` - Experience titles, descriptions, responsibilities
- `projects.projects` - Project titles, descriptions, highlights
- `skills` - Skill category names and learning message
- `contact` - Contact section labels and form text
- `footer` - Footer text

**Important**: Some data like `technologies`, `link`, `github` come from `data.ts` since they're language-independent. The components merge translated text with technical data.

## Component Patterns

All section components follow similar patterns:
- Export named components (not default exports)
- Use semantic HTML with proper heading hierarchy
- Implement responsive layouts with Tailwind breakpoints
- Use Framer Motion for animations where appropriate
- IDs match navbar href values for scroll navigation
- Use `useLanguage()` hook to access current language and translations
- Access translations via `translations[language]` pattern
- Merge translated content with static data from `lib/data.ts` where needed

## Adding New Languages

To add support for additional languages:
1. Add new language type to `lib/translations.ts` exports
2. Create complete translation object following existing structure
3. Update `Language` type in `components/language-provider.tsx`
4. Update language toggle button in `components/navbar.tsx` if needed

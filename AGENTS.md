# Agent Instructions

## Priority Order

When instructions conflict, follow them in this order:

1. User Request
2. Project Architecture
3. Existing Codebase Conventions
4. This Agent Guide
5. General Best Practices

Never violate a higher-priority rule to satisfy a lower-priority one.

---

# Framework Rules (Next.js)

This project uses the latest version of Next.js.

Before implementing any feature involving:

- App Router
- Server Components
- Client Components
- Server Actions
- Route Handlers
- Metadata
- Caching
- Data Fetching
- Middleware
- Image Optimization
- Fonts
- Dynamic APIs

Consult the relevant documentation inside:

node_modules/next/dist/docs/

Do not rely on outdated knowledge.

Follow all documented breaking changes and deprecation notices.

---

# Execution Rules

You are an execution-focused senior software engineer.

Your responsibility is to implement exactly what has been requested.

## Do

- Implement only the requested task.
- Make the smallest possible change.
- Preserve the existing architecture.
- Preserve naming conventions.
- Reuse existing utilities.
- Follow existing patterns.
- Keep responses concise.
- Stop after completing the requested work.

## Don't

Do NOT:

- Refactor unrelated files.
- Rename files unnecessarily.
- Rename components.
- Rename APIs.
- Rename folders.
- Add dependencies.
- Introduce new abstractions.
- Create helper utilities unless repeated logic requires it.
- Improve unrelated code.
- Change UI unless requested.
- Add animations.
- Add transitions.
- Add comments explaining obvious code.
- Add TODOs.
- Add placeholder implementations.

---

# Coding Standards

Always prefer:

- Small functions
- Single responsibility
- Readable code
- Consistent formatting
- Early returns
- Existing utilities
- Existing components

Avoid:

- Duplicate logic
- Nested conditionals
- Overly generic abstractions
- Premature optimization

---

# Architecture Rules

Respect the existing project structure.

Never:

- Move folders
- Reorganize directories
- Introduce new architectural patterns
- Replace libraries
- Change state management
- Replace API patterns

Unless explicitly instructed.

---

# UI Modification Rules

When modifying UI:

Only modify the requested component.

Do NOT:

- Restyle adjacent pages.
- Change spacing globally.
- Change typography globally.
- Replace icons.
- Change navigation.
- Modify layouts outside the requested scope.

---

# Design System

All newly created UI must follow this design language.

## Philosophy

Editorial
Bold
Minimal
Structured
Confident

Typography should always be the primary visual element.

Whitespace should be preferred over decorative elements.

---

## Colors

Background
#FFFFFF

Primary Text
#111111

Border
#000000

Accent
#C2188B

CTA
#FFC107

Semantic

Green
Red

Avoid additional accent colors.

---

## Typography

Preferred fonts

- Inter
- Space Grotesk
- General Sans
- Satoshi
- Helvetica Neue

Scale

Hero
64–96px

Page Title
40–56px

Section
28–36px

Card
20–24px

Body
16–18px

Caption
13–14px

Rules

- Bold hierarchy
- Tight tracking
- Uppercase major headings
- Minimal font families

---

## Layout

Use spacing scale:

4
8
12
16
24
32
48
64
96

Use:

- Grid layouts
- Large whitespace
- Consistent rhythm

Avoid clutter.

---

## Components

### Buttons

- Thick black border
- Hard shadow
- Square corners
- Bold uppercase
- Large padding

Hover:

- Slight translate
- Shadow reduction

Never use:

- Glow
- Gradients
- Glass
- Rounded pills

---

### Cards

- White background
- Thick border
- Hard shadow
- Large padding

---

### Inputs

- Thick border
- Large height
- Clear labels
- Strong focus ring

No floating labels.

---

### Tables

- Comfortable spacing
- Thick separators
- Strong headers

---

### Navigation

- Minimal
- Strong typography
- Sticky only where appropriate

---

### Icons

Simple outline icons only.

No:

- 3D
- Filled decorative icons
- Cartoon styles

---

### Shadows

Hard shadows only.

Example:

4px 4px 0 black

Never use blurred shadows.

---

### Border Radius

0–8px

---

### Animation

Allowed

- translate
- opacity
- scale(1.02)

Duration

150–250ms

Never use:

- Bounce
- Elastic
- Overshoot

---

# Accessibility

Every implementation must satisfy WCAG AA.

Include:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Accessible labels
- Proper heading hierarchy

---

# Responsive Design

Desktop-first.

Breakpoints

1440
1280
1024
768
480

Do not simply scale everything down.

Reflow layouts appropriately.

---

# Before Completing Any Task

Verify:

- Only requested files changed.
- No unrelated refactoring.
- No unnecessary dependencies.
- Existing functionality preserved.
- Design system respected.
- Responsive behavior maintained.
- Accessibility preserved.

Then stop.
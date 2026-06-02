## Sportzone Frontend Specification

Sportzone is a frontend prototype for sports court discovery, booking, and venue management. The project is built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. Because this is still a prototype, some screens use mocked data, local mocks, and interface-driven structures instead of real backend integrations.

## Application Areas

The application is organized around four main areas:

### Auth

- Responsible for sign in and sign up flows.
- Must stay simple and focused on account access.
- Routes are under the auth path and pages live in `src/app/pages/auth/`.
- The auth shell is defined in `src/app/layouts/auth.tsx`.

### Customer Area

- Focused on the end-user booking experience.
- Includes court discovery, court details, bookings, and customer overview flows.
- Customer pages live in `src/app/pages/customer/`.
- The customer shell is defined in `src/app/layouts/customer/`.

### Organization Area

- Focused on venue and organization management.
- Includes dashboard, courts, bookings, members, and organization operations.
- Organization pages live in `src/app/pages/organization/`.
- The organization shell is defined in `src/app/layouts/organization/`.

### Shared

- Shared or cross-area pages and components should stay isolated from customer-only or organization-only concerns.
- Reusable application components live in `src/components/`.
- `src/components/ui/` contains shadcn/ui components and base UI primitives.
- Shared pages currently include areas such as support and settings.

## Routing

- Routing is centralized in `src/router.tsx`.
- This project does not use automatic framework file-based routing.
- Instead, it follows a file system routing convention for page organization, while route registration is done manually in the central router.
- Route trees are grouped by area and connected to their respective layouts.

## Page Structure Convention

Pages should follow a file system routing style. For local page and layout rules, see `src/app/AGENTS.md`.

- Each page should live in its own folder.
- The page entry file should be named `index.tsx`.
- The exported component name should end with `Page`.
- Dynamic segments should be represented with folder names such as `[id]` when needed.
- When a page has local UI pieces, they should live inside a `components/` subfolder within the page folder.

Example:

```text
src/app/pages/customer/discover/
  index.tsx
  components/
```

## Layout Convention

- Layouts live in `src/app/layouts/`.
- Each main application area should have a dedicated layout responsible for shell concerns such as navigation, headers, sidebars, and shared page chrome.
- Layouts should render nested content through `Outlet`.
- Area-specific navigation should stay in the corresponding layout layer whenever possible.

## Component Convention

Reusable component rules are documented in `src/components/AGENTS.md`.

- Components must use clear, descriptive names.
- Component file names should use lowercase words separated by `-`.
- The file name should match the exported component name in PascalCase.
- Prefer small and readable components.
- When a component needs props, define explicit `ComponentNameProps` interfaces when that improves clarity.
- If a component grows too much, split it into subcomponents in the same file or same local scope using suffixes such as `Header`, `Content`, `Footer`, `Title`, and `Actions` when that naming matches the structure.
- Page-specific components should not leak into unrelated areas unless they are intentionally promoted to a shared component.
- Only place components in `src/components/` when they are genuinely reusable and not tightly coupled to a single page.

## Data and Prototype Rules

- This project is still a UI prototype.
- Mocked data, mock services, and temporary interfaces are acceptable while the real backend contract is not finalized.
- Mocks currently live in `src/mocks/`.
- Shared types and interfaces live in `src/types/`.
- Prefer keeping prototype code easy to replace later when real integrations are introduced.

## Project Structure Summary

- `src/components/`: reusable application components.
- `src/components/ui/`: shadcn/ui components.
- `src/app/layouts/`: area layouts.
- `src/app/pages/`: route-oriented pages grouped by domain.
- `src/router.tsx`: central route definition.
- `src/mocks/`: mocked data used by the prototype.
- `src/types/`: shared interfaces and type definitions.

## Expected Development Style

- Keep domain boundaries clear between auth, customer, organization, and shared concerns.
- Prefer reusable UI without mixing unrelated responsibilities.
- Preserve a modern, clean, and maintainable frontend structure.
- Optimize for readability and future evolution from prototype to production implementation.

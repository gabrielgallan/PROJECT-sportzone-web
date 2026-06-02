## Components Guidelines

- `src/components/` contains reusable application components.
- `src/components/ui/` contains `shadcn/ui` components and base UI primitives used by the application.
- Only place components in `src/components/` when they are genuinely reusable and not tightly coupled to a single page.
- Use the root `AGENTS.md` for broader project context and boundaries.

## Naming

- File names must use lowercase words separated by `-`.
- The file name should match the exported component name in PascalCase.

- Example: `profile-menu.tsx` -> `ProfileMenu`

## Props

- When a component needs props, prefer an explicit interface when it improves clarity.
- Props interfaces should use the component name followed by `Props`.
- Example: `ProfileMenuProps`

## Component Structure

- Prefer small, readable, declarative components.
- If a component grows too much, split it into smaller local pieces with semantic suffixes such as:
  - `Header`
  - `Content`
  - `Footer`
  - `Title`
  - `Actions`
- Keep these subcomponents close to the parent component unless they become reusable enough to stand on their own.

## Reuse Boundary

- Do not move page-specific components into `src/components/` by default.
- Promote a component to `src/components/` only when it is reused across multiple pages or areas with a clear shared purpose.

## App Structure Guidelines

- `src/app/layouts/` contains application area layouts.
- `src/app/pages/` contains route-oriented pages grouped by domain.
- Use the root `AGENTS.md` for broader project context and area boundaries.

## Pages

- Pages should follow a file system routing style.
- Each page must live in its own folder.
- The page entry file must be named `index.tsx`.
- The exported page component name must end with `Page`.
- When a page has local UI pieces, create a `components/` folder inside that page folder.

Example:

```text
src/app/pages/customer/discover/
  index.tsx
  components/
```

## Route Folder Naming

- Name folders to mirror the route structure whenever possible.
- For dynamic route params, use bracket notation such as `[id]` or `[slug]`.

- Examples: `customer/discover/court/[id]`, `organization/[slug]`

## Layouts

- Layouts should handle shell concerns such as header, sidebar, navigation, and shared page chrome.
- Layouts should render nested route content through `Outlet`.
- Keep area-specific navigation and structure inside the layout layer whenever possible.

## Boundaries

- Keep page-specific components inside their local page folder unless they are intentionally promoted to shared or reusable application components.
- Avoid mixing unrelated concerns between auth, customer, organization, and shared pages.

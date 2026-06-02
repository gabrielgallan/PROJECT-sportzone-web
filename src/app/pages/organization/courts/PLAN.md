## Organization Courts Page Plan

### Goal

Implement the `OrganizationCourtsPage` as a mostly operational management screen for courts.

This page should prioritize:

- court status visibility
- quick operational context
- simple management actions
- easy scanning of all courts

This page should not behave like an analytics dashboard. Metrics may exist, but only as supporting context.

---

## Page Structure

```text
src/app/pages/organization/courts/
  index.tsx
  PLAN.md
  components/
    courts-page-header.tsx
    courts-page-filters.tsx
    courts-overview-strip.tsx
    courts-grid.tsx
    court-management-card.tsx
    courts-empty-state.tsx
```

---

## Page Composition

The page should be composed in this order:

1. `CourtsPageHeader`
2. `CourtsPageFilters`
3. `CourtsOverviewStrip`
4. `CourtsGrid`
5. `CourtsEmptyState` when there are no courts

---

## Responsibilities

### `index.tsx`

Responsible for:

- composing the page
- keeping temporary mock data local to the page
- deciding between grid and empty state
- keeping the first version simple and easy to evolve

This page should avoid complex filtering logic, URL state, or large data abstractions in the first implementation.

---

### `CourtsPageHeader`

Responsible for:

- page title
- short operational description
- primary CTA

Suggested content:

- title: `Courts`
- description: `Manage your courts, monitor their current status, and keep availability ready for incoming bookings.`
- primary CTA: `Register Court`

---

### `CourtsPageFilters`

Responsible for:

- rendering filter UI only
- preparing the page for future operational filtering
- staying visually useful without heavy state management

Suggested controls:

- search input
- status select
- sport type select

Suggested filter options:

- status:
  - `All statuses`
  - `Active`
  - `Draft`
  - `Paused`
  - `Maintenance`

- sport:
  - `All sports`
  - `Football`
  - `Padel`
  - `Tennis`
  - `Basketball`
  - `Volleyball`

Important:

- do not over-engineer filter behavior in the first version
- no complex prop-driven filtering API is required yet

---

### `CourtsOverviewStrip`

Responsible for:

- displaying 4 compact operational metrics
- supporting the page without becoming the main focus

Final metrics:

1. `Total courts`
2. `Active`
3. `Maintenance`
4. `Draft`

Visual guidance:

- compact cards or metric blocks
- discreet styling
- no charts
- no heavy visual emphasis

---

### `CourtsGrid`

Responsible for:

- organizing the list of courts
- rendering one `CourtManagementCard` per court

Layout guidance:

- mobile: 1 column
- medium: 2 columns
- large: 3 columns

Suggested classes:

- `grid gap-6 md:grid-cols-2 xl:grid-cols-3`

---

### `CourtManagementCard`

This is the core component of the page.

Responsible for showing one court as an operational unit.

#### Content

##### Identity

- image
- court name
- sport badge
- short address

##### Operational status

- status badge:
  - `Active`
  - `Draft`
  - `Paused`
  - `Maintenance`

##### Light operational metrics

- price per hour
- bookings this week
- weekly occupancy
- next booking

##### Optional alert line

Examples:

- `Availability is complete for the next 7 days.`
- `Missing morning availability tomorrow.`
- `Court is currently hidden from customers.`
- `Maintenance scheduled for today.`

##### Actions

Final actions:

- `Edit`
- `Manage schedule`
- `View bookings`

#### Visual direction

This card should use:

- image on top
- operational information in the body
- clear actions in the footer

It can take inspiration from `src/components/discover-court-card.tsx` for image + card rhythm, but must feel more operational and less customer-facing.

---

### `CourtsEmptyState`

Responsible for:

- handling the case where the organization has no courts yet

Suggested content:

- title: `You do not have any courts yet`
- description: `Register your first court to start managing schedules, bookings, and availability.`
- CTA: `Register first court`

---

## Data Strategy

For the first version:

- keep mock data local to the page or local page components
- do not create a dedicated global page type file
- do not create an over-abstracted data layer yet

Example mock shape:

```ts
const courts = [
  {
    id: 'court-1',
    name: 'Arena A',
    sport: 'Football',
    address: 'Av. Paulista, 1200 - Sao Paulo, SP',
    imageUrl: '...',
    status: 'active',
    pricePerHour: 18000,
    bookingsThisWeek: 21,
    weeklyOccupancy: 84,
    nextBooking: 'Today, 18:00',
    alert: 'Availability is complete for the next 7 days.',
  },
]
```

This shape can stay local until the page stabilizes.

---

## Interaction Scope

First implementation should focus on:

- visual structure
- operational hierarchy
- readable cards
- future-ready layout

The first implementation should avoid:

- complex filtering logic
- search params
- pagination
- charts
- modals or drawers
- bulk actions
- advanced sorting
- availability calendars
- backend-oriented abstractions

---

## Visual Priorities

This page should feel:

- operational
- direct
- easy to scan
- easy to act on

It should not feel:

- promotional
- analytics-heavy
- customer-facing
- overloaded with controls

---

## Relationship With Existing Components

Reference:

- `src/components/discover-court-card.tsx`

Useful similarities:

- top image treatment
- card rhythm
- readable summary layout

Important differences:

- this page is operational, not discovery-oriented
- status and actions matter more than rating
- bookings and availability matter more than presentation

---

## Final Decisions

The following decisions are locked:

- image position: top
- main listing style: card grid
- overview strip: 4 discreet metrics
- page focus: 90% operational
- no dedicated page-wide global types for now
- keep props simple and local
- keep data mock-based and close to the page in the first version

---

## Implementation Order

1. Create `CourtsPageHeader`
2. Create `CourtsPageFilters`
3. Create `CourtsOverviewStrip`
4. Create `CourtManagementCard`
5. Create `CourtsGrid`
6. Create `CourtsEmptyState`
7. Compose everything in `index.tsx`
8. Refine spacing and responsive behavior

---

## Acceptance Criteria

The page is ready when:

- the page has a clear operational hierarchy
- the court cards are the primary focus
- the page header and CTA are in place
- the filter row is visually ready
- the overview strip shows 4 discreet metrics
- the grid is responsive
- empty state exists
- the page feels administrative, not customer-facing
- the structure remains easy to evolve later

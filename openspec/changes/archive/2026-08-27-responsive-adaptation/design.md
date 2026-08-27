## Context

Bread Baron is a React + Tailwind CSS game currently designed exclusively for desktop. The main GameScreen uses a fixed 3-panel layout (OrdersPanel `w-1/4` | BakeryPanel `w-1/2` | MarketPanel `w-1/4`) with no responsive breakpoints. On mobile/tablet screens, panels are squished, text truncates, and the layout overflows. The app uses Tailwind CSS with default breakpoints (sm:640, md:768, lg:1024, xl:1280) and no custom breakpoints or `@media` queries exist anywhere.

## Goals / Non-Goals

**Goals:**
- Make the app playable on mobile phones (< 768px) and tablets (768-1023px)
- Use Tailwind responsive utility classes (no custom CSS media queries)
- Keep desktop layout unchanged (breakpoint at `lg` / 1024px)
- Minimal code changes — CSS classes only, no new components or JS logic

**Non-Goals:**
- Redesigning the UI or changing visual styles
- Adding new components or features
- Supporting very small screens (< 320px)
- Changing the game logic or data flow
- Creating a separate mobile layout component

## Decisions

### Decision: Breakpoint at `lg` (1024px)
**Choice**: Use `lg:` prefix (1024px) as the threshold between mobile and desktop layouts.

**Rationale**: The 3-panel layout needs ~1024px to display comfortably. Below that, panels are too cramped. The `md` breakpoint (768px) is too narrow for the side-by-side layout but wide enough for a usable vertical stack. Using `lg` means:
- Mobile (< 1024px): vertical stack, compact spacing, hidden elements
- Desktop (>= 1024px): current layout unchanged

**Alternatives considered**:
- `md` (768px): Too narrow for 3-panel layout; would require more aggressive mobile adaptations
- Custom breakpoint: Unnecessary complexity; Tailwind defaults work fine

### Decision: Vertical stacking for GameScreen
**Choice**: Use `flex-col` on mobile, `flex-row` on desktop for the GameScreen main area.

**Rationale**: Simplest approach — panels stack naturally in a column. No JavaScript needed, just Tailwind classes. The vertical scroll on mobile is natural for touch devices.

**Alternatives considered**:
- Tabs: Requires state management and new UI — more complex
- Drawers: Requires animation and overlay logic — over-engineered

### Decision: Conditional visibility via `hidden`/`block`
**Choice**: Use Tailwind's `hidden` and `block` (or `lg:block`) to show/hide elements on mobile.

**Rationale**: The Date stat and pause button text are redundant on small screens. Hiding them saves space without losing functionality. The icon-only pause button remains usable.

### Decision: Horizontal scroll for IndustryMap
**Choice**: Wrap IndustryMap in a container with `overflow-x-auto` on mobile.

**Rationale**: The 5-stage progress map has fixed-width stages (`w-32` each). Rather than restructuring the entire component, a scroll container is the minimal change that preserves the desktop layout.

### Decision: Flexible dimensions for modals
**Choice**: Replace fixed heights (`h-[600px]`) with `h-auto max-h-[80vh]` on mobile.

**Rationale**: Fixed heights cause overflow or wasted space on small screens. Flexible heights adapt to content while `max-h-[80vh]` prevents the modal from exceeding the viewport.

## Risks / Trade-offs

**[Risk] Vertical stacking may feel long on mobile** → The BakeryPanel (oven) is the primary interaction area. On mobile, users will need to scroll to reach MarketPanel and WorkersPanel. Mitigation: This is acceptable for a game; vertical scrolling is natural on mobile.

**[Risk] Hidden stats may confuse users** → Hiding the Date stat on mobile means users can't see the current game date at a glance. Mitigation: The date is also visible in the game UI elsewhere; the stat is informational, not critical.

**[Risk] Horizontal scroll on IndustryMap may be undiscoverable** → Users may not realize they can scroll the progress map. Mitigation: The visible stages provide a visual cue; this is a common mobile pattern.

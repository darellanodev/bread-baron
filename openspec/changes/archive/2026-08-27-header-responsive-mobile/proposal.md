## Why

The game's top header bar overflows on mobile viewports (<768px). It contains 5 elements in a single row — title icon+text, two stat pills, pause button, and settings button — which together exceed 375px width. The previous responsive pass added `hidden lg:inline` on button text and reduced stat padding, but the title block and button sizing were not addressed, leaving the header broken on small screens.

## What Changes

- **Hide title block on mobile**: Both the 🍞 icon and "Bread Baron" text are completely hidden below `lg` breakpoint. The title is purely decorative and the player already knows what game they're playing.
- **Reduce button sizes on mobile**: Pause button drops `min-w-[84px]` constraint; settings button shrinks from `size-10` (40px) to `size-8` (32px) on mobile. Both revert to full size at `lg`.
- **Shrink stat pill typography**: Stat value font reduces from `text-sm` to `text-xs` on mobile for tighter fit.
- **Tighten header gap**: Container gap between stats and actions reduces from `gap-8` to `gap-3` on mobile.

No game logic changes. Only Tailwind utility classes on 5 component files.

## Capabilities

### New Capabilities

- `header-mobile-layout`: Responsive behavior of the top header bar — title visibility, button sizing, stat pill sizing, and spacing across mobile/tablet/desktop breakpoints.

### Modified Capabilities

- `responsive-layout`: Existing responsive layout spec gains header-specific mobile requirements (title hiding, button scaling, stat typography).

## Impact

- **Files**: `HeaderTitle.tsx`, `HeaderActions.tsx`, `SettingsMenu.tsx`, `Stat.tsx`, `Header.tsx`
- **Dependencies**: None (pure CSS/Tailwind changes)
- **Breaking changes**: None
- **Risk**: Very low — visual-only changes scoped to header component tree

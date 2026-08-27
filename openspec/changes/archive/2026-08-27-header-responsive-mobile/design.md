## Context

The Bread Baron game header is a single-row flex container with 5 elements: title (icon + text), 3 stat pills, and 2 action buttons. The previous responsive pass added breakpoints at `lg` (1024px) for padding, date visibility, and button text visibility. However, the title block and button sizing were not addressed, causing overflow on mobile viewports (375px).

Current header breakdown on mobile:
- Title (icon + text): ~200px
- Stats (2 visible): ~180px
- Actions (pause + settings): ~130px
- Total: ~510px (exceeds 375px)

## Goals / Non-Goals

**Goals:**
- Header fits within 375px viewport on mobile without overflow
- Stat pills (money, baked count) remain always visible — core game info
- Pause button remains a direct, standalone action (not merged into settings)
- Visual hierarchy preserved: game identity de-emphasized on small screens, functional elements prioritized

**Non-Goals:**
- Changing game logic or state management
- Adding hamburger menus or drawers
- Responsive changes outside the header component tree
- Modifying the SettingsMenu dropdown content

## Decisions

### D1: Hide entire title block (icon + text) on mobile
**Decision**: Use `hidden lg:flex` on the `HeaderTitle` root div.
**Why**: The 🍞 icon alone (~32px) doesn't justify its space on mobile. The title is decorative — players know they're playing Bread Baron. Removing both icon and text frees ~200px for functional elements.
**Alternative considered**: Hide only text, keep icon — rejected because the icon alone doesn't carry enough value to justify the space.

### D2: Remove min-width constraint from pause button on mobile
**Decision**: Remove `min-w-[84px]` from the pause button className. The button already has `hidden lg:inline` on its text, so on mobile it's icon-only (~32px with `size="sm"`). The `min-w-[84px]` was forcing it to 84px even when empty.
**Why**: With only an icon, the button should shrink to its natural content width.
**Alternative considered**: Use a separate icon-only button variant — overkill for one button.

### D3: Reduce settings button size on mobile
**Decision**: Change SettingsMenu trigger from fixed `size-10` (40px) to `w-8 h-8 lg:w-10 lg:h-10`.
**Why**: 40px is large for a secondary action on mobile. 32px maintains tap target accessibility while saving 8px.
**Risk**: 32px tap target is below iOS 44px guideline. Mitigated by low-frequency use (settings is not tapped often during gameplay).

### D4: Reduce stat value font size on mobile
**Decision**: Change Stat value from `text-sm` to `text-xs lg:text-sm`.
**Why**: Smaller font allows stat pills to be narrower while remaining readable. Money and baked count are short strings that work well at `text-xs`.

### D5: Reduce header container gap on mobile
**Decision**: Change the stats+actions container gap from `gap-8` to `lg:gap-8 gap-3`.
**Why**: 32px gap is wasteful on mobile. 12px maintains visual separation while fitting more content.

## Risks / Trade-offs

- **Tap target size**: Settings button at 32px is below Apple's 44px HIG guideline. Acceptable because settings is low-frequency and the button has clear visual affordance (⚙️ icon with background).
- **Title hidden permanently on mobile**: No game branding visible. Acceptable because players are already in the game and the title serves no functional purpose.
- **Font readability**: `text-xs` (12px) may be hard to read for some users. Stat values are numbers which remain legible at small sizes.

## Migration Plan

No migration needed — pure CSS changes with no data or logic impact. Deploy with next build.

## Open Questions

None — all decisions are straightforward Tailwind utility changes.

## Why

The Bread Baron application is completely broken on mobile and tablet devices. The main GameScreen uses a fixed 3-panel layout (w-1/4 | w-1/2 | w-1/4) with no responsive breakpoints, causing panels to squish, text to truncate ("Active Orde...", "The May..."), and the layout to overflow. The Header, IndustryScreen, EconomyScreen, and HireHelperScreen also lack responsive adaptations. This prevents anyone from playing on phones or tablets.

## What Changes

- **GameScreen layout**: Stack panels vertically on screens < 1024px (lg breakpoint) instead of side-by-side
- **Header**: Reduce padding from `px-10` to `px-4` on mobile, hide stat text on small screens, show only icons
- **IndustryMap**: Make the 5-stage progress map horizontally scrollable on mobile instead of overflowing
- **EconomyScreen**: Switch from 2-column grid to 1-column on mobile
- **HireHelperScreen**: Use flexible height instead of fixed `h-[600px]`
- **Worker cards**: Reduce fixed width from `w-64` to `w-52` on mobile

## Capabilities

### New Capabilities
- `responsive-layout`: Responsive breakpoint system across all screens (mobile < 1024px vs desktop >= 1024px), including vertical stacking for GameScreen, padding/spacing adjustments, and conditional element visibility

### Modified Capabilities

(No existing capabilities have requirements that change)

## Impact

**Files affected (13):**
- `src/features/game/GameScreen.tsx` — Main layout: flex-col on mobile
- `src/features/game/OrdersPanel.tsx` — Width: `w-full` on mobile
- `src/features/game/BakeryPanel.tsx` — Width: `w-full` on mobile
- `src/features/game/MarketPanel.tsx` — Width: `w-full` on mobile
- `src/features/game/WorkersPanel.tsx` — Height: responsive on mobile
- `src/components/common/Header.tsx` — Padding: `px-4` on mobile
- `src/components/common/HeaderStats.tsx` — Gap & visibility responsive
- `src/components/common/HeaderActions.tsx` — Button text hidden on mobile
- `src/components/common/Stat.tsx` — Padding and font size responsive
- `src/features/industry/IndustryMap.tsx` — Horizontal scroll on mobile
- `src/features/economy/EconomyScreen.tsx` — Grid cols responsive
- `src/features/hireHelper/HireHelperScreen.tsx` — Height flexible
- `src/features/hireHelper/Worker.tsx` — Width responsive

**Breakpoint**: `lg` (1024px) — below this, mobile layout; at or above, desktop layout unchanged.

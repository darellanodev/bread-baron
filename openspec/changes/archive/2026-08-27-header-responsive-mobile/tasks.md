## 1. Hide title on mobile

- [x] 1.1 Add `hidden md:flex` to `HeaderTitle.tsx` root div — hides icon + text below 768px

## 2. Reduce button sizes on mobile

- [x] 2.1 Remove `min-w-[84px]` from pause button in `HeaderActions.tsx` — let it shrink to icon-only width
- [x] 2.2 Change SettingsMenu trigger from `size-10` to `w-8 h-8 md:w-10 md:h-10` in `SettingsMenu.tsx`

## 3. Reduce stat typography on mobile

- [x] 3.1 Change Stat value from `text-sm` to `text-xs md:text-sm` in `Stat.tsx`

## 4. Tighten header spacing on mobile

- [x] 4.1 Change gap from `gap-8` to `md:gap-8 gap-3` in `Header.tsx` container div

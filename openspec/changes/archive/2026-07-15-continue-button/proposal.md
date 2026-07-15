## Why

Players who refresh the browser lose their welcome screen context — the game auto-saves state to localStorage, but there's no way to resume from the welcome screen. The welcome screen always shows only "Next", forcing players to go through GameSettings again even when they have a saved game ready to continue.

## What Changes

- Add localStorage detection on the welcome screen to check for existing save data
- Show a "Continue last session" button when saved data exists, positioned prominently alongside a "New Game" button
- "Continue" loads the saved state and skips GameSettingsScreen, going directly to the game
- When no save exists, the welcome screen behaves exactly as before (single "Next" button)

## Capabilities

### New Capabilities

- `continue-button`: Welcome screen save detection, conditional button rendering, and saved state restoration on continue

### Modified Capabilities

<!-- None — auto-save spec unchanged -->

## Impact

- `src/features/welcome/WelcomeScreen.tsx` — receives save detection state
- `src/features/welcome/layout/WelcomeButton.tsx` — renders conditional two-button layout
- `src/App.tsx` — passes `onContinue` callback that loads state and transitions to game screen
- New files: `useHasSave` hook, `loadFromStorage` utility
- Depends on existing `SAVE_KEY` constant from `src/types/saveTypes.ts`

## Why

Players lose all progress when they refresh the browser. The game state (money, debt, workers, customers, baking progress) is ephemeral — a page reload resets to initial values. This kills motivation to invest time in the game loop. Auto-saving to localStorage enables session continuity with zero user effort.

## What Changes

- New `useAutoSave` hook that snapshots serializable Zustand state to `localStorage` every 5 seconds
- `beforeunload` safety net to catch tab-close between intervals
- New `SaveData` type with versioning (`version`, `savedAt`, `state`) for future migration support
- New constants: `SAVE_KEY`, `SAVE_VERSION`, `SAVE_INTERVAL_MS`
- `App.tsx` mounts the auto-save hook (always active, even on welcome screen)

This is a **save-only** change. Load/restore is deferred to a separate specification.

## Capabilities

### New Capabilities

- `auto-save`: Periodic serialization of game state to localStorage with versioned envelope format and beforeunload safety

### Modified Capabilities

<!-- None — no existing specs -->

## Impact

**Files created:**
- `src/types/saveTypes.ts` — SaveData type + constants
- `src/hooks/useAutoSave.ts` — Auto-save hook

**Files modified:**
- `src/App.tsx` — Import and call `useAutoSave()`

**No breaking changes.** This adds a side-effect-only hook that writes to localStorage. No existing APIs, store structure, or component contracts change. The localStorage write is fire-and-forget with no external dependencies.
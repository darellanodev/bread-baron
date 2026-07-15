## Context

Bread Baron uses Zustand for game state management. All state lives in a single store (`gameStore.ts`) with serializable data (money, debt, day/year counters, workers, customers, oven level, baking progress) and action functions. Actions are Zustand setters — not serializable and not needed for persistence since they're defined in code.

The game tick runs every 5 seconds (`DayTimer.ts` using `DAY_DURATION_MS`). The app mounts a single `App.tsx` that routes between screens via local React state.

No persistence exists today. A browser refresh resets everything to initial values from `gameStateConstants.ts`.

## Goals / Non-Goals

**Goals:**
- Auto-save serializable game state to `localStorage` every 5 seconds
- Write a safety-net save on `beforeunload` to catch tab-close between intervals
- Use a versioned envelope format (`SaveData`) to support future migration
- Keep the hook self-contained — no Zustand middleware, no store restructuring

**Non-Goals:**
- Load/restore from localStorage (separate spec)
- Manual save/load buttons
- Save compression or encryption
- Persistent Zustand middleware (user explicitly rejected this approach)
- Saving screen/routing state (it's local React state, not in the store)

## Decisions

### 1. Custom hook over Zustand persist middleware

**Choice:** `useAutoSave` hook with `setInterval` + `beforeunload`.

**Why:** Zustand persist middleware serializes the entire store including action functions (which are non-serializable), provides less control over what gets saved, and makes the save format opaque. A custom hook gives explicit field selection, versioned envelope format, and the `beforeunload` safety net that persist doesn't offer out of the box.

**Alternatives considered:**
- `zustand/middleware/persist`: Rejected — would need custom `storage` and `partialize` to exclude functions, loses `beforeunload` hook, less control over envelope format.

### 2. Explicit field list in Pick<> for serialization

**Choice:** `Pick<GameState, 'money' | 'activeDebt' | ...>` with every saveable field listed explicitly.

**Why:** The store contains ~15 action functions and `formatMoney` that must not be serialized. An explicit `Pick` is self-documenting, type-safe, and breaks at compile time if a field is added to the store without updating the save type.

**Alternatives considered:**
- `JSON.stringify` whole store + filter functions at runtime: Fragile, no type safety, would break if non-serializable data is added to state.

### 3. 5-second interval aligned with game tick

**Choice:** `SAVE_INTERVAL_MS = 5000`, matching `DAY_DURATION_MS`.

**Why:** Saves happen at the same cadence as game ticks, so the save always reflects meaningful state changes. No redundant saves between ticks. The `beforeunload` handler catches the gap.

### 4. Version in envelope format

**Choice:** `SaveData { version: number, savedAt: number, state: ... }`.

**Why:** `version` enables future migration if state shape changes. `savedAt` provides metadata for UI (last saved) and debugging. Minimal overhead, future-proof.

### 5. Mount in App.tsx, always active

**Choice:** `useAutoSave()` called at the top of `App.tsx`, runs from mount to unmount regardless of which screen is displayed.

**Why:** Saves the initial/default state even before the player starts a game — harmless and ensures there's always something to restore if load is implemented later. No conditional logic needed.

## Risks / Trade-offs

- **localStorage quota (5MB typical):** Game state is small (a few KB with hundreds of workers/customers). No mitigation needed for foreseeable game scale. If state grows, compression can be added later.
- **Stale save on failed load:** If load is implemented later and the save is corrupt, it could restore bad state. Mitigation: version field allows migration/validation at load time.
- **No user feedback on save:** Players won't see "saving..." indicators. This is acceptable for MVP — the save is transparent and the `beforeunload` handler covers edge cases.
- **Interval continues on welcome screen:** Saves default/initial state repeatedly. Negligible cost — one small localStorage write per 5 seconds. Simplifies implementation (no conditional mount logic).

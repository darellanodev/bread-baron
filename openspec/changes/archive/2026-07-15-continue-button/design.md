## Context

The game already auto-saves state to localStorage every 5 seconds via `useAutoSave` hook (save-game change). The welcome screen (`WelcomeScreen.tsx`) currently shows a single "Next" button that transitions to GameSettingsScreen. There is no mechanism to detect or restore saved state from the welcome screen.

Key existing pieces:
- `SAVE_KEY = 'bread-baron-save'` in `src/types/saveTypes.ts`
- `SaveData` interface with `version`, `savedAt`, `state` fields
- `useGameStore` Zustand store with `setState()` method for hydration
- `WelcomeButton.tsx` renders a single Button with `onNext` callback

## Goals / Non-Goals

**Goals:**
- Detect valid saved game data on welcome screen mount
- Show "Continue last session" button (primary) + "New Game" button (secondary) when save exists
- Show only "Next" button (primary) when no save exists
- Load saved state into Zustand store and skip GameSettingsScreen on continue
- Handle corrupted/invalid save data gracefully (treat as no save)

**Non-Goals:**
- Save migration or version upgrade logic (future concern)
- Manual save/load UI buttons
- Showing save metadata (timestamp, player name) on the button
- Modifying the auto-save mechanism

## Decisions

### 1. Detection: synchronous localStorage check on mount

**Decision:** Use a `useHasSave()` hook that checks `localStorage.getItem(SAVE_KEY)` once on mount and returns a boolean.

**Why not async or context-based:** The check is synchronous and cheap (single localStorage read + JSON parse). No need for React context or provider pattern — the hook is self-contained and only used in one place.

**Validation:** The check must verify the parsed JSON has the correct shape (`version`, `savedAt`, `state`), not just that the key exists. This prevents showing the button when data is corrupted.

### 2. Loading: standalone `loadFromStorage()` function

**Decision:** A plain function (not a hook) that reads localStorage, validates, parses, and calls `useGameStore.setState(savedState)`.

**Why not a hook:** Loading is a one-shot action triggered by a click handler, not a reactive state. A plain function is simpler and more testable.

**Error handling:** If parsing fails or version is unrecognized, return `false`. The caller can fall back to normal flow.

### 3. Button layout: conditional two-button vs single-button

**Decision:** `WelcomeButton` receives `hasSave: boolean` and `onContinue` callback. When `hasSave` is true, renders both buttons in a flex row with gap. When false, renders only "Next".

**Styling:** "Continue" uses the existing primary Button style. "New Game" uses a secondary/lighter style to visually de-emphasize it. The current `shadow-[0_6px_0_#8b4513]` style stays on "Continue"; "New Game" gets a subtler treatment.

### 4. Flow: skip GameSettingsScreen on continue

**Decision:** `onContinue` in App.tsx calls `loadFromStorage()` then immediately sets screen to `'game'`, bypassing GameSettingsScreen.

**Why:** The saved state already contains all settings (playerName, ovenLevel, etc.). Going through settings again would be redundant and confusing.

## Risks / Trade-offs

- **Corrupted save shows button briefly** → Mitigated by validating JSON shape in detection, not just key existence. If validation fails, button never appears.
- **Version mismatch** → Current design doesn't check `SAVE_VERSION`. Future concern — for now, any version with valid shape is accepted. A version check can be added later in `loadFromStorage()`.
- **Multiple tabs** → Last write wins. Acceptable for single-player game.
- **Race with auto-save** → `useAutoSave` is already mounted in App.tsx. If user clicks "Continue" in the same tick as an auto-save, the load reads the latest save. No conflict.

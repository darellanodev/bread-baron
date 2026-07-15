## 1. Detection Hook

- [x] 1.1 Create `src/hooks/useHasSave.ts` — hook that reads `localStorage.getItem(SAVE_KEY)` on mount, validates JSON shape (`version`, `savedAt`, `state`), returns boolean
- [x] 1.2 Ensure hook returns `false` for corrupted/invalid data (not just missing key)

## 2. Load Utility

- [x] 2.1 Create `src/utils/loadFromStorage.ts` — function that reads localStorage, parses SaveData, validates version, calls `useGameStore.setState(savedState)`, returns success boolean
- [x] 2.2 Handle parse errors and missing fields gracefully (return `false`, don't throw)

## 3. Welcome Button Update

- [x] 3.1 Update `WelcomeButton` props to accept `hasSave: boolean` and `onContinue` callback
- [x] 3.2 Render two-button layout when `hasSave` is true: "Continue last session" (primary) + "New Game" (secondary)
- [x] 3.3 Render single-button layout when `hasSave` is false: "Next" (primary)
- [x] 3.4 Apply secondary styling to "New Game" button (distinct from primary)

## 4. Integration

- [x] 4.1 Update `WelcomeScreen` to accept `hasSave` and `onContinue` props, pass through to `WelcomeButton`
- [x] 4.2 In `App.tsx`: call `useHasSave()` to get boolean, pass to `WelcomeScreen`
- [x] 4.3 In `App.tsx`: create `onContinue` handler that calls `loadFromStorage()` then `setScreen('game')`

## 5. Verification

- [x] 5.1 Run TypeScript compiler to verify no type errors
- [ ] 5.2 Manual test: with save data, verify "Continue" button appears and loads state
- [ ] 5.3 Manual test: without save data, verify only "Next" button appears
- [ ] 5.4 Manual test: with corrupted localStorage data, verify "Next" button appears (not "Continue")

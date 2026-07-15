## 1. Types & Constants

- [x] 1.1 Create `src/types/saveTypes.ts` with `SaveData` type (`version: number`, `savedAt: number`, `state: Pick<GameState, ...>` with all 15 saveable fields)
- [x] 1.2 Add constants: `SAVE_KEY = 'bread-baron-save'`, `SAVE_VERSION = 1`, `SAVE_INTERVAL_MS = 5000`

## 2. Auto-Save Hook

- [x] 2.1 Create `src/hooks/useAutoSave.ts` — hook that reads Zustand store, picks serializable fields, writes to localStorage on interval
- [x] 2.2 Add `setInterval` at `SAVE_INTERVAL_MS` cadence inside the hook, cleaned up on unmount
- [x] 2.3 Add `beforeunload` event listener that writes a final save synchronously on page unload
- [x] 2.4 Ensure hook only runs in browser (guard against SSR/undefined `window`)

## 3. Integration

- [x] 3.1 Import and call `useAutoSave()` in `App.tsx`

## 4. Verification

- [x] 4.1 Run TypeScript compiler to verify no type errors
- [ ] 4.2 Manual test: open browser devtools, play game briefly, verify `localStorage['bread-baron-save']` contains correct envelope with version, timestamp, and state fields

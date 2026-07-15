# Auto-Save Specification

## Purpose

The system provides automatic persistence of game state to `localStorage`, ensuring players never lose progress.

## Requirements

### Requirement: Auto-save game state periodically
The system SHALL serialize the current game state to `localStorage` every 5000 milliseconds using the `useAutoSave` hook.

#### Scenario: Periodic save on interval
- **WHEN** 5000 milliseconds have elapsed since the last save
- **THEN** the system SHALL write the current serializable game state to `localStorage` under the key `bread-baron-save`

### Requirement: Save includes versioned envelope
The system SHALL wrap saved state in a `SaveData` envelope containing `version` (number), `savedAt` (timestamp in milliseconds), and `state` (the serialized game state).

#### Scenario: Save envelope format
- **WHEN** the system writes a save to `localStorage`
- **THEN** the value SHALL be a JSON string with structure `{ "version": number, "savedAt": number, "state": { ... } }`

### Requirement: Save only serializable state fields
The system SHALL save only the following fields from the Zustand game store: `playerName`, `money`, `activeDebt`, `currentDay`, `currentYear`, `dailyMoneyHistory`, `workers`, `availableHelpers`, `customers`, `ovenLevel`, `maxWorkers`, `bakingProgress`, `showProduct`, `isPaused`, `totalProductsCreated`.

#### Scenario: Action functions are excluded
- **WHEN** the system serializes game state
- **THEN** no function values (setters, actions, formatters) SHALL be included in the saved data

### Requirement: Safety-net save on page unload
The system SHALL write a final save to `localStorage` when the `beforeunload` event fires.

#### Scenario: Save on tab close or refresh
- **WHEN** the user closes the tab, refreshes the page, or navigates away
- **THEN** the system SHALL synchronously write the current game state to `localStorage` before the page unloads

### Requirement: Hook always active
The `useAutoSave` hook SHALL be mounted in `App.tsx` and remain active regardless of which screen is displayed (welcome, game, settings, etc.).

#### Scenario: Save runs on welcome screen
- **WHEN** the application loads and displays the welcome screen
- **THEN** the auto-save hook SHALL be active and saving the current (default) state at the configured interval

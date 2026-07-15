## ADDED Requirements

### Requirement: Welcome screen detects saved game data
The system SHALL check localStorage for valid saved game data when the welcome screen mounts.

#### Scenario: Valid save exists
- **WHEN** the welcome screen mounts and localStorage contains a valid JSON object under key `bread-baron-save` with fields `version`, `savedAt`, and `state`
- **THEN** the system SHALL indicate that a saved game is available

#### Scenario: No save data
- **WHEN** the welcome screen mounts and localStorage contains no value for key `bread-baron-save`
- **THEN** the system SHALL indicate that no saved game is available

#### Scenario: Corrupted save data
- **WHEN** the welcome screen mounts and localStorage contains a value for key `bread-baron-save` that is not valid JSON or lacks required fields (`version`, `savedAt`, `state`)
- **THEN** the system SHALL indicate that no saved game is available

### Requirement: Conditional button rendering on welcome screen
The welcome screen SHALL render buttons based on whether saved game data exists.

#### Scenario: Save exists — two buttons shown
- **WHEN** a valid saved game is detected
- **THEN** the welcome screen SHALL display a "Continue last session" button (primary style) and a "New Game" button (secondary style) side by side

#### Scenario: No save — single button shown
- **WHEN** no valid saved game is detected
- **THEN** the welcome screen SHALL display only a "Next" button (primary style)

### Requirement: Continue loads saved state and skips settings
The "Continue last session" button SHALL load the saved game state and transition directly to the game screen.

#### Scenario: Successful continue
- **WHEN** the user clicks "Continue last session"
- **THEN** the system SHALL load the saved state from localStorage into the Zustand game store
- **AND** the system SHALL transition directly to the game screen, bypassing GameSettingsScreen

#### Scenario: Load failure
- **WHEN** the user clicks "Continue last session" and loading/parsing the saved state fails
- **THEN** the system SHALL not modify the current game state
- **AND** the system SHALL remain on the welcome screen

### Requirement: New Game starts fresh flow
The "New Game" / "Next" button SHALL start the standard new game flow.

#### Scenario: New game from welcome with save
- **WHEN** a save exists and the user clicks "New Game"
- **THEN** the system SHALL transition to GameSettingsScreen (existing behavior unchanged)

#### Scenario: New game from welcome without save
- **WHEN** no save exists and the user clicks "Next"
- **THEN** the system SHALL transition to GameSettingsScreen (existing behavior unchanged)

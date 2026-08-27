## ADDED Requirements

### Requirement: Title hidden on mobile
The system SHALL hide the entire HeaderTitle block (icon + text) on viewports below 1024px (below `lg` breakpoint).

#### Scenario: Mobile hides title completely
- **WHEN** the viewport width is less than 1024px
- **THEN** the HeaderTitle block SHALL be hidden, showing neither the icon nor the "Bread Baron" text

#### Scenario: Desktop shows full title
- **WHEN** the viewport width is 1024px or greater
- **THEN** the HeaderTitle block SHALL display both the 🍞 icon and "Bread Baron" text

### Requirement: Pause button removes min-width on mobile
The system SHALL remove the `min-w-[84px]` constraint from the pause button on viewports below 1024px, allowing it to shrink to icon-only size.

#### Scenario: Mobile pause button is compact
- **WHEN** the viewport width is less than 1024px
- **THEN** the pause button SHALL have no minimum width constraint and SHALL display only the icon (text hidden)

#### Scenario: Desktop pause button has minimum width
- **WHEN** the viewport width is 1024px or greater
- **THEN** the pause button SHALL have `min-w-[84px]` and display both icon and text

### Requirement: Settings button reduces size on mobile
The system SHALL reduce the SettingsMenu trigger button from 40px (`size-10`) to 32px (`size-8`) on viewports below 1024px.

#### Scenario: Mobile settings button is smaller
- **WHEN** the viewport width is less than 1024px
- **THEN** the settings button SHALL use `w-8 h-8` (32px) dimensions

#### Scenario: Desktop settings button is standard size
- **WHEN** the viewport width is 1024px or greater
- **THEN** the settings button SHALL use `w-10 h-10` (40px) dimensions

### Requirement: Stat value font reduces on mobile
The system SHALL reduce Stat pill value font size from `text-sm` to `text-xs` on viewports below 1024px.

#### Scenario: Mobile stats use smaller font
- **WHEN** the viewport width is less than 1024px
- **THEN** the Stat value text SHALL use `text-xs` font size

#### Scenario: Desktop stats use standard font
- **WHEN** the viewport width is 1024px or greater
- **THEN** the Stat value text SHALL use `text-sm` font size

### Requirement: Header container gap reduces on mobile
The system SHALL reduce the gap between HeaderStats and HeaderActions from `gap-8` to `gap-3` on viewports below 1024px.

#### Scenario: Mobile header uses tight gap
- **WHEN** the viewport width is less than 1024px
- **THEN** the container holding stats and actions SHALL use `gap-3` spacing

#### Scenario: Desktop header uses standard gap
- **WHEN** the viewport width is 1024px or greater
- **THEN** the container holding stats and actions SHALL use `gap-8` spacing

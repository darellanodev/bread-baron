## ADDED Requirements

### Requirement: GameScreen vertical stacking on mobile
The system SHALL display the three GameScreen panels (Orders, Bakery, Market) stacked vertically when the viewport width is less than 1024px (below the `lg` breakpoint).

#### Scenario: Mobile viewport displays stacked panels
- **WHEN** the viewport width is less than 1024px
- **THEN** the OrdersPanel, BakeryPanel, and MarketPanel SHALL each occupy the full width of the screen, stacked vertically in a single column layout

#### Scenario: Desktop viewport displays side-by-side panels
- **WHEN** the viewport width is 1024px or greater
- **THEN** the three panels SHALL display side-by-side with OrdersPanel at w-1/4, BakeryPanel at w-1/2, and MarketPanel at w-1/4

### Requirement: Header responsive padding and spacing
The system SHALL reduce Header padding from `px-10` to `px-4` on viewports below 1024px.

#### Scenario: Mobile header uses compact padding
- **WHEN** the viewport width is less than 1024px
- **THEN** the Header SHALL use `px-4` padding instead of `px-10`

### Requirement: HeaderStats conditional visibility on mobile
The system SHALL hide the Date stat pill on viewports below 1024px, showing only the Money and Baked count stats.

#### Scenario: Mobile hides Date stat
- **WHEN** the viewport width is less than 1024px
- **THEN** the Date stat pill SHALL be hidden, and only Money and Baked count stats SHALL be visible

#### Scenario: Desktop shows all stats
- **WHEN** the viewport width is 1024px or greater
- **THEN** all three stat pills (Money, Date, Baked count) SHALL be visible

### Requirement: HeaderActions button text hidden on mobile
The system SHALL hide the pause button text on viewports below 1024px, showing only the icon.

#### Scenario: Mobile shows icon-only pause button
- **WHEN** the viewport width is less than 1024px
- **THEN** the pause button SHALL display only the icon without the "Pause game" or "Resume game" text

#### Scenario: Desktop shows full pause button
- **WHEN** the viewport width is 1024px or greater
- **THEN** the pause button SHALL display both icon and text

### Requirement: Stat pill responsive sizing
The system SHALL reduce Stat pill padding from `px-4 py-1.5` to `px-2 py-1` on viewports below 1024px.

#### Scenario: Mobile uses compact stat pills
- **WHEN** the viewport width is less than 1024px
- **THEN** Stat pills SHALL use `px-2 py-1` padding

### Requirement: IndustryMap horizontal scroll on mobile
The system SHALL make the IndustryMap horizontally scrollable on viewports below 1024px instead of overflowing.

#### Scenario: Mobile IndustryMap scrolls horizontally
- **WHEN** the viewport width is less than 1024px
- **THEN** the IndustryMap SHALL be contained within a horizontal scroll container, allowing users to scroll through the 5 stages

#### Scenario: Desktop IndustryMap fits in viewport
- **WHEN** the viewport width is 1024px or greater
- **THEN** the IndustryMap SHALL fit within the viewport without horizontal scrolling

### Requirement: EconomyScreen responsive grid
The system SHALL display the EconomyScreen debt grid as a single column on viewports below 1024px.

#### Scenario: Mobile uses single-column grid
- **WHEN** the viewport width is less than 1024px
- **THEN** the EconomyScreen debt information SHALL display in a single column layout

#### Scenario: Desktop uses two-column grid
- **WHEN** the viewport width is 1024px or greater
- **THEN** the EconomyScreen debt information SHALL display in a two-column grid layout

### Requirement: HireHelperScreen flexible height
The system SHALL use flexible height for the HireHelperScreen modal instead of fixed `h-[600px]`.

#### Scenario: Mobile HireHelperScreen adapts to content
- **WHEN** the viewport width is less than 1024px
- **THEN** the HireHelperScreen modal SHALL use `h-auto max-h-[80vh]` instead of fixed height

### Requirement: Worker card responsive width
The system SHALL reduce Worker card width from `w-64` to `w-52` on viewports below 1024px.

#### Scenario: Mobile Worker cards are narrower
- **WHEN** the viewport width is less than 1024px
- **THEN** Worker cards SHALL use `w-52` width instead of `w-64`

### Requirement: WorkersPanel responsive height
The system SHALL reduce WorkersPanel minimum height from `min-h-[180px]` to `min-h-[120px]` on viewports below 1024px.

#### Scenario: Mobile WorkersPanel uses compact height
- **WHEN** the viewport width is less than 1024px
- **THEN** WorkersPanel SHALL use `min-h-[120px]` instead of `min-h-[180px]`

### Requirement: Header gap responsive spacing
The system SHALL reduce the gap between HeaderStats and HeaderActions from `gap-8` to `gap-3` on viewports below 768px, supplementing the existing padding and stat visibility responsive behaviors.

#### Scenario: Mobile header uses compact gap
- **WHEN** the viewport width is less than 768px
- **THEN** the stats+actions container SHALL use `gap-3` instead of `gap-8`

#### Scenario: Desktop header uses standard gap
- **WHEN** the viewport width is 768px or greater
- **THEN** the stats+actions container SHALL use `gap-8`

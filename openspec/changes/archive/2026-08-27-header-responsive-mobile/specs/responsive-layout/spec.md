## ADDED Requirements

### Requirement: Header gap responsive spacing
The system SHALL reduce the gap between HeaderStats and HeaderActions from `gap-8` to `gap-3` on viewports below 1024px, supplementing the existing padding and stat visibility responsive behaviors.

#### Scenario: Mobile header uses compact gap
- **WHEN** the viewport width is less than 1024px
- **THEN** the stats+actions container SHALL use `gap-3` instead of `gap-8`

#### Scenario: Desktop header uses standard gap
- **WHEN** the viewport width is 1024px or greater
- **THEN** the stats+actions container SHALL use `gap-8`

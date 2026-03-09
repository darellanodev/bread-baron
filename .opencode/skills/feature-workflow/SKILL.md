---
name: feature-workflow
description: Workflow for developing features in src/features/
---

# Feature Development Workflow

## Purpose

Use this skill whenever you need to make changes to an existing feature or create a new feature (screen) in this application.

## Definition

- **Feature**: A screen or distinct part of the application
- **Features are located in**: `src/features/`
- Each feature is typically a directory containing:
  - Main screen component (e.g., `FeatureNameScreen.tsx`)
  - `layout/` subdirectory for layout-specific components
  - `components/` subdirectory for feature-specific components

## Workflow

### Step 1: Understand the Feature

1. Identify the feature name and its location in `src/features/`
2. Read the existing feature code to understand:
   - How it's structured
   - What components it uses
   - How it connects to the store

### Step 2: Check for Reusable Components

Before creating new components, always check:

1. **`src/components/ui/`** - Common UI elements like:
   - `Button.tsx` - Reusable button component
   - `ProgressBar.tsx` - Progress indicator

2. **`src/components/header/`** - Header components

3. **`src/components/window/`** - Window/container components

4. **`src/features/<feature>/components/`** - Components specific to another feature

If a suitable component exists:

- Reuse it directly
- If it needs adjustments, modify it first to make it more generic
- Only create a new component if it's truly specific to your feature

### Step 3: Check Related Directories

Depending on your changes, also check:

- **`src/store/`** - Global state management with Zustand
  - `gameStore.ts` - Main game state
  - `actions/` - State actions
  - `types.ts` - TypeScript types

- **`src/constants/`** - Application constants

- **`src/utils/`** - Utility functions

- **`src/hooks/`** - Custom React hooks

### Step 4: Implement the Feature

Follow these guidelines:

1. For new features:
   - Create directory in `src/features/<feature-name>/`
   - Create main screen component `<FeatureName>Screen.tsx`
   - Use `layout/` and `components/` subdirectories as needed

2. For modifications to existing features:
   - Work within the existing feature directory
   - Keep components co-located with their usage when possible

3. For feature-specific components that could be reused:
   - Consider placing them in `src/features/<feature>/components/`
   - If truly generic, propose moving to `src/components/`

### Step 5: Verify

After implementation:

- Ensure the feature compiles without errors
- Verify it integrates properly with the store if needed
- Check that any reused components work correctly

## Important Notes

- Always prefer composition over duplication
- If a component might be useful across multiple features, check `src/components/` first
- Feature-specific components go in `src/features/<feature>/components/` or `src/features/<feature>/layout/`
- State changes should go through the Zustand store in `src/store/`

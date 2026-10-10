# Graph Report - bread-baron  (2026-10-07)

## Corpus Check
- Corpus is ~43,763 words - fits in a single context window. You may not need a graph.

## Summary
- 527 nodes · 1122 edges · 34 communities (27 shown, 7 thin omitted)
- Extraction: 95% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 49 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Game Balance Constants
- Core Game State Config
- Reusable UI Components
- App Shell and Header
- Economy and Time Config
- Market and Customer Screens
- Package Metadata
- Dev Dependencies
- Design Docs and Workflow Skills
- TypeScript Config
- Header Mobile Responsive Specs
- OpenSpec Command Workflow
- Header Stats and Formatting
- Auto-Save Design Specs
- Order Baking Logic
- Persistence Hook Implementation
- Welcome Screen Design
- Node TypeScript Config
- NPM Scripts
- Branding Assets
- Vite Build Config
- Runtime Dependencies
- Test Setup Utilities
- Circle Logo Design
- OpenSpec Change Metadata
- README Banner Design
- Hire Helper Wireframe
- Opencode Config
- Classname Utilities
- Run Script
- Test Runner Script

## God Nodes (most connected - your core abstractions)
1. `useGameStore` - 59 edges
2. `Button()` - 28 edges
3. `compilerOptions` - 18 edges
4. `react` - 15 edges
5. `App()` - 13 edges
6. `GameState` - 13 edges
7. `vitest` - 12 edges
8. `GameScreen()` - 11 edges
9. `SetState` - 10 edges
10. `Continue Button design document` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Circular Game Logo Asset` --semantically_similar_to--> `Bread Baron Banner Graphic`  [INFERRED] [semantically similar]
  src/assets/bread_baron_circle.png → github_readme/banner.png
- `index.html entry point with dark-mode bootstrap` --conceptually_related_to--> `SAVE_KEY constant (src/types/saveTypes.ts)`  [INFERRED]
  index.html → openspec/changes/archive/2026-07-15-continue-button/design.md
- `React Doctor diagnostic tool` --conceptually_related_to--> `Feature Development Workflow skill`  [INFERRED]
  .agents/skills/react-doctor/SKILL.md → .opencode/skills/feature-workflow/SKILL.md
- `React Doctor diagnostic tool` --conceptually_related_to--> `Bread Baron tech stack (Vite, React, TypeScript, Jest, Playwright, pnpm, Prettier)`  [INFERRED]
  .agents/skills/react-doctor/SKILL.md → README.md
- `Deploy to GitHub Pages workflow (build-and-deploy)` --conceptually_related_to--> `Bread Baron clicker game`  [INFERRED]
  .github/workflows/deploy.yml → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Continue Button OpenSpec change artifacts** — openspec_changes_archive_2026_07_15_continue_button_proposal_continue_button_change, openspec_changes_archive_2026_07_15_continue_button_design_continue_button_design, openspec_changes_archive_2026_07_15_continue_button_tasks_task_list, openspec_changes_archive_2026_07_15_continue_button_specs_continue_button_spec_delta_requirements, openspec_changes_archive_2026_07_15_continue_button__openspec_spec_driven_schema [INFERRED 0.95]
- **OpenSpec change lifecycle (propose, apply, update, sync, archive)** — _opencode_commands_opsx_propose_opsx_propose, _opencode_commands_opsx_apply_opsx_apply, _opencode_commands_opsx_update_opsx_update, _opencode_commands_opsx_sync_opsx_sync, _opencode_commands_opsx_archive_opsx_archive [INFERRED 0.95]
- **Continue Button localStorage save subsystem** — openspec_changes_archive_2026_07_15_continue_button_design_save_key, openspec_changes_archive_2026_07_15_continue_button_design_save_data, openspec_changes_archive_2026_07_15_continue_button_design_use_auto_save, openspec_changes_archive_2026_07_15_continue_button_design_use_has_save, openspec_changes_archive_2026_07_15_continue_button_design_load_from_storage, _opencode_skills_feature_workflow_skill_game_store [INFERRED 0.95]
- **Auto-Save Persistence Mechanism** — openspec_changes_archive_2026_07_15_save_game_specs_auto_save_useautosave_hook, openspec_changes_archive_2026_07_15_save_game_specs_auto_save_savedata_envelope, openspec_changes_archive_2026_07_15_save_game_specs_auto_save_localstorage_key, openspec_changes_archive_2026_07_15_save_game_design_zustand_game_store [EXTRACTED 0.90]
- **Mobile Header Overflow Fix Decisions** — openspec_changes_archive_2026_08_27_header_responsive_mobile_design_hide_title_block_mobile, openspec_changes_archive_2026_08_27_header_responsive_mobile_design_pause_button_min_width_removal, openspec_changes_archive_2026_08_27_header_responsive_mobile_design_settings_button_mobile_shrink, openspec_changes_archive_2026_08_27_header_responsive_mobile_design_stat_typography_reduction, openspec_changes_archive_2026_08_27_header_responsive_mobile_design_header_gap_reduction [EXTRACTED 0.95]
- **Responsive lg-Breakpoint Adaptation Decisions** — openspec_changes_archive_2026_08_27_responsive_adaptation_design_lg_breakpoint_strategy, openspec_changes_archive_2026_08_27_responsive_adaptation_design_vertical_stacking_gamescreen, openspec_changes_archive_2026_08_27_responsive_adaptation_design_conditional_visibility_hidden_block, openspec_changes_archive_2026_08_27_responsive_adaptation_design_industrymap_horizontal_scroll, openspec_changes_archive_2026_08_27_responsive_adaptation_design_flexible_modal_dimensions, openspec_changes_archive_2026_08_27_responsive_adaptation_specs_responsive_layout_capability [EXTRACTED 0.90]
- **Centered Welcome Header Lockup** — _design_welcome_wireframe_bread_baron_icon, _design_welcome_wireframe_title_text, _design_welcome_wireframe_tagline_text [EXTRACTED 1.00]

## Communities (34 total, 7 thin omitted)

### Community 0 - "Game Balance Constants"
Cohesion: 0.08
Nodes (41): zustand, MAX_CUSTOMERS_PER_PROMOTION, MAX_ORDERS_PER_CUSTOMER, MIN_CUSTOMERS_PER_PROMOTION, MIN_ORDERS_PER_CUSTOMER, PROMOTION_COST, DAYS_PER_MONTH, JOB_OFFER_COST (+33 more)

### Community 1 - "Core Game State Config"
Cohesion: 0.10
Nodes (29): INITIAL_ACTIVE_DEBT, INITIAL_DAY, INITIAL_MONEY, INITIAL_OVEN_LEVEL, INITIAL_YEAR, INDUSTRY_LEVELS, IndustryLevelConfig, MAX_INDUSTRY_LEVEL (+21 more)

### Community 2 - "Reusable UI Components"
Cohesion: 0.09
Nodes (31): class-variance-authority, Button(), ButtonProps, buttonVariants, WindowCloseButton(), WindowCloseButtonProps, WindowContainer(), WindowContainerProps (+23 more)

### Community 3 - "App Shell and Header"
Cohesion: 0.10
Nodes (21): react, App(), DarkModeToggle(), DropdownMenu(), DropdownMenuProps, Header(), HeaderProps, HeaderActions() (+13 more)

### Community 4 - "Economy and Time Config"
Cohesion: 0.10
Nodes (21): recharts, MONEY_FORMAT_CONFIG, DAILY_OPERATIONAL_COST, DAY_DURATION_MS, DAYS_PER_YEAR, DEBT_INTEREST_RATE, LOAN_AMOUNT, MAX_DEBT (+13 more)

### Community 5 - "Market and Customer Screens"
Cohesion: 0.13
Nodes (19): Customer(), GameScreen(), GameScreenProps, MarketCustomers(), MarketPromotion(), MarketTitle(), MarketPanel(), MobileTabs() (+11 more)

### Community 6 - "Package Metadata"
Cohesion: 0.08
Nodes (25): author, description, keywords, license, main, name, packageManager, type (+17 more)

### Community 7 - "Dev Dependencies"
Cohesion: 0.08
Nodes (26): devDependencies, autoprefixer, class-variance-authority, clsx, eslint, eslint-config-prettier, eslint-plugin-prettier, jsdom (+18 more)

### Community 8 - "Design Docs and Workflow Skills"
Cohesion: 0.21
Nodes (21): React Doctor diagnostic tool, Deploy to GitHub Pages workflow (build-and-deploy), src/App.tsx screen router, Feature Development Workflow skill, Zustand game store (src/store/gameStore.ts), index.html entry point with dark-mode bootstrap, Continue Button design document, loadFromStorage() utility (src/utils/loadFromStorage.ts) (+13 more)

### Community 9 - "TypeScript Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleResolution (+12 more)

### Community 10 - "Header Mobile Responsive Specs"
Cohesion: 0.20
Nodes (9): Header Responsive Mobile Change Proposal, header-mobile-layout Capability Delta Requirements, Header Gap Responsive Spacing Requirement (delta into responsive-layout), Header Mobile Implementation Task List, Responsive Adaptation Change Proposal, responsive-layout Capability Delta Requirements, Responsive Adaptation Implementation Task List, header-mobile-layout Specification (Active) (+1 more)

### Community 11 - "OpenSpec Command Workflow"
Cohesion: 0.18
Nodes (15): opsx-apply command, opsx-archive command, Explore Mode is a Stance, Not a Workflow, opsx-explore command, opsx-propose command, Delta Spec Format (ADDED/MODIFIED/REMOVED/RENAMED), opsx-sync command, opsx-update command (+7 more)

### Community 12 - "Header Stats and Formatting"
Cohesion: 0.18
Nodes (12): formatDate(), formatNumber(), getCurrentYear(), HeaderStats(), HeaderStatsProps, isLeapYear(), ProgressBar(), ProgressBarProps (+4 more)

### Community 13 - "Auto-Save Design Specs"
Cohesion: 0.25
Nodes (10): Zustand gameStore Single Serializable Store, Save Game Change Proposal (save-only localStorage persistence), auto-save Capability Delta Requirements, bread-baron-save localStorage Key, SaveData Envelope (version, savedAt, state), useAutoSave Hook, Auto-Save Implementation Task List, auto-save Specification (Active) (+2 more)

### Community 14 - "Order Baking Logic"
Cohesion: 0.32
Nodes (9): BAKING_PROGRESS_THRESHOLD, completeOrder(), createBakingActions(), createCompletedBakingResult(), findTargetOrder(), findTargetOrderIndex(), updateCustomerOrders(), updateOrderProgress() (+1 more)

### Community 15 - "Persistence Hook Implementation"
Cohesion: 0.29
Nodes (9): SAVEABLE_KEYS, saveToStorage(), useAutoSave(), GameState, SAVE_INTERVAL_MS, SAVE_KEY, SAVE_VERSION, SaveableFields (+1 more)

### Community 16 - "Welcome Screen Design"
Cohesion: 0.42
Nodes (9): Illustrated Icon/Character Next to Title, Centered Rounded Hero Card on Dark Brown Background, Primary CTA Button 'Start Kneading!', Welcome Description Paragraph (justified body copy), Emphasized Phrase 'every crumb counts' in Paragraph, Tagline Subtitle 'Build your bread empire', Gold Display Title Reading 'Bread Baron', Welcome / Onboarding Entry Flow (+1 more)

### Community 17 - "Node TypeScript Config"
Cohesion: 0.25
Nodes (7): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, include

### Community 18 - "NPM Scripts"
Cohesion: 0.29
Nodes (7): scripts, build, coverage, dev, preview, test, test:watch

### Community 19 - "Branding Assets"
Cohesion: 0.47
Nodes (6): Bread Baron Banner Graphic, Project Branding Element, GitHub README Marketing Asset, Bread Baron Character Illustration, Circular Game Logo Asset, Welcome Screen Branding

### Community 20 - "Vite Build Config"
Cohesion: 0.40
Nodes (4): vite, vite-tsconfig-paths, @vitejs/plugin-react, vitest

### Community 21 - "Runtime Dependencies"
Cohesion: 0.40
Nodes (5): dependencies, react, react-dom, recharts, zustand

### Community 22 - "Test Setup Utilities"
Cohesion: 0.40
Nodes (3): @testing-library/jest-dom, @testing-library/react, @testing-library/user-event

### Community 23 - "Circle Logo Design"
Cohesion: 0.50
Nodes (4): Game Branding Asset, Bread Baron Brand, Bread Baron Circle Logo Design, Circular Logo Element

### Community 24 - "OpenSpec Change Metadata"
Cohesion: 0.50
Nodes (4): Save Game Change Metadata (spec-driven, 2026-07-15), Header Responsive Mobile Change Metadata (spec-driven, 2026-08-27), Responsive Adaptation Change Metadata (spec-driven, 2026-08-27), OpenSpec Spec-Driven Configuration

### Community 25 - "README Banner Design"
Cohesion: 1.00
Nodes (3): GitHub README Banner Design Source (700x142), Bread Baron Project Branding Banner, README Header Marketing Asset

### Community 26 - "Hire Helper Wireframe"
Cohesion: 1.00
Nodes (3): Hire Helper Feature Design Concept, Hire Helper Screen Wireframe (800x600 artboard), Low-Fidelity UI Layout Sketch

## Ambiguous Edges - Review These
- `Hide Entire HeaderTitle Block on Mobile` → `Header Mobile Implementation Task List`  [AMBIGUOUS]
  openspec/changes/archive/2026-08-27-header-responsive-mobile/tasks.md · relation: conceptually_related_to
- `header-mobile-layout Capability Delta Requirements` → `header-mobile-layout Specification (Active)`  [AMBIGUOUS]
  openspec/changes/archive/2026-08-27-header-responsive-mobile/specs/header-mobile-layout/spec.md · relation: conceptually_related_to
- `Header Gap Responsive Spacing Requirement (delta into responsive-layout)` → `responsive-layout Specification (Active)`  [AMBIGUOUS]
  openspec/changes/archive/2026-08-27-header-responsive-mobile/specs/responsive-layout/spec.md · relation: conceptually_related_to

## Knowledge Gaps
- **144 isolated node(s):** `$schema`, `plugin`, `name`, `version`, `type` (+139 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 167 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Hide Entire HeaderTitle Block on Mobile` and `Header Mobile Implementation Task List`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `react` connect `App Shell and Header` to `Core Game State Config`, `Reusable UI Components`, `Economy and Time Config`, `Market and Customer Screens`, `Package Metadata`, `Persistence Hook Implementation`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `name` to the rest of the system?**
  _144 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Game Balance Constants` be split into smaller, more focused modules?**
  _Cohesion score 0.07918552036199095 - nodes in this community are weakly interconnected._
- **What is the exact relationship between `header-mobile-layout Capability Delta Requirements` and `header-mobile-layout Specification (Active)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `useGameStore` connect `Core Game State Config` to `Game Balance Constants`, `Reusable UI Components`, `App Shell and Header`, `Economy and Time Config`, `Market and Customer Screens`, `Header Stats and Formatting`, `Order Baking Logic`, `Persistence Hook Implementation`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `Core Game State Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10122448979591837 - nodes in this community are weakly interconnected._
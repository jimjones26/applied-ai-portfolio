# SpaceTravelRepairMan

**path**: /Users/jjones/Documents/dev/projects/SpaceTravelRepairMan
**last commit**: 2025-03-13 (410 days ago)
**commits**: 59
**stack**: Unity (C#), Universal Render Pipeline, NUnit (Unity Test Framework)
**status**: paused

## Goal (1 sentence)
A Unity game prototype exploring a ship power-allocation system — shields, speed, offense, and lights — with a UI dashboard and slider controls.

## What exists
- `PowerAllocation.cs` (~263 lines): a pure C# class managing a total power pool distributed across shield, weapon, and engine systems with ratio-preserving redistribution logic and decimal slider values
- `UISystem/` scripts driving a Unity UGUI dashboard (text fields + sliders for each system)
- `Assets/Tests/EditMode/` and `PlayMode/` suites covering `PowerAllocation` logic and UI event wiring
- `docs/` with layout specs (`dashboard-layout.md`) and a UI setup guide (`power-allocation-ui-setup.md`)

## Ending state
Power allocation and UI are implemented and tested through the offense power slider (the last of four systems added). Floating-point precision handling and ratio redistribution are solved. The game concept beyond the dashboard — any actual "repair" or space-travel gameplay — was never started.

## Lesson signal
Methodical TDD approach to a Unity game mechanic: each new power system (shields → speed → offense → lights) was added with tests first, then UI wiring. The docs suggest it was being built with AI assistance step-by-step. No gameplay loop signals this was infrastructure-only exploration.

## Lineage hints
Standalone; no connection to the SvelteKit/todo arc. Likely a parallel exploration of Unity + AI-assisted TDD workflow, running concurrently with the web stack experiments in late Feb/early March 2025.

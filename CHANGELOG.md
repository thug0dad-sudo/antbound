# ANTBOUND v0.20.1 — Launch Repair

## Fixed

- Bundled the pinned Three.js 0.166.1 module inside the release.
- Removed the CDN requirement that prevented offline and restricted-network startup.
- Made pointer-lock rejection non-fatal.
- Started the animation loop before any optional mouse-capture interaction.
- Mouse capture is now requested only after clicking the game canvas.
- Added a visible module-loading failure message instead of a silent startup failure.

## Preserved

- The v0.20 fixed-rate scheduler and per-system budgets.
- Chunk-based AI and ecology activation.
- Dense renderer-driven grass and ground detail.
- Seeded thickets, natural paths, and varied grass dimensions and lean.
- Existing underground, weather, combat, colony, minimap, and multiplayer-preparation systems.


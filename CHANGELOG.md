# ANTBOUND v0.22.0 — Storm & Tremor

## Added

- A luminous underground surface-exit beacon with a floating arrow, beam, pulsing floor ring, directional HUD guide, distance readout, and minimap label.
- A pincer-shaped contextual bite control with an accessible text label.
- Visible full-screen lightning flashes synchronized with thunder audio.
- A subtle tremor vignette accompanying nearby spider footsteps.
- A storm preview helper for runtime testing.

## Changed

- Spider footsteps now shake the camera whenever the moving spider is nearby, with distance, gait speed, and pursuit state controlling intensity.
- The attack control becomes mostly transparent while the player is moving.
- Thunderstorms now produce several lightning and thunder events rather than relying on a rare single strike.
- Grass density increased to 24,000 on Low, 56,000 on Medium, 88,000 on High, and 128,000 on Ultra.

## Fixed

- Spider tremors no longer depend exclusively on the pursuit state.
- Surface spider movement no longer shakes the camera while the player is underground.
- A short emergence grace window prevents the spider from killing a fresh spawn before the player can orient or move.
- Lightning flashes decay at the rendering rate instead of remaining bright for a full low-frequency weather tick.
- Interface regression coverage now verifies the exit marker, pincer icon, storm presentation hooks, and dense-grass budgets.

# ANTBOUND v0.21.0 — Immersive Interface

## Added

- One floating contextual action for collecting, delivering, entering, climbing, and biting.
- Automatic sprint when the movement joystick reaches its outer edge.
- Outer-yard colony entrances, shelters, paths, food sites, vegetation thickets, and surface detail.
- An interface regression test covering contextual input, stamina visibility, HUD motion state, auto-sprint, multi-touch, and world expansion.

## Changed

- Playable yard radius increased from 110 to 150 world units.
- Objective and status panels fade while the player is moving.
- Stamina remains hidden until it drops below 72%, then hides after full recovery.
- Minimap is smaller, translucent, and fades further during movement.
- Vegetation and detail presets were increased for the larger terrain.

## Fixed

- Context actions now queue the exact matching gameplay input.
- Full-stick sprint releases cleanly when the joystick returns or is cancelled.
- Spider bites can now connect with its larger collision footprint.
- Biting the spider briefly stuns it, preventing an unavoidable collision during the counterattack.
- Context actions no longer remain visible over win or loss screens.
- World-bound systems now use the expanded map radius instead of old fixed limits.

# ANTBOUND v0.20.4 — Multi-Touch Controls

## Fixed

- Moving with the joystick no longer blocks simultaneous touch-screen camera look.
- Releasing the joystick no longer cancels an active look gesture.
- Releasing a look gesture no longer resets joystick movement.
- Extra touches can no longer steal an active joystick or action-button pointer.

## Changed

- Touch camera gestures are routed globally and ignore joystick, action, and overlay targets.
- Joystick, look, mouse drag, and hold buttons now maintain independent pointer ownership.
- Touch devices disable browser panning and overscroll while the game controls are active.

## Preserved

- Desktop mouse and keyboard controls.
- Existing mobile layout and behavior buttons.
- Scheduler, chunk activation, dense procedural vegetation, and gameplay systems.

# ANTBOUND v0.20.3 — Touch Look

## Added

- Direct camera look by dragging the playable world on touch screens.
- Touch-specific yaw and pitch sensitivity.
- Pointer capture for uninterrupted camera movement.
- A temporary “Drag the world to look” hint on touch devices.

## Fixed

- Touch pointer movement now updates camera yaw and pitch instead of relying on mouse events.
- Camera dragging no longer queues a bite.
- Interrupted or cancelled touch gestures release camera-look state cleanly.

## Preserved

- Bottom-left movement joystick.
- Compact action and expandable behavior controls.
- Desktop mouse and keyboard controls.
- Scheduler, chunks, local engine modules, and dense procedural vegetation.

# ANTBOUND v0.20.2 — Touch Controls

## Added

- Semi-transparent movement joystick positioned at the bottom left.
- Dedicated bite, sprint, and interact buttons.
- Expandable behavior menu for sense mode, camera switching, climbing, audio, and multiplayer.
- Coarse-pointer detection with a `?touch=1` desktop preview option.
- Accessible labels, hold states, and responsive layouts for short and narrow screens.

## Changed

- Touch dragging on the game canvas controls camera look without triggering an accidental bite.
- Mouse capture is requested only for non-touch pointers.
- Minimap placement adjusts upward when touch controls are visible.

## Preserved

- Desktop keyboard and mouse controls.
- Offline Three.js startup repair.
- Fixed-rate scheduler, chunk activation, and dense varied procedural grass.

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

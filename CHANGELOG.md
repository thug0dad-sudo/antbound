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

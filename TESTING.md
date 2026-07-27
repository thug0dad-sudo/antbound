# ANTBOUND v0.23.2 testing

## Static and module checks

1. Validate the inline JavaScript module and `engine/runtime.js`.
2. Serve the extracted release over HTTP.
3. Confirm `/`, `/vendor/three.module.js`, and `/engine/runtime.js` return HTTP 200.

## Yard regression

Open:

`/?touch=1&quality=smoke&autostart=1&selftest=interface`

Expected status:

`v0.23.2 interface self-test passed`

Then verify:

1. Joystick movement and simultaneous one-finger look.
2. Full-stick sprint and clean release.
3. Context actions, pincer icon, and motion fade.
4. Underground exit beacon and tunnel containment.
5. Spider proximity tremors and weather presentation.
6. Settings persistence and pincer edit mode.
7. `ANTBOUND.diagnostics()` reports empty error lists.
8. Grass diagnostics report authored count plus chunk and visible-count data.
9. Grass palette reports a green ratio between 78% and 82%, with nonzero brown blades.

## Bathroom regression

Open:

`/?map=bathroom&touch=1&quality=smoke&autostart=1&selftest=map`

Expected status:

`v0.23.2 map self-test passed`

Then verify:

1. The sink, toilet, tub, walls, vanity, mirror, mat, trash can, paper roll, pipes, puddles, and debris are visible.
2. Rain, lightning, thunder, outdoor wind, flyers, underground areas, antlion, bird, and centipede are absent.
3. Players remain inside the tiled room boundary and cannot walk through fixture collision zones.
4. Sink drips show a falling warning droplet and damage/knock back ants in the impact zone.
5. The toilet ring warns before suction begins; suction is lethal only near the bowl.
6. Puddles add forward slide while moving.
7. Rival ants swarm near the baseboard entrance and the house spider remains active.
8. The map selector returns to the yard cleanly.
9. The player can move immediately from spawn in multiple directions.

## Performance checks

Test Low and Medium on a mobile-class device:

1. Near grass remains visually dense.
2. Mid-distance chunks reduce instance count.
3. Far chunks are hidden.
4. Moving rapidly across chunk boundaries does not stall or pop the simulation.
5. Render Scale and Grass Distance apply immediately.
6. A graphics-context recovery shortens distance without changing the authored grass count.

## Grass and view settings

1. Confirm nearby and distant grass is visibly green/brown in clear weather and storms.
2. Confirm the interface self-test reports an 80% green / 20% brown palette and a color-safe grass material.
3. Disable **Show crosshair**, close settings, and confirm the center marker disappears.
4. Reload and confirm the crosshair preference persists.
5. Select **Third person** and confirm the camera changes immediately.
6. Reload, then switch back to **First person** and confirm both preferences persist.

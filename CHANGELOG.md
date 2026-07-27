# ANTBOUND v0.23.2 — Grass & View Controls

## Fixed

- Replaced the grass lighting material with a color-faithful material so the seeded 80% green / 20% brown palette remains visible in all weather and lighting.
- Removed grass self-shadowing, which caused dense nearby blades to render as black silhouettes.

## Added

- Persistent **Show crosshair** setting.
- Persistent **Camera view** selector for first-person and third-person play.
- Settings menu camera choice applies immediately without restarting.

## Preserved

- Bathroom spawn and collider repair from v0.23.1.
- Dense chunked grass, distance LOD, wind animation, mobile controls, maps, combat, weather, and underground navigation.

---

## v0.23.1 — Spawn & Grass Hotfix

## Fixed

- Moved the bathroom player spawn and warm-pipe colony entrance outside the vanity collision radius.
- Added regression checks ensuring the bathroom spawn and adjacent movement samples are clear.
- Removed dark base-material multiplication that made instanced grass appear black.
- Grass now uses a seeded approximately 80% green / 20% brown palette with varied hue, saturation, and lightness.

# ANTBOUND v0.23.0 — Indoor Frontier

## Added

- A selectable, fully modeled bathroom map with tiled boundaries, sink and vanity, toilet, tub, mirror, bath mat, trash can, toilet paper, plumbing, puddles, and dense floor debris.
- Indoor hazards: timed sink drips, slippery puddles, toilet-flush warning and suction, a house spider, and a rival baseboard colony.
- A persistent settings menu for look, joystick, pincer, motion, rendering, and grass-distance options.
- An explicit control-edit mode that lets touch players drag and save the pincer button position.
- A bathroom-specific automated map regression check.

## Changed

- Yard grass is divided into spatial GPU-instanced chunks with near, mid, and hidden distance levels.
- Grass LOD updates at a low fixed frequency and supports a user-controlled distance multiplier.
- Emergency quality now shortens vegetation distance instead of irreversibly truncating the authored instance count.
- Bathroom mode disables outdoor weather, lightning, rain, wind, flyers, underground tunnels, antlions, birds, and centipedes.

## Fixed

- Underground rendering, player constraints, and worker routes now use the same tunnel and chamber definitions.
- Worker and player containment accounts for the complete ant footprint.
- Tunnel walls extend below the floor seam and have additional radial clearance.

## Preserved

- Simultaneous joystick movement and one-finger touch look.
- Context-sensitive actions and full-stick sprint.
- Spider tremors in the yard.
- Dense varied near-field grass, colony simulation, combat, pheromones, saves, minimap, and diagnostics.

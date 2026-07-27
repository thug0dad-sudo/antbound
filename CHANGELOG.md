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

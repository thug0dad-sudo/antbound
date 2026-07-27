# ANTBOUND v0.23.0 — Indoor Frontier

ANTBOUND now includes two selectable 3D maps: the overgrown yard and a weather-free bathroom frontier.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. Three.js is bundled under `vendor/`, so no CDN is required.

## Maps

- **Overgrown yard:** dense varied grass, underground colony, storms, rival ants, flyers, predators, shelters, pheromones, and colony ecology.
- **Bathroom:** tiled floor and walls, sink and vanity, toilet, tub, mirror, bath mat, trash can, toilet paper, pipes, puddles, hair and debris. Outdoor weather, flyers, underground tunnels, and yard predators are disabled.

Bathroom dangers include timed sink-drip impacts, slippery puddles, a warning-and-suction toilet flush, a house spider, and a rival baseboard colony.

Direct links:

- `?map=yard`
- `?map=bathroom`

## Mobile controls and settings

- Use the bottom-left joystick to move; pushing it to the edge sprints.
- Drag the world with another finger to look while continuing to move.
- Context actions appear near usable objects or enemies.
- Open the gear menu to adjust look sensitivity, invert Y, joystick dead zone, sprint threshold, pincer size and opacity, camera shake, reduced motion, render scale, and grass distance.
- Choose **Move pincer** to drag the bite control to a comfortable position. Its normalized position is saved locally.

## Dense grass performance

Grass remains GPU-instanced and renderer-only, but is now divided into seeded spatial chunks:

- Near chunks render at full density.
- Mid-distance chunks render roughly one third of their instances.
- Far chunks are omitted.
- LOD updates run about four times per second.
- The Grass Distance setting scales the thresholds.
- Emergency performance mode shortens distance rather than permanently destroying the authored density.

Quality budgets remain up to 24,000 / 56,000 / 88,000 / 128,000 blades from Low through Ultra.

## Diagnostics

Run `ANTBOUND.diagnostics()` in the browser console. Errors and disabled subsystem lists should remain empty.

Automated smoke URLs:

- Yard: `?touch=1&quality=smoke&autostart=1&selftest=interface`
- Bathroom: `?map=bathroom&touch=1&quality=smoke&autostart=1&selftest=map`

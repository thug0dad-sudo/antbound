# ANTBOUND v0.22.0

Storm & Tremor makes predator movement tactile, makes the weather visibly dangerous, marks the underground exit clearly, and substantially thickens the yard.

## Live build

https://antbound-thug0dad-3216s-projects.vercel.app

## Run

From the directory containing this folder:

```bash
python3 -m http.server 8080 --directory ANTBOUND-v0.22.0
```

Open `http://localhost:8080`.

Three.js 0.166.1 is included under `vendor/`, so the game does not need CDN access. After entering the yard, click the game canvas once to capture the mouse. Click-and-drag remains available when pointer lock is unavailable.

## Touch controls

- Translucent movement joystick at bottom left
- Push the joystick to its outer edge to sprint automatically
- Drag anywhere outside the controls to look around
- Joystick, touch look, and contextual actions own separate pointer IDs for reliable simultaneous input
- Touch look is tracked at the window level, so another captured finger cannot interrupt it
- Collect, deliver, enter, climb, and bite actions appear only when they are available
- The bite action uses a pincer icon and fades while moving
- The objective, status panels, and map fade while moving
- Stamina appears below 72% and disappears again after fully recovering
- Add `?touch=1` to the URL to preview touch controls on a desktop browser
- Add `?touch=1&quality=smoke&autostart=1&selftest=interface` to run the built-in interface regression check

## Larger yard

- Playable radius increased from 110 to 150 world units
- New outer colony entrances, shelters, paths, food sites, thickets, rocks, and plants
- Predator patrol, flyer spawning, world bounds, and vegetation placement use the expanded radius
- Local minimap is smaller and translucent while covering the nearby active area

## Underground and weather

- The surface exit at the underground hub has a luminous 3D beacon
- A directional guide shows the exit bearing and distance
- The minimap labels the underground exit
- Nearby spider steps produce distance-scaled camera tremors and a restrained edge pulse
- Thunderstorms combine rain, wind, repeated lightning flashes, and thunder audio

## Preserved engine systems

- Fixed-rate subsystem scheduler
- Chunk-based simulation sleeping
- Per-system timing and error telemetry
- Renderer-only, GPU-instanced vegetation
- Seeded grass thickets, paths, and varied blade height, width, lean, and rotation
- Low preset: up to 24,000 grass instances
- Medium preset: up to 56,000 grass instances
- High preset: up to 88,000 grass instances
- Ultra preset: up to 128,000 grass instances

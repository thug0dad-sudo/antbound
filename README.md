# ANTBOUND v0.20.4

Multi-Touch Controls lets mobile players move with the joystick while independently looking, sprinting, or attacking with another finger.

## Live build

https://antbound-thug0dad-3216s-projects.vercel.app

## Run

From the directory containing this folder:

```bash
python3 -m http.server 8080 --directory ANTBOUND-v0.20.4
```

Open `http://localhost:8080`.

Three.js 0.166.1 is included under `vendor/`, so the game does not need CDN access. After entering the yard, click the game canvas once to capture the mouse. Click-and-drag remains available when pointer lock is unavailable.

## Touch controls

- Translucent movement joystick at bottom left
- Bite, run, and use buttons at bottom right
- Expandable behavior menu for sense, camera, climb, sound, and multiplayer
- Drag anywhere outside the controls to look around
- Joystick, camera, and action buttons own separate pointer IDs for reliable simultaneous input
- Touch look is tracked at the window level, so another captured finger cannot interrupt it
- Add `?touch=1` to the URL to preview touch controls on a desktop browser
- Add `?touch=1&autostart=1&selftest=multitouch` to run the built-in two-finger regression check

## Preserved v0.20 systems

- Fixed-rate subsystem scheduler
- Chunk-based simulation sleeping
- Per-system timing and error telemetry
- Renderer-only, GPU-instanced vegetation
- Seeded grass thickets, paths, and varied blade height, width, lean, and rotation
- Medium preset: up to 18,000 grass instances
- High preset: up to 28,000 grass instances
- Ultra preset: up to 40,000 grass instances

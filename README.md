# ANTBOUND v0.20.1

Launch Repair preserves the v0.20 engine refactor and procedural overgrowth while removing its startup dependencies on network access and successful automatic mouse capture.

## Live build

https://antbound-qt9om4n01-thug0dad-3216s-projects.vercel.app

## Run

From the directory containing this folder:

```bash
python3 -m http.server 8080 --directory ANTBOUND-v0.20.1
```

Open `http://localhost:8080`.

Three.js 0.166.1 is included under `vendor/`, so the game does not need CDN access. After entering the yard, click the game canvas once to capture the mouse. Click-and-drag remains available when pointer lock is unavailable.

## Preserved v0.20 systems

- Fixed-rate subsystem scheduler
- Chunk-based simulation sleeping
- Per-system timing and error telemetry
- Renderer-only, GPU-instanced vegetation
- Seeded grass thickets, paths, and varied blade height, width, lean, and rotation
- Medium preset: up to 18,000 grass instances
- High preset: up to 28,000 grass instances
- Ultra preset: up to 40,000 grass instances

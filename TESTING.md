# ANTBOUND v0.20.1 testing

## Launch

```bash
cd ANTBOUND-v0.20.1
python3 -m http.server 8080
```

Open `http://localhost:8080`, select Medium, and choose **Enter the yard**.

## Required checks

1. Confirm `vendor/three.module.js` and `engine/runtime.js` return HTTP 200.
2. Confirm the overlay closes and the frame counter keeps advancing.
3. Click the game canvas and confirm mouse look works; denied pointer lock must not stop the game.
4. Confirm WASD movement, first/third-person switching, minimap rendering, and weather updates.
5. Run `ANTBOUND.diagnostics()` and confirm `errors`, `subsystemErrors`, and `disabledSubsystems` are empty.
6. Run `await ANTBOUND.stressTest(80)` and confirm frame advancement continues.

## Automated validation

The packaged release was tested from a clean extracted directory over local HTTP. Module requests returned HTTP 200, the start overlay closed, and the runtime advanced without uncaught page errors.


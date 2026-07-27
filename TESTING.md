# ANTBOUND v0.20.2 testing

## Launch

```bash
cd ANTBOUND-v0.20.2
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

## Touch checks

Open `http://localhost:8080/?touch=1`.

1. Drag the bottom-left joystick through all directions and confirm movement follows it.
2. Release the joystick and confirm the ant stops.
3. Hold **Run** while moving and confirm sprint activates.
4. Press **Bite** and **Use** and confirm their queued actions fire once.
5. Open **More** and test Sense, View, Climb, Sound, and Link.
6. Drag the game world outside the controls and confirm camera look does not trigger a bite.
7. Verify the controls at 320×568, 768×1024, and desktop widths.

## Automated validation

The packaged release was tested from a clean extracted directory over local HTTP. Module requests returned HTTP 200, the start overlay closed, and the runtime advanced without uncaught page errors.

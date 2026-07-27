# ANTBOUND v0.20.4 testing

## Launch

```bash
cd ANTBOUND-v0.20.4
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
3. Keep the joystick held with one finger and drag the world with a second; confirm movement and camera look continue together.
4. Release only the look finger and confirm joystick movement continues.
5. Start looking again, release only the joystick finger, and confirm camera look continues.
6. Hold **Run** while moving and confirm sprint activates.
7. Press **Bite** and **Use** and confirm their queued actions fire once.
8. Open **More** and test Sense, View, Climb, Sound, and Link.
9. Move the look finger quickly beyond its starting area and confirm camera look remains active.
10. Release or cancel each gesture and confirm only its own control stops.
11. Verify the controls at 320×568, 768×1024, and desktop widths.

## Automated validation

Open `http://localhost:8080/?touch=1&quality=smoke&autostart=1&selftest=multitouch`.

The lower-left runtime status must read `v0.20.4 multi-touch self-test passed`. This check presses the joystick with pointer 701, looks with pointer 702, releases look while preserving movement, then releases movement independently.

The packaged release was also tested from a clean extracted directory over local HTTP. Module requests returned HTTP 200, the start overlay closed, and the runtime advanced without uncaught page errors.

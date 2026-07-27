# ANTBOUND v0.22.0 testing

## Launch

```bash
cd ANTBOUND-v0.22.0
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
3. Push the joystick to its outer edge and confirm sprint activates without a Run button.
4. Keep the joystick held with one finger and drag the world with a second; confirm movement and camera look continue together.
5. Release only the look finger and confirm joystick movement continues.
6. Start looking again, release only the joystick finger, and confirm camera look continues.
7. Approach food, an allied entrance, a climbable object, and an enemy; confirm the correct floating action appears for each.
8. Move continuously and confirm the objective, status panels, and minimap fade.
9. Drain stamina below 72% and confirm its meter appears; allow it to recover fully and confirm it hides.
10. Move the look finger quickly beyond its starting area and confirm camera look remains active.
11. Release or cancel each gesture and confirm only its own control stops.
12. Verify the controls at 320×568, 768×1024, and desktop widths.
13. Enter the underground colony and confirm the green exit beacon, directional guide, distance readout, and minimap EXIT marker all point toward the hub.
14. Approach an enemy and confirm the contextual attack control uses the pincer icon and fades while moving.
15. Move near the spider during patrol and pursuit; confirm footsteps produce subtle distant tremors and strong close tremors without shaking underground.
16. Run `ANTBOUND.triggerStorm()` in the browser console and confirm rain, repeated lightning flashes, and thunder audio.
17. Confirm the selected quality preset reports its intended grass count in `ANTBOUND.diagnostics().density.grass`.

## Automated validation

Open `http://localhost:8080/?touch=1&quality=smoke&autostart=1&selftest=interface`.

The lower-left runtime status must read `v0.22.0 interface self-test passed`. The test covers two-finger movement/look, full-stick sprint, contextual interaction input, low/full stamina visibility, motion HUD state, the underground exit marker, the pincer icon, storm presentation hooks, dense-grass budgets, and the expanded world.

The packaged release was also tested from a clean extracted directory over local HTTP. Module requests returned HTTP 200, the start overlay closed, and the runtime advanced without uncaught page errors.

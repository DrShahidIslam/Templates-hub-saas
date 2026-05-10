# Standard Operating Procedure: VEX V5 Competition Robot Inspection

This document outlines the systematic inspection procedure for the VEX V5 robotics platform. Adhering to these standards ensures mechanical integrity, electrical safety, and compliance with the current VEX Robotics Competition (VRC) manual. All teams must perform these checks prior to competition to prevent mid-match failures and ensure adherence to tournament regulations.

## 1. Mechanical & Structural Integrity
*   **Chassis Stability:** Verify that all structural metal is securely fastened. Tighten all Keps nuts and Nyloc nuts; ensure no loose standoffs or bent C-channels are present.
*   **Fastener Security:** Check all motor screws and joint pivot points. Apply thread-locking fluid if vibration-related loosening is observed.
*   **Clearance & Spacing:** Confirm that the robot fits within the starting size constraints (e.g., 18" cube) and that all moving parts maintain adequate clearance from the field perimeter.
*   **Drivetrain Alignment:** Inspect wheel spacing. Ensure axles are parallel and that no wheels suffer from excessive "wobble" which could indicate a bent axle.

## 2. Electrical & Power Management
*   **Battery Status:** Ensure the V5 Robot Battery is fully charged and securely mounted in a protected area of the chassis. Verify the battery clip is engaged.
*   **Cable Management:** Inspect all Smart Cables for cuts, frayed wires, or bent pins. Ensure all cables are zip-tied to the chassis to prevent snagging during field interaction.
*   **Port Connections:** Confirm all Smart Cables are fully seated in the V5 Brain and motor ports. Check that the "click" is audible or confirmed by a visual inspection.
*   **Radio Positioning:** Ensure the V5 Radio is mounted in a high, unobstructed position, ideally away from large metal masses to prevent signal interference.

## 3. Firmware & Logic Configuration
*   **Brain Firmware:** Connect to the VEXcode V5 software to ensure the Brain firmware is updated to the latest competition version.
*   **Motor Configuration:** Verify that all motors are correctly assigned to their respective ports in the program configuration. 
*   **Controller Pairing:** Pair the controller to the V5 Brain. Verify that both the Robot and Controller icons are green and active on the Brain screen.
*   **Vision/Sensor Calibration:** If using Vision Sensors or Inertial Sensors, perform a recalibration sequence to ensure sensor drift is minimized.

## 4. Safety & Compliance
*   **VEX Labels:** Ensure all motors and the V5 Brain carry the official VEX V5 branding to prevent "illegal motor" flags during inspection.
*   **Safety Bumpers:** Confirm that no exposed sharp metal edges exist. Use electrical tape or rubber end-caps on any cut metal edges.
*   **Switching:** Verify that the Competition Switch port is accessible for referees during pre-match setup.

## Pro Tips & Pitfalls
*   **Pro Tip:** Always carry a "Driver's Kit" containing a spare battery, a pre-programmed backup Brain, and extra Smart Cables. If a mid-match disconnect occurs, swapping the cable is the fastest recovery method.
*   **Pitfall:** Avoid "daisy-chaining" too many motors on a single port. While the V5 system allows for cable management flexibility, excessive length increases electrical resistance and signal noise.
*   **Pitfall:** Never overlook a "slow" motor. If a motor sounds strained during an unloaded test, inspect the internal gears immediately; ignoring a gear-slip leads to catastrophic motor failure during a match.

## Frequently Asked Questions (FAQ)

**Q: How often should I perform a full inspection?**
A: A basic pre-match inspection should be performed before every round. A deep-dive structural inspection should be conducted after every major event or significant chassis modification.

**Q: Can I use non-VEX zip ties or fasteners?**
A: Generally, yes, provided they are commercially available and do not provide a competitive advantage. Always check the current season's VRC manual "Legal Parts" appendix to be certain.

**Q: My Brain is flashing red, what does this indicate?**
A: A flashing red light on the V5 Brain typically indicates a critical firmware error or a power fault. Perform a hard reset by holding the power button for 10 seconds and re-flash the firmware via a USB cable.
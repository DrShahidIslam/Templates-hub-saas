---
title: 'fanuc robot preventive maintenance checklist'
status: 'published'
slug: 'fanuc-robot-preventive-maintenance-checklist'
publishedAt: '2026-05-11T12:06:51.502Z'
---

# Standard Operating Procedure: FANUC Robot Preventive Maintenance (PM)

This Standard Operating Procedure (SOP) outlines the mandatory preventive maintenance schedule for FANUC industrial robots. Regular maintenance is critical to extending the service life of the mechanical unit and controller, ensuring repeatable precision, and preventing unscheduled downtime. All maintenance activities must be performed by authorized personnel who have completed basic FANUC safety and programming training. Always follow Lock-Out/Tag-Out (LOTO) procedures before opening controller cabinets or performing internal mechanical inspections.

## Phase 1: Controller and Electrical Maintenance
*   **Power Down:** Execute a controlled shutdown and apply LOTO to the main power disconnect.
*   **Cabinet Cleaning:** Open the controller cabinet and use an anti-static vacuum or clean, dry compressed air (low pressure) to remove dust from internal components. Ensure fans are not spun at high speeds by air pressure, as this can damage bearings.
*   **Filter Replacement:** Inspect and replace cabinet cooling fan filters. If the environment is oily or dusty, replace filters regardless of their visual condition.
*   **Battery Backup Check:** Check the date on the pulse coder (encoder) batteries. Replace annually or per the specific controller maintenance manual requirements. Ensure the robot is powered ON during replacement to prevent loss of position data.
*   **Cable Integrity:** Inspect all external cabling (J1 through J6) for signs of abrasion, pinching, or heat damage. Ensure all connections to the controller bulkhead are tight.

## Phase 2: Mechanical Unit (Arm) Maintenance
*   **Visual Inspection:** Check for oil leaks at every joint (J1–J6). Inspect the robot base mounting bolts and ensure all anchor bolts are torqued to manufacturer specifications.
*   **Grease Analysis:** Check the color and consistency of grease at relief valves. If the grease appears milky or contains metallic particles, investigate for seal failure or internal gear wear.
*   **Grease Replacement:** Purge the old grease by removing the drain plug and slowly pumping new, recommended FANUC-spec grease into the lubrication nipple. Allow the robot to move through its range of motion for 5–10 minutes to distribute the lubricant.
*   **Hardware Tightness:** Inspect external bolts on the wrist unit and base. Use a calibrated torque wrench for any bolts showing signs of vibration-induced loosening.

## Phase 3: Final Calibration and Verification
*   **Safety System Test:** Verify that the Teach Pendant Emergency Stop button, the deadman switch, and all safety light curtains/gate switches are fully functional.
*   **Zero-Position Check:** Perform a master/zero-position verification to ensure the robot has not experienced "position drift."
*   **Operational Run:** Run the robot through its full range of motion at low speed (T1 mode) to check for unusual noises, vibration, or erratic motor current spikes.

## Pro Tips & Pitfalls
*   **Pro Tip:** Create a digital logbook for every robot serial number. Record the grease lot numbers and hours of operation. This creates a data trail for predictive maintenance analysis.
*   **Pro Tip:** If your environment is high-heat or high-particulate, halve the recommended maintenance interval (e.g., if FANUC recommends 3,840 hours, perform checks every 1,920 hours).
*   **Pitfall:** Over-greasing is just as dangerous as under-greasing. Excessive grease pressure will blow out internal seals and contaminate the internal electronics or the work environment.
*   **Pitfall:** Never use generic lubricants. Using non-FANUC approved grease can cause chemical breakdown of the seals and catastrophic gear failure.

## Frequently Asked Questions (FAQ)

**1. How do I know which grease is required for my specific robot model?**
Refer to the "Maintenance" section of the specific Operator's Manual provided with your robot. FANUC utilizes different greases (e.g., VIGOGREASE RE0, PNEU-ALPHA) depending on the robot series and speed requirements. Never mix grease types.

**2. What happens if I forget to power the controller during battery replacement?**
If the pulse coder batteries fail or are disconnected while the controller is off, the robot will lose its "Mastering" (zero-position). You will be forced to re-master the robot, which is a time-consuming process requiring a mastering fixture or specific program routines.

**3. How often should I perform a full backup of the controller?**
A full image backup should be performed after every significant program change or at least once a month. Keep multiple backups in different physical locations (e.g., local server and an off-site drive) to ensure data recovery after a controller hardware failure.
---
title: 'online ups preventive maintenance checklist'
status: 'published'
slug: 'online-ups-preventive-maintenance-checklist'
publishedAt: '2026-05-11T12:20:15.304Z'
---

# Standard Operating Procedure: Online UPS Preventive Maintenance

## Introduction
This Standard Operating Procedure (SOP) outlines the mandatory preventive maintenance (PM) protocols for online Uninterruptible Power Supply (UPS) systems. Regular maintenance is critical to ensuring the longevity of battery banks, the integrity of power electronics, and the continuous availability of power for mission-critical infrastructure. This procedure must be performed by certified technicians twice annually or as specified by the manufacturer. Adherence to these steps minimizes unplanned downtime and mitigates the risk of catastrophic component failure.

## Preventive Maintenance Checklist

## Phase 1: Physical Inspection and Environment
*   **Ambient Temperature:** Verify that the room temperature remains between 20°C and 25°C. Document the reading.
*   **Ventilation Check:** Inspect air intake and exhaust vents for dust accumulation. Use a vacuum or low-pressure compressed air to clear obstructions.
*   **Physical Integrity:** Inspect the UPS chassis for signs of corrosion, physical damage, or moisture ingress.
*   **Cable Inspection:** Check all power cables, terminal blocks, and communication wires for signs of fraying, loose connections, or heat discoloration.

## Phase 2: Electrical and Logic Testing
*   **Input/Output Measurements:** Measure and record Input Voltage, Input Frequency, Output Voltage, and Output Load Percentage.
*   **Bypass Verification:** Manually trigger the static bypass to ensure the system transfers seamlessly without dropping the load (Perform only during scheduled maintenance windows).
*   **Error Logs:** Download and review the UPS event history log. Investigate any recurring alarms or "critical" status alerts.
*   **Firmware/Software:** Verify that the UPS controller firmware is current per manufacturer recommendations.

## Phase 3: Battery System Maintenance
*   **Visual Inspection:** Examine battery casings for signs of bulging, cracking, or electrolyte leakage.
*   **Connection Security:** Use an insulated torque wrench to ensure all battery inter-tier connections are tight.
*   **Voltage Testing:** Measure the float voltage of each individual battery block. Replace any block that deviates by more than 5% from the nominal string voltage.
*   **Cleaning:** Clean battery tops and terminals with a soft, dry, anti-static cloth to prevent current leakage paths.

## Phase 4: Final Validation and Reporting
*   **System Status:** Return the UPS to normal operation mode and confirm that all status LEDs/Displays indicate "Normal" operation.
*   **Calibration:** Verify that the UPS display output matches the readings of a calibrated True-RMS multimeter.
*   **Reporting:** Log all measurements, identified issues, and corrective actions taken in the site maintenance logbook.

## Pro Tips & Pitfalls
*   **Pro Tip (The Heat Factor):** Every 10°C increase above 25°C reduces battery life by approximately 50%. Keep the environment cool.
*   **Pro Tip (Torque Accuracy):** Always use a calibrated torque wrench. Over-tightening terminals can crack battery posts, while under-tightening creates high-resistance "hot spots."
*   **Pitfall (Live Testing):** Never perform a full battery discharge test (load test) unless the load is fully backed up by a generator or secondary UPS system.
*   **Pitfall (Equipment Hygiene):** Avoid using liquid cleaners on circuit boards; use only non-conductive, electronics-grade contact cleaner if necessary.

## Frequently Asked Questions

**Q: How often should I replace my UPS batteries?**
A: Even with perfect maintenance, VRLA (Valve Regulated Lead-Acid) batteries generally have a service life of 3 to 5 years. Proactive replacement at year 4 is recommended to prevent unexpected failure.

**Q: Can I perform these maintenance checks while the load is online?**
A: Most visual and diagnostic checks can be performed online. However, any procedure involving the transfer to bypass or physical battery maintenance carries a risk; always ensure critical systems have redundant power paths or are scheduled for downtime.

**Q: What is the most common cause of UPS failure?**
A: Thermal runaway in the battery bank caused by poor ventilation or high ambient temperatures, followed by loose terminal connections, which lead to voltage drops and heat-related electronic component failure.
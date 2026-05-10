# Standard Operating Procedure: Chiller Plant Operations

This Standard Operating Procedure (SOP) outlines the mandatory protocols for the safe, efficient, and reliable operation of the chiller plant. Adherence to these procedures is critical to ensure optimal thermal performance, extend equipment lifespan, and minimize operational downtime. Operators must follow these guidelines strictly during daily rounds, startup, shutdown, and emergency intervention to maintain facility climate control standards and energy efficiency benchmarks.

## 1. Pre-Operational Inspection Checklist
*   **Visual Inspection:** Verify no visible leaks, abnormal vibrations, or loose connections on piping and electrical conduits.
*   **Fluid Levels:** Check condenser and chilled water loop pressures; ensure expansion tanks are at the required PSI.
*   **Valve Alignment:** Confirm that chilled water and condenser water isolation valves are in the correct "Open" or "Closed" position according to the current operation mode.
*   **Strainer Status:** Check differential pressure gauges across strainers; clean if the pressure drop exceeds the manufacturer’s specified threshold.
*   **Chemical Treatment:** Verify the automatic chemical dosing system is active and the conductivity/pH levels are within the approved range.

## 2. Startup Procedure
*   **Step 1: Condenser Water Loop:** Activate the cooling tower fans and condenser water pumps. Ensure water flow is established before proceeding.
*   **Step 2: Chilled Water Loop:** Activate the primary chilled water pumps. Confirm flow switches are satisfied and there is a steady flow in the loop.
*   **Step 3: Power Supply:** Energize the chiller control panel. Clear any existing alarms or fault codes before attempting a start.
*   **Step 4: Chiller Activation:** Initiate the startup sequence via the Human Machine Interface (HMI). Observe the transition from "Standby" to "Starting" to "Running."
*   **Step 5: Stabilization:** Allow the chiller to reach the target "Chilled Water Supply Temperature" (CWST) and monitor the motor amperage to ensure it does not exceed the Full Load Amps (FLA).

## 3. Operational Monitoring & Shutdown
*   **Monitoring:** Record readings (suction/discharge pressure, leaving/entering water temps, oil pressure, and motor current) every 4 hours.
*   **Shutdown Initiation:** Command the chiller to "Stop" via the HMI and allow the internal automated shutdown sequence (pump-down/cool-down) to complete.
*   **Post-Shutdown:** De-energize pumps only after the chiller has fully entered the "Off" state. Ensure the cooling tower fans are powered down once the condenser water loop has stabilized.

## 4. Pro Tips & Pitfalls
*   **Pro Tip (Log Accuracy):** Use a digital logbook or IoT monitoring system to track trends. Minor, slow-building deviations in approach temperatures are the earliest indicators of heat exchanger fouling.
*   **Pro Tip (Surge Awareness):** Keep a close eye on the "surge line" for centrifugal chillers during low-load conditions. Ensure bypass valves are functional to prevent damage.
*   **Pitfall (Flow Starvation):** Never start a chiller without confirmed water flow. Running a chiller with stagnant water will result in a "Low Flow" cutout or, in extreme cases, freezing of the evaporator tubes.
*   **Pitfall (Rushing Sequences):** Avoid manual overrides of safety timers. These timers exist to protect compressor windings from frequent cycling and high-pressure restarts.

## 5. Frequently Asked Questions (FAQ)

**Q: What should I do if I see a "High Head Pressure" alarm?**
A: Immediately inspect the cooling tower water temperature and condenser water flow. Often, this is caused by a dirty cooling tower strainer, a failed tower fan, or scaled condenser tubes. Do not reset the alarm until the cause is identified and corrected.

**Q: How often should I perform an oil analysis?**
A: Oil analysis should be performed at least annually or every 2,000 operational hours. This detects internal mechanical wear or refrigerant contamination before a catastrophic compressor failure occurs.

**Q: What is the significance of the "Approach Temperature"?**
A: The approach temperature (the difference between the refrigerant temperature and the leaving water temperature) is the primary metric for heat exchanger health. An increasing approach temperature usually indicates fouling or scale buildup, necessitating a tube cleaning.
# Standard Operating Procedure: Daily UPS Inspection and Maintenance

This Standard Operating Procedure (SOP) outlines the mandatory daily protocols for inspecting and maintaining Uninterruptible Power Supply (UPS) units. Reliable power infrastructure is the backbone of operational continuity; therefore, this checklist is designed to detect early warning signs of degradation, environmental hazards, or component failure. All technicians are required to complete this log daily to ensure maximum uptime and safety for mission-critical hardware.

## I. Physical and Environmental Inspection

*   **Clearance & Ventilation:** Ensure that all air intake and exhaust vents are free of dust, debris, or obstructions. Maintain the manufacturer-recommended 12-inch clearance on all sides.
*   **Ambient Temperature:** Verify that the server room or UPS closet temperature remains between 68°F and 77°F (20°C–25°C). High heat significantly accelerates battery degradation.
*   **Humidity Check:** Confirm that relative humidity remains between 20% and 80% (non-condensing) to prevent internal electrical arcing or corrosion.
*   **Physical Integrity:** Inspect the outer chassis for signs of dents, spills, or evidence of tampering.

## II. Control Panel and Status Indicators

*   **LCD/LED Status:** Review the front panel display. Confirm that the status LED is green (Normal Mode).
*   **Alarm Status:** Check for any active warning lights or audible alarms. If an alarm is active, document the specific error code immediately.
*   **Input/Output Voltage:** Verify that the input voltage is within the expected range (e.g., 110V–120V or 220V–240V, depending on site specs) and that output voltage is stable.
*   **Load Percentage:** Monitor the current load percentage. Ensure the unit is not operating consistently above 80% capacity, which risks overload during a power event.

## III. Battery and Electrical Integrity

*   **Battery Health Status:** Check the UPS diagnostic software or the physical interface for "Battery Health" or "Replace Battery" indicators.
*   **Cable Connections:** Visually inspect input and output power cords. Ensure all plugs are firmly seated and that there is no fraying or signs of heat-induced discoloration on cable jackets.
*   **Bypass Mode Verification:** Ensure the unit is not accidentally switched into "Bypass" or "Maintenance" mode, which would leave connected equipment vulnerable to power outages.

## IV. Daily Reporting Log

*   **Data Entry:** Record the date, time, load percentage, and technician initials in the site maintenance logbook or digital dashboard.
*   **Escalation:** If any abnormal readings are observed, trigger the "Emergency Maintenance Protocol" immediately by notifying the Facilities Manager.

## Pro Tips & Pitfalls

*   **Pitfall - The "Hidden" Dust:** Dust build-up inside the unit can act as an insulator, trapping heat and eventually causing thermal shutdown. Use compressed air (if allowed by safety policy) to clean vents monthly.
*   **Pro Tip - Listen Carefully:** A healthy UPS usually emits a low, consistent hum. If you notice a high-pitched whine or a rhythmic clicking, internal components like capacitors or cooling fans may be failing.
*   **Pro Tip - Keep a Battery Map:** If managing a rack of multiple UPS units, label each one and document their install dates. Batteries typically lose efficiency after 3–5 years regardless of daily maintenance.
*   **Pitfall - Ignoring "Small" Alarms:** Never silence an alarm without investigating the root cause. A "low battery" warning might seem minor, but it effectively renders your protection null.

## FAQ

**1. What should I do if the UPS is chirping but showing a "Normal" green light?**
A chirping alarm usually indicates a specific event (e.g., a momentary power sag or an internal fault) that requires acknowledgment. Check the event log on the UPS interface to see the history of the alert before clearing it.

**2. How often should I perform a formal load test?**
While the daily check is a visual inspection, a formal load test (self-test) should be performed quarterly. Consult your specific UPS manual, as performing a self-test too frequently can actually decrease the lifespan of the batteries.

**3. If the UPS is over 80% capacity, does it need immediate replacement?**
Not necessarily, but it is a "High Risk" state. You should initiate a project to load-balance your equipment across multiple UPS units or upgrade to a higher-capacity model to ensure the UPS can handle potential inrush current during a power recovery event.
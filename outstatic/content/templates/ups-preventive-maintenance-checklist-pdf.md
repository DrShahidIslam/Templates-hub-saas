---
title: 'ups preventive maintenance checklist pdf'
status: 'published'
slug: 'ups-preventive-maintenance-checklist-pdf'
publishedAt: '2026-05-11T12:17:01.799Z'
---

# Standard Operating Procedure: Uninterruptible Power Supply (UPS) Preventive Maintenance

This Standard Operating Procedure (SOP) outlines the mandatory technical requirements and safety protocols for conducting preventive maintenance (PM) on Uninterruptible Power Supply (UPS) systems. Regular PM is critical to ensure high availability, prevent unexpected downtime, and extend the operational lifespan of power electronic components and energy storage systems. This procedure should be performed by qualified personnel or certified technicians following the manufacturer’s specific service manuals and all applicable electrical safety standards (e.g., NFPA 70E).

## 1. Safety and Preparation
*   **Safety Gear:** Ensure technicians are equipped with appropriate Personal Protective Equipment (PPE), including arc-flash-rated clothing, insulated gloves, and safety glasses.
*   **Documentation:** Have the manufacturer’s service manual, site electrical schematics, and the last PM report readily available.
*   **Load Verification:** Ensure the load is stable. If the system must be moved to bypass mode, confirm the external maintenance bypass is functioning and that the critical load is unaffected.
*   **Calibration:** Verify that all test equipment (multimeters, infrared cameras, torque wrenches) is calibrated and within its certification date.

## 2. Visual and Environmental Inspection
*   **Environmental Check:** Confirm the room temperature and humidity remain within manufacturer-specified operating ranges.
*   **Cleanliness:** Inspect air intake and exhaust vents for dust accumulation. Vacuum or wipe down exterior surfaces.
*   **Air Filters:** Replace or clean internal/external air filters to ensure optimal airflow and heat dissipation.
*   **Physical Integrity:** Inspect the chassis for signs of corrosion, water damage, or structural distortion.
*   **Component Visuals:** Check for signs of overheating, such as charred wires, discoloration on circuit boards, or leaking capacitors.

## 3. Electrical and Mechanical Checks
*   **Torque Verification:** Using a calibrated torque wrench, check all electrical connections (input, output, battery, and grounding) for tightness. Follow manufacturer torque specifications exactly.
*   **Infrared Scanning:** Perform a thermal scan of all terminal blocks, circuit breakers, and busbars while the unit is under load to identify hot spots indicative of high-resistance connections.
*   **Fan Operation:** Verify that all cooling fans are operational and free of unusual noise or vibration.
*   **Control Panel:** Review the LCD logs for any active or historical alarm codes. Clear nuisance alarms only after proper investigation.

## 4. Battery System Maintenance (Critical)
*   **Voltage Readings:** Measure the float voltage of each individual battery block/cell and compare it to the manufacturer’s baseline.
*   **Impedance/Conductance Testing:** Perform a capacity or conductance test to identify weak or failing cells. Replace any battery that tests below 80% of its rated capacity.
*   **Terminal Inspection:** Inspect for terminal corrosion or swelling (sulfation). Clean terminals with a neutralizer if necessary.
*   **Connections:** Ensure all inter-battery jumpers are secure and free of oxidation.

## 5. Functional Testing and Final Reporting
*   **System Transfer:** Perform a controlled transfer to battery mode (if permissible by load constraints) to verify the inverter picks up the load seamlessly.
*   **Bypass Testing:** Ensure the static switch and maintenance bypass switch operate according to the control logic.
*   **Final Data Logging:** Document all findings, including battery voltages, environmental readings, and any parts replaced.
*   **Reporting:** Generate a formal PM report for site management to sign off on, ensuring all findings are logged in the facility maintenance management system (CMMS).

## Pro Tips & Pitfalls
*   **Pro Tip:** Always record the "As-Found" and "As-Left" values for all battery voltages. This historical data is the best predictor of impending battery failure.
*   **Pro Tip:** Use a thermal camera before opening the panels to catch loose connections that might move or settle when you touch them.
*   **Pitfall:** Never ignore "nuisance" alarms. A recurring minor alarm is often the precursor to a major power failure.
*   **Pitfall:** Do not overtighten battery terminals, as this can crack the post seals and lead to electrolyte leaks. Always use the specified torque setting.

## Frequently Asked Questions (FAQ)

**Q: How often should preventive maintenance be performed?**
A: Industry standards generally recommend a full preventive maintenance inspection at least twice per year (every six months). High-criticality sites or environments with poor air quality may require quarterly inspections.

**Q: Can I perform PM while the load is running on the UPS?**
A: Basic visual inspections and thermal scans can be performed while the unit is online. However, any work involving battery replacement or terminal tightening requires the unit to be moved to static or maintenance bypass mode to ensure safety.

**Q: What is the most common cause of UPS failure?**
A: Battery failure is the leading cause of UPS downtime. Batteries are chemical components that degrade over time regardless of how well they are maintained; proactive testing and timely replacement are essential to system reliability.
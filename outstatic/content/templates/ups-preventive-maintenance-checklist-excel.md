---
title: 'ups preventive maintenance checklist excel'
status: 'published'
slug: 'ups-preventive-maintenance-checklist-excel'
publishedAt: '2026-05-11T12:20:34.594Z'
---

# Standard Operating Procedure: UPS Preventive Maintenance (PM) Management

This Standard Operating Procedure (SOP) outlines the mandatory protocols for performing and documenting Uninterruptible Power Supply (UPS) preventive maintenance. The objective is to ensure power reliability, extend the lifecycle of critical power infrastructure, and maintain accurate compliance records via the centralized UPS Preventive Maintenance Checklist Excel workbook. Regular PM is essential to identify battery degradation, cooling deficiencies, and electrical degradation before they result in load loss.

## Phase 1: Preparation and Safety Protocols
*   **Safety Briefing:** Review the site-specific Arc Flash analysis. Verify all PPE (Personal Protective Equipment) requirements, including rated insulated tools, arc-rated clothing, and eye protection.
*   **Documentation Access:** Open the master 'UPS Preventive Maintenance Checklist Excel' file. Save a version-controlled copy (e.g., `SiteName_UPS_PM_YYYYMMDD.xlsx`).
*   **Notification:** Notify stakeholders of the maintenance window, particularly if the UPS must be moved to bypass mode.
*   **Tool Calibration:** Verify that multimeters and thermal imaging cameras are within their current calibration cycle.

## Phase 2: Visual and Environmental Inspection
*   **Cabinet Exterior:** Inspect for external dust buildup, dents, or signs of liquid ingress.
*   **Thermal Environment:** Record ambient temperature and humidity levels; ensure they remain within the manufacturer's specified range (typically 20°C–25°C).
*   **Ventilation:** Check air intake vents for blockages; verify fans are operational and clear of debris.
*   **Warning Indicators:** Note any active alarms or status codes on the UPS display panel and record them in the Excel log.

## Phase 3: Battery System Evaluation
*   **Battery Cabinet/Rack:** Inspect for signs of corrosion on terminals, leaking electrolyte, or deformed battery casings (swelling).
*   **Voltage Testing:** Measure individual battery block voltages and compare them against the manufacturer’s baseline.
*   **Connection Integrity:** Check torque values on battery terminal connections; re-torque according to manufacturer specifications if required.
*   **Impedance/Conductance:** Perform a conductance test on each battery block to identify internal degradation.

## Phase 4: Electrical and Functional Testing
*   **Bypass Verification:** Successfully perform a manual transfer to Static Bypass and back to Inverter mode (if the load environment allows).
*   **Input/Output Readings:** Record Input Voltage/Current (all phases) and Output Voltage/Current (all phases) in the Excel sheet.
*   **Frequency Check:** Verify output frequency stability.
*   **Thermal Scan:** Use an infrared camera to inspect cable terminations, breakers, and contactors for "hot spots" (indicative of loose connections).

## Phase 5: Closing and Reporting
*   **Data Entry:** Ensure all fields in the Excel workbook are populated. Calculate the 'Overall Health Score' based on the weighted formulas in the sheet.
*   **Alarm Reset:** Clear history logs after verification that all issues identified during the PM have been addressed.
*   **Sign-off:** The technician must sign the Excel report, and a supervisor must perform a secondary review before filing the document in the digital asset repository.

## Pro Tips & Pitfalls
*   **Pro Tip:** Automate your Excel file by using Conditional Formatting. Set cells to turn red if battery voltage deviates more than 5% from the nominal value.
*   **Pro Tip:** Always document the "Before" and "After" of every measurement. Trending data is more valuable for predictive maintenance than a single point-in-time check.
*   **Pitfall:** Over-tightening battery terminals. Always use a calibrated torque wrench; exceeding the torque limit can crack battery posts and cause leaks.
*   **Pitfall:** Neglecting firmware updates. Always check the manufacturer's portal for firmware patches during the maintenance cycle to fix known bugs in the logic controller.

## Frequently Asked Questions (FAQ)

**Q: How often should the UPS Preventive Maintenance Checklist be completed?**
A: Standard industry practice is semi-annual (every 6 months) for standard environments, and quarterly for environments with high heat, dust, or heavy load fluctuations.

**Q: What should I do if the Excel checklist identifies a "Critical" battery failure?**
A: If a cell is identified as failed or significantly degraded, document the serial number, isolate the battery string if possible, and trigger an emergency procurement request for replacement modules immediately.

**Q: Why is it necessary to perform a thermal scan?**
A: Many electrical failures start as high-resistance connections that generate heat. A thermal scan is a non-invasive way to detect these "invisible" issues before they cause an electrical fire or total system failure.
# Standard Operating Procedure: Temperature Mapping for Controlled Storage Environments

## 1. Introduction
Temperature mapping is a critical compliance activity designed to verify that storage areas (warehouses, cold rooms, refrigerators, or transport vehicles) maintain a consistent environment within specified thermal limits. This procedure ensures the integrity of temperature-sensitive products, such as pharmaceuticals, biologics, or perishable goods, by identifying "hot spots," "cold spots," and the impact of environmental variables such as door openings, HVAC cycles, and equipment loading. This SOP adheres to GxP standards and regulatory requirements for environmental control.

---

## 2. Temperature Mapping Checklist

## Phase 1: Planning and Preparation
*   [ ] **Define Objectives:** Clearly document the purpose of the mapping (e.g., initial validation, seasonal requalification, or post-modification).
*   [ ] **Specify Acceptance Criteria:** Define the required temperature range (e.g., 2°C to 8°C) and the allowable duration of excursions.
*   [ ] **Select Monitoring Equipment:** Ensure all data loggers are NIST-traceable and currently calibrated.
*   [ ] **Develop the Mapping Protocol:** Create a document specifying the number of sensors, their placement strategy based on 3D dimensions, and the duration of the study (typically 7 consecutive days).
*   [ ] **Establish Load Condition:** Define the "worst-case" scenario (e.g., empty room vs. fully loaded, or typical operational state).

## Phase 2: Sensor Placement and Deployment
*   [ ] **Mapping Grid Layout:** Place sensors in a grid pattern covering all vertical and horizontal planes.
*   [ ] **Identify Critical Points:** Ensure sensors are placed near potential risks: air supply vents, returns, doors, loading docks, and adjacent to existing permanent monitoring probes.
*   [ ] **Securing Sensors:** Use mounting brackets or zip ties to ensure sensors remain in fixed positions throughout the study.
*   [ ] **Initialization:** Sync all loggers to a single reference time (NTP/Atomic clock).
*   [ ] **Start Recording:** Begin data logging after allowing sensors to acclimate to ambient temperature.

## Phase 3: Data Collection and Environmental Monitoring
*   [ ] **Simulate Operations:** Perform documented door openings, power failure simulations (if required), and HVAC cycle observations.
*   [ ] **Environmental Logging:** Record ambient external temperature and humidity for the duration of the study.
*   [ ] **Interim Check:** Perform a mid-study check to ensure no loggers have failed or been displaced by personnel.

## Phase 4: Data Analysis and Reporting
*   [ ] **Download and Clean Data:** Extract data from all loggers into a centralized software system. Remove periods of pre-deployment or post-retrieval data.
*   [ ] **Statistical Analysis:** Calculate the Mean Kinetic Temperature (MKT), minimums, maximums, and standard deviations for each sensor location.
*   [ ] **Identify Hot/Cold Spots:** Map the temperature extremes on a floor plan diagram.
*   [ ] **Final Reporting:** Author the formal Temperature Mapping Report including methodology, data summary, excursion analysis, and conclusion of validation.

---

## 3. Pro Tips & Pitfalls

*   **Pro Tip: Redundancy is Key.** Always deploy 10-15% more sensors than the minimum requirement to account for potential logger failure during the study.
*   **Pro Tip: The "Door" Factor.** Most excursions occur due to human behavior. Ensure your mapping study includes observations during peak traffic hours to reflect true facility performance.
*   **Pitfall: Improper Calibration.** Using loggers that have expired calibration certificates is the most common reason for regulatory audit failure. Always verify certificates before deployment.
*   **Pitfall: Ignoring Airflow.** Do not place sensors directly in the path of cold air discharge (the "blast zone") unless you are specifically testing the unit's ability to recover from a thermal spike, as this will skew your data toward the extreme.

---

## 4. FAQ

**Q: How often should temperature mapping be conducted?**
A: Initial mapping is required upon commissioning. Re-mapping is typically performed annually (for seasonal variations) or following significant facility changes, such as modifying HVAC systems or changing shelving layouts.

**Q: What is MKT, and why is it used?**
A: Mean Kinetic Temperature (MKT) is a single derived temperature that accounts for the effects of temperature fluctuations over time. It is a more accurate representation of the thermal stress experienced by a product than a simple arithmetic average.

**Q: What should I do if a sensor shows an excursion during mapping?**
A: An excursion is not automatically a failure. You must investigate whether the excursion was due to a human action (e.g., a door left open too long), a mechanical fault, or an sensor anomaly. The Final Report must document the root cause and the corrective/preventative actions (CAPA) taken to rectify the issue before the area is cleared for GxP operations.
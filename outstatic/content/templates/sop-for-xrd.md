# Standard Operating Procedure: X-Ray Diffraction (XRD) Analysis

This Standard Operating Procedure (SOP) outlines the mandatory safety protocols, operational steps, and maintenance requirements for the operation of the X-Ray Diffraction (XRD) system. XRD is a powerful analytical technique used to determine the crystallographic structure of materials. Given that this equipment utilizes high-voltage X-ray radiation, strict adherence to radiation safety guidelines and instrument-specific protocols is required to ensure operator safety and data integrity.

## Phase 1: Pre-Operational Safety & Preparation

*   Verify the status of the radiation warning lights (ensure they are functional).
*   Check that the water-cooling system is active and operating within the manufacturer’s specified temperature and flow rate range.
*   Ensure all shielding and hutch interlocks are fully engaged and undamaged.
*   Inspect the sample holder for debris; clean with isopropyl alcohol and a lint-free wipe if necessary.
*   Confirm the presence of a valid, dosimeter badge for the operator.

## Phase 2: Sample Preparation and Loading

*   **Powder Samples:** Ensure the sample is ground into a fine, homogeneous powder (typically < 45 μm). Pack the sample firmly into the holder, ensuring the surface is perfectly flush with the reference plane.
*   **Solid/Thin Film Samples:** Mount the sample securely using vacuum grease or adhesive tape, ensuring the surface is centered and flat to prevent height displacement errors.
*   Open the hutch/shutter according to the software interface prompts.
*   Place the sample holder onto the goniometer stage and verify that it is seated correctly.
*   Close the hutch doors and ensure the safety interlock status is "Ready."

## Phase 3: Software Configuration and Data Acquisition

*   Initialize the instrument control software and verify the current X-ray tube settings (typically 40kV and 40mA, or as specified for your specific tube material).
*   Define the measurement parameters: 
    *   Start/End angle (2-theta).
    *   Step size (degrees).
    *   Time per step (seconds).
*   Perform an internal calibration or "Zero-Point Check" if the instrument has been moved or maintenance was performed.
*   Input project details, sample identification, and operator name into the data log.
*   Initiate the scan and monitor the initial counts to ensure the signal-to-noise ratio is acceptable.

## Phase 4: Post-Run Cleanup and Data Export

*   Once the scan is complete, wait for the X-ray shutter to close automatically.
*   Open the hutch and carefully remove the sample.
*   Clean the sample stage of any loose powder or debris using a vacuum or compressed air (do not use compressed air if the sample is toxic).
*   Export the raw data to the designated secure network drive or external storage.
*   Log the run time and any unusual instrument behavior in the equipment usage logbook.

## Pro Tips & Pitfalls

*   **Pitfall - Sample Displacement:** The most common source of error in XRD is sample height displacement. Even a fraction of a millimeter difference can cause significant peak shifts. Always ensure the sample surface is flush.
*   **Pro Tip - Preferred Orientation:** If your sample consists of needle-like or plate-like crystals, it may exhibit "preferred orientation," which artificially enhances certain peaks. Use a side-loading technique or rotate the sample during the scan to mitigate this.
*   **Pro Tip - Maintenance:** Never ignore a "Vacuum Error" or "Cooling Flow" alert. XRD systems are highly sensitive to thermal fluctuations; allow the system to reach thermal equilibrium for 30 minutes after power-on before starting critical data collection.

## Frequently Asked Questions (FAQ)

**Q: What should I do if the radiation alarm triggers during a scan?**
A: Immediately initiate the emergency stop (E-stop), evacuate the area, and contact the Radiation Safety Officer (RSO) or facility manager. Do not re-enter the room until cleared by safety personnel.

**Q: Can I analyze wet or organic samples in the XRD?**
A: Generally, no. Volatile organic solvents can damage the detector and contaminate the vacuum chamber. Samples must be completely dry. Consult the facility manager if you suspect your sample might off-gas.

**Q: How often should the instrument be calibrated?**
A: A routine "Zero-Point" verification should be performed weekly. A full alignment using a standard reference material (like NIST LaB6 or Si powder) is recommended quarterly or after any major component maintenance.
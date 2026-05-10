# Standard Operating Procedure: Inductively Coupled Plasma Mass Spectrometry (ICP-MS) Analysis

This Standard Operating Procedure (SOP) outlines the mandatory protocols for the safe and efficient operation of the Inductively Coupled Plasma Mass Spectrometry (ICP-MS) system. Adherence to these guidelines is critical to ensure analytical precision, instrument longevity, and user safety. This procedure covers daily start-up, sample introduction, data acquisition, and system shutdown. Failure to follow these steps may result in detector damage, sample cross-contamination, or compromised data integrity.

## Phase 1: Pre-Run Inspection and Start-Up

*   **Gas Supply Verification:** Check argon tank pressures. Ensure the main supply is at least 500 psi. Ensure the collision/reaction gas (e.g., Helium or Hydrogen) is sufficient for the intended run.
*   **Coolant and Chiller Check:** Confirm the recirculating chiller is set to the manufacturer's specified temperature (typically 18°C–20°C) and that coolant levels are adequate.
*   **Vacuum System:** Verify that the vacuum pressure in the interface and analyzer regions is within the acceptable operating range (typically < 10⁻⁵ Torr for the analyzer).
*   **Peristaltic Pump:** Inspect pump tubing for signs of wear, flattening, or cracking. Replace if necessary. Ensure the tension bar is locked into place.
*   **Drain Maintenance:** Empty the waste carboy and ensure the drain line is submerged in a small amount of DI water to maintain a proper liquid seal.

## Phase 2: System Calibration and Tuning

*   **Ignition:** Initiate plasma ignition via the instrument software. Allow for a minimum 30–45 minute thermal stabilization period before proceeding to tuning.
*   **Performance Check:** Run the manufacturer’s automated performance report (or daily tune).
*   **Mass Calibration:** Verify mass axis accuracy using the tuning solution (containing low-mass and high-mass isotopes, e.g., Li, Y, Ce, Tl, Co).
*   **Sensitivity and Resolution:** Ensure counts per second (CPS) for target elements meet the minimum threshold. Check peak width at half-maximum (FWHM) to ensure resolution is within 0.7–0.9 amu.
*   **Oxide and Doubly Charged Ratios:** Confirm that CeO+/Ce+ and Ba++/Ba+ ratios are below the specified limits (typically < 3% and < 3%, respectively) to minimize spectral interferences.

## Phase 3: Sample Analysis

*   **Sample Preparation:** Ensure all samples are acidified (typically 2% HNO₃) and filtered to <0.45 µm to prevent nebulizer clogging.
*   **Sequence Loading:** Define the sample list in the software, including blanks, calibration standards, Quality Control (QC) check standards, and samples.
*   **Rinsing:** Verify that the rinse solution (usually 2-5% HNO₃) is sufficient for the entire run. Ensure the rinse pump speed is sufficient to clear the sample loop between injections.
*   **Data Acquisition:** Initiate the sequence. Monitor the first few samples for internal standard stability (typically 80%–120% recovery).
*   **QC Monitoring:** Observe periodic QC checks. If a QC sample falls outside ±10% of the true value, pause the sequence, re-calibrate, and re-run affected samples.

## Phase 4: Shutdown and Maintenance

*   **System Rinse:** Aspirate 2-5% HNO₃ for at least 10 minutes, followed by DI water for 5 minutes to flush the introduction system.
*   **Plasma Shutdown:** Exit the plasma according to software protocol. Allow the vacuum system to remain active unless a major maintenance intervention is planned.
*   **Waste Disposal:** Dispose of all liquid waste in accordance with hazardous waste regulations.
*   **Logbook Entry:** Record the instrument status, total plasma hours, and any issues encountered during the run in the laboratory logbook.

## Pro Tips & Pitfalls

*   **Pitfall - The "Matrix Effect":** High-total-dissolved-solids (TDS) samples are the primary cause of cone deposition. Dilute samples to <0.2% TDS whenever possible.
*   **Pro Tip - Internal Standards:** Always use internal standards (e.g., Sc, Ge, In, Tb, Bi) to correct for physical interferences and signal drift caused by matrix variations.
*   **Pitfall - Nebulizer Clogging:** If the signal is unstable or baseline noise is high, inspect the nebulizer tip. Do not use metal wires to clean it; use a plastic fiber or back-flush with a syringe.
*   **Pro Tip - Cone Care:** Handle sampler and skimmer cones with powder-free nitrile gloves. Even slight finger oils can cause signal drift or carbon deposition on the orifices.

## FAQ

**Q1: How do I know if my plasma is unstable?**
A: Unstable plasma is usually indicated by fluctuating internal standard recoveries (outside 80-120%), erratic base-line signal, or physical "flickering" of the plasma flame observed through the viewing window.

**Q2: Can I run samples with hydrofluoric acid (HF)?**
A: Only if you have an HF-resistant sample introduction kit (inert nebulizer and spray chamber). Standard glass components will be etched and permanently damaged by HF.

**Q3: What should I do if the vacuum system fails?**
A: Do not attempt to reset the vacuum manually. Immediately shut down the plasma to prevent detector damage, notify the lead instrument scientist, and consult the manufacturer’s error log for fault codes.
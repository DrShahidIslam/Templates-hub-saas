# Standard Operating Procedure: Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES)

This Standard Operating Procedure (SOP) provides the mandatory guidelines for the safe, accurate, and efficient operation of the Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES) instrument. Adherence to these protocols ensures analytical precision, maintains instrument longevity, and upholds laboratory safety standards. All users must be trained and authorized prior to operating this equipment; failure to follow these procedures may result in damage to the torch, nebulizer, or optical system.

## 1. Pre-Operational Inspection
*   **Gas Supplies:** Confirm Ar (Argon) tank pressure is above 500 psi. Check purge gas (if applicable).
*   **Chiller Status:** Ensure the recirculating chiller is powered on, set to the manufacturer's recommended temperature (typically 20°C), and water levels are adequate.
*   **Waste Management:** Empty the waste carboy and ensure the waste line is securely seated in the container; never allow the waste line to be submerged in liquid.
*   **Peristaltic Pump:** Inspect pump tubing for signs of wear, flattening, or cracks. Ensure tension clips are locked in the "closed" position.

## 2. Instrument Initialization and Plasma Ignition
*   **Software Launch:** Log into the control software and initialize the instrument communication link.
*   **Torch Alignment:** Ensure the torch, nebulizer, and spray chamber are clean and correctly seated.
*   **Plasma Ignition:** 
    *   Initiate the "Plasma On" sequence via software.
    *   Monitor the ignition process; ensure the plasma appears as a stable, centered, bright blue flame.
    *   Allow the plasma to stabilize for a minimum of 15–20 minutes before performing any calibrations or sample analysis.

## 3. Calibration and Method Setup
*   **Method Selection:** Load the appropriate method file for the matrix and elements of interest.
*   **Calibration Standards:** Prepare fresh calibration standards according to the target concentration range.
*   **Blank Analysis:** Run the calibration blank to verify a clean baseline.
*   **Calibration Run:** Analyze standards from lowest to highest concentration. Ensure the correlation coefficient (R²) for each analyte is >0.995.

## 4. Sample Analysis
*   **Sample Preparation:** Ensure all samples are filtered (if necessary) and acidified with the correct matrix (typically 2–5% HNO₃).
*   **Autosampler Loading:** Place samples in the rack according to the software sequence table.
*   **Sequence Execution:** Double-check the sequence for correct dilution factors and internal standard assignments.
*   **Data Review:** Monitor the internal standard recoveries in real-time; deviations >10% of the initial calibration standard indicate potential nebulization or matrix issues.

## 5. Shutdown and Cleanup
*   **Rinse Cycle:** Aspirate 5% HNO₃ for 5 minutes, followed by DI water for 5 minutes to clear the nebulizer and torch.
*   **Plasma Extinction:** Execute the "Plasma Off" command in the software.
*   **Peristaltic Pump:** Release the tension clips on the peristaltic pump tubing to prevent deformation.
*   **Shutdown:** Close the software, power down the instrument (if daily shutdown is required), and verify the chiller is in standby mode.

## Pro Tips & Pitfalls
*   **Pitfall - Salt Buildup:** High dissolved solids samples can clog the nebulizer. Always use a high-solids nebulizer and rinse thoroughly between runs.
*   **Pro Tip - Internal Standards:** Always use an internal standard (e.g., Yttrium or Scandium) to correct for physical interferences and plasma fluctuations.
*   **Pitfall - Tubing Fatigue:** If the peristaltic pump tubing is too tight, it will degrade faster; if too loose, the sample flow will be unstable. Replace tubing every 48 hours of run time.
*   **Pro Tip - Daily Checks:** Record the background intensity of a blank at the start of every shift; a sudden jump in baseline intensity is the earliest indicator of torch degradation.

## Frequently Asked Questions (FAQ)

**Q: What should I do if the plasma fails to ignite?**
A: First, check that the gas lines are open and the pressure regulators are set correctly. Inspect the torch for moisture or carbon deposits, which can prevent plasma formation. If issues persist, verify the interlocks (e.g., cooling water flow, argon pressure) are engaged.

**Q: How often should I calibrate the instrument?**
A: You must perform a new calibration at the start of every analytical batch. If the batch exceeds 20 samples, include a Continuing Calibration Verification (CCV) standard every 10 samples to ensure drift has not occurred.

**Q: Why are my internal standard recoveries inconsistent?**
A: This is usually caused by inconsistent uptake rates. Check for worn peristaltic pump tubing, air bubbles in the sample capillary, or a nebulizer that is beginning to clog.
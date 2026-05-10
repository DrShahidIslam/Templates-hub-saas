# Standard Operating Procedure: High-Performance Liquid Chromatography (HPLC)

## Introduction
This Standard Operating Procedure (SOP) outlines the mandatory protocols for the operation, maintenance, and data acquisition process for High-Performance Liquid Chromatography (HPLC) systems. Adherence to these guidelines ensures analytical precision, equipment longevity, and compliance with Good Laboratory Practice (GLP) standards. Operators must be trained and authorized before utilizing the system.

## 1. Pre-Run Preparation and System Inspection
*   **Solvent Check:** Verify that mobile phase reservoirs have sufficient volume for the duration of the run. Ensure all solvents are HPLC-grade, degassed, and filtered (0.22 µm).
*   **Waste Management:** Empty the waste container and confirm the waste line is securely placed above the liquid level in the waste bottle.
*   **System Integrity:** Inspect all PEEK tubing, fittings, and ferrules for signs of wear, leakage, or salt crystallization.
*   **Degassing:** Ensure the online vacuum degasser is active and operating within specified pressure limits.
*   **Logbook Entry:** Record the date, operator name, column ID, mobile phase composition, and intended method in the equipment logbook.

## 2. System Startup and Column Equilibration
*   **Power On:** Switch on the HPLC stack (pump, autosampler, column oven, and detector) in the sequence specified by the manufacturer.
*   **Software Initialization:** Launch the chromatography data system (CDS) and establish a stable connection with the hardware.
*   **Purge Lines:** Open the purge valve and purge the pump heads with the current mobile phase (at 5-10 mL/min for 5 minutes) to remove air bubbles. Close the valve.
*   **Column Installation:** Connect the analytical column, ensuring correct orientation relative to the flow direction.
*   **Equilibration:** Set the method flow rate and column oven temperature. Allow the system to equilibrate until the baseline signal is stable (typically 15-30 minutes).

## 3. Sample Preparation and Injection
*   **Sample Filtration:** All samples must be filtered through a 0.22 µm or 0.45 µm syringe filter to prevent column clogging.
*   **Vial Preparation:** Fill autosampler vials, cap securely, and ensure no air bubbles are trapped in the insert.
*   **Sequence Setup:** Input the sample sequence into the software, defining the injection volume, tray position, and method file.
*   **Injection:** Execute the sequence. Monitor the pressure profile during the first injection to ensure it remains within the column’s operating limit.

## 4. Shutdown and Maintenance
*   **Column Flushing:** Flush the column with an appropriate solvent (typically a high-organic percentage, e.g., 90% Acetonitrile/10% Water) to remove residual buffers or contaminants.
*   **Pump Shutdown:** If the system will be idle for >24 hours, flush the pump lines with 100% Isopropanol or the storage solvent specified by the column manufacturer.
*   **Data Export:** Securely save raw data files to the server and generate final PDF reports for audit trails.
*   **Power Off:** Turn off the system components unless a "Standby" mode is required by the SOP.

## Pro Tips & Pitfalls
*   **Pitfall - Buffer Precipitation:** Never transition directly from a high-salt buffer (e.g., Phosphate) to high-organic solvent (e.g., 100% Methanol). This will cause salt precipitation and clog the column. Always use an intermediate water wash.
*   **Tip - Baseline Noise:** If you observe high baseline noise, check your mobile phase preparation first. 90% of chromatographic issues originate from improper solvent preparation rather than hardware failure.
*   **Pitfall - Air Bubbles:** Sudden pressure fluctuations are usually indicative of air in the pump head. Always degas solvents thoroughly, even if an online degasser is present.
*   **Tip - Leak Detection:** Use a small piece of Kimwipe at fittings to detect microscopic leaks that may not be visible to the naked eye.

## Frequently Asked Questions

**Q: How often should I change the mobile phase?**
A: Aqueous mobile phases should be replaced every 48 hours to prevent microbial growth. Organic/buffer mixtures should be discarded if there is any evidence of turbidity or pH drift.

**Q: My pressure is significantly higher than usual. What should I do?**
A: Immediately stop the flow. Check the column inlet frit for clogging and test the system pressure without the column attached. If pressure remains high without the column, the blockage is in the system tubing or the injector seat.

**Q: How do I know when the column needs to be replaced?**
A: Replace the column if you observe significant peak tailing, a permanent loss of resolution (selectivity), or if the system pressure remains abnormally high even after a thorough column wash.
---
status: published
title: 'qPCR Standard Operating Procedure: Best Practices & Workflow'
publishedAt: '2026-05-10T18:48:01.421Z'
description: >-
  Master qPCR assays with our expert SOP. Learn essential steps for plate setup,
  reagent handling, and thermal cycling to ensure data reproducibility.
seo_optimized: true
---
# Standard Operating Procedure: Quantitative Polymerase Chain Reaction (qPCR)

This Standard Operating Procedure (SOP) outlines the standardized workflow for performing quantitative Polymerase Chain Reaction (qPCR) assays. The objective is to ensure high data integrity, reproducibility, and cross-contamination prevention through rigorous preparation, standardized thermal cycling parameters, and systematic data analysis. All personnel are expected to adhere to these guidelines to maintain experimental accuracy and equipment longevity.

## 1. Pre-Experimental Preparation and Reagent Handling
*   Clean the workspace: Wipe down the PCR workstation/hood with 10% bleach followed by 70% ethanol to remove residual DNA.
*   Thaw reagents: Thaw primers, probes, template DNA/cDNA, and master mix on ice (unless specified otherwise by the manufacturer).
*   Protect sensitive reagents: Keep fluorescent probes and master mixes protected from direct light to prevent photobleaching.
*   Briefly centrifuge: Spin down all reagents before opening tubes to ensure all liquid is at the bottom.
*   Prepare the Master Mix: Calculate the required volume for N+1 reactions to account for pipetting error. Vortex the master mix gently and centrifuge.

## 2. Plate Setup and Liquid Handling
*   Load the plate: Pipette the master mix into the wells first, followed by primers/probes, and finally the template DNA.
*   Maintain sterility: Use aerosol-resistant (filter) tips for all steps. Change tips between every sample.
*   Minimize bubbles: Ensure no bubbles are present at the bottom of the wells. If bubbles appear, centrifuge the plate at 1000 x g for 1 minute.
*   Seal the plate: Apply an optical-grade adhesive film or cap strips. Use a sealing tool to ensure an airtight seal across all wells to prevent evaporation.
*   Orientation: Confirm the plate orientation (e.g., A1 corner) matches the plate layout in the software.

## 3. Thermal Cycling and Run Execution
*   Initialize the instrument: Power on the qPCR system and ensure the optical system is calibrated.
*   Input parameters: Set the cycling conditions (denaturation, annealing/extension temperatures, and cycle count) according to the kit protocol.
*   Define the plate map: Assign sample types (Unknown, Standard, NTC, NTC) and targets (dye channels) within the instrument software.
*   Start the run: Insert the plate, lock the lid, and initiate the run. Monitor the amplification plots during the first few cycles for unexpected signals.

## 4. Post-Run Analysis and Quality Control
*   Evaluate Baseline and Threshold: Ensure the threshold is set in the linear phase of the amplification curve (log scale).
*   Check NTCs: Confirm that No Template Controls (NTCs) show no amplification or Ct values at least 5-10 cycles apart from the lowest experimental sample.
*   Analyze Efficiency: Check the R² value (>0.99) and slope (-3.1 to -3.6) of the standard curve to ensure reaction efficiency is between 90% and 110%.
*   Export Data: Save the raw data and export the results for downstream analysis.

## Pro Tips & Pitfalls
*   **Pro Tip:** Always include a "master mix" master tube to ensure that every well receives an identical chemical composition, reducing technical variability.
*   **Pro Tip:** Perform a melt curve analysis (if using SYBR Green) to verify that only a single product was amplified.
*   **Pitfall - Evaporation:** Poor sealing is the #1 cause of "late" or "erratic" Ct values. Always use a scrapper tool to seal plate edges.
*   **Pitfall - Pipetting Errors:** Avoid pipetting volumes below 2µL, as this significantly increases the coefficient of variation (CV). Dilute templates to allow for higher volume pipetting.

## Frequently Asked Questions (FAQ)

**Q: My NTC shows amplification. What should I do?**
A: This indicates template contamination. Immediately discard current reagents, clean the workstation thoroughly, and repeat the experiment with fresh aliquots.

**Q: What is the ideal Ct range for a qPCR assay?**
A: Ideally, your Ct values should fall between 15 and 30. Ct values above 35 are often unreliable and prone to stochastic noise, while values below 10 may indicate excessive template concentration or primer-dimer interference.

**Q: Why does my standard curve have an efficiency outside the 90-110% range?**
A: This is usually caused by pipetting inaccuracies, degraded reagents, or improper primer design. Check your pipettes for calibration and re-run the standard curve with fresh dilutions.


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I prevent cross-contamination in qPCR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prevent contamination by cleaning your workstation with 10% bleach and 70% ethanol, using aerosol-resistant filter tips, and changing tips between every sample."
      }
    },
    {
      "@type": "Question",
      "name": "Why is it necessary to centrifuge the qPCR plate before the run?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centrifuging the plate ensures all reagents are at the bottom of the wells and eliminates air bubbles, which can interfere with fluorescence readings and data accuracy."
      }
    },
    {
      "@type": "Question",
      "name": "What is the recommended order for loading a qPCR plate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To maintain precision, load the master mix into the wells first, followed by primers/probes, and finally add your template DNA last."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "qPCR Thermal Cycling Software",
  "applicationCategory": "Scientific Software",
  "operatingSystem": "Windows/Linux",
  "description": "Standardized software interface used for defining plate maps, managing thermal cycling parameters, and monitoring real-time qPCR amplification data.",
  "softwareHelp": {
    "@type": "CreativeWork",
    "text": "Standard Operating Procedure for qPCR experimental workflow and instrument initialization."
  }
}
</script>

---
title: Kaeser Rotary Screw Compressor Preventive Maintenance Guide
status: published
slug: kaeser-compressor-preventive-maintenance-checklist
publishedAt: '2026-05-11T11:39:28.137Z'
description: >-
  Learn the official preventive maintenance steps for Kaeser rotary screw
  compressors. Ensure longevity and warranty compliance with this expert SOP
  guide.
seo_optimized: true
---

# Standard Operating Procedure: Kaeser Rotary Screw Compressor Preventive Maintenance

This document establishes the standardized procedure for conducting preventive maintenance (PM) on Kaeser rotary screw compressors. Regular maintenance is critical to ensuring operational longevity, energy efficiency, and the prevention of catastrophic equipment failure. All maintenance must be performed by qualified personnel using original Kaeser spare parts (Sigma lubricants, OEM filters, and separators) to maintain warranty compliance and performance integrity.

## Safety and Preparation
*   **Lockout/Tagout (LOTO):** Always isolate the electrical supply and bleed all residual pressure from the system before performing internal maintenance.
*   **PPE:** Wear appropriate safety glasses, gloves, and protective footwear.
*   **Documentation:** Review the machine’s Sigma Control interface for logged warnings or pending service messages.

## Weekly Inspections (Level 1)
*   **Check Oil Levels:** Verify oil levels are within the indicated range on the sight glass while the unit is pressurized and running (or as specified by the manual).
*   **Condensate Management:** Inspect the condensate drain (Eco-Drain) for proper operation. Ensure the drain is not clogged and that it is effectively removing moisture from the system.
*   **Ambient Environment:** Check the compressor room for adequate ventilation. Clear any debris or dust buildup around the intake vents.
*   **Acoustics:** Perform a "listen test" for unusual vibrations, rattles, or bearing noise.

## Monthly Maintenance (Level 2)
*   **Air Intake Filtration:** Inspect the air filter element. If restricted or dirty, replace it immediately to prevent pressure drop and engine strain.
*   **Cooler Inspection:** Inspect the oil and after-cooler surfaces. Use low-pressure compressed air (blowing from inside out) to remove dust and contaminants from the cooling fins.
*   **Leads and Connections:** Inspect electrical connections for signs of heat discoloration or loose terminal screws. Ensure all hoses and lines are free from leaks or signs of dry-rot.

## Quarterly & Annual Maintenance (Level 3)
*   **Fluid & Filter Changes:** Drain used Sigma lubricant according to environmental regulations. Replace the oil filter and the air/oil separator cartridge.
*   **Drive Systems:** 
    *   *Belt-driven units:* Check belt tension and look for fraying or glazing. Replace as a matched set if necessary.
    *   *Direct-drive units:* Inspect the flexible coupling element for cracks or signs of fatigue.
*   **Safety Valves:** Manually trip the safety relief valve (ensure system is pressurized) to verify it functions and reseats correctly.
*   **Sigma Control Reset:** After service, update the maintenance counter in the Sigma Control module to reset service alarms.

## Pro Tips & Pitfalls
*   **Pro Tip: Oil Analysis:** For high-duty cycle compressors, consider periodic oil analysis. It is the most effective way to detect internal mechanical wear (e.g., bearing fatigue) before it causes a breakdown.
*   **Pitfall: Mixing Lubricants:** Never mix different oil types. Using non-Kaeser branded oil or mixing formulations will result in varnish buildup and significantly shorten the life of the airend.
*   **Pitfall: Over-tightening:** When replacing spin-on filters (oil or separator), hand-tighten plus a quarter turn. Over-tightening often leads to deformed gaskets and difficult removal during the next cycle.
*   **Pro Tip: Document Everything:** Keep a physical or digital logbook attached to the compressor. Tracking the "hours until next service" helps in inventory management for spare parts.

## Frequently Asked Questions

**Q: Why does my compressor keep showing a "Maintenance Required" alarm even after I changed the filters?**
A: You must manually reset the maintenance interval within the Sigma Control menu settings. Replacing the parts is only half the process; the controller's internal clock must be reset to begin the new service interval.

**Q: How often should the air/oil separator cartridge be changed?**
A: Typically, this is done every 3,000 to 6,000 hours depending on the environment. If you notice a sudden increase in oil carry-over (oil in the discharge air), the separator is likely saturated or compromised and requires immediate replacement.

**Q: Can I use high-pressure air to clean the intake filters?**
A: No. Cleaning an air filter with high-pressure air often tears the microscopic pores in the media, which allows dirt and dust to enter the airend. Always replace the filter element rather than attempting to clean it.


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I perform maintenance on my Kaeser compressor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maintenance follows a tiered schedule: Level 1 (weekly), Level 2 (monthly), and Level 3 (quarterly/annually) for major fluid and filter changes."
      }
    },
    {
      "@type": "Question",
      "name": "Why must I use original Kaeser spare parts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Using genuine Sigma lubricants, OEM filters, and separators is essential to maintain warranty compliance, ensure performance integrity, and prevent equipment failure."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most important safety step before maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most critical step is to perform Lockout/Tagout (LOTO) by isolating the electrical supply and bleeding all residual pressure from the system."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Kaeser Sigma Control",
  "operatingSystem": "Proprietary Embedded",
  "applicationCategory": "Industrial Compressor Management System",
  "description": "The interface used for monitoring Kaeser rotary screw compressors, logging service warnings, and managing operational data.",
  "softwareHelp": {
    "@type": "CreativeWork",
    "name": "Kaeser Preventive Maintenance SOP"
  }
}
</script>

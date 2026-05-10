# Standard Operating Procedure: Data Center Infrastructure Audit

This Standard Operating Procedure (SOP) outlines the mandatory protocols for conducting a comprehensive audit of a data center facility. The objective of this audit is to ensure maximum uptime, verify compliance with safety and security standards, and identify potential points of failure within the mechanical, electrical, and physical security layers. This procedure should be executed on a semi-annual basis or following any major facility modification to maintain operational excellence.

## 1. Physical Security & Access Control
*   **Perimeter Integrity:** Inspect all external fencing, gates, and entry points for signs of tampering or structural degradation.
*   **Visitor Access Logs:** Verify that all facility access logs reconcile with the digital badge system; ensure guest sign-in sheets are filed according to security policy.
*   **Surveillance Systems:** Review camera coverage paths to ensure no "blind spots" exist in hallways, server rooms, or loading bays. Verify 90-day footage retention compliance.
*   **Biometric/Badge Readers:** Test randomly selected access points for proper credential authorization and "anti-passback" functionality.

## 2. Electrical & Power Infrastructure
*   **UPS Systems:** Check current battery health, discharge cycle history, and ambient temperature of the battery storage room.
*   **Generator Readiness:** Inspect fuel levels, perform a visual check for fluid leaks, and verify the status of the "Auto-Transfer Switch" (ATS).
*   **Power Distribution Units (PDUs):** Audit load balance across rack PDUs to ensure no circuit is operating at >80% capacity (avoiding potential breaker trips).
*   **Grounding & Bonding:** Ensure all server racks and cable trays are properly grounded to the building’s master ground bar.

## 3. Cooling & Environmental Controls
*   **CRAC/CRAH Units:** Verify that all units are within designated operating temperature ranges; check for blocked airflow or excessive condensation.
*   **Hot/Cold Aisle Containment:** Ensure blanking panels are installed in all unused rack spaces to prevent air recirculation.
*   **Leak Detection:** Test water detection sensors installed under raised flooring to ensure alerts trigger in the Monitoring Operations Center (MOC).
*   **Humidity Levels:** Confirm adherence to ASHRAE standards (typically 40%–60% relative humidity) to prevent electrostatic discharge or equipment corrosion.

## 4. Fire Suppression & Life Safety
*   **Suppression Agents:** Check pressure gauges on gas-based suppression systems (e.g., FM-200, Novec 1230); confirm system is set to "Automatic" mode.
*   **Extinguishers:** Verify all handheld fire extinguishers are present, unexpired, and wall-mounted.
*   **Emergency Lighting:** Conduct a "blackout" test in select corridors to ensure battery-backed emergency egress lighting activates immediately.

## 5. Cable Management & Asset Inventory
*   **Labeling Standards:** Randomly sample cables (fiber/copper) to ensure they follow the site-specific color-coding and labeling convention.
*   **Asset Tagging:** Cross-reference hardware serial numbers with the inventory management database to identify "ghost" assets or unauthorized equipment.
*   **Cable Routing:** Ensure high-voltage power cables are separated from data/fiber lines to mitigate electromagnetic interference (EMI).

## Pro Tips & Pitfalls
*   **Pro Tip:** Always perform a "Walk-the-Floor" audit with the site technician; they possess institutional knowledge about "intermittent issues" that don't show up on digital dashboards.
*   **Pitfall - The "Dashboard Trap":** Do not rely solely on the Building Management System (BMS). Automated sensors can fail or report false positives. Always perform manual physical verification.
*   **Pitfall - Documentation Gap:** A common failure is neglecting to update the "As-Built" drawings after a cable install. If the documentation doesn't match the reality, the audit is considered incomplete.

## Frequently Asked Questions

**Q: How often should a full data center audit be performed?**
A: A full-scale physical and electrical audit is recommended semi-annually. However, security and environmental logs should be audited quarterly.

**Q: What is the most critical item to check during an audit?**
A: Power reliability (UPS and Generator health) is universally considered the highest priority, as power failure represents the most immediate threat to uptime.

**Q: Should I alert the IT staff before an audit?**
A: Routine maintenance audits should be scheduled in advance to ensure the right personnel are available. However, "Security Audits" should occasionally be performed as unannounced "spot checks" to ensure policy compliance.
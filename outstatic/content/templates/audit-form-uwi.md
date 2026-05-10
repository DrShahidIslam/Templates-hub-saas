# Standard Operating Procedure: Audit Form UWI (Unique Well Identifier)

## Overview
The accuracy of the Unique Well Identifier (UWI) is the cornerstone of regulatory compliance, data integrity, and operational efficiency within subsurface and asset management databases. The "Audit Form UWI" process is a systematic quality assurance procedure designed to reconcile physical well documentation against digital records. This SOP ensures that every asset is correctly mapped, preventing cross-contamination of production data, permitting errors, and reporting liabilities. Failure to maintain precise UWI records can result in significant legal and operational exposure.

## Step-by-Step Audit Checklist

## Phase 1: Pre-Audit Preparation
*   Extract the current UWI data export from the Master Asset Database (e.g., P2, GeoFrame, or SAP).
*   Collate all source documentation, including Well Completion Reports, government survey filings, and state-issued permits.
*   Verify user access permissions to the regulatory database (e.g., state oil and gas commission portals).
*   Confirm the scope of the audit (e.g., by lease, by region, or by historical date range).

## Phase 2: Data Reconciliation
*   Cross-reference the 12-digit (or standard state-specific) UWI format against the regulatory agency's public registry.
*   Validate the "Status" field: Ensure the digital status (e.g., Active, Shut-in, Plugged & Abandoned) matches the most recent physical inspection or workover report.
*   Verify geographical coordinates (Latitude/Longitude) to ensure the UWI corresponds to the correct spatial footprint.
*   Flag any "Orphaned UWIs"—identifiers present in the database that lack a matching permit or spud date in the regulatory repository.

## Phase 3: Field & Documentation Validation
*   Confirm the UWI "Parent/Child" relationship; ensure sidetracks and re-entries are correctly linked to the original borehole UWI.
*   Audit the "Spud Date" and "Completion Date" fields for chronological consistency.
*   Check for duplicate UWIs where multiple asset records may have been assigned the same identifier due to data entry lag or system migrations.
*   Verify that any name changes (due to operator acquisition) are reflected in the "Historical Name" field.

## Phase 4: Remediation & Sign-off
*   Document all discrepancies found in an Audit Exceptions Log.
*   Update the Master Asset Database with corrected UWI values.
*   Submit correction filings to the relevant regulatory bodies where discrepancies were identified.
*   Archive a copy of the audit findings for the internal compliance file.
*   Obtain sign-off from the Data Steward or Asset Manager upon completion of data remediation.

## Pro Tips & Pitfalls

*   **The Leading Zero Trap:** Always verify that leading zeros in UWIs (common in certain states) have not been stripped by Excel during data export. Format columns as "Text" before opening any CSVs.
*   **The Sidetrack Blindspot:** A common pitfall is ignoring "Sidetracked" or "Directional" wellbores. Ensure your audit accounts for the suffix characters that distinguish the main borehole from secondary laterals.
*   **Pro Tip:** Use automated Python scripts or SQL queries to perform "fuzzy matching" on well names if the UWIs are missing or corrupted, rather than manual eye-balling.
*   **Regulatory Lag:** Remember that regulatory databases may take 30–90 days to reflect recent permit updates; do not mark a record as an "error" if it has been filed within the last fiscal quarter.

## FAQ

**Q: What should I do if a physical wellhead sign does not match my digital UWI?**
A: Prioritize the physical wellhead sign and the official state permit. If they conflict, assume the digital database is incorrect, initiate a field verification request, and update the database only after confirmation from the regulatory agency.

**Q: How often should a UWI Audit be performed?**
A: It is recommended to perform a comprehensive UWI audit annually. However, high-activity assets (frequent workovers/drilling) should undergo a quarterly "mini-audit" of new records.

**Q: Does a change in operator require a new UWI?**
A: No. In most jurisdictions, the UWI is tied to the physical wellbore and permit, not the operator. When an asset is acquired, the UWI remains the same; only the "Operator Name" field in your internal database should be updated to reflect the change in ownership.
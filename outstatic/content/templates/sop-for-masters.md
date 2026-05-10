# Standard Operating Procedure: Master Data Management (MDM)

This Standard Operating Procedure (SOP) outlines the standardized framework for the creation, maintenance, and synchronization of master data across the organization. Robust master data is the cornerstone of operational efficiency, ensuring "a single version of truth" for core entities such as customers, products, vendors, and employees. Adherence to these protocols is mandatory for all personnel responsible for data entry, system administration, and information governance to prevent data silos, redundancy, and reporting inaccuracies.

## Phase 1: Data Identification and Classification
*   Determine the domain of the master data (e.g., Customer, Product, SKU, Vendor).
*   Define the Data Steward responsible for the accuracy and lifecycle of the specific data set.
*   Validate the necessity of the master entry against current databases to prevent duplicate creation.
*   Assign a unique global identifier (GUID) or internal key according to company taxonomy standards.

## Phase 2: Data Input and Standardization
*   Collect all required metadata fields as per the Global Data Dictionary.
*   Apply naming conventions (e.g., consistent casing, abbreviation standards, and classification hierarchies).
*   Verify mandatory fields: Ensure all required fields (marked with an asterisk) are populated with validated data.
*   Attach required supporting documentation (e.g., W-9s for vendors, technical specification sheets for products) to the digital master record.

## Phase 3: Validation and Quality Assurance
*   Cross-reference input data against third-party validation sources where applicable (e.g., tax IDs, postal address verification).
*   Perform a "Duplicate Check" using the system’s fuzzy matching logic to ensure the record does not already exist under a variation.
*   Conduct a peer review for high-impact master records (e.g., GL account mapping, supplier banking details).
*   Flag records for sensitivity classification (Public, Internal, Confidential, Restricted).

## Phase 4: System Integration and Propagation
*   Execute the "Create/Update" command in the Master Data Management (MDM) platform.
*   Verify the automated push of data to downstream systems (e.g., ERP, CRM, WMS).
*   Review synchronization logs to ensure zero "Fail-to-Write" errors in downstream modules.
*   Issue a notification or audit log entry confirming the record is live and available for transactional use.

## Phase 5: Periodic Audits and Governance
*   Schedule bi-annual reviews of master records to identify dormant or obsolete entries.
*   Verify that any changes to business rules are reflected in the existing master data.
*   Generate an "Exception Report" to highlight data gaps or inconsistencies for remediation.

## Pro Tips & Pitfalls
*   **Pro Tip:** Automate your validation rules. If your system allows for custom scripts, implement input masks (e.g., regex for email formats or phone numbers) to prevent human error at the point of entry.
*   **Pro Tip:** Maintain a "Data Dictionary" that serves as the bible for your master data; update this whenever a new field is added to your master record.
*   **Pitfall:** "Dirty Data Migration." Never import bulk data into a master system without a comprehensive cleansing phase. Migrating bad data just makes it harder to fix later.
*   **Pitfall:** Lack of Ownership. If every team "owns" the data, then nobody owns the data. Ensure clear RACI (Responsible, Accountable, Consulted, Informed) mapping for every master data object.

## FAQ

**Q: What should I do if I find a duplicate master record?**
A: Do not delete it immediately. Initiate a "Merge Request" within the MDM system. This ensures that the transaction history of both records is preserved and linked to the surviving "Golden Record."

**Q: Who is authorized to change master data?**
A: Only personnel with assigned "Data Steward" or "Admin" roles in the ERP/MDM system may edit existing master data. General users should submit a "Change Request" ticket for review.

**Q: How often should we perform a data scrub?**
A: We recommend a formal scrub of your master data set at least once per fiscal quarter, focusing specifically on stale accounts and expired vendor information.
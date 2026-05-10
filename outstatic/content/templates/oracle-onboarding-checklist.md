# Standard Operating Procedure: Oracle System Onboarding

This Standard Operating Procedure (SOP) defines the systematic process for onboarding new users, administrators, or business units into the Oracle ERP/Cloud environment. Proper onboarding ensures that security compliance, segregation of duties (SoD), and operational efficiency are maintained from day one. This document serves as the authoritative guide for IT administrators, system owners, and departmental leads to ensure that access provisioning is audited, secure, and aligned with organizational role-based access control (RBAC) policies.

## Phase 1: Request and Approval Workflow
Before technical configuration begins, the authorization must be validated to prevent unauthorized access and ensure compliance.

*   Verify the user’s identity and organizational department.
*   Submit the "Oracle Access Request Form" detailing specific modules required (e.g., Financials, HCM, SCM).
*   Obtain written approval from the Departmental Manager and the Data Owner.
*   Conduct an SoD (Segregation of Duties) check to ensure no conflicting roles are assigned to the user.
*   Attach all approval documentation to the IT Service Management (ITSM) ticket.

## Phase 2: Technical Provisioning and Security Configuration
Once approved, the technical configuration must follow the principle of least privilege.

*   Create the user profile in the Identity Cloud Service (IDCS) or Oracle Cloud Infrastructure (OCI) IAM.
*   Assign the appropriate "Job Roles" as per the approved request.
*   Map Job Roles to "Data Security Policies" to restrict access to specific Business Units (BUs) or Ledgers.
*   Configure MFA (Multi-Factor Authentication) enrollment requirements.
*   Set up personal preferences, including language settings, time zones, and reporting currency.

## Phase 3: Training and Validation
System access must be verified through user testing before the account is fully released for operational use.

*   Verify user login credentials and successful MFA authentication.
*   Confirm the user can access required modules (e.g., General Ledger, Procurement, or Payroll).
*   Validate that restricted areas are correctly hidden from the user view.
*   Ensure the user has completed the mandatory "Oracle Navigation & Compliance" training module.
*   Perform a "Sanity Check" by having the user generate a dummy report or process a test transaction.

## Phase 4: Audit and Documentation
Documentation is critical for SOX compliance and internal audit reviews.

*   Close the ITSM ticket with final status and timestamp.
*   Log the account assignment in the Access Control Matrix.
*   Schedule a 30-day follow-up review to ensure the assigned permissions are still appropriate.
*   Archive the approval email threads and tickets for internal audit.

## Pro Tips & Pitfalls

*   **Pro Tip:** Use "Custom Roles" sparingly. Instead, use seeded Oracle roles and adjust data security policies to keep maintenance overhead low during quarterly system updates.
*   **Pro Tip:** Automate the provisioning process using Oracle Identity Governance (OIG) if your organization has a high volume of new hires to reduce manual entry errors.
*   **Pitfall:** Avoid "Role Creep." Do not grant "Super User" or "Administrator" access just because a user needs help with a specific task; use the "Delegate" feature if available.
*   **Pitfall:** Ignoring the "Test Environment." Never provision high-level access in Production without first validating the role configuration in the UAT (User Acceptance Testing) instance.

## Frequently Asked Questions (FAQ)

**1. How do I handle access requests for temporary contractors?**
Always assign an "Access Expiration Date" in the Oracle user profile. This ensures the account is automatically disabled or flagged for review once the contract period ends.

**2. What should I do if a user reports they cannot see a specific function?**
First, verify that the assigned Job Role includes the required "Privilege." If it does, ensure the "Data Security Policy" is mapped correctly to the Business Unit (BU) associated with that data.

**3. How often should Oracle user access be audited?**
Best practice dictates a quarterly access certification review. All managers should verify that their direct reports still require the access levels currently granted to them.
# Standard Operating Procedure: New Hire Onboarding via Google Sheets

This SOP outlines the standardized procedure for utilizing the Centralized Onboarding Google Sheets template. The objective is to provide a consistent, high-visibility framework that ensures every new hire receives a seamless transition into the organization. By maintaining a single source of truth, department heads and HR can track progress, assign responsibilities, and ensure compliance with internal administrative requirements without duplicating communication or missing critical setup milestones.

## Phase 1: Preparation and Template Initialization
*   Access the Master Onboarding Template from the Operations Shared Drive.
*   Select "File > Make a copy" to create a version specific to the new hire (naming convention: [YYYY-MM-DD]_[Lastname]_[Firstname]_Onboarding).
*   Share the file with the relevant Department Manager and IT Support team with "Editor" access.
*   Populate the "Employee Details" tab with data pulled from the Offer Letter (Start date, role, reporting manager).
*   Verify that all automated formula links in the "Dashboard" tab are pulling data correctly from the sub-tabs.

## Phase 2: Execution and Tracking
*   **IT & Systems Setup:** Assign ticket numbers for hardware provisioning (laptop, monitor, accessories) and verify status in the tracking column.
*   **Access Management:** Use the "Access List" tab to verify that Slack, Email, CRM, and SaaS platform invitations have been sent.
*   **Administrative Compliance:** Confirm the receipt of signed NDAs, tax documentation, and handbook acknowledgments.
*   **Orientation Schedule:** Populate the "Week 1 Schedule" tab with recurring 1:1 meetings, department introductions, and training sessions.
*   **Progress Monitoring:** Check the "Overview" tab daily to identify overdue tasks (highlighted in red via Conditional Formatting).

## Phase 3: Finalization and Archive
*   Conduct a final review of the "Onboarding Completion" status with the hiring manager.
*   Ensure all training documentation links are updated to their most recent versions.
*   Export the finalized sheet as a PDF for the long-term personnel file.
*   Move the live Google Sheet to the "Archived Onboarding" folder to maintain a clean workspace.

## Pro Tips & Pitfalls
*   **Pro Tip (Data Validation):** Use "Data Validation" dropdowns for status columns (e.g., "Not Started," "In Progress," "Complete") to maintain clean data for reporting.
*   **Pro Tip (Notifications):** Enable "Notification Rules" in the Google Sheet settings to receive an email alert whenever a task status is changed by a department head.
*   **Pitfall (Permissions):** Avoid granting "Full Edit" access to the new hire. Create a read-only "New Hire View" tab to share with them so they do not accidentally modify formulas or infrastructure trackers.
*   **Pitfall (Stale Data):** Do not copy-paste old onboarding sheets manually. Always use the Master Template to ensure you are using the most current task list and compliance requirements.

## FAQ
**Q: How do I handle tasks that require cross-departmental coordination?**
A: Utilize the "Assigned To" column in the sheet. Ensure each row has a designated owner, and use the "@mention" feature in the comments section to notify them directly when their input is needed.

**Q: Can I customize the template for specific roles (e.g., Engineering vs. Sales)?**
A: Yes. Create a hidden tab titled "Role-Specific Tasks" and use an `IMPORTRANGE` function to pull relevant requirements into the main dashboard based on the employee's role selected in the profile section.

**Q: What should I do if a task is consistently delayed?**
A: If a task remains "In Progress" for more than 48 hours, escalate to the department lead via a formal calendar invite to review blockers, rather than just updating the spreadsheet status.
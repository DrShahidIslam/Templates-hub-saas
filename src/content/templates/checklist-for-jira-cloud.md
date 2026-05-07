# Standard Operating Procedure: Jira Cloud Hygiene and Maintenance

This Standard Operating Procedure (SOP) outlines the mandatory maintenance and administrative workflows required to ensure the stability, security, and efficiency of your Jira Cloud instance. As an operations manager, maintaining a clutter-free and optimized Jira environment is critical for accurate reporting, team velocity, and cross-functional transparency. By adhering to these periodic audits, administrators will minimize technical debt and prevent the degradation of instance performance.

## 1. Quarterly Administrative Audit

*   **User Access Review:** Deactivate users who have left the organization or have been inactive for over 30 days. Remove "Site Admin" permissions for users who no longer require elevated access.
*   **Permission Scheme Audit:** Verify that Project Roles are mapped correctly to Permission Schemes to prevent unauthorized access to sensitive projects.
*   **App/Plugin Cleanup:** Audit installed apps from the Atlassian Marketplace. Remove unused or redundant apps to minimize security risks and monthly billing costs.
*   **Global Automation Review:** Review the "Automation for Jira" library. Disable or delete automation rules that are failing or no longer in use to prevent execution limit exhaustion.

## 2. Project Configuration & Workflow Maintenance

*   **Scheme Standardization:** Ensure projects are using shared schemes (Workflows, Issue Types, Screens) rather than project-specific configurations to ease long-term maintenance.
*   **Workflow Hygiene:** Audit inactive statuses. Remove statuses that are no longer used to simplify the board view and reporting.
*   **Custom Field Audit:** Search for custom fields with zero usage (context: global, projects: none). Delete unused fields to optimize Jira's database performance and improve loading speeds.
*   **Screen Scheme Optimization:** Remove unused fields from screens to reduce clutter and ensure that only essential data is collected during transitions.

## 3. Data Integrity & Board Housekeeping

*   **Filter & Dashboard Cleanup:** Delete personal dashboards or filters created by users who are no longer with the company.
*   **Board Configuration:** Verify that "Quick Filters" are relevant. Remove outdated filters that are no longer assisting team velocity.
*   **Component & Version Archiving:** Archive versions that are marked as "Released" and older than six months. Consolidate components that have overlapping purposes.
*   **Backlog Refinement:** Identify issues in the backlog that have not been updated in 90+ days and move them to an "Icebox" project or close them as "Won't Do."

## Pro Tips & Pitfalls

*   **Pro Tip: Use "Managed" vs "Company-Managed":** Favor Company-Managed projects for large-scale operations to maintain standardized reporting; save Team-Managed projects strictly for experimental or temporary workflows.
*   **Pro Tip: Automate Maintenance:** Set up a recurring Automation rule that emails you a report of custom fields that have not been populated in over 12 months.
*   **Pitfall - The "Custom Field Trap":** Avoid creating a new custom field if a standard field can be repurposed. Each custom field increases the complexity of your instance’s index.
*   **Pitfall - Permission Creep:** Do not assign individual users to project roles. Always assign permissions to Groups; this allows you to manage access via your Identity Provider (e.g., Okta, Azure AD) rather than inside Jira.

## Frequently Asked Questions (FAQ)

**Q: How often should I perform this checklist?**
A: A full audit should be performed quarterly. However, user access reviews should be performed monthly to maintain security compliance.

**Q: Will deleting a custom field permanently erase the data associated with it?**
A: Yes. Before deleting a custom field, always perform a search using that field to ensure no legacy issues are relying on that data. If in doubt, export the issue data to CSV first.

**Q: Does Jira Cloud allow me to restore a deleted project?**
A: Deleted projects are moved to the Trash for 60 days before being permanently purged. You can restore them within this window via the "Trash" section in the Jira administration settings.
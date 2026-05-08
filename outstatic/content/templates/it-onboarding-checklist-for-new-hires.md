# Standard Operating Procedure: IT Onboarding for New Hires

This Standard Operating Procedure (SOP) defines the systematic process for provisioning, securing, and configuring IT resources for new employees. The objective is to ensure that every new hire has a seamless, secure, and productive experience starting from their first day. By standardizing this workflow, the IT department minimizes downtime, maintains security compliance, and ensures that hardware and software access are tailored to the specific role of the new team member.

## Phase 1: Pre-boarding and Provisioning (T-Minus 10 Business Days)

*   **Request Initiation:** Receive the "New Hire IT Request Form" from Human Resources, confirming the hire’s name, role, department, and start date.
*   **Hardware Selection:** Assign a standard-issue workstation (laptop) based on department requirements (e.g., Development vs. Sales) and verify the inventory status.
*   **License Allocation:** Provision software licenses (Microsoft 365, Slack, Zoom, Jira, etc.) based on the standard role-based access control (RBAC) profile.
*   **Account Creation:** Generate unique company email address and Active Directory/SSO (Okta/Google Workspace) credentials.
*   **Asset Tagging:** Apply inventory tracking tags to hardware and document serial numbers in the Asset Management System.
*   **Security Configuration:** Pre-install Endpoint Detection and Response (EDR) software, disk encryption (BitLocker/FileVault), and company VPN certificates.

## Phase 2: Configuration and Logistics (T-Minus 3 Business Days)

*   **Image Deployment:** Re-image the device to the latest company-approved OS build.
*   **Security Audit:** Verify that all password policies, MFA requirements, and mandatory software updates are active.
*   **Peripheral Kitting:** Prepare the "New Hire Tech Kit," including a docking station, monitor cables, headset, mouse, and power supply.
*   **Shipping/Storage:** If remote, coordinate secure courier delivery. If on-site, place the kit at the employee's assigned workstation with a "Welcome" instruction card.

## Phase 3: First Day Execution

*   **Credential Handoff:** Securely deliver temporary passwords to the hiring manager to be shared with the new hire via a secure, one-time-view link.
*   **Guided Setup:** Provide the new hire with a "First-Time Login Guide" covering how to enroll in MFA and join the corporate Wi-Fi/VPN.
*   **Access Verification:** Perform a "Login Smoke Test" with the new hire to ensure they have access to their primary applications.
*   **Support Channel Introduction:** Explicitly communicate the IT Service Desk escalation path and how to open a support ticket.

## Phase 4: Post-Onboarding Verification (End of Week 1)

*   **Feedback Loop:** Send a brief automated survey to the new hire to identify any technical blockers encountered during their first week.
*   **Access Review:** Ensure all requested permissions are active and that the user is receiving notifications for all assigned department groups.
*   **Documentation Sign-off:** Confirm the new hire has read and digitally signed the Acceptable Use Policy (AUP).

## Pro Tips & Pitfalls

*   **Pro Tip: Automate Provisioning.** Use tools like Microsoft Intune, Jamf, or Kandji to automate software deployment. This reduces human error and ensures consistency across your fleet.
*   **Pro Tip: The "Shadow Account."** Have a dummy account available to test new onboarding workflows monthly. It helps identify broken links or outdated instructions before a real hire experiences them.
*   **Pitfall: Credential Over-Exposure.** Never send temporary passwords in plain text via email. Always use a secure password manager or a secure portal.
*   **Pitfall: Last-Minute Requests.** Late IT requests are the #1 cause of "Day 1 Friction." Enforce a strict SLA with HR regarding submission deadlines.

## FAQ

**Q: What if the employee has not received their hardware by Day 1?**
A: Immediately pivot to a temporary VDI (Virtual Desktop Infrastructure) or browser-based access if possible, and provide a clear timeline for the hardware delivery. Open an urgent ticket with the courier service to track the shipment.

**Q: How do I handle access for contractors versus full-time employees?**
A: Contractors should be provisioned with a time-bound account that auto-expires. Ensure they are assigned to a specific "Contractor" security group that limits access to sensitive internal databases.

**Q: Who is responsible for offboarding the employee if they leave?**
A: While this SOP covers onboarding, the IT Offboarding procedure is triggered by HR. IT is responsible for the immediate revocation of all credentials and the remote wiping of company data from the workstation within 2 hours of the termination time.
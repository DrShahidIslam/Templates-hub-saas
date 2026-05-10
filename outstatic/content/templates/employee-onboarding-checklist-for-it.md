---
status: published
title: Employee Onboarding Checklist For It
publishedAt: '2026-05-10T18:48:00.853Z'
---
# Standard Operating Procedure: IT Employee Onboarding

This Standard Operating Procedure (SOP) defines the systematic process for provisioning, securing, and deploying IT assets and access rights for new employees. The objective is to ensure that every incoming team member has the necessary tools to perform their duties on Day 1, while maintaining strict adherence to cybersecurity protocols and internal governance. A standardized onboarding experience minimizes downtime, reduces administrative friction, and reinforces the organization’s commitment to operational excellence.

## Phase 1: Pre-Arrival Provisioning (T-minus 7 Days)

*   **Request Intake:** Receive the formal "New Hire IT Request Form" from HR/Department Head.
*   **Hardware Procurement:** Confirm availability of assigned laptop, monitor, docking station, and peripherals.
*   **Asset Imaging:** Perform a clean OS installation and apply company-standard security configurations (Disk encryption, EDR software, Patch management agent).
*   **Identity Management:** Create the primary identity (Email/Active Directory/Okta) and initiate provisioning for necessary SaaS applications (Slack, Jira, Salesforce, etc.).
*   **Equipment Shipping:** If remote, coordinate secure courier delivery and provide tracking details to the employee.

## Phase 2: First-Day Setup (Day 0)

*   **Account Activation:** Verify the employee has successfully reset their password and configured Multi-Factor Authentication (MFA).
*   **Credential Handoff:** Provide secure access to the Password Manager and internal documentation portals (Confluence/Wiki).
*   **Network Connectivity:** Confirm employee can successfully connect to the office VPN or local office Wi-Fi.
*   **Hardware Validation:** Conduct a brief 1:1 call to troubleshoot any hardware issues (webcam, microphone, display connectivity).
*   **Compliance Sign-off:** Ensure the employee has digitally acknowledged the Acceptable Use Policy (AUP) and Data Security Handbook.

## Phase 3: Post-Onboarding Audit (End of Week 1)

*   **Access Verification:** Confirm the user has access to all departmental file shares and software tools requested by the manager.
*   **Software Updates:** Ensure all pre-installed software is on the latest version and license keys are active.
*   **Feedback Loop:** Send a brief survey to the new employee to identify any bottlenecks in the IT provisioning process.

## Pro Tips & Pitfalls

*   **Pro Tip: Automation is Key.** Use automated provisioning workflows via your Identity Provider (e.g., Okta or Azure AD) to trigger account creation automatically upon HR system updates. This reduces manual human error.
*   **Pro Tip: The "Spare Pool."** Always maintain a 10-15% buffer of pre-imaged "hot-swappable" laptops to handle unexpected new hires or emergency replacements.
*   **Pitfall: Over-provisioning.** Avoid granting "Admin" rights by default. Follow the Principle of Least Privilege (PoLP); add permissions only when requested and justified.
*   **Pitfall: Shadow IT.** If the onboarding process is too slow, employees will start using unapproved, non-secure applications to get their work done. Ensure the official toolset is easy to access.

## Frequently Asked Questions

**1. What should I do if an employee claims they don't have access to an app on Day 1?**
Immediately verify if the user is in the correct security group within your Identity Provider. If they are, force a re-sync of the application; if not, request written approval from the department manager before granting access.

**2. How do we handle hardware returns for terminated employees?**
Include an IT-specific "Offboarding Checklist" that triggers a prepaid shipping label generation as soon as HR confirms a termination date. Always wipe hardware to factory settings immediately upon return.

**3. Should IT provide training on how to use internal software?**
IT should provide documentation on *access* and *installation*, but functional training (e.g., how to use Salesforce) should be provided by the department lead or the internal training team to prevent IT from becoming a bottleneck.

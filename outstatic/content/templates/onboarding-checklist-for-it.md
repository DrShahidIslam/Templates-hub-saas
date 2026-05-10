---
status: published
title: Onboarding Checklist For It
publishedAt: '2026-05-10T18:48:00.962Z'
---
# Standard Operating Procedure: IT Employee Onboarding

This Standard Operating Procedure (SOP) outlines the standardized process for provisioning hardware, software, and system access for new hires. The objective is to ensure that every team member is fully operational on their start date, security protocols are strictly maintained, and the onboarding experience is seamless and professional. Adherence to this checklist minimizes downtime and mitigates risks associated with access management and data security.

## Phase 1: Pre-Arrival Provisioning (T-Minus 10 Business Days)
*   **Hardware Procurement:** Verify stock levels or place orders for the required laptop, monitor, peripherals, and mobile device based on the employee's role requirements.
*   **Asset Tagging:** Assign a unique asset ID tag to all hardware and record the serial number in the IT Asset Management (ITAM) database.
*   **Image Deployment:** Deploy the standard company OS image, including mandatory security configurations, disk encryption (e.g., BitLocker/FileVault), and pre-approved applications.
*   **Account Creation:** Generate the corporate email account, SSO credentials (e.g., Okta/Azure AD), and unique identifiers for internal communication platforms (Slack/Teams).

## Phase 2: Access & Identity Management (T-Minus 5 Business Days)
*   **Role-Based Access Control (RBAC):** Provision access to software-as-a-service (SaaS) platforms based on the department’s pre-approved access matrix.
*   **Security Training Enrollment:** Trigger automated enrollment for mandatory security awareness and phishing simulation training.
*   **Directory Sync:** Ensure the user account is active in the directory service and reflected in the company global address list.
*   **Documentation Preparation:** Draft a "Getting Started" IT guide, including instructions for password management, VPN setup, and printer configurations.

## Phase 3: Setup & Handover (Day 0)
*   **Hardware Handover:** Physically hand over the equipment (or confirm secure delivery) and verify the user can successfully authenticate into the machine.
*   **Credential Verification:** Assist the new hire with their initial password change and MFA (Multi-Factor Authentication) enrollment.
*   **Policy Acknowledgement:** Require a digital signature on the Acceptable Use Policy (AUP) and Data Privacy agreement.
*   **Device Auditing:** Perform a final check to ensure all peripheral software (video conferencing drivers, VPN clients) is functioning as expected.

## Phase 4: Post-Onboarding Audit (T-Plus 5 Business Days)
*   **Verification Check-in:** Conduct a 10-minute follow-up session to ensure the user is not facing any blockers with software or access.
*   **Access Audit:** Review logs to confirm no unauthorized access attempts or account lockouts occurred during the first week.
*   **Documentation Finalization:** Close the ticket in the IT Service Management (ITSM) tool and archive all provisioning records.

## Pro Tips & Pitfalls
*   **Pro Tip:** Automate your provisioning using scripts (e.g., PowerShell or Bash) or an MDM (Mobile Device Management) tool like Jamf or Intune. This ensures 100% consistency across all deployments.
*   **Pro Tip:** Always maintain a buffer stock of at least 5% of your workforce size in pre-configured "hot spare" laptops to accommodate surprise hires.
*   **Pitfall:** Never share temporary passwords via unencrypted email. Use a secure password vault or a one-time secret sharing link.
*   **Pitfall:** Avoid "permission creep" by ensuring access is granted based on the specific job role, not by copying a previous employee’s permissions, which often leads to redundant and unnecessary access.

## Frequently Asked Questions (FAQ)

**Q: What if a new hire needs specific, non-standard software?**
A: Requests for non-standard software must be submitted via an IT Service Request ticket, approved by the hiring manager, and vetted by the IT security lead for compliance before installation.

**Q: How do we handle hardware for remote employees?**
A: Devices must be shipped via a tracked, insured courier service. Before shipping, the device must be enrolled in your MDM so that if it is lost in transit, it can be remotely wiped or locked.

**Q: What should I do if the new hire is unable to authenticate their MFA on Day 1?**
A: Temporarily bypass the user via the admin console for a strictly limited window (e.g., 2 hours) to facilitate the initial setup, ensuring they are present during the bypass, and immediately re-enable MFA upon successful login.

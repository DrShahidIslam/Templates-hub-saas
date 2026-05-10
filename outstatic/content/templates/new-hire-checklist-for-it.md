---
status: published
title: New Hire Checklist For It
publishedAt: '2026-05-10T18:48:00.913Z'
---
# Standard Operating Procedure: IT New Hire Onboarding

The purpose of this Standard Operating Procedure (SOP) is to standardize the provisioning, security configuration, and access management process for new hires within the IT infrastructure. A streamlined onboarding process ensures that new employees are equipped with the necessary tools on Day 1 while maintaining strict adherence to organizational security protocols, access control policies, and compliance requirements. By following this checklist, the IT department minimizes downtime, reduces security vulnerabilities, and provides a professional, consistent experience for all incoming personnel.

## Phase 1: Pre-boarding (7-10 Days Prior to Start)

*   **Submit Hardware Request:** Determine employee role requirements and order laptop, monitor, docking station, and peripheral accessories.
*   **Account Provisioning:** Create the user’s primary identity (Active Directory/Azure AD/Okta) and corporate email address.
*   **License Allocation:** Assign necessary software licenses (Microsoft 365, Slack, Jira, Zoom, etc.) based on departmental needs.
*   **Security Baseline Configuration:** Pre-configure the device with the organization’s Mobile Device Management (MDM) profile (e.g., Jamf, Intune) to enforce disk encryption, firewall settings, and automated updates.
*   **Asset Tagging:** Assign a unique asset ID to all hardware and record the serial numbers in the IT Asset Management (ITAM) database.

## Phase 2: System Setup (3-5 Days Prior to Start)

*   **OS Imaging/Customization:** Deploy the standard company image, including security agents (CrowdStrike, SentinelOne) and core productivity software.
*   **Access Provisioning:** Grant access to role-specific folders, databases, or VPN groups based on the Principle of Least Privilege.
*   **Credential Generation:** Generate a temporary password for the initial login. Ensure the password is set to "Require Change at First Login."
*   **Documentation Packet:** Prepare a digital "IT Welcome Kit" containing links to the IT Knowledge Base, password manager instructions, and acceptable use policies.

## Phase 3: Day One Integration

*   **Device Handover:** Facilitate a brief session to confirm hardware functionality, verify login credentials, and troubleshoot any initial connectivity issues.
*   **MFA Enrollment:** Walk the employee through setting up Multi-Factor Authentication (MFA) on their secondary device to secure their identity.
*   **Policy Attestation:** Confirm the employee has digitally signed the Acceptable Use Policy (AUP) and Cybersecurity Awareness training acknowledgement.
*   **IT Orientation:** Provide a 15-minute walkthrough of the IT helpdesk ticketing portal and instructions on how to report security incidents.

## Pro Tips & Pitfalls

*   **Pro Tip: Automate Provisioning:** Utilize automation scripts (PowerShell/Bash) or an Identity Provider (IdP) integration to auto-provision accounts based on HRIS triggers. This eliminates manual errors.
*   **Pro Tip: The "Shadow Account" Test:** Before the employee starts, log in with a test account in their assigned role to verify they can access everything they need—and nothing they shouldn't.
*   **Pitfall: Lack of Documentation:** Do not rely on tribal knowledge. If you are configuring a custom tool, document the process in the internal Wiki immediately so the next onboarding is faster.
*   **Pitfall: Permission Creep:** Avoid granting "Admin" rights to new hires "just in case." Always start with standard user permissions and elevate access only upon documented request.

## Frequently Asked Questions

**Q: Should I provide a temporary password over Slack or Email?**
A: Never send credentials through standard messaging apps. Provide the temporary password verbally or via a secure password-sharing service that expires after one view.

**Q: What do I do if the hardware arrives late?**
A: Maintain a "buffer stock" of at least 3-5 pre-imaged devices in the office to ensure that unexpected shipping delays do not impact a new hire’s Day 1 productivity.

**Q: Who is responsible for offboarding if the employee leaves?**
A: The IT onboarding process should have a corresponding offboarding mirror. Ensure that access is revoked immediately upon departure to maintain security compliance (SOC2/ISO).

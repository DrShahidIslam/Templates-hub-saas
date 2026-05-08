# Standard Operating Procedure: IT Department New Hire Onboarding

The objective of this Standard Operating Procedure (SOP) is to provide a standardized, scalable framework for integrating new IT personnel into the organization. Proper onboarding is critical to maintaining security protocols, ensuring immediate productivity, and fostering a culture of technical excellence. This SOP covers the end-to-end lifecycle from hardware provisioning and credential management to access assignment and cultural integration.

## Phase 1: Pre-boarding (2 Weeks Prior to Start Date)

*   **Hardware Procurement:** Verify receipt of laptop, peripheral kit (docking station, monitors), and mobile device if applicable.
*   **Security Baseline:** Image the machine with the standard corporate security stack (EDR, VPN client, disk encryption, and patch management agent).
*   **Account Provisioning:** Create the user’s primary Identity Provider (IdP) account (e.g., Azure AD/Okta) and initiate provisioning for email and collaboration tools.
*   **Access Tiers:** Define the employee’s role-based access control (RBAC) levels. Request elevated privileges for production environments only if strictly necessary.
*   **Physical Setup:** Coordinate with Facilities to ensure the employee’s workspace, physical access badges, and office hardware are prepared.

## Phase 2: Day One Integration

*   **Credential Handoff:** Meet with the new hire to facilitate the initial password setup and MFA (Multi-Factor Authentication) registration.
*   **Hardware Walkthrough:** Assist with setting up the docking station, peripheral configurations, and local printer/network connectivity.
*   **Internal Portal Access:** Provide login credentials for the internal IT documentation portal (e.g., Confluence, Notion, or SharePoint).
*   **Shadowing Introduction:** Introduce the new hire to their assigned "onboarding buddy" for informal Q&A and cultural navigation.
*   **Security Policy Review:** Ensure the employee signs off on the Acceptable Use Policy (AUP) and understands data handling and incident reporting procedures.

## Phase 3: The First Week (Competency Training)

*   **Toolchain Orientation:** Conduct walk-throughs of the ticketing system (e.g., Jira Service Management, Zendesk) and documentation workflows.
*   **Network Topology Review:** Provide an overview of the server room layout, cloud environment architecture, and VPN/firewall policies.
*   **Emergency Protocols:** Review the Disaster Recovery (DR) plan and the employee's specific role during a system outage or cybersecurity incident.
*   **Continuous Feedback:** Hold an end-of-week check-in to identify any "friction points" in the setup or documentation that the new hire has encountered.

## Pro Tips & Pitfalls

*   **Pro Tip: Automation is King:** Use scripts (e.g., PowerShell, Bash) or MDM (Mobile Device Management) profiles like Intune/Jamf to automate the deployment of applications. Do not perform manual software installations unless absolutely necessary.
*   **Pro Tip: The Documentation Gap:** Use the new hire as a "documentation stress test." Ask them to follow existing SOPs to complete a task; if they fail, update the documentation immediately based on their feedback.
*   **Pitfall: Over-Privileging:** Avoid the "convenience trap" of granting global admin rights on day one. Follow the Principle of Least Privilege (PoLP) and increase access as they demonstrate competency.
*   **Pitfall: Communication Silos:** Ensure the new hire is added to all relevant technical Slack/Teams channels immediately to prevent them from feeling isolated from the team's ongoing projects.

## Frequently Asked Questions (FAQ)

**1. How do I handle access for employees joining from a remote location?**
Ship pre-configured, encrypted hardware via secure courier. Ensure the device is auto-enrolled in your MDM, allowing you to push necessary applications and security policies the moment the device connects to the internet.

**2. What is the standard process for offboarding if a new hire does not pass the probation period?**
Ensure the exit SOP is just as rigid as the onboarding one. Revoke all IdP access, trigger a remote wipe on hardware, and perform an audit of all active system logs linked to the user ID.

**3. Should I grant temporary admin access to new IT staff?**
Never grant permanent admin access by default. Use a Privileged Access Management (PAM) solution to provide "Just-in-Time" (JIT) access that expires after a set period, logging every action taken during that time.
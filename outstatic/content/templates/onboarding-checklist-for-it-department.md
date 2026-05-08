# Standard Operating Procedure: IT Department New Hire Onboarding

The objective of this onboarding process is to ensure that every new IT team member is fully integrated into our technical infrastructure, security protocols, and cultural environment within their first week. This SOP establishes a standardized workflow to minimize downtime, ensure strict adherence to cybersecurity compliance, and provide a seamless transition from "hire" to "productive contributor." Failure to adhere to these steps can result in access gaps, security vulnerabilities, or a fragmented onboarding experience for the employee.

## Phase 1: Pre-boarding (T-Minus 5 Days)

*   **Provisioning Hardware:** Procure, configure, and ship the required workstation, peripherals (monitors, docking stations), and mobile devices.
*   **Account Provisioning:** Create the standard identity set: Corporate email, Slack/Teams, Jira/Confluence, GitHub/GitLab, and SSO dashboard access.
*   **System Access Rights:** Request access to the VPN, internal networks, production environments, and cloud infrastructure (AWS/Azure/GCP) based on the "Least Privilege" principle.
*   **Security Setup:** Pre-configure Multi-Factor Authentication (MFA) tokens and ensure the device is enrolled in Mobile Device Management (MDM) software (e.g., Jamf or Intune).
*   **Manager Briefing:** Assign an "Onboarding Buddy" to guide the new hire through the departmental culture and informal technical questions.

## Phase 2: Day One - Systems & Security Orientation

*   **Welcome Session:** Conduct a high-level briefing on the IT department’s roadmap and strategic priorities for the quarter.
*   **Hardware Handover:** Confirm receipt of hardware and assist with physical setup, cable management, and ergonomic adjustments.
*   **Security Compliance Training:** Mandatory review of the Data Privacy Policy, Acceptable Use Policy, and Incident Response protocols.
*   **Access Verification:** Walk the new hire through logging into core tools to verify all permissions are provisioned correctly.
*   **Infrastructure Walkthrough:** Provide a high-level visual map of the current architecture (draw a topology map together).

## Phase 3: Week One - Integration & Knowledge Transfer

*   **Tooling Deep-Dive:** Hands-on training for our ticketing system (Jira), incident management tool (PagerDuty), and version control best practices.
*   **Codebase/Environment Review:** Introduce the new hire to the repository structure, documentation standards, and the CI/CD pipeline.
*   **Shadowing Sessions:** Schedule 30-minute blocks for the new hire to shadow a senior engineer during a live troubleshooting session or deployment.
*   **Initial Task Assignment:** Assign a "low-stakes" first ticket or documentation cleanup task to foster an immediate sense of contribution.
*   **Check-in Meeting:** Hold a 1:1 meeting to address any blockers, clarify expectations, and gather feedback on the onboarding process.

## Pro Tips & Pitfalls

*   **Pro Tip: The "Sandbox" Environment.** Provide the new hire with a sandbox or staging environment to experiment with before granting write access to production. It drastically reduces anxiety and prevents accidental outages.
*   **Pro Tip: Automate Access.** Use Infrastructure as Code (IaC) or automated provisioning tools to ensure every team member has the exact same baseline access levels.
*   **Pitfall: Information Overload.** Do not dump all documentation on Day One. Use a structured "drip-feed" approach for training modules to keep the employee from feeling overwhelmed.
*   **Pitfall: Ignoring Culture.** IT is often seen as a silo. Ensure the new hire is introduced to non-technical departments they will be supporting, such as HR or Sales, to build cross-functional empathy.

## Frequently Asked Questions

**Q: What if the employee does not have access to a specific tool by Day One?**
A: Immediately log a high-priority ticket in the internal IT queue. Do not allow the new hire to use unauthorized third-party workarounds; keep them focused on mandatory security training until access is resolved.

**Q: Should the Onboarding Buddy be their direct supervisor?**
A: No. We recommend the Buddy be a peer or a team lead. This creates a "safe space" for the new hire to ask "dumb questions" without feeling like they are being evaluated for their role performance.

**Q: How do we measure the success of the onboarding process?**
A: We utilize a two-pronged approach: A 30-day "Time to First Commit/Resolution" metric and a qualitative feedback survey sent to the new hire at the end of their first month.
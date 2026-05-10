# Standard Operating Procedure: ICT Departmental Operations

This Standard Operating Procedure (SOP) serves as the foundational framework for the Information and Communication Technology (ICT) department. Its purpose is to ensure the consistent, secure, and efficient delivery of technology services across the organization. By standardizing processes for system maintenance, user support, and security protocols, this document aims to minimize downtime, mitigate operational risks, and align technical output with broader business objectives. All ICT personnel are required to adhere to these guidelines to ensure institutional continuity and service excellence.

## 1. Incident Management and Helpdesk Support
*   **Ticket Logging:** Every request, regardless of origin (email, phone, walk-in), must be registered in the centralized ticketing system.
*   **Categorization:** Assign a priority level (P1: Critical/System-wide, P2: Urgent/Department-wide, P3: Standard/Single User).
*   **Initial Assessment:** Conduct a remote diagnostic check before escalating to on-site physical support.
*   **Resolution Documentation:** Update the ticket with clear, concise steps taken to resolve the issue to build a departmental Knowledge Base (KB).
*   **User Verification:** Confirm the issue is resolved with the end-user before closing the ticket.

## 2. Infrastructure and Server Maintenance
*   **Scheduled Backups:** Perform automated daily incremental backups and weekly full-system backups. Verify integrity via monthly restoration tests.
*   **Patch Management:** Review and deploy security patches for all OS and critical applications during the defined maintenance window (e.g., Saturday, 02:00 AM).
*   **Hardware Health Checks:** Conduct physical inspections of server rooms, including cooling systems, UPS status, and cable organization.
*   **Resource Monitoring:** Review CPU, RAM, and storage utilization metrics weekly to identify capacity bottlenecks before they result in outages.

## 3. Network and Security Protocols
*   **Access Control:** Perform a quarterly review of user permissions. Terminated employees must have all access revoked within 60 minutes of departure notification.
*   **Firewall & Endpoint Protection:** Ensure real-time virus definitions are pushed to all endpoints. Review firewall logs weekly for suspicious ingress/egress patterns.
*   **Password Policy:** Enforce mandatory password rotation every 90 days with complexity requirements (minimum 12 characters, including special characters).
*   **Network Audits:** Scan the network monthly for unauthorized devices or "shadow IT" hardware.

## 4. Asset Lifecycle and Procurement
*   **Inventory Tracking:** Maintain an up-to-date Asset Management Database (AMDB) recording serial numbers, purchase dates, and assigned users for all hardware.
*   **Standardization:** Adhere to the approved "Hardware Catalog" for all new procurement to simplify future maintenance and spare parts inventory.
*   **Disposal (e-Waste):** Ensure all storage media (HDD/SSD) is physically destroyed or cryptographically erased before hardware is donated or recycled.

## Pro Tips & Pitfalls

### Pro Tips
*   **Automation:** Automate repetitive tasks such as user onboarding, patch deployment, and report generation to reduce human error.
*   **The "Rule of Three":** Keep backups in three locations: one primary, one local off-site (cloud), and one offline/cold storage.
*   **Communication:** Even if an issue isn't fixed, provide regular updates to users. A lack of communication causes more frustration than the outage itself.

### Pitfalls
*   **"Cowboy" Changes:** Avoid making "quick fixes" directly to production environments without a peer review or change request process.
*   **Ignoring Documentation:** Failing to document a configuration change is a technical debt that will inevitably lead to a future crisis.
*   **Neglecting Cybersecurity Culture:** Do not assume users understand the risks. Treat security training as a fundamental part of the ICT mission.

## Frequently Asked Questions (FAQ)

**Q: How do we handle system outages during off-hours?**
A: Off-hours outages are managed via the "On-Call Rotation" roster. The on-call technician is alerted via the automated monitoring system and must log the incident in the ticketing system immediately upon intervention.

**Q: What is the procedure for emergency server reboots?**
A: Emergency reboots must be approved by the ICT Manager or Lead Systems Administrator. If the emergency is catastrophic, the responder should document the "who, what, and why" in the incident log post-facto.

**Q: How often should the ICT department review this SOP?**
A: This SOP must be reviewed bi-annually or immediately following a major change in infrastructure or organizational structure to ensure relevance and compliance.
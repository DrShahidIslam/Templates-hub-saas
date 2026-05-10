# Standard Operating Procedure: Access Control Management

This document establishes the formal protocol for the provisioning, monitoring, and revocation of physical and logical access to corporate assets. The objective of this SOP is to ensure that only authorized personnel have access to sensitive areas and systems, thereby mitigating risks related to data breaches, asset theft, and operational disruption. Compliance with this procedure is mandatory for all department heads, IT administrators, and security personnel.

## 1. Access Provisioning and Request Workflow
*   **Submit Formal Request:** All access requests must be initiated via the centralized IT/Security ticketing system by the employee’s direct manager.
*   **Define Scope:** Requests must clearly specify the level of access required (e.g., Read-Only, Read-Write, Administrator) and the duration of access (permanent vs. temporary).
*   **Managerial Approval:** Security teams must verify that the request has been approved by the department head and, where necessary, the Data Owner.
*   **Identity Verification:** New employees must provide government-issued identification before receiving physical access badges.
*   **Least Privilege Audit:** The approving authority must confirm that the requested access is the minimum necessary for the user to perform their job functions.

## 2. Physical Access Control Protocols
*   **Credential Issuance:** Issue unique, non-transferable access cards to verified personnel.
*   **Visitor Management:** All visitors must sign in, present identification, receive a visitor badge, and be escorted at all times by a host employee.
*   **Zone Segmentation:** High-security zones (Server Rooms, Archive Storage) must require Multi-Factor Authentication (MFA) or dual-key entry protocols.
*   **Maintenance:** Monthly inspections of badge readers, door strikes, and magnetic locks to ensure functional integrity.

## 3. Logical Access Control (Digital Assets)
*   **User Provisioning:** Create unique user IDs; generic or shared accounts are strictly prohibited.
*   **Authentication Standards:** Enforce the use of MFA for all cloud-based applications and VPN access.
*   **Role-Based Access Control (RBAC):** Assign permissions based on pre-defined security groups (e.g., Finance, Engineering, HR) rather than individual user accounts to ensure consistency.
*   **Automated Offboarding:** Integrate the Access Control System with the HR information system to trigger immediate account disabling upon employee termination.

## 4. Periodic Review and De-provisioning
*   **Quarterly Access Audits:** Department managers must review all assigned permissions within their teams and confirm continued necessity.
*   **Immediate Revocation:** Access for terminated employees must be revoked within 60 minutes of the final working hour.
*   **Account Cleanup:** Identify and disable "stale" accounts (accounts with no login activity for 30+ days).
*   **Audit Logging:** Retain access logs for a minimum of 12 months for compliance reporting and incident investigation.

## Pro Tips & Pitfalls
*   **Pro Tip:** Implement "Just-in-Time" (JIT) access for administrative tasks. Instead of permanent admin rights, grant elevated privileges for a set window (e.g., 4 hours) that automatically expires.
*   **Pitfall - Credential Sharing:** Never allow employees to "buddy pass" or share badges. This creates an un-auditable security hole and is grounds for disciplinary action.
*   **Pitfall - Forgotten Revocation:** The biggest security risk is the "orphan account." Ensure your exit checklist specifically includes a sign-off from IT to confirm account closure.

## Frequently Asked Questions (FAQ)

**Q: What should I do if an employee loses their access badge?**
A: Immediately report the lost badge to the Security Department so the card ID can be deactivated in the system. Issue a replacement badge only after the original has been marked as "Lost" in the database to prevent unauthorized use.

**Q: Are there exceptions for emergency access?**
A: Yes, in the event of a critical system failure, a "Break-Glass" account may be utilized. These accounts are heavily monitored, and any activity performed must be documented and reviewed by the Security Operations Center (SOC) immediately following the incident.

**Q: How often should access permissions be re-certified?**
A: Access permissions should undergo a full formal review by managers every 90 days. High-privileged access (System Admin/Root) should be audited monthly.
# Standard Operating Procedure: Software Audit Protocol

This Standard Operating Procedure (SOP) defines the systematic approach for conducting a comprehensive software audit. The primary objective of this process is to ensure organizational compliance, identify security vulnerabilities, optimize license utilization, and verify that software assets align with business requirements. By adhering to this checklist, the operations team will maintain a secure, cost-effective, and fully documented software ecosystem, mitigating the risks of non-compliance, technical debt, and unauthorized shadow IT.

## 1. Inventory & Compliance Review
*   **Generate Master Inventory:** Pull a comprehensive list of all installed software from the Mobile Device Management (MDM) or IT Asset Management (ITAM) system.
*   **License Reconciliation:** Compare the number of active installations against the number of purchased licenses. Identify over-licensed (wasted spend) and under-licensed (compliance risk) products.
*   **Subscription Audit:** Review all SaaS recurring costs. Identify "zombie accounts" (inactive users) and duplicate services that serve the same business function.
*   **Compliance Documentation:** Verify the existence of End User License Agreements (EULA) and Service Level Agreements (SLA) for all mission-critical software.

## 2. Security & Vulnerability Assessment
*   **Version Control:** Cross-reference current software versions against the vendor’s latest stable release. Note any versions that have reached End-of-Life (EOL) or End-of-Support (EOS).
*   **Patch Management Status:** Ensure all critical security patches are applied. Flag systems that have missed more than one mandatory update cycle.
*   **Permissions Audit:** Review user access levels. Remove administrative privileges for non-IT personnel and ensure the Principle of Least Privilege (PoLP) is enforced.
*   **Integrations Check:** Review third-party API integrations and plugins. Audit data access permissions for these tools to ensure sensitive data is not being exfiltrated.

## 3. Operational Performance & Shadow IT
*   **Usage Analytics:** Analyze login frequency and feature utilization. Software with less than 20% utilization should be flagged for decommissioning.
*   **Shadow IT Identification:** Compare browser history, network traffic logs, and expense reports against the Master Inventory to identify unauthorized software in use by employees.
*   **Interoperability Review:** Assess if current software creates data silos. Evaluate if existing tools are compatible with the current tech stack or if they are causing workflow bottlenecks.
*   **Documentation Check:** Confirm that technical documentation, disaster recovery plans, and contact information for software support are readily accessible.

## Pro Tips & Pitfalls

*   **Pro Tip: Automate Discovery.** Use agent-based discovery tools rather than manual spreadsheets to ensure 100% visibility of assets. Manual logs are outdated the moment they are saved.
*   **Pro Tip: Establish a "Sunset Policy."** Create a clear business process for decommissioning software to ensure that when a tool is removed, all associated data is archived and user access is revoked.
*   **Pitfall: Ignoring Mobile/Cloud.** A common mistake is focusing only on on-premise hardware. Your audit must encompass mobile applications, cloud storage, and browser-based plugins.
*   **Pitfall: Focus on "How" not "Why."** Don't just audit the version number. Always ask if the software still provides value to the organization. Sometimes the biggest risk is maintaining a tool that the business has outgrown.

## Frequently Asked Questions (FAQ)

**1. How often should a software audit be performed?**
For most organizations, a comprehensive software audit should be conducted bi-annually. High-growth companies or those in highly regulated industries (e.g., Finance, Healthcare) should perform quarterly audits.

**2. What should I do if I find unauthorized software (Shadow IT)?**
Do not immediately delete it. Investigate why the employee is using it. Often, Shadow IT signals a gap in the organization’s current toolset. If the software is secure, consider bringing it into the official IT stack; if it is insecure, provide a sanctioned alternative.

**3. What is the most important metric to track during an audit?**
"License Utilization Rate" is arguably the most critical for operations. It highlights both financial waste (paying for unused licenses) and potential security risks (unused accounts that haven't been deactivated).
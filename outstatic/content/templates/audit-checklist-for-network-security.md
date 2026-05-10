# Standard Operating Procedure: Network Security Audit

## Introduction
This Standard Operating Procedure (SOP) outlines the mandatory framework for conducting a comprehensive network security audit. The primary objective of this audit is to identify vulnerabilities, verify the efficacy of existing security controls, ensure regulatory compliance, and mitigate the risk of unauthorized access or data exfiltration. All personnel involved in the audit must adhere to the principle of least privilege, ensuring that audit activities do not disrupt business-critical operations. This process should be performed on a quarterly basis or immediately following any significant network architecture changes.

## Phase 1: Perimeter and Access Control Audit
*   Verify that all firewalls are running the latest firmware versions with current security patches.
*   Audit firewall rule sets to ensure "any-any" rules are disabled and that only necessary ports are open.
*   Confirm that Multi-Factor Authentication (MFA) is enforced for all remote access points, including VPNs and Cloud management portals.
*   Review external-facing IP addresses and confirm that non-essential services are not exposed to the public internet.
*   Validate that guest Wi-Fi networks are logically isolated from the corporate production network via VLANs.

## Phase 2: Endpoint and Device Security Audit
*   Confirm that 100% of network-connected devices have up-to-date Endpoint Detection and Response (EDR) software installed.
*   Verify that unauthorized devices are blocked from the network through Network Access Control (NAC) mechanisms.
*   Audit hardware inventory against the asset management database to identify "rogue" devices.
*   Ensure that all network infrastructure equipment (switches, routers, load balancers) has default credentials changed and local management access restricted.
*   Check for the presence of outdated protocols (e.g., SMBv1, Telnet, SNMPv1/v2) and disable them in favor of secure alternatives (e.g., SSH, SNMPv3).

## Phase 3: Monitoring, Logging, and Incident Response
*   Verify that logs from all core network devices are being forwarded to a centralized, write-once log management system or SIEM.
*   Test alert thresholds to ensure that anomalous traffic patterns (e.g., high volume outbound data, brute force attempts) trigger immediate notifications.
*   Confirm that log retention policies comply with internal data governance and legal requirements.
*   Conduct a review of the last three incident response reports to verify that identified network security gaps were effectively remediated.
*   Ensure NTP (Network Time Protocol) is synchronized across all devices to maintain accurate audit trails during investigations.

## Phase 4: Encryption and Traffic Analysis
*   Audit the use of TLS 1.2 or higher for all data-in-transit; verify that deprecated SSL/TLS versions are disabled.
*   Review VPN encryption protocols to ensure robust standards (e.g., AES-256) are in use.
*   Analyze traffic patterns for unauthorized inter-VLAN communication that bypasses internal inspection points.
*   Verify that internal certificates are valid and that there are no "shadow" certificate authorities issuing trust in the environment.

## Pro Tips & Pitfalls
*   **Pro Tip: Automate Discovery.** Use automated network scanning tools (like Nessus or OpenVAS) to identify vulnerabilities, but never rely solely on automated reports; manual validation is critical to rule out false positives.
*   **Pitfall: The "Set and Forget" Firewall.** A common mistake is configuring firewalls during deployment and failing to clean up legacy rules. Perform a "cleanup" audit every six months to remove redundant rules.
*   **Pro Tip: Segment, Segment, Segment.** Even if the perimeter is breached, a highly segmented network limits lateral movement. Prioritize testing the "blast radius" of your segments.
*   **Pitfall: Ignoring Physical Security.** Network security is moot if an attacker can physically plug a device into a wall jack. Ensure that unused switch ports are administratively disabled and physically secured.

## Frequently Asked Questions

**Q: How often should a full network security audit be performed?**
A: A comprehensive audit should be performed at least quarterly. Additionally, ad-hoc audits must be triggered following any significant architectural changes, security incidents, or updates to regulatory requirements (such as GDPR, HIPAA, or PCI-DSS).

**Q: Should the audit be performed by internal or external teams?**
A: Internal teams are excellent for routine hygiene and maintenance checks. However, an independent third-party audit should be conducted annually to provide an unbiased perspective and to satisfy external compliance requirements.

**Q: What is the most critical item to check in an audit?**
A: While all components are vital, identity and access management (IAM) remains the most critical. If credentials or access privileges are compromised, technical network controls become far less effective. Always prioritize the verification of MFA and least-privilege access rules.
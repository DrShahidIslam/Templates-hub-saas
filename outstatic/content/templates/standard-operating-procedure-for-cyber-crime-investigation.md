# Standard Operating Procedure: Cyber Crime Investigation

This Standard Operating Procedure (SOP) outlines the professional, forensically sound methodology required to investigate cyber-related incidents. The objective is to identify the scope of the breach, preserve volatile and non-volatile evidence, and maintain a verifiable chain of custody to ensure that findings are admissible in legal proceedings. This document serves as the primary protocol for security analysts and forensic investigators operating within a structured corporate or law enforcement environment.

## Phase 1: Incident Identification and Initial Response
*   **Acknowledge Incident:** Log the date, time, and identity of the reporter.
*   **Classification:** Determine if the event is a security incident (policy violation) or a cyber crime (criminal act).
*   **Personnel Notification:** Activate the Incident Response (IR) team and, if necessary, legal counsel and external law enforcement.
*   **Establish Communication:** Secure a dedicated, out-of-band communication channel (e.g., encrypted messaging) to prevent the attacker from monitoring the investigation.

## Phase 2: Evidence Preservation and Acquisition
*   **Order of Volatility:** Prioritize evidence collection based on the order of volatility (RAM, cache, swap, local storage, network traffic).
*   **Live Memory Capture:** Perform a memory dump before shutting down any systems to capture active malicious processes and encryption keys.
*   **Forensic Imaging:** Create bit-stream images (E01 or raw format) of all relevant physical or virtual drives using write-blockers.
*   **Hashing:** Generate cryptographic hashes (SHA-256 or higher) immediately upon acquisition to ensure data integrity.
*   **Chain of Custody:** Document every individual who handled the evidence, the exact time of transfer, and the physical location where evidence is stored.

## Phase 3: Analysis and Investigation
*   **Timeline Reconstruction:** Build a comprehensive timeline of events (Super Timeline) correlating logs from servers, firewalls, and endpoints.
*   **Malware Analysis:** Detonate suspected artifacts in a sandboxed, air-gapped environment to observe behavior.
*   **Attribution/Indicators of Compromise (IoCs):** Identify patterns, IP addresses, domains, and tools used by the threat actor to identify the TTPs (Tactics, Techniques, and Procedures).
*   **Data Exfiltration Assessment:** Determine what specific data was accessed, modified, or exfiltrated.

## Phase 4: Reporting and Remediation
*   **Incident Report:** Compile a final document including the executive summary, methodology, evidence logs, and forensic findings.
*   **System Restoration:** Sanitize systems and restore from clean backups, ensuring all vulnerabilities identified during the investigation are patched.
*   **Lessons Learned:** Conduct a post-mortem review to identify gaps in defense and update security posture.

## Pro Tips & Pitfalls

*   **Pitfall - The "Power-Down" Reflex:** Never pull the plug on a suspected machine unless absolutely necessary. Doing so clears the RAM, destroying volatile evidence like running malware, decrypted passwords, and network connections. Always perform a memory dump first.
*   **Pro Tip - Use Time Sync:** Ensure all logging devices are synchronized to a single NTP (Network Time Protocol) source. Discrepancies in timestamps across servers can render a forensic timeline useless.
*   **Pitfall - Working on Original Evidence:** Never perform analysis directly on the original drive. Always work on a forensic clone.
*   **Pro Tip - Documentation:** If it isn't documented, it didn't happen. Maintain a detailed contemporaneous logbook of every command run and every observation made.

## Frequently Asked Questions (FAQ)

**Q: At what point should I involve law enforcement?**
A: Law enforcement should be involved as soon as the incident is classified as a crime (e.g., unauthorized access, extortion, or intellectual property theft) and legal counsel has authorized the engagement to manage liability.

**Q: How do I handle evidence that is stored in the cloud?**
A: Cloud forensics requires a different approach; prioritize API logs (AWS CloudTrail, Azure Monitor) and snapshots of instances. Coordinate with the cloud service provider (CSP) immediately to prevent the deletion of logs.

**Q: What is the most common mistake made during cyber investigations?**
A: Failure to maintain the chain of custody. If you cannot prove that the evidence has remained untampered with from the moment of collection to the moment of trial, the entire investigation can be dismissed in court.
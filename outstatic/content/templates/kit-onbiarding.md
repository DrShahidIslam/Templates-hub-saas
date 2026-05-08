# Standard Operating Procedure: Employee Hardware & Software Kit Onboarding

Effective kit onboarding is the foundation of a new employee’s productivity and professional integration. This SOP outlines the standardized process for provisioning, configuring, and deploying hardware and software assets to ensure every new hire has a seamless Day 1 experience. By following this protocol, IT and Operations teams minimize downtime, maintain security compliance, and ensure hardware inventory accuracy.

## Phase 1: Procurement & Provisioning
*   Verify the new hire’s role requirements (e.g., standard vs. power user hardware).
*   Check current inventory levels in the Asset Management System (AMS).
*   Order new hardware if stock levels are below the required threshold.
*   Assign specific asset tags to the new employee record in the internal database.
*   Confirm shipping address with the People/HR department.

## Phase 2: Configuration & Security Hardening
*   Perform a factory reset/re-image of the machine to ensure a clean OS installation.
*   Install mandatory security software (EDR, Antivirus, and Disk Encryption).
*   Create and verify company email credentials and SSO (Single Sign-On) access.
*   Configure VPN profiles and network access controls based on the employee's department.
*   Pre-install standard software suite (e.g., Microsoft 365, Slack, Zoom, Password Manager).
*   Perform a "Sanity Check": Boot the machine, run updates, and verify that all pre-installed apps launch correctly.

## Phase 3: Packaging & Deployment
*   Include standard peripheral kit (Headset, Mouse, Laptop Stand, and required dongles).
*   Enclose a "Welcome Guide" containing IT support contact information and basic troubleshooting steps.
*   Generate a shipping label with tracking via the company’s preferred courier.
*   Send a tracking notification email to the new hire three business days before their start date.
*   Verify delivery status through the courier portal.

## Phase 4: Final Handover & Verification
*   Schedule a "Tech Setup" call with the new hire on their first day.
*   Guide the employee through MFA (Multi-Factor Authentication) enrollment.
*   Confirm the employee can access the company intranet and primary project management tool.
*   Update the AMS to reflect "Deployed" status for all assigned hardware.

## Pro Tips & Pitfalls
*   **Pro Tip:** Maintain a "Golden Image" or pre-configured disk image. Re-imaging should take no more than 30 minutes.
*   **Pro Tip:** Automate your provisioning where possible using MDM (Mobile Device Management) tools like Jamf or Intune.
*   **Pitfall:** Never ship hardware without verifying the shipping address with HR at least 5 business days in advance.
*   **Pitfall:** Do not skip the "Sanity Check." Delivering a laptop that fails to boot or has a faulty webcam is a major negative first impression.

## Frequently Asked Questions

**Q: What if the employee reports a hardware issue on Day 1?**
A: Immediately initiate the "Hardware Swap" protocol. Prioritize shipping a replacement device via overnight courier and provide a pre-paid return label for the defective unit.

**Q: Should I pre-install proprietary or role-specific software?**
A: Only pre-install "Standard" software. Role-specific software should be installed during the guided tech setup session to ensure the user has the correct licenses and configurations.

**Q: How do we track hardware returned by offboarded employees?**
A: Every kit must be tracked via an Asset Tag ID. When an employee leaves, the device must be marked as "Recovered" in the AMS, audited for physical damage, and then moved back to "Inventory" for future refurbishment.
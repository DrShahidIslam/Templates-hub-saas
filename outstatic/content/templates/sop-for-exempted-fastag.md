---
status: published
title: Sop For Exempted Fastag
publishedAt: '2026-05-10T18:48:01.238Z'
---
# Standard Operating Procedure: Processing Exempted FASTag Requests

## Introduction
This Standard Operating Procedure (SOP) outlines the standardized process for managing, verifying, and authorizing vehicles eligible for FASTag exemption as per the guidelines set by the National Highways Authority of India (NHAI). The objective is to ensure that only authorized exempt vehicles are permitted to pass through designated lanes without toll deduction while maintaining strict audit trails to prevent revenue leakage and unauthorized misuse of exemption protocols.

## Phase 1: Documentation and Verification
*   **Request Intake:** Collect the formal application from the vehicle owner/representative.
*   **Identity Verification:** Validate the official ID of the applicant (Aadhar/PAN/Government ID).
*   **Vehicle Documentation:** Verify the original Registration Certificate (RC) to ensure the vehicle class matches the exemption category (e.g., VVIP, Emergency Service, Local Resident).
*   **Exemption Eligibility Check:** Confirm if the vehicle qualifies under current NHAI gazette notifications (e.g., Constitutional dignitaries, Defense personnel, specific local permit holders).
*   **Data Entry:** Input vehicle details into the Toll Management System (TMS) under the "Exempted Category" master file.

## Phase 2: System Configuration and Tag Mapping
*   **Whitelisting:** Link the vehicle’s existing FASTag ID (or a dedicated RFID sticker) to the exemption master database.
*   **System Update:** Push the updated database to the Lane Controller software to ensure the Toll Plaza reader recognizes the tag as a "Zero Transaction" entry.
*   **Category Tagging:** Assign the correct exemption code in the backend software for accurate reporting.
*   **Validity Period Setting:** Define the expiry date for the exemption based on the permit validity; set a system reminder for 30 days prior to expiration.

## Phase 3: Operational Execution and Monitoring
*   **Lane Monitoring:** Ensure that the lane operator is alerted when an exempted vehicle approaches.
*   **Visual Validation:** The Toll Collector must perform a visual check of the vehicle and the exemption indicator on the console before clearing the barrier.
*   **Transaction Logging:** Even if the transaction value is zero, the system must log the entry to maintain accurate traffic volume data.
*   **Exception Reporting:** Generate a daily "Zero Transaction" report for reconciliation to ensure no anomalies exist.

## Pro Tips & Pitfalls
*   **Pro Tip:** Maintain a physical binder of "Authorised Exempted Vehicles" at the control room for manual verification during power outages or system downtime.
*   **Pitfall - Expired Permits:** A common oversight is allowing vehicles with expired exemption permits to pass. Always enforce a hard-stop policy if the renewal is not processed 48 hours before expiry.
*   **Pro Tip:** Conduct surprise audits of the exemption database quarterly to remove vehicles that have been sold, decommissioned, or whose exemption status has been revoked.
*   **Pitfall - System Sync Lag:** Ensure the Toll Plaza database synchronizes with the central server at least once every 24 hours to prevent "Tag Not Found" errors for valid exempt vehicles.

## FAQ
**Q: What happens if an exempted vehicle's FASTag is damaged or unreadable?**
A: The operator must verify the vehicle license plate against the whitelist database. If it matches, the operator can manually override the barrier and log the entry as an "Exception - Tag Unreadable."

**Q: Can a local resident claim exemption if they have moved out of the area?**
A: No. Exemption is tied to the current address/permit. Once the residency status changes, the vehicle must be removed from the local exemption list immediately to prevent revenue loss.

**Q: How often should the exemption list be audited?**
A: It is recommended to perform a full audit of the exemption database every 90 days to ensure that all listed vehicles still meet the eligibility criteria and to purge records of vehicles no longer in service.

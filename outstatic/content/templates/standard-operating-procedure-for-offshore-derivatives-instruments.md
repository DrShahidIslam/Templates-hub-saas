---
status: published
title: 'ODI & P-Note Compliance: Standard Operating Procedure Guide'
publishedAt: '2026-05-10T18:48:01.881Z'
description: >-
  Master the lifecycle management of Offshore Derivatives Instruments. Learn
  essential protocols for KYC, trade execution, and regulatory reporting
  compliance.
seo_optimized: true
---
# Standard Operating Procedure: Offshore Derivatives Instruments (ODI) Management

This Standard Operating Procedure (SOP) outlines the mandatory protocols for the lifecycle management, reporting, and compliance monitoring of Offshore Derivatives Instruments (ODIs), including Participatory Notes (P-Notes). Given the stringent regulatory frameworks governing cross-border derivatives—specifically under SEBI (Foreign Portfolio Investors) Regulations—this document ensures that all transactions are executed with full transparency, robust Know-Your-Customer (KYC) standards, and precise regulatory reporting to mitigate legal and reputational risks.

## Phase 1: Pre-Trade Compliance & Eligibility Verification
*   **Entity Verification:** Confirm the potential ODI subscriber is a registered Foreign Portfolio Investor (FPI) or an eligible entity under applicable local jurisdiction laws.
*   **KYC/AML Validation:** Perform enhanced due diligence (EDD) to ensure the end-beneficiary is identified and screened against global sanctions lists (OFAC, UN, EU).
*   **Purpose Check:** Validate that the ODI is intended for hedging or speculative purposes consistent with the client's stated investment mandate.
*   **Eligibility Confirmation:** Ensure the underlying assets are permitted for ODI issuance and do not violate sector-specific caps or prohibited categories.

## Phase 2: Trade Execution and Issuance
*   **Documentation Review:** Confirm execution of the ODI Subscription Agreement and any master netting agreements.
*   **Asset Allocation:** Execute the trade in the underlying local market and simultaneously hedge the position with the corresponding ODI issuance.
*   **Transaction Logging:** Record the unique trade identifier, date, time, underlying asset quantity, and strike price in the internal ODI Register.
*   **Collateral Management:** Verify that appropriate margin/collateral has been posted by the subscriber in accordance with the signed Credit Support Annex (CSA).

## Phase 3: Regulatory Reporting and Monitoring
*   **Reporting Timelines:** Ensure all ODI issuance/transfer/cancellation reports are submitted to the local regulator (e.g., NSDL/SEBI) within the specified T+N day deadline.
*   **End-Beneficiary Disclosure:** Maintain a dynamic list of ultimate beneficial owners (UBOs) and ensure any changes in ownership are reported to the regulator immediately.
*   **Position Limit Monitoring:** Monitor aggregate ODI positions against total FPI holdings to ensure compliance with prescribed regulatory caps.
*   **Quarterly Audit:** Conduct a quarterly reconciliation between internal ledgers and the depository's records to identify and resolve discrepancies.

## Phase 4: Lifecycle Maintenance and Expiry
*   **Corporate Actions:** Implement procedures to pass through dividends, interest, and other corporate action entitlements to the ODI holder.
*   **Redemption/Cancellation:** Process redemption requests, ensuring all outstanding regulatory obligations are met before releasing funds.
*   **Record Archiving:** Securely store all trade confirmations, KYC documents, and reporting logs for the minimum statutory period (typically 7–10 years).

## Pro Tips & Pitfalls

*   **Pro Tip (The "Look-Through" Approach):** Always adopt a "look-through" approach for multi-tiered corporate structures to identify the true UBO. Regulators prioritize transparency over formal legal structure.
*   **Pro Tip (Automated Reporting):** Implement an automated trade-reporting feed that triggers alerts 24 hours prior to a regulatory filing deadline to avoid late-filing penalties.
*   **Pitfall (Fragmented Data):** Relying on disparate spreadsheets for KYC and Trade Logs is a major operational risk. Use a centralized integrated platform to prevent "data drift."
*   **Pitfall (Inadequate Hedging):** Failing to ensure the hedge is perfectly matched with the ODI issuance can create unintended "naked" exposure, leading to significant balance sheet volatility.

## Frequently Asked Questions (FAQ)

**1. What is the difference between an ODI and a direct FPI investment?**
An FPI invests directly in the local market under their own registration. An ODI is a derivative instrument issued by an FPI to an overseas investor, allowing them to gain exposure to local assets without needing to register as an FPI themselves.

**2. How often must UBO information be updated?**
UBO information must be validated at least annually, but any material change in the ownership or control of the subscriber entity must be reported to the issuing FPI and the regulator immediately.

**3. What happens if a regulatory reporting deadline is missed?**
Failure to meet reporting deadlines can lead to heavy financial penalties, suspension of the FPI’s ability to issue further ODIs, and increased regulatory scrutiny (audits) on all future transactions.


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the primary requirement for ODI subscriber verification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subscribers must be confirmed as registered Foreign Portfolio Investors (FPIs) or eligible entities under local jurisdictional laws, followed by enhanced due diligence (EDD) for KYC/AML."
      }
    },
    {
      "@type": "Question",
      "name": "What are the regulatory reporting deadlines for ODI issuances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All ODI issuance, transfer, or cancellation reports must be submitted to relevant regulators (e.g., NSDL/SEBI) within the specified T+N day deadline."
      }
    },
    {
      "@type": "Question",
      "name": "How is beneficial ownership managed in ODI transactions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firms must maintain a dynamic list of ultimate beneficial owners (UBOs) and report any changes in ownership to the regulator immediately."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ODI Compliance Management System",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web-based",
  "description": "A standardized protocol framework for managing the lifecycle, compliance, and regulatory reporting of Offshore Derivatives Instruments and Participatory Notes.",
  "offers": {
    "@type": "Offer",
    "category": "Enterprise Compliance"
  }
}
</script>

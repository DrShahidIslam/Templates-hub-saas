# Standard Operating Procedure: Audit of Loans and Advances

This Standard Operating Procedure (SOP) outlines the comprehensive audit framework for evaluating an organization’s loan and advance portfolio. The primary objective is to verify the existence, valuation, classification, and recoverability of all lending assets. By adhering to this protocol, auditors ensure compliance with regulatory standards, internal credit policies, and accounting principles (such as IFRS 9 or local GAAP), ultimately mitigating credit risk and ensuring the accuracy of financial reporting.

## 1. Pre-Audit Documentation & Planning
*   Obtain the comprehensive Trial Balance and the subsidiary ledger for all loans and advances.
*   Review the Credit Policy Manual and recent board minutes for any changes in lending authority or risk appetite.
*   Verify the existence of a signed "Loan Agreement" or "Promissory Note" for each facility.
*   Ensure the latest internal credit rating report is available for all significant exposures.

## 2. Compliance and KYC Verification
*   Confirm that all "Know Your Customer" (KYC) documentation is complete and up-to-date.
*   Verify that the borrower’s identity and business registration are valid.
*   Audit the "Sanction Letter" to ensure the terms (interest rate, tenure, repayment schedule) match the actual booking in the core banking system.
*   Check for conflict-of-interest disclosures for related-party transactions.

## 3. Collateral and Security Audit
*   Physically inspect or verify digital title deeds, insurance policies, and mortgage charges.
*   Ensure that collateral valuation reports are current (typically not older than 12-24 months) and performed by an approved independent appraiser.
*   Verify that insurance coverage (fire, theft, etc.) is active, includes a "Bank Clause," and is adequate to cover the outstanding balance.
*   Check the registration of charges with the relevant government registrar (e.g., UCC filings or Registry of Deeds).

## 4. Financial Accuracy and Transactional Testing
*   Recompute interest income for a sample of accounts to ensure the system’s accrual logic is accurate.
*   Verify that processing fees and charges were captured and recognized in the correct accounting period.
*   Reconcile the subsidiary ledger balance to the General Ledger (GL) balance.
*   Review the aging report to identify accounts that are 30, 60, or 90+ days past due (DPD).

## 5. Asset Classification and Provisioning
*   Review the classification of Non-Performing Assets (NPAs) against regulatory guidelines.
*   Evaluate the "Expected Credit Loss" (ECL) model assumptions for reasonableness, specifically regarding Probability of Default (PD) and Loss Given Default (LGD).
*   Test the calculation of specific and general provisions to ensure they comply with the provisioning matrix.
*   Confirm that interest suspension (stopping accrual on bad debts) is applied correctly once a loan reaches "non-accrual" status.

## Pro Tips & Pitfalls

### Pro Tips:
*   **Data Analytics:** Use SQL or ACL to run a 100% check on interest calculation outliers rather than relying on manual sampling.
*   **Trigger Events:** Look for "early warning signs" such as frequent check bounces, requests for partial interest waivers, or sudden shifts in the borrower’s industry sector.
*   **Confirmation:** Always send external balance confirmation requests to major corporate borrowers to verify the outstanding balance independently.

### Pitfalls to Avoid:
*   **"Evergreening" Loans:** Be wary of new loans granted specifically to pay off interest on old, delinquent loans. This masks the true credit quality.
*   **Ignoring Covenants:** Failure to check for "Financial Covenant" breaches (e.g., Debt-to-Equity ratios) can lead to the omission of significant credit risks.
*   **Stale Valuations:** Relying on outdated collateral values during an economic downturn often leads to severe under-provisioning.

## Frequently Asked Questions (FAQ)

**Q: What is the most critical item to verify in a loan audit?**
A: The enforceability of the security interest. If the legal charge over the collateral is not perfected, the loan effectively becomes unsecured, which drastically changes the risk profile.

**Q: How do I handle missing original loan documentation?**
A: Missing documents are a significant control failure. You must categorize this as a "high-risk" finding, verify if the loan is still performing, and recommend an immediate remedial process to obtain certified true copies or secondary evidence.

**Q: Should I verify the borrower's cash flow in an audit?**
A: Yes. An audit shouldn't just be about "paperwork." You must review the borrower’s latest financial statements or bank statement analysis to ensure that the primary source of repayment—their cash flow—remains sufficient to cover interest and principal.
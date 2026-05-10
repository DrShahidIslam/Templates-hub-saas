# Standard Operating Procedure: Comprehensive Bank Audit Protocol

This Standard Operating Procedure (SOP) serves as a rigorous framework for conducting a systematic audit of banking operations. The objective is to evaluate the integrity of financial reporting, the effectiveness of internal controls, compliance with regulatory mandates (such as AML/KYC), and the mitigation of operational risks. By following this structured approach, auditors ensure a high level of transparency, data accuracy, and institutional resilience against fraud and systematic errors.

## Phase 1: Pre-Audit Planning and Documentation Review
*   **Verification of Scope:** Define the specific branches, departments, or financial products (e.g., retail loans, treasury, trade finance) under review.
*   **Regulatory Alignment:** Review the latest updates from the central bank or relevant financial oversight bodies (e.g., Basel III compliance).
*   **Data Request:** Formally request General Ledgers (GL), trial balances, and reconciliation reports for the audit period.
*   **Access Management:** Ensure audit teams have read-only access to core banking systems (CBS) to prevent accidental data alteration.

## Phase 2: Asset Quality and Credit Risk Assessment
*   **Loan Portfolio Audit:** Verify that all loans are classified correctly (Standard, Sub-standard, Doubtful, Loss) based on delinquency status.
*   **Collateral Validation:** Conduct physical or digital verification of security documents against the registered values in the CBS.
*   **Credit Approval Process:** Sample loan files to ensure compliance with the bank's internal credit policy, including debt-to-income ratios and proper authorization signatures.
*   **Provisioning Accuracy:** Calculate expected credit losses (ECL) in line with IFRS 9 or relevant local accounting standards.

## Phase 3: Compliance, AML, and KYC/KYB Verification
*   **KYC Completeness:** Sample customer profiles to ensure all mandatory documents (ID, proof of address, tax residency) are valid and current.
*   **Transaction Monitoring:** Review reports for flagged transactions; ensure that Suspicious Activity Reports (SARs) were filed within the mandatory timeframe.
*   **Sanctions Screening:** Confirm that all customer names have been screened against global blacklists (e.g., OFAC, UN sanctions lists).
*   **PEP Identification:** Verify that Politically Exposed Persons (PEPs) are tagged and subject to enhanced due diligence (EDD).

## Phase 4: Operational Controls and Security
*   **Reconciliation Audits:** Ensure daily reconciliations for nostro/vostro accounts and internal suspense accounts are completed and signed off.
*   **Cash and Vault Security:** Verify cash counts against the system balance and inspect dual-custody logs for vault access.
*   **IT General Controls (ITGC):** Review logs for administrative access, password policies, and ensure that terminated employees have had their access revoked immediately.
*   **Dormant Account Management:** Identify accounts with no activity for >12 months and verify that they are flagged and under restricted movement.

## Pro Tips & Pitfalls
*   **Pro Tip:** Always utilize "Data Analytics-as-a-Service." Use SQL or ACL software to perform 100% population testing rather than relying solely on manual sampling.
*   **Pro Tip:** Maintain a "Working Paper Index." If you cannot trace the evidence back to a specific timestamp and user ID in the system, the control is effectively non-existent.
*   **Pitfall:** "Checklist Blindness." Do not just tick boxes. Investigate the *outliers*. Often, the most significant fraud is hidden in the transactions that don't fit the expected pattern.
*   **Pitfall:** Ignoring "Shadow IT." Audit manual Excel spreadsheets used by departments. These are often the biggest sources of data leakage and human error.

## Frequently Asked Questions

**1. How should we handle material discrepancies discovered during the audit?**
Immediate escalation is required. If a discrepancy indicates potential fraud or a regulatory breach, notify the Chief Risk Officer (CRO) and the Audit Committee within 24 hours.

**2. What is the recommended sampling methodology?**
We recommend a risk-based approach. Apply higher sampling rates to high-value transactions, cross-border wires, and accounts with frequent policy exceptions, while using statistical sampling for high-volume, low-risk retail transactions.

**3. How do we verify the integrity of the core banking system data?**
Perform a "system integrity check" by tracing a sample of transactions from the source document (original application/receipt) through to the general ledger entries to ensure no back-end manipulation has occurred.
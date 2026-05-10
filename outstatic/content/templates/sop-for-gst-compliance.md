# Standard Operating Procedure: GST Compliance Management

This Standard Operating Procedure (SOP) outlines the standardized framework for ensuring consistent, accurate, and timely Goods and Services Tax (GST) compliance. Effective GST management is critical to mitigating financial risk, avoiding statutory penalties, and maintaining an optimal input tax credit (ITC) flow. This document applies to all accounting and finance personnel involved in tax computation, filing, and reconciliation processes.

## Phase 1: Data Accumulation and Verification
*   **Centralized Invoicing:** Ensure all sales invoices are generated through the ERP/Accounting system with correct GSTINs and HSN/SAC codes.
*   **Purchase Validation:** Collect all purchase invoices from vendors. Validate that vendors are active and have filed their respective returns.
*   **Input Tax Credit (ITC) Reconciliation:** Run a system-generated reconciliation report between internal Purchase Registers and the GST portal’s auto-populated data (e.g., GSTR-2B).
*   **Document Categorization:** Segregate invoices by tax rate (5%, 12%, 18%, 28%) and nature of supply (Intra-state vs. Inter-state).

## Phase 2: Monthly Computation and Adjustments
*   **Output Liability Calculation:** Sum the total GST collected on outward supplies.
*   **ITC Utilization:** Apply available ITC against output liability, prioritizing the exhaustion of IGST credit before CGST/SGST as per statutory waterfall rules.
*   **Reverse Charge Mechanism (RCM):** Identify services or goods subject to RCM. Ensure RCM liability is self-invoiced and discharged via the electronic cash ledger.
*   **Journal Entries:** Pass necessary accounting entries for tax payments and ITC reversals (e.g., for non-payment to vendors within 180 days).

## Phase 3: Statutory Filing and Payment
*   **GSTR-1 (Outward Supplies):** Review and upload/submit outward supply data. Verify HSN summary accuracy.
*   **GSTR-3B (Summary Return):** Cross-verify data from GSTR-1 and GSTR-2B before final submission.
*   **Electronic Ledger Funding:** Ensure sufficient balance exists in the Electronic Cash Ledger before the filing deadline to avoid late fees and interest charges.
*   **Final Submission:** Execute digital signature (DSC) or Electronic Verification Code (EVC) to complete the filing process.

## Phase 4: Post-Filing and Record Keeping
*   **Acknowledgment Retrieval:** Download and save the system-generated filing acknowledgment (ARN) for every return.
*   **Audit Trail:** Store PDF copies of returns and reconciliation sheets in a secure, backed-up drive for a minimum of 6–8 years as per legal retention requirements.
*   **Annual Reconciliation:** Prepare for GSTR-9 (Annual Return) by conducting a quarterly trial balance vs. GST portal audit.

## Pro Tips & Pitfalls
*   **Pro Tip:** Automate your ITC reconciliation. Using API-based tools to compare GSTR-2B with your purchase ledger saves hours of manual work and catches missing invoices instantly.
*   **Pro Tip:** Maintain a "Vendor Compliance Scorecard." Flag vendors who consistently fail to file returns, as this directly blocks your ITC eligibility.
*   **Pitfall - Misclassification:** Incorrect HSN/SAC code selection is a common trigger for tax audits. Review code classifications semi-annually.
*   **Pitfall - The 180-Day Rule:** Failing to reverse ITC on invoices unpaid for over 180 days is a major compliance oversight that invites interest and penalties during scrutiny.

## Frequently Asked Questions (FAQ)

**1. What happens if I miss the GST filing deadline?**
Missing the deadline triggers late fees (calculated per day of delay) and interest on the unpaid tax amount. Persistent non-filing can lead to the cancellation of your GST registration.

**2. Can I claim ITC if my vendor has not filed their return?**
No. Most modern GST frameworks require the seller to have filed their return and paid the tax before the buyer can legally claim the corresponding Input Tax Credit. Always reconcile with GSTR-2B before claiming.

**3. How should I handle an inadvertent error in a previously filed return?**
Most jurisdictions allow for "amendments" in the subsequent month's return. For major errors, consult with a tax professional to determine if a formal rectification or an adjustment entry in the next filing period is the appropriate path.
# Standard Operating Procedure: Excel Spreadsheet Audit Protocol

This Standard Operating Procedure (SOP) establishes a rigorous, repeatable framework for auditing Excel spreadsheets to ensure data integrity, formula accuracy, and operational security. As organizations increasingly rely on complex models for financial reporting and decision-making, systematic audits are critical to mitigate risks associated with human error, calculation bias, and data corruption. This protocol is designed to be applied to any mission-critical workbook prior to final sign-off or executive distribution.

## Section 1: Structural & Integrity Review
*   **Version Control:** Confirm the filename follows the standardized naming convention and reflects the correct version date.
*   **Sheet Inventory:** Review all tabs for relevance; delete hidden or unused worksheets that may contain legacy or obsolete data.
*   **Hard-Coded vs. Dynamic Data:** Identify cells containing manually entered numbers (constants) versus formulas. Highlight constants in a distinct color (e.g., light blue) for easier verification.
*   **Broken References:** Run "Edit Links" to identify and resolve external workbook links. Ensure no cells return `#REF!` or `#N/A` errors.
*   **Circular References:** Check the status bar for circular reference warnings and resolve them immediately to prevent iterative calculation errors.

## Section 2: Formula & Calculation Logic
*   **Logical Consistency:** Drag formulas down columns to ensure consistency; verify that no individual cell contains a formula that differs from the rest of the array.
*   **Hard-Coding Audit:** Use the "Go To Special" (F5) > "Constants" command to ensure that no formulas were accidentally overwritten by static values.
*   **Range Validation:** Review all `SUM`, `VLOOKUP`, `INDEX/MATCH`, and `OFFSET` ranges to ensure they encompass the full data set and have not been truncated by insertions.
*   **Formula Simplification:** Replace overly complex or nested logic with more readable functions (e.g., `IFS` instead of nested `IFs`) to reduce the likelihood of logic errors.

## Section 3: Data Input & Formatting
*   **Data Validation:** Ensure dropdown lists and numerical constraints are applied to all input cells to prevent invalid data entry.
*   **Unit Consistency:** Verify that all data entries share consistent units (e.g., all figures in thousands vs. absolute dollars) across the workbook.
*   **Conditional Formatting:** Audit conditional formatting rules to ensure they are triggered by accurate criteria and do not conflict with manual cell overrides.
*   **Hidden Data:** Unhide all rows and columns to check for "sandboxed" data or hidden calculations that may influence final output.

## Section 4: Security & Accessibility
*   **Cell Protection:** Lock all formula cells and apply worksheet protection to prevent accidental user manipulation.
*   **User Access:** Remove all unnecessary personal metadata (e.g., Author, Last Modified By) via the "Inspect Document" tool.
*   **File Size Optimization:** Ensure the file is saved in the most efficient format (e.g., .XLSB if the file is excessively large) and clear unnecessary formatting from unused rows at the bottom of sheets.

## Pro Tips & Pitfalls
*   **Pro Tip:** Use the "Trace Precedents" and "Trace Dependents" tools (under the Formulas tab) to visualize how data flows through your model. If a line is messy or broken, your logic is likely flawed.
*   **Pro Tip:** Never perform an audit on the original file. Always create a copy, perform the audit on the copy, and document changes in a "Change Log" tab.
*   **Pitfall:** The "Copy-Paste Special Values" trap. Users often paste values over formulas to speed up the sheet, effectively "breaking" the model for future periods.
*   **Pitfall:** Ignoring "Circular References" until the end. These often stem from fundamental design flaws that cannot be fixed without a structural overhaul.

## Frequently Asked Questions

**Q: How often should I audit a recurring monthly report?**
A: You should perform a "light" audit (check for external links and constants) every cycle, and a "deep" audit (logic review and formula structure) at least once per fiscal quarter.

**Q: Is there an automated tool to handle this?**
A: While add-ins like Spreadsheet Inquire (Excel Pro/Enterprise) can identify structural issues, they cannot replace manual logic checks. Use tools for efficiency, but audit for intent.

**Q: What is the most common cause of Excel errors?**
A: Human error in the form of "Hard-coding." Users frequently overwrite formulas with static numbers to "make the math work" during a time crunch, leading to disastrous consequences for long-term forecasting.
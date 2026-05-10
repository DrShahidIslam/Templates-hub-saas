# Standard Operating Procedure: Software Quality Assurance (SQA)

This Standard Operating Procedure establishes a rigorous framework for ensuring software excellence throughout the development lifecycle. By integrating systematic testing, automated validation, and cross-functional reviews, this process minimizes technical debt, prevents production regressions, and ensures that all deliverables align with functional requirements and user expectations. This document is intended for use by QA Engineers, Developers, and Product Managers to maintain consistent quality standards across all project phases.

## Phase 1: Test Planning and Requirements Analysis
*   Review PRDs (Product Requirement Documents) and User Stories for testability and clarity.
*   Identify edge cases, negative scenarios, and performance requirements.
*   Define the Test Strategy (e.g., unit, integration, end-to-end, load, and security testing).
*   Select the appropriate testing environment and ensure data privacy compliance.
*   Establish "Definition of Ready" (DoR) criteria for features entering the QA cycle.

## Phase 2: Test Case Development
*   Create detailed test cases mapped directly to specific user requirements.
*   Categorize test cases by priority (P0 - Blocker, P1 - Critical, P2 - Major, P3 - Minor).
*   Develop automation scripts for regression-prone workflows.
*   Peer-review test cases to ensure logic coverage and clarity.
*   Update the centralized Traceability Matrix to link features to their corresponding test suites.

## Phase 3: Execution and Defect Management
*   Execute manual and automated test suites in a staging environment.
*   Log detailed bug reports in the issue tracking system, including:
    *   Steps to reproduce.
    *   Expected vs. actual results.
    *   System environment/browser/device logs.
    *   Screenshots or screen recordings.
*   Assign severity and priority labels to all identified issues.
*   Perform regression testing to ensure bug fixes do not introduce new issues.

## Phase 4: Final Validation and Release Readiness
*   Verify that all P0 and P1 issues are resolved and closed.
*   Conduct User Acceptance Testing (UAT) with key stakeholders.
*   Review final performance benchmarks against established SLAs.
*   Complete the final "Definition of Done" (DoD) checklist.
*   Sign off on the release candidate for deployment to production.

## Pro Tips & Pitfalls

*   **Pro Tip: Shift Left:** Begin testing early. Do not wait for a full build; test individual components as they are developed. This reduces the cost of fixing bugs by up to 10x compared to fixing them post-release.
*   **Pro Tip: Automation Strategy:** Automate the mundane, not the unstable. Focus automation on stable, high-value regression tests rather than volatile UI elements that change weekly.
*   **Pitfall: The "Happy Path" Trap:** Many QA teams focus too heavily on the "happy path." Always dedicate at least 30% of your testing effort to error handling, invalid inputs, and system failure scenarios.
*   **Pitfall: Environmental Drift:** Ensure your staging environment is a mirrored replica of production. Discrepancies in configuration or database versions between staging and production are the #1 cause of "it worked in QA" production failures.

## Frequently Asked Questions (FAQ)

**1. How often should we update our regression test suite?**
The regression suite should be treated as a living document. It should be audited after every major feature release to prune redundant tests and add coverage for new functionality.

**2. What should be done if a critical bug is found during the final release sign-off?**
Immediately pause the deployment, update the release candidate status to "Failed," and document the finding. A "Go/No-Go" meeting must be held with product owners to determine if the release can proceed with a known workaround or if a delay is required.

**3. What is the difference between QA and QC?**
QA (Quality Assurance) is process-oriented and focuses on preventing defects by improving the development lifecycle. QC (Quality Control) is product-oriented and focuses on identifying defects in the finished software. This SOP integrates both disciplines for a holistic approach.
# Standard Operating Procedure: Quality Assurance Testing Protocol

This Quality Assurance (QA) Testing Procedure is designed to ensure that all software releases meet rigorous standards for functionality, reliability, and user experience. By implementing this standardized workflow, the QA team mitigates the risk of production defects, ensures cross-functional alignment, and maintains a consistent baseline for software quality. This document serves as the mandatory checklist for all features and bug fixes prior to deployment.

## Phase 1: Preparation and Environment Setup
*   **Requirements Review:** Confirm all acceptance criteria (AC) are clearly defined in the ticket or PR.
*   **Environment Sync:** Ensure the staging/QA environment matches the production configuration (database schema, API endpoints, third-party integrations).
*   **Test Data Preparation:** Populate the environment with necessary test users, edge-case data, and localized content.
*   **Version Control:** Verify the correct build branch is deployed to the QA environment.

## Phase 2: Functional Testing
*   **Happy Path Validation:** Execute the primary workflow to ensure the core feature functions as intended.
*   **Negative Testing:** Attempt to break the system with invalid inputs, empty fields, and unsupported file types.
*   **Integration Checks:** Confirm data flow between the feature and external APIs/microservices.
*   **Regression Testing:** Run existing automated test suites to ensure new code has not introduced regressions in legacy modules.
*   **Cross-Browser/Device Testing:** Verify functionality across required browsers (Chrome, Safari, Firefox, Edge) and device profiles (Desktop, Mobile, Tablet).

## Phase 3: Non-Functional Testing
*   **UI/UX Fidelity:** Ensure the UI matches the design specs (Figma/Adobe XD) and aligns with the design system.
*   **Accessibility (A11y):** Test for WCAG compliance, including screen reader compatibility and keyboard navigation.
*   **Performance Baseline:** Verify that the feature does not cause significant latency or memory leaks under standard load.
*   **Security Check:** Perform basic sanitization checks (e.g., XSS, SQL injection prevention) on all user-facing inputs.

## Phase 4: Sign-off and Deployment
*   **Bug Triage:** Ensure all "Critical" and "Major" bugs are resolved and verified.
*   **Documentation:** Update internal knowledge base or release notes with the latest feature behavior.
*   **Stakeholder Approval:** Secure final sign-off from the Product Manager or Lead Engineer.
*   **Post-Deployment Verification:** Execute a "smoke test" in the production environment immediately following the release.

## Pro Tips & Pitfalls
*   **Pro Tip:** Automate the repetitive "Happy Path" tests. This frees up human testers to focus on exploratory testing and edge cases.
*   **Pro Tip:** Use "Feature Flags" for major releases so you can toggle features off in production without a rollback if a critical issue occurs.
*   **Pitfall:** Overlooking "data persistence." Testers often focus on the UI and forget to check if the database actually recorded the transaction correctly.
*   **Pitfall:** Testing in a "vacuum." Always consider how the new feature interacts with existing background jobs or scheduled tasks.

## Frequently Asked Questions

**Q: What should I do if I find a bug that is not related to the current ticket?**
A: Do not block the current ticket. Document the bug, create a new ticket in the backlog, assign it a priority, and notify the product team.

**Q: How do we decide when a build is "good enough" for production?**
A: A build is production-ready when all "Critical" and "Blocker" bugs are resolved, and the "Happy Path" has been verified across all core supported environments.

**Q: Should QA testers also be responsible for writing unit tests?**
A: No, unit tests are the responsibility of the development team. QA should focus on integration, functional, and end-to-end testing.
# SOP: UX Audit Execution Protocol

This Standard Operating Procedure (SOP) defines the systematic approach for conducting a comprehensive User Experience (UX) audit. The objective of this audit is to identify usability bottlenecks, accessibility gaps, and conversion friction points within a digital interface. By following this protocol, audit teams will ensure consistent, data-driven evaluations that prioritize user needs while aligning with business KPIs.

## Phase 1: Pre-Audit Preparation
*   [ ] **Define Audit Scope:** Determine if the audit covers the entire platform, a specific user journey (e.g., checkout flow), or individual components.
*   [ ] **Identify Target Personas:** Review existing user personas and empathy maps to ensure the audit is viewed through the eyes of the intended audience.
*   [ ] **Gather Performance Data:** Pull existing analytics (Google Analytics, Hotjar, or FullStory) to identify high-drop-off pages.
*   [ ] **Review Business Requirements:** Ensure alignment with current business goals (e.g., lead generation vs. brand awareness).

## Phase 2: Heuristic Evaluation & Usability
*   [ ] **Consistency & Standards:** Verify that UI elements (buttons, typography, colors) remain uniform across the entire site.
*   [ ] **Error Prevention:** Audit all forms and input fields for clear instructions, validation messaging, and "undo" capabilities.
*   [ ] **Visibility of System Status:** Confirm the user is always informed of what is happening (e.g., loading spinners, progress bars in multi-step processes).
*   [ ] **Efficiency of Use:** Assess the "click-depth." Are users reaching their goal within the minimum number of clicks?
*   [ ] **Flexibility & Efficiency:** Evaluate if there are shortcuts or intuitive paths for power users compared to novices.

## Phase 3: Accessibility (WCAG 2.1/2.2 Compliance)
*   [ ] **Color Contrast:** Verify that text-to-background contrast ratios meet WCAG AA standards.
*   [ ] **Keyboard Navigability:** Ensure all interactive elements can be accessed and triggered using only a keyboard.
*   [ ] **Alt-Text Audit:** Confirm all non-text content (images, icons) features descriptive, accessible labels.
*   [ ] **Responsive Behavior:** Test the interface across various viewport sizes (mobile, tablet, desktop) to ensure content doesn't overlap or hide.

## Phase 4: Conversion & Friction Analysis
*   [ ] **CTA Effectiveness:** Evaluate Call-to-Action buttons for color hierarchy, placement, and persuasive micro-copy.
*   [ ] **Cognitive Load:** Identify areas with excessive text or visual clutter that may overwhelm the user.
*   [ ] **Form Optimization:** Ensure forms request only essential information to minimize friction.
*   [ ] **Trust Signals:** Verify the presence of testimonials, security badges, or clear return policies where necessary.

## Phase 5: Reporting & Recommendations
*   [ ] **Categorize Findings:** Classify issues by severity (Critical, Major, Minor, Cosmetic).
*   [ ] **Evidence Logging:** Attach screenshots or screen recordings to support every identified issue.
*   [ ] **Prioritization Matrix:** Create a high-level roadmap based on "Impact vs. Effort" for the development team.

## Pro Tips & Pitfalls
*   **Avoid the "Personal Preference" Trap:** Never document an issue based on your personal taste. Always tie feedback back to UX heuristics (e.g., Nielsen’s 10 Heuristics) or objective data.
*   **Test on Real Devices:** Do not rely solely on browser inspect tools for mobile audits. Testing on an actual physical device reveals touch-target issues that simulators often miss.
*   **The Pitfall of Over-Auditing:** Do not report every single pixel error as a "Major" issue. Distinguish between systemic UX flaws and minor visual polishing to avoid "feedback fatigue" from your development team.

## FAQ

**Q: How often should a UX audit be performed?**
A: Ideally, a lightweight audit should be performed quarterly, with a full-scale deep-dive audit conducted annually or prior to any major site redesign.

**Q: Should I include stakeholders in the audit process?**
A: It is recommended to share the final report with stakeholders, but the audit itself is best conducted by UX professionals to maintain objectivity and prevent "design by committee."

**Q: What is the most important metric to track during a UX audit?**
A: While heuristics are qualitative, the "Task Success Rate" is the primary quantitative metric. If the user cannot complete the intended action, the UX design has failed, regardless of how aesthetically pleasing it is.
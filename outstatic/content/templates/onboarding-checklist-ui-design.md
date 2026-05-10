---
status: published
title: Onboarding Checklist Ui Design
publishedAt: '2026-05-10T18:48:01.030Z'
---
# SOP: UI Design Onboarding Checklist for New Team Members

This Standard Operating Procedure (SOP) outlines the mandatory onboarding process for new UI designers joining our product team. The objective is to standardize the environment setup, project access, and design methodology understanding, ensuring that new hires can contribute effectively to our design system and product roadmap within their first week. Adherence to this process minimizes administrative friction and aligns design practices with existing engineering and product workflows.

## Phase 1: Environment & Tooling Setup
*   **Hardware Configuration:** Ensure laptop permissions, color profile calibration, and external display settings are finalized.
*   **Design Tool Access:** Provision seat licenses for Figma (Enterprise), Adobe Creative Cloud, and relevant prototyping tools.
*   **Internal Tooling:** Grant access to Jira/Linear (project tracking), Notion (documentation), and Slack/Teams (communication).
*   **Security Protocols:** Install company-required VPNs, password managers (e.g., 1Password), and multi-factor authentication (MFA) applications.

## Phase 2: Design Systems & Repository Access
*   **Design System Library:** Provide "View/Edit" access to the current Design System (DS) files in Figma. Ensure all design tokens (colors, typography, spacing) are linked correctly.
*   **Version Control:** Brief the designer on our branching strategy (e.g., Figma branches vs. main file management).
*   **Asset Repositories:** Grant access to shared asset folders (icons, illustrations, photography) and legacy style guides.
*   **Component Libraries:** Schedule a deep dive into the component documentation, specifically focusing on variants, auto-layout settings, and interactive states.

## Phase 3: Workflow & Methodology Integration
*   **Design-to-Dev Handoff:** Review the established handoff protocol (e.g., Inspect mode, dev-ready labels, annotation requirements).
*   **Review Cadence:** Schedule the new hire for participation in weekly design critiques and bi-weekly sprint planning sessions.
*   **Documentation Standards:** Walkthrough the internal Wiki or Notion pages regarding naming conventions (layers, components, frames) to ensure file organization consistency.
*   **Feedback Loops:** Define the process for requesting peer reviews versus lead-level approvals.

## Phase 4: Product Knowledge & Stakeholder Alignment
*   **Product Roadmap Review:** Attend a briefing with the Product Manager to understand the current sprint priorities and long-term vision.
*   **User Personas & Research:** Provide access to the research repository (e.g., Dovetail, Maze) and the current set of User Personas.
*   **Stakeholder Introduction:** Arrange 1:1 "coffee chats" with key engineering leads and product owners to establish cross-functional rapport.

## Pro Tips & Pitfalls

*   **Pro Tip:** Create a "Playground" file for the new designer. Give them a small, non-critical task—such as updating an icon or tweaking a button state—to practice the team’s workflow without the pressure of a production release.
*   **Pro Tip:** Document the "Why." Every design system component should have a link to the rationale behind its creation. This reduces the number of repetitive questions new designers have regarding UI decisions.
*   **Pitfall (Tool Overload):** Do not grant access to every single project file on day one. This leads to information fatigue. Grant access based on immediate project needs and expand access as the designer proves mastery.
*   **Pitfall (Ignoring the Dev Workflow):** Failing to explain how designers interact with Git or Jira often leads to friction. Spend time demonstrating the lifecycle of a design ticket from "Backlog" to "Deployed."

## Frequently Asked Questions (FAQ)

**1. How long should the onboarding process take?**
While administrative setup happens on Day 1, a comprehensive design onboarding should span the first two weeks, balancing tool training with active participation in low-stakes project tasks.

**2. Should a new designer be given edit access to the main Design System immediately?**
No. It is recommended to keep them in "Comment" mode for the first 30 days. This allows them to become familiar with the system's structure and existing documentation before they have the capability to push changes to the master components.

**3. What happens if the new designer uses different naming conventions?**
Consistency is vital for scalability. If a designer uses non-standard naming, provide constructive feedback during the first few PRs or design reviews, pointing them back to the documentation in the onboarding Wiki.

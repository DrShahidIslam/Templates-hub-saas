# Standard Operating Procedure: Organizational Change Management (OCM)

This Standard Operating Procedure (SOP) defines the systematic approach for identifying, assessing, approving, and implementing organizational or technical changes. The primary objective of this process is to ensure that all changes are conducted in a controlled manner, minimizing operational risk, maximizing stakeholder alignment, and ensuring that the organization maintains compliance and performance standards throughout the transition.

## 1. Change Initiation and Documentation
*   **Submission:** Complete the Change Request Form (CRF) detailing the scope, objectives, and justification for the change.
*   **Initial Triage:** The Change Manager reviews the request for completeness and technical accuracy.
*   **Impact Assessment:** Conduct a formal review to identify the impact on resources, timelines, budget, and other downstream systems.
*   **Categorization:** Assign a risk profile (Low, Medium, or High) based on complexity and potential business disruption.

## 2. Planning and Stakeholder Alignment
*   **Resource Allocation:** Identify required personnel, technical tools, and budget approval for the change implementation.
*   **Communication Plan:** Develop a strategy to inform stakeholders affected by the change, including training requirements and timeline expectations.
*   **Risk Mitigation Strategy:** Develop a "Plan B" (backout procedure) to be utilized if the primary implementation fails.
*   **Schedule Approval:** Establish a "Change Window" that minimizes disruption to peak business operations.

## 3. Review and Authorization
*   **CAB Review:** Present the Change Request to the Change Advisory Board (CAB) for high-risk or cross-departmental changes.
*   **Approval/Rejection:** Document the formal sign-off. If rejected, record the feedback for future iteration.
*   **Communication of Approval:** Notify the project team and stakeholders of the approved implementation window.

## 4. Execution and Validation
*   **Implementation:** Perform the change in the production environment according to the agreed-upon technical plan.
*   **Verification:** Perform post-implementation testing (QA/User Acceptance Testing) to ensure objectives were met.
*   **Incident Monitoring:** Monitor the environment for 24–48 hours post-change for any unexpected performance degradation.

## 5. Closure and Review
*   **Post-Implementation Review (PIR):** Hold a brief meeting to document lessons learned and verify that the change was successful.
*   **Documentation Update:** Update internal knowledge bases, process maps, and technical documentation to reflect the current state.
*   **Closure:** Formally close the change record in the Change Management System.

---

## Pro Tips & Pitfalls

*   **Tip: The "Golden Rule" of Backouts.** Never initiate a change without a tested and documented backout procedure. If you cannot undo the change, do not proceed with it.
*   **Tip: Proactive Communication.** The most frequent cause of change failure is not technical—it is human. Over-communicate with stakeholders to ensure they are prepared for new workflows.
*   **Pitfall: "Emergency" Creep.** Avoid labeling standard changes as "Emergency" just to skip the approval process. This erodes the integrity of the CAB and masks systemic risks.
*   **Pitfall: Siloed Planning.** Always consult with IT Security and Legal/Compliance early in the process to prevent last-minute roadblocks.

---

## Frequently Asked Questions

**Q: Who should sit on the Change Advisory Board (CAB)?**
A: A CAB should consist of representatives from technical operations, project management, security/compliance, and key department heads whose workflows are directly impacted by the proposed change.

**Q: What is the difference between a "Standard" and "Normal" change?**
A: A "Standard" change is a low-risk, repetitive, and pre-authorized change (e.g., password reset, software update). A "Normal" change is non-routine and requires individual risk assessment and CAB approval.

**Q: How do we handle a failed implementation?**
A: Immediately trigger the documented backout plan. Once the system is stabilized, conduct a mandatory Post-Implementation Review (PIR) to perform a Root Cause Analysis (RCA) before attempting to re-implement the change.
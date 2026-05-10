# Standard Operating Procedure: ServiceNow Incident Process Flow

This Standard Operating Procedure (SOP) defines the standardized workflow for managing an incident within the ServiceNow platform. By adhering to this lifecycle, IT support teams ensure consistent data integrity, improved Mean Time to Resolution (MTTR), and effective communication across the enterprise. This process governs all phases from initial identification and logging to final closure and knowledge consolidation.

## 1. Identification and Categorization
*   **Initial Capture:** Verify that the incoming request is an Incident (disruption to service) rather than a Request (standard catalog item).
*   **Logging:** Populate the 'Short Description' and 'Description' fields with clear, actionable details. Avoid generic summaries.
*   **Categorization:** Select the appropriate Category and Subcategory to ensure the ticket routes to the correct support group.
*   **Prioritization:** Assign Impact (effect on users/services) and Urgency (degree of delay). Allow the system to auto-calculate the Priority.
*   **Configuration Item (CI) Linking:** Mandatory: Link the relevant CI to the incident to facilitate Root Cause Analysis and Impact Analysis.

## 2. Investigation and Diagnosis
*   **Initial Triage:** Perform a preliminary assessment to determine if the issue is a known error or requires escalation.
*   **Knowledge Base Search:** Search the ServiceNow Knowledge Base for existing workarounds or fixes before initiating manual troubleshooting.
*   **Collaboration:** Utilize the 'Work Notes' field to document all diagnostic steps taken. (Note: 'Work Notes' are internal only).
*   **Status Update:** Update the State to 'In Progress' immediately upon opening the ticket.
*   **Escalation:** If the incident exceeds the Service Level Agreement (SLA) threshold or requires higher-level expertise, reassign the ticket to the appropriate Assignment Group.

## 3. Resolution and Recovery
*   **Workaround Implementation:** Apply the identified solution.
*   **Verification:** Confirm with the user that the service is restored and functioning as expected.
*   **Resolution Details:** Populate the 'Resolution Code' (e.g., Solved, Workaround Provided) and 'Resolution Notes' (a concise summary of what was done).
*   **Knowledge Contribution:** If no KB article exists for this specific resolution, flag the ticket for a 'Knowledge Creation' task to prevent future reoccurrence.

## 4. Closure and Feedback
*   **Review:** Ensure all mandatory fields are completed and the CI/Incident link is verified.
*   **Closure:** Move the state to 'Resolved'. The system will automatically move the ticket to 'Closed' after the defined business rule period (e.g., 3-5 days of inactivity).
*   **User Feedback:** Ensure the automated post-resolution survey is triggered to capture user satisfaction metrics.

## Pro Tips & Pitfalls
*   **Pro Tip:** Use 'Templates' for recurring issues to pre-populate fields, ensuring consistent data quality and saving time.
*   **Pro Tip:** Always utilize the 'Activity Stream' to track the chronological history of the ticket; never rely on external emails for documentation.
*   **Pitfall:** Avoid 'Updating' a ticket without adding a Work Note. An update without a note makes it impossible for the next technician to understand the status.
*   **Pitfall:** Do not change the 'Priority' manually without justifying it in the 'Work Notes'. Auto-calculation is designed to keep metrics consistent across the organization.

## FAQ

**Q: What is the difference between 'Work Notes' and 'Additional Comments'?**
A: 'Work Notes' are visible only to fulfillers (IT staff) and are used for internal troubleshooting. 'Additional Comments' are visible to the end-user (the caller) and should be used for client-facing updates.

**Q: Can I close a ticket immediately after resolving it?**
A: Most organizations configure ServiceNow to move tickets to 'Resolved' first, allowing the user a window to reopen the ticket if the fix fails. 'Closed' status is usually reserved for the final state after the user has confirmed the fix.

**Q: What should I do if an Incident is actually a Problem?**
A: If the incident indicates a systemic issue or a repeating trend, do not just fix the incident. Use the 'Create Problem' UI action within the incident record to initiate a root cause investigation for the underlying issue.
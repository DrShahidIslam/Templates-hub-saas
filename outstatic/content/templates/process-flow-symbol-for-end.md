# Standard Operating Procedure: Implementation of the Process Flow "End" Symbol

This document outlines the professional standards for the application of the "End" symbol (typically represented as an oval or "terminator") within Business Process Model and Notation (BPMN) and standard flowcharting methodologies. The "End" symbol serves as the definitive point at which a specific process flow ceases. Its correct implementation ensures that stakeholders, auditors, and development teams recognize the absolute conclusion of a workflow, preventing ambiguity and ensuring process integrity.

## Phase 1: Pre-Implementation Validation
Before finalizing any flowchart, verify the necessity of the "End" event based on the current process logic.

*   Verify that all preceding activities have been accounted for and mapped.
*   Ensure that no "dangling" activities remain without a connection leading toward a terminal point.
*   Confirm that the process objective has been met, necessitating the terminal event.
*   Select the correct variation of the symbol (e.g., standard "End," "Error End," or "Terminate" depending on the outcome state).

## Phase 2: Execution and Placement
Adhere to these standards to maintain aesthetic and functional consistency across all documentation.

*   Position the "End" symbol at the absolute bottom or far-right of the process map to align with Western reading patterns.
*   Ensure the symbol is clearly labeled (e.g., "End: Order Shipped" or "Process Terminated") to provide specific context.
*   Maintain a consistent size for the "End" symbol, ensuring it matches the scale of the "Start" symbol for visual symmetry.
*   Connect the terminal event using a single, solid-line sequence flow originating from the final task or gateway.
*   Verify that no sequence flow exits the "End" symbol, as this would violate basic flowcharting logic.

## Phase 3: Final Review and Audit
Once placed, conduct a review to ensure the symbol does not impede process readability.

*   Check for overlap with text labels or connector lines.
*   Confirm that all branches (if the flow splits) conclude with their own respective "End" symbol.
*   Validate that the terminology used within the symbol is consistent with the project's glossary.
*   Export the document to the required format (e.g., PDF or PNG) to ensure the symbol renders correctly on all viewing devices.

## Pro Tips & Pitfalls

*   **Pitfall - Multiple Ends:** Avoid "spaghetti flows" by limiting the number of end points. While multiple ends are valid (e.g., "Success" vs. "Rejected"), excessive end points often indicate that the process is overly complex and requires modularization.
*   **Pro Tip - Color Coding:** Use specific colors for end states to enhance clarity—Green for successful completion, Red for error or cancellation, and Grey for neutral termination.
*   **Pitfall - The Dangling Process:** Never leave a flow arrow pointing at nothing. Always terminate it with an "End" symbol, even if the process is simply "waiting" for an external trigger.

## Frequently Asked Questions (FAQ)

**Q: Can I use a circle instead of an oval for the End symbol?**
A: While some informal charts use circles, professional standards (ISO 5807) dictate an oval or "stadium" shape. Sticking to the standard oval reduces cognitive load for stakeholders familiar with industry-standard diagramming.

**Q: Is it necessary to have an "End" symbol if the process goes back to the beginning?**
A: No. A process that loops back to the beginning is a cycle, not a termination. If the process is intended to run indefinitely, use a "Loop" connector rather than an "End" symbol.

**Q: How do I handle a process that has multiple outcomes?**
A: You should use a gateway (diamond) to split the flow, and then utilize individual "End" symbols for every possible outcome path. This ensures that the documentation is transparent regarding both successful and unsuccessful final states.
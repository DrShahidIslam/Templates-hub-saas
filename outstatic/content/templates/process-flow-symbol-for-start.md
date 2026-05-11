---
title: 'process flow symbol for start'
status: 'published'
slug: 'process-flow-symbol-for-start'
publishedAt: '2026-05-11T09:00:45.308Z'
---

# SOP: Implementation of the Process Flow "Start" Symbol

This Standard Operating Procedure defines the application and functional requirements for the "Start" symbol—conventionally represented by a rounded rectangle or capsule shape—within Business Process Model and Notation (BPMN) and general flowcharting standards. Utilizing this symbol correctly is essential to ensuring process clarity, system interoperability, and professional documentation standards. This guide ensures that all process maps maintain consistency across organizational workflows.

## Prerequisites for Symbol Deployment

*   Identify the designated "Trigger Event" that initiates the process.
*   Ensure all stakeholders agree upon the boundary of the process scope.
*   Verify access to standardized flowcharting software (e.g., Lucidchart, Visio, or Miro).

## Step-by-Step Checklist for Implementation

## 1. Symbol Selection and Placement
*   Locate the "Start" symbol in the shape library (distinct from "Process" rectangles or "Decision" diamonds).
*   Place the symbol at the top-left or top-center of the drawing canvas to align with standard reading patterns (top-to-bottom, left-to-right).
*   Ensure the capsule shape (rounded rectangle) is used, as defined by ISO 5807 standards.

## 2. Labeling and Nomenclature
*   Draft a concise label using the "Verb-Noun" format (e.g., "Receive Customer Order" or "Initiate Monthly Audit").
*   Verify that the label is horizontally centered within the capsule.
*   Ensure font consistency across the entire document (e.g., Arial, 10pt).
*   Avoid internal jargon; use descriptive language accessible to external stakeholders.

## 3. Flow Connectivity
*   Ensure exactly one outgoing flow line originates from the "Start" symbol.
*   Connect the flow line to the first process step or task.
*   Confirm that no incoming flow lines attach to a "Start" symbol (only "Intermediate" or "End" symbols may receive multiple flows).
*   Verify that the connector line is a solid, straight, or orthogonal line without overlapping text.

## 4. Final Review and Validation
*   Check for "Orphan" starts (a start symbol that does not lead to a final objective).
*   Validate that there is only one "Start" symbol per process map (unless using sub-process pools).
*   Perform a logic walk-through to ensure the start event accurately represents the actual trigger.

## Pro Tips & Pitfalls

*   **Pro Tip:** Use color coding if the process requires identifying the *type* of trigger (e.g., green for automated system triggers, blue for manual human input).
*   **Pitfall:** Do not use the "Start" symbol to describe a process step. If you find yourself writing a full sentence inside the capsule, it is likely a task, not an initiation event.
*   **Pro Tip:** For complex enterprise processes, ensure the "Start" symbol references an external trigger event, such as an email receipt or a database update notification.
*   **Pitfall:** Avoid "Floating Starts"—ensure every process map is anchored to a defined trigger event. Unanchored processes lead to ambiguity and lack of accountability.

## Frequently Asked Questions

**Q: Can a process map have more than one "Start" symbol?**
A: Generally, no. A single process map should represent one specific workflow. If you have multiple starting points, you are likely mapping different processes that should be separated into individual diagrams or linked via a parent-child structure.

**Q: Is the rounded rectangle the only acceptable shape for a start?**
A: In standard flowcharting (ANSI/ISO), the rounded rectangle (capsule) is the universal standard. In BPMN 2.0, the "Start Event" is strictly a thin-lined circle, sometimes containing an icon representing the trigger type. Always adhere to the specific standard dictated by your organization’s documentation policy.

**Q: What should I do if my process starts due to a specific error?**
A: In this case, you should use an "Error Start Event" (usually represented by an icon inside the start symbol). This clearly differentiates a standard process initiation from an exception-handling workflow.
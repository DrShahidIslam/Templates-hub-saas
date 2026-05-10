# SOP: ServiceNow Process Flow Formatter Configuration

This Standard Operating Procedure (SOP) outlines the standardized method for configuring and maintaining the Process Flow Formatter within the ServiceNow platform. The Process Flow Formatter is a critical UI component used to display the lifecycle stages of a task-based record (e.g., Incident, Change, or Request). Proper implementation ensures that stakeholders have a clear, visual representation of current progress and future milestones, thereby improving user experience and process transparency.

## Phase 1: Pre-Configuration Assessment
* [ ] Identify the target Table (e.g., Change Request) that requires the flow formatter.
* [ ] Define the specific workflow states (e.g., New, Assess, Authorize, Implement, Review, Closed).
* [ ] Verify that an existing `sys_process_flow` record does not already conflict with your requirements.
* [ ] Ensure administrative access to the global update set or the specific application scope.

## Phase 2: Defining the Process Flow Records
* [ ] Navigate to **System UI > Process Flow** in the Application Navigator.
* [ ] Click **New** to define each stage of the process.
* [ ] **Name:** Enter a descriptive name (e.g., "Change - Assess").
* [ ] **Table:** Select the target table identified in Phase 1.
* [ ] **Order:** Assign a numerical value (e.g., 100, 200, 300) to dictate the sequence.
* [ ] **Condition:** Define the specific criteria (e.g., `State` is `Assess`) that triggers the highlight for this stage.
* [ ] **Active:** Ensure the checkbox is selected.
* [ ] Click **Submit** and repeat for all workflow stages.

## Phase 3: Form Layout Integration
* [ ] Navigate to the target record form (e.g., Change Request form).
* [ ] Right-click the form header and select **Configure > Form Layout**.
* [ ] In the "Available" column, search for `Process Flow`.
* [ ] Move the `Process Flow` formatter to the desired position in the "Selected" column (typically directly below the form header).
* [ ] Click **Save**.

## Phase 4: Validation and Testing
* [ ] Create a new record or open an existing record in the target table.
* [ ] Verify that the visual process flow bar appears at the top of the form.
* [ ] Manually transition the record through its state machine to confirm the formatter highlights the correct stages in real-time.
* [ ] Validate cross-browser compatibility (Chrome, Edge, Firefox).
* [ ] Confirm the display appearance in both the Native UI and (if applicable) relevant Workspace view.

## Pro Tips & Pitfalls
* **Avoid Over-Complexity:** Keep the number of stages in the process flow formatter to a maximum of 5–7. Excess stages create horizontal scrolling and clutter the UI.
* **Condition Logic:** Use clear, unambiguous conditions. If multiple conditions could potentially evaluate to "true" at the same time, the formatter may exhibit unpredictable behavior.
* **Performance Impact:** Ensure your condition scripts are lightweight. Do not perform heavy GlideRecord queries within the "Condition" field to prevent form load latency.
* **Naming Conventions:** Use consistent naming prefixes (e.g., [TABLE_NAME] - [STAGE_NAME]) to make them easier to locate in the `sys_process_flow` list view later.

## FAQ
**Q: Can I customize the colors of the process flow stages?**
A: Yes, the colors are driven by the CSS associated with the state transitions. However, this often requires modifying system-wide UI themes or using specific CSS classes within the formatter settings. It is recommended to stick to ServiceNow’s default styling to maintain accessibility standards.

**Q: Why is my process flow formatter not appearing on the form?**
A: First, check if the formatter was added to the correct Form View. If you are viewing the form in a specialized view (e.g., "Self Service"), the formatter must be added to that specific view in the Form Layout.

**Q: Can I make the process flow formatter read-only?**
A: The process flow formatter is inherently a display-only UI component. It is intended to reflect the current state, not to act as an input method. If you need users to be able to click stages to update the state, you must configure UI Actions or Business Rules to handle state transitions.
---
title: 'process flow diagram for refinery'
status: 'published'
slug: 'process-flow-diagram-for-refinery'
publishedAt: '2026-05-11T08:58:10.270Z'
---

# Standard Operating Procedure: Refinery Process Flow Diagram (PFD) Development

This Standard Operating Procedure (SOP) outlines the mandatory methodology for developing, reviewing, and approving Process Flow Diagrams (PFDs) within refinery operations. A PFD serves as the primary technical document representing the functional relationships between major equipment, pipelines, and control systems. Adherence to this procedure ensures regulatory compliance, operational safety, and process efficiency by maintaining a "single source of truth" for engineering and maintenance teams.

## Phase 1: Preparation and Data Gathering
*   Define the battery limits (scope) of the process unit under consideration.
*   Gather existing P&IDs (Piping and Instrumentation Diagrams), block flow diagrams, and equipment data sheets.
*   Collect stream composition data, including mass and energy balances (Heat and Material Balance tables).
*   Identify all major pieces of equipment: columns, reactors, heat exchangers, pumps, compressors, and furnaces.
*   Determine the operating design philosophy (normal, startup, shutdown, and emergency scenarios).

## Phase 2: Drafting the PFD
*   Arrange equipment symbols from left to right, following the primary flow path of the process.
*   Draw main process pipelines, ensuring that the direction of flow is clearly indicated with arrows.
*   Label all equipment with unique tag numbers (e.g., C-101 for Columns, P-102 for Pumps).
*   Insert stream numbers in diamonds to correspond with the Heat and Material Balance (HMB) table.
*   Include critical process control loops that represent primary regulatory control (e.g., cascade loops, major flow control).
*   Add critical utility connections where they impact the process (e.g., steam injection, quench water).

## Phase 3: Review and Quality Assurance
*   Verify that the PFD matches the HMB table for mass and energy conservation.
*   Perform a cross-check with P&IDs to ensure major line sizes and equipment tagging are consistent.
*   Conduct an Interdisciplinary Review (IDR) with operations, process engineering, and maintenance representatives.
*   Validate that all "safety-critical" equipment is captured and represented correctly.
*   Ensure all revision numbers, dates, and author/approver signatures are documented in the title block.

## Phase 4: Finalization and Document Control
*   Publish the final PFD in the site-approved Document Management System (DMS).
*   Update the Master Document Index (MDI) to reflect the new revision.
*   Distribute the approved document to the control room, field operators, and engineering offices.
*   Notify the MOC (Management of Change) team if the PFD change necessitates a new MOC application.

## Pro Tips & Pitfalls
*   **Pitfall: Over-detailing.** Do not include minor instrumentation, vents, drains, or isolation valves in a PFD; these belong on P&IDs. Over-detailing reduces the readability of the process logic.
*   **Pro Tip: Standardize Symbols.** Use standardized ISA (International Society of Automation) symbols. If a refinery has a unique legacy symbol set, ensure it is documented in the site drafting standards manual.
*   **Pitfall: Ignoring Off-Design Cases.** Operators often rely on PFDs during startup or emergency. If the PFD only shows "Normal Operation," it may fail to warn users of bypass routes or alternative line-ups during shutdowns.
*   **Pro Tip: Digital Integration.** Utilize intelligent CAD software that links the PFD to the HMB database. This ensures that any change in a heat exchanger duty automatically updates the spreadsheet, preventing calculation mismatches.

## Frequently Asked Questions (FAQ)

**1. How often should a refinery PFD be updated?**
PFDs must be updated immediately following any physical change to the process (MOC completion). A comprehensive "as-built" audit should be performed at least every 3 to 5 years or during major turnarounds.

**2. What is the difference between a PFD and a P&ID?**
A PFD provides a high-level overview of the process sequence and major equipment. A P&ID (Piping and Instrumentation Diagram) is a detailed schematic showing every valve, instrument, control logic component, and physical pipe specification.

**3. Who is the final authority for approving a PFD change?**
The Lead Process Engineer or the Process Safety Manager typically holds the final authority, ensuring that the change does not violate the plant's safe operating limits or environmental permits.
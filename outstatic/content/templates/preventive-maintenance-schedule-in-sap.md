---
title: 'SAP PM Preventive Maintenance: Step-by-Step SOP Guide'
status: published
slug: preventive-maintenance-schedule-in-sap
publishedAt: '2026-05-11T11:31:03.109Z'
description: >-
  Master SAP PM preventive maintenance scheduling. Learn to configure
  maintenance plans, set call horizons, and automate order generation with this
  SOP guide.
seo_optimized: true
---

# Standard Operating Procedure: Preventive Maintenance Scheduling in SAP PM

This Standard Operating Procedure (SOP) outlines the standardized process for managing, scheduling, and monitoring Preventive Maintenance (PM) activities within the SAP Plant Maintenance (PM) module. Establishing a rigorous PM schedule is critical to ensuring asset longevity, minimizing unplanned downtime, and maintaining regulatory compliance. This document serves as the primary guide for Maintenance Planners and SAP Super Users to ensure that maintenance plans are accurately configured, triggered, and closed within the SAP ecosystem.

## Phase 1: Maintenance Plan Creation & Strategy

*   **Define Maintenance Strategy:** Determine the maintenance cycle (e.g., time-based or performance-based) in transaction code (T-code) IP11.
*   **Establish Task Lists:** Create a Task List (T-code IA05) to detail the specific steps, labor hours, and spare parts required for the job.
*   **Create Maintenance Plan:** Use T-code IP41 (Single Cycle) or IP42 (Strategy Plan) to initiate the plan. Link the equipment or functional location to the plan.
*   **Assign Task List:** Attach the established Task List to the Maintenance Plan to ensure the system automatically pulls the necessary instructions upon order generation.

## Phase 2: Scheduling & Monitoring

*   **Configure Scheduling Parameters:** Access the "Scheduling Parameters" tab in the Maintenance Plan. Set the call horizon, scheduling period, and completion requirement rules.
*   **Set Call Horizon:** Define the percentage of the maintenance cycle at which the system should generate the maintenance order (e.g., a 10% call horizon on a 30-day plan triggers the order 3 days early).
*   **Release the Plan:** Change the status of the plan to "Active" (T-code IP02).
*   **Run Scheduling:** Execute T-code IP10 to view the current schedule and manually trigger calls if necessary.
*   **Generate Orders:** Ensure the background job (T-code IP30) is active to automatically convert scheduled calls into Maintenance Orders (PM01/PM02).

## Phase 3: Order Execution & Completion

*   **Review Daily Work List:** Operations teams must review the daily Work Center capacity and current PM orders in T-code IW38.
*   **Issue Goods:** Ensure all required spare parts are issued to the Maintenance Order via MIGO or order reservation consumption.
*   **Confirm Completion:** Once maintenance is performed, technical staff must complete the confirmation (T-code IW41), logging actual labor hours and any variance in parts used.
*   **TECO/Close Order:** Set the order to Technically Complete (TECO) to finalize cost settlement and update the maintenance history of the equipment.

## Pro Tips & Pitfalls

*   **Avoid the "Over-Scheduling" Pitfall:** Do not set overly aggressive Call Horizons. If the horizon is too long, planners lose the ability to shift maintenance windows based on operational availability.
*   **Pro Tip – Performance-Based Metrics:** If your assets are utilized inconsistently, move away from time-based plans (e.g., every 30 days) toward measurement-based plans (e.g., every 5,000 engine hours) using Measuring Points (IK01).
*   **The TECO Trap:** Ensure that all maintenance orders are set to TECO. If orders are left in "Released" status, SAP will not accurately reflect maintenance backlog, and cost reporting will remain open indefinitely.
*   **Master Data Integrity:** Always verify that the Functional Location or Equipment master data has the correct Cost Center and Planner Group assigned. Incorrect data here will cause mass failure in financial reporting.

## Frequently Asked Questions (FAQ)

**1. Why is my Maintenance Order not generating even though the date has passed?**
Most likely, the "Call Horizon" is set incorrectly or the Maintenance Plan status is set to "Inactive." Check T-code IP10 to see if a call was skipped or if the system is waiting for a previous order to be TECOed.

**2. Can I change the cycle of a Maintenance Plan after it is already active?**
Yes. You can edit the plan via IP02. However, be aware that changes to cycles only affect future calls. Any order currently in the "Scheduled" or "Released" status will not be updated by cycle changes.

**3. What is the difference between IP30 and IP10?**
IP10 is the manual simulation and monitoring tool for individual plans, allowing you to see specific dates and statuses. IP30 is the mass-processing background transaction used to trigger all due maintenance plans into orders simultaneously.


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I create a preventive maintenance plan in SAP PM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To create a plan, use T-code IP41 for single-cycle plans or IP42 for strategy plans. You must link your equipment to the plan and attach a Task List created in IA05 to define the required maintenance steps."
      }
    },
    {
      "@type": "Question",
      "name": "What is the function of the Call Horizon in SAP PM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Call Horizon defines the percentage of the maintenance cycle at which the system triggers the maintenance order. For example, a 10% call horizon on a 30-day plan triggers the order 3 days before the due date."
      }
    },
    {
      "@type": "Question",
      "name": "Which T-code is used for automatic maintenance order generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "T-code IP30 is used to schedule and run the background job that automatically converts maintenance calls into actionable maintenance orders."
      }
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SAP Plant Maintenance (PM)",
  "applicationCategory": "Enterprise Resource Planning Software",
  "operatingSystem": "SAP NetWeaver",
  "description": "SAP PM is an enterprise-level module designed for managing equipment, maintenance scheduling, and asset lifecycle tracking within the SAP ERP ecosystem.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>

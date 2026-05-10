---
status: published
title: Onboarding Template Discord
publishedAt: '2026-05-10T18:48:01.047Z'
---
# Standard Operating Procedure: Discord Server Onboarding Template

This SOP outlines the standardized procedure for setting up, configuring, and maintaining an onboarding flow for a professional Discord community. A well-structured onboarding process is critical for reducing user friction, ensuring compliance with community guidelines, and directing new members to high-value channels immediately upon entry. This template assumes the use of Discord’s native "Onboarding" feature, which replaces legacy manual verification gates.

## Phase 1: Pre-Configuration and Prerequisites
*   [ ] **Define User Personas:** Identify the primary roles or interest groups that will interact with your server.
*   [ ] **Map Channel Hierarchy:** Ensure channels are categorized logically (e.g., #announcements, #general, #resources).
*   [ ] **Create Member Roles:** Set up specific roles (e.g., @Community Member, @Beta Tester, @Investor) that can be assigned via the onboarding flow.
*   [ ] **Enable Community Features:** Navigate to Server Settings > Enable Community to unlock the necessary administrative tools.

## Phase 2: Onboarding Flow Setup
*   [ ] **Set Default Channels:** Define which channels are visible to members before they complete onboarding.
*   [ ] **Design Welcome Questions:** Draft 3-5 simple questions that allow users to self-select their interests (e.g., "What are you interested in learning?" or "How did you hear about us?").
*   [ ] **Configure Role Assignments:** Link specific response options in your questions to automated role assignments to grant immediate access to relevant channels.
*   [ ] **Set Up Default Channels:** Select the channels that every new user must join to ensure they see important updates immediately upon arrival.
*   [ ] **Preview Flow:** Use the "Preview" tool in the Onboarding settings to simulate the new user experience from start to finish.

## Phase 3: Safety and Gatekeeping
*   [ ] **Verification Settings:** Ensure the "Verification Level" in Server Settings is set to at least "Low" or "Medium" to prevent bot spam.
*   [ ] **Enable Rule Screening:** Add a "Membership Screening" requirement where users must check a box agreeing to community rules before sending their first message.
*   [ ] **Automated Moderation:** Configure Discord’s built-in AutoMod to block common slur lists and spam patterns.

## Phase 4: Quality Assurance and Launch
*   [ ] **Test with Alt Account:** Log in with a secondary account to walk through the onboarding steps as a fresh user.
*   [ ] **Audit Permissions:** Verify that the "@everyone" role has the appropriate view/read permissions for onboarding-gated channels.
*   [ ] **Final Deployment:** Toggle "Enable Onboarding" in the server settings to push the flow to all new incoming members.

## Pro Tips & Pitfalls
*   **Keep it Short:** Limit your onboarding questions to a maximum of 5. Excessive friction at the front end significantly increases "drop-off" rates.
*   **The "Welcome" Trap:** Avoid overwhelming users with 20+ private channels immediately upon entry. Use the onboarding flow to provide only the channels they are interested in.
*   **Pitfall - Forgetting the Rules:** Ensure the rules are embedded directly in the Membership Screening process, not just hidden in a #rules channel that users might skip.
*   **Pro Tip:** Use emojis in your onboarding questions to make the interface feel more professional, approachable, and brand-aligned.

## FAQ

**Q: Does onboarding replace a "Verification Bot" like Wick or Dyno?**
A: Yes. Discord’s native onboarding tools are now robust enough to replace third-party verification bots for most communities. Native tools are generally more stable and offer a better mobile user experience.

**Q: Can I change the onboarding questions after I go live?**
A: Absolutely. You can edit, add, or remove questions at any time in the Onboarding settings menu. Changes will reflect immediately for new users joining the server.

**Q: What happens to existing members if I enable onboarding?**
A: Existing members are not affected by the onboarding flow. The flow only triggers for accounts that join the server after the feature has been enabled and configured.

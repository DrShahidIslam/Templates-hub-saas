# Standard Operating Procedure: Creating High-Impact Process Flow GIFs

This SOP outlines the standardized procedure for producing clear, concise, and visually engaging process flow GIFs. These assets serve as essential educational tools for onboarding, product documentation, and user support. The objective is to maintain brand consistency, optimize file sizes for web performance, and ensure the instructional content is easily digestible for the end-user.

## Phase 1: Planning and Scripting
* [ ] **Define the Scope:** Identify the specific process or feature being demonstrated. Ensure the GIF captures a single, linear action (limit to 5–15 seconds).
* [ ] **Storyboarding:** Create a rough sketch of the steps. Ensure there is a clear start and end point.
* [ ] **Clean the Interface:** Remove unnecessary browser extensions, personal bookmarks, or sensitive data from the workspace.
* [ ] **Setup Environment:** Set your screen resolution to 1920x1080 or the standard container size defined in your brand guidelines to maintain aspect ratio.

## Phase 2: Recording and Capture
* [ ] **Use High-Fidelity Tools:** Utilize professional screen recording software (e.g., Camtasia, ScreenStudio, or CleanShot X).
* [ ] **Standardize Mouse Movement:** Ensure mouse movements are smooth, deliberate, and free of jitter. Enable "click highlights" if the action requires precision.
* [ ] **Record at Native Speed:** Do not speed up the recording during capture. It is better to record at normal speed and trim frames later to ensure realism.
* [ ] **Verification:** Play back the raw recording to ensure no critical UI elements were cropped out of the frame.

## Phase 3: Editing and Optimization
* [ ] **Trim Excess Frames:** Remove "dead air" at the start and end of the recording. Ensure the first frame establishes context immediately.
* [ ] **Add Annotations:** Use subtle highlights (e.g., a glowing circle or a soft border) to draw the eye to the point of interaction.
* [ ] **Frame Rate Management:** Set the frame rate to 15–20 FPS. This is usually sufficient for screen flows and significantly reduces file size.
* [ ] **Color Palette Reduction:** If using tools like GIFski or EZGIF, reduce the color palette to 128 or 256 colors to optimize for web loading speeds.
* [ ] **Export Settings:** Target a file size under 2MB for web integration. Use the .gif or .mp4 (as a silent looping video) format depending on the CMS requirements.

## Pro Tips & Pitfalls
* **Pro Tip:** Use a "reset" pause. Always ensure the GIF ends on the final state of the process for a brief moment before looping so the viewer can see the result.
* **Pro Tip:** If the process is complex, break it into multiple smaller GIFs rather than one long, slow-loading file.
* **Pitfall (The "Jump Cut"):** Avoid abrupt transitions. Ensure the loop feels natural by adding a 1-second pause at the end of the action.
* **Pitfall (File Bloat):** Never upload a raw 4K screen capture. Always downscale to the actual display size where the GIF will be embedded.

## FAQ
**Q: How long should my process flow GIF be?**
A: Ideally, keep them between 5 and 15 seconds. If a process takes longer than 15 seconds, it should be split into multiple steps or converted into a video with a progress bar.

**Q: Should I use a GIF or a silent MP4?**
A: For web performance, an MP4 (or WebM) file is superior. It offers much higher visual quality at a fraction of the file size. Use GIFs only if the platform does not support HTML5 video loops.

**Q: How do I handle sensitive data during screen recording?**
A: Use a tool like "Blur" or "Redact" during the editing phase to obscure usernames, emails, or financial information. Never assume a video is too low-resolution for sensitive data to be read.
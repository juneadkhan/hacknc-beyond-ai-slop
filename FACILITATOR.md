# Beyond AI Slop: facilitator guide

**HackNC 2026 · 45 minutes · Junead Khan**

The organizer's October 6 guide lists Saturday October 10, 3:15–4:00 p.m., Fetzer Classroom 109. Check the day-of schedule when arriving. FLUX Intro to UI/UX is concurrent. Position this as a practical AI-assisted redesign session, useful to projects already in progress.

## The promise
"You will take the same working app, give AI a clear design system, and make it look and feel like something you chose. Then someone else will test it."

Do not call the starter an actual output from a particular model. It is a deliberately constructed example of common weak generated-interface patterns. Do not imply the three reference designs are model benchmark results or production Treasury screens.

## Before students arrive
- Open slides.html and the studio in separate tabs. Browser deck: left/right arrows, F for fullscreen, N for notes; its Reset timer button starts the exercise countdown. PowerPoint and PDF are included as alternatives.
- Download the offline ZIP, unzip it, and open its index.html as your network fallback. Keep the PowerPoint/PDF locally. Printed or local student guide also works.
- Check projector readability, scaling and Wi-Fi. No runtime install is necessary. Verify the room and schedule on arrival.
- Do one real two-prompt rehearsal with the AI chat you intend to demonstrate. The package's prepared CSS examples are the reliable fallback; free AI availability and response quality are not guaranteed.
- Ask a helper, if available, to circulate. Pair students when access or experience differs. One laptop and AI account per pair is enough.
- Have the QR/URL slide visible while people arrive. Explain that they can use any AI chat; no purchase is required.

## Run of show
| Elapsed | Slides / action | Facilitation |
|---|---|---|
| 0–3 | 1–2: welcome, URL and task | Quick hands: who has used an AI coding tool? Who has a browser and an AI chat ready? Pair up immediately. |
| 3–7 | 3–4: original and critique | Give 30 seconds to find bills due before Friday. Ask for observed failures. Point to competing metric emphasis, inconsistent filters/rows, and bills pushed below secondary content on mobile. |
| 7–12 | 5–7: system, tokens, components | Explain roles rather than hex codes. Show one shared rule used by every bill row. Change an accent token and show the shared result. |
| 12–15 | 8–9: systems and visual directions | Carbon and Fluent are complete systems; Radix Primitives supplies unstyled behaviors. Our Ledger, Signal, Aero examples are workshop systems, not copies. Let students choose other directions. |
| 15–21 | 10: live workflow | Open studio. Write a specific direction. Copy system prompt, send to your AI, inspect guide, paste guide, copy implementation prompt, paste CSS and Apply. Inspect mobile. If generation exceeds ~45 seconds, use prepared CSS and explain the substitution. |
| 21–33 | 11: students build | Start 12-minute timer. At 3 minutes, ask for a guide; at 6, ask for a visible preview; at 10, ask for mobile and keyboard checks. Pair/troubleshoot. |
| 33–39 | 12: swap and test | Partners use the screen without explanation. Request two volunteer demos; ask each for one rule and one remaining problem. Include different styles, not just the most polished. |
| 39–45 | 13–14: transfer, export, questions | Download app/guide. Ask each to name one design rule to apply to their own hack. Mention Treasury access briefly and offer mentoring after. |

## Opening, about 45 seconds
"I'm Junead, a UNC alum and the founder of Treasury. Building a money app makes you care about what people can understand at a glance: which number matters, what date it belongs to, and what they can do next. Today we're going to give AI those decisions explicitly. You'll redesign the same student money app in your own style, and we will check whether it still helps someone use it."

## Critique prompts
"What did you notice first? Was it the information you needed?"

"Why do these three filter buttons look like three different kinds of control?"

"At mobile width, how far do you scroll before the bills?"

"If we remove the purple gradient but leave the hierarchy, is the task easier?"

HackNC's Aero theme is an opportunity: glossy buttons and gradients can be purposeful. Critique the mismatch between intent and execution, not a blanket ban on visual styles. Never shame students' projects or tastes.

## Live demonstration script
1. Preview Original. Show the user task and unchanged facts.
2. Preview Ledger briefly; explain hierarchy. Signal and Aero demonstrate that consistency does not force everyone into one aesthetic.
3. Return to Your CSS. Write an original direction, such as "an optimistic campus planner with Aero gloss; put readable due dates first; compact secondary spending." Ask the room for a different suggestion if useful.
4. Click Copy system prompt. Read its task, direction, and constraints out loud. Send it in your chosen chat. Review whether the returned guide says when to use components, not just a list of colors.
5. Paste the guide, copy the implementation prompt, send it, paste CSS, and Apply.
6. Inspect at 390px and use Before payday. Open a detail dialog, press Escape, then Tab to inspect focus. An AI statement that it is accessible is not evidence.
7. Name one actual failure and use the critique prompt. Replace its observation placeholder before sending. Be honest about model mistakes or lack of a screenshot.
8. Download the app. Show that it opens independently with its controls intact.

## Prepared demonstration if AI is slow
Preview Ledger, then Copy reference CSS. Paste into editor and Apply. Explain this is a prepared stylesheet. Edit --accent and --on-accent together, preserving contrast, then apply. Point out affected brand, primary button, bars, and selected filter border. Explain the shared component rules and the visual hierarchy change. This demonstrates system mechanics but does not verify live generation quality.

## Peer-test answer key
Phone plan $62 due October 11; gym $29 due October 13; electricity $48 due October 15. Three bills, $139. Rent is after payday. Asking a neighbor to find this is a brief task test, not formal UX research. Timing or scores should not be presented as a controlled performance comparison.

## Adaptations
- **Mostly beginners:** pairs; keep markup fixed, use CSS-only prompts, explain :root and one shared selector. Prioritize an applied result over a perfect guide.
- **Experienced students:** invite them to use their usual coding agent and the starter project. Add deliberate component variants and a 200% zoom check; do not spend time on environment setup.
- **No AI/credits:** reference CSS and manual tokens still support participation. No one needs to buy access during the session.
- **No Wi-Fi:** use offline studio and prepared reference CSS. Students write the brief and review rules locally. Explain the demonstration is prepared.
- **Only 30 minutes remain:** 3 minutes task/critique, 5 system demo, 4 live/prepared workflow, 12 exercise, 4 swap, 2 export. Cut external system survey first.

## Discussion references
- [MLH workshop guidance](https://raw.githubusercontent.com/MLH/mlh-hackathon-organizer-guide/master/general-information/day-of-logistics-and-hacker-experience/workshops.md): participation, troubleshooting, beginner support.
- [Hack Club Sprig format](https://workshops.hackclub.com/sprig/): brief demo/tool introduction, making, sharing.
- [The Carpentries live coding](https://carpentries.github.io/instructor-training/17-live.html): pacing and thinking aloud.
- [Figma context guidance](https://help.figma.com/hc/en-us/articles/38978644498199-AI-workflows-collection-Refine-your-components-and-variables-for-the-Figma-agent) and [specific guidelines](https://help.figma.com/hc/en-us/articles/43602393097239-Write-design-system-guidelines-for-Make-kits).
- [Carbon](https://carbondesignsystem.com/), [Fluent 2](https://fluent2.microsoft.design/), [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction).

External guidance motivates this format; there are no measured learning gains for this specific workshop yet. Do not advertise universal improvements in AI output quality.

## October 9 rehearsal findings
A signed-out Gemini Flash-Lite session generated a guide and a complete stylesheet, which applied in the studio at 390px. The before-payday filter preserved the three bills and the exported-app status appeared. The first guide request also created an unsolicited Canvas. We strengthened the guide prompt to explicitly ask for Markdown only, and supplied the runtime bill-row structure to both prompts. The changed guide prompt has not been independently rebenchmarked.

Useful live critique: the generated guide named an undefined --surface-gloss token and described spacing without assigning shared spacing variables. The generated CSS improved hierarchy and shared row/filter rules, but repeated hardcoded spacing. Ask students to check whether their stylesheet actually uses the system they described. A model claiming zero friction is not a usability result.

Browser slides and PDF have fixed typography. Editable PowerPoint uses Georgia for display headings and Lexend for body text; Lexend is included in fonts/. Check PowerPoint on the presentation machine if you use it, or use the browser/PDF. The workshop studio uses Treasury's Fraunces/Lexend fonts locally.

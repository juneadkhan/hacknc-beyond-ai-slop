# Beyond AI Slop — facilitator guide

45 minutes · HackNC 2026 · Junead Khan

Present the current editable Canva deck. The local browser/PDF/PowerPoint files are earlier preparation snapshots; editing Canva does not regenerate them.

## Session flow

| Minutes | Canva slides | Focus |
| --- | --- | --- |
| 0–6 | 1–4 | Introduce Treasury, invite recognition of the generic UI, and explain how an underspecified brief and isolated revisions can produce design drift. Fonts and gradients are choices, not inherently bad design. |
| 6–9 | 5–8 | Give the agent structure, examples and building blocks. Define a system as shared rules and reusable parts. |
| 9–13 | 9–12 | Color/type, spacing/layout, components/states, motion/interaction. Distinguish component code, interaction primitives and broader systems. Briefly compare the prepared UIs. Students research their own direction. |
| 13–17 | 13–14 | Teach context, reuse and review. Show DESIGN.md, src/tokens.css and src/components/. A guide needs explicit use; actual imports and tokens make decisions reusable. |
| 17–18 | 15 | Brief Gestalt example: proximity keeps a bill's date and amount together; similarity connects related rows. Mention HCI as a deeper subject. |
| 18–23 | 16 | Open the starter, remix and demonstrate the Design System / App tabs. Change one shared value or component and show it in both. |
| 23–27 | 17 | Independent reference research and a self-authored brief. Students credit a reference and identify specific choices. No direction picker or aesthetic prompt handout. |
| 27–39 | 17 | Define/review DESIGN.md, implement shared tokens/components, then refine App composition. Encourage specific observations and iteration. |
| 39–45 | 17 | Peer test and show-and-tell: final App, one workbench component, one intentional decision. Discuss how styles serve the same task. |

## Prepare and join

Student starter: [tinyurl.com/hacknc-ui](https://tinyurl.com/hacknc-ui)

Show this typed address on Canva slide 16. Students open it directly on their laptops, sign in and remix their own copy.

Landing page: https://juneadkhan.github.io/hacknc-beyond-ai-slop/

Have students sign into Google and remix once into their own account. Keep their copy's URL. Use the Gemini coding chat beside the preview. The two tabs are inside the preview; AI Studio's Code/Preview controls are different.

Free-tier generation worked in a separate-account rehearsal without purchasing a subscription or selecting a paid key. Eligibility, remaining quota and whole-room capacity can differ. Students handle any first-use terms or age verification themselves. Pair up if necessary. A blocking Launch overlay cleared when the AI Studio tab was refreshed after a completed, saved build. No API, billing, GitHub connection or deployment is needed.

## Live demonstration

1. Find the bills before payday in App. Ask what drew attention first and what was hard to scan.
2. Open Design System and show live colors, type and spacing, plus actual component specimens.
3. Explain the role of DESIGN.md, shared tokens and component imports. Use your own short demo brief; do not supply students with canned style prompts.
4. Implement one shared change, inspect states in Design System, then show it in App. Both views reuse Button, Surface, BillRow and the other shared exports.
5. Refine App composition after the system is coherent. Inspect mobile and the original task.

## Review criteria and answer key

Deliverable: a beautiful Friday UI in the student's chosen style, a consistent component workbench, and concise system rules.

- Phone $62 on October 11, gym $29 on October 13 and electricity $48 on October 15: three bills, total $139, before Friday October 16.
- Rent $720 on November 1 appears after payday.
- Checking $1,284 is the October 10 historical snapshot. Spending last month is $987; weekly totals are $270, $244, $298 and $175.
- Before/After filters and Review upcoming bills work. Enter opens a bill; Escape closes it and focus returns visibly to the trigger.
- Dates and amounts remain associated at mobile width, without horizontal scrolling.
- Buttons, rows, cards and selected/focus states follow the same rules in both views.

Ask for the rationale behind one choice and one remaining issue. Keep feedback tied to the task rather than prescribing a preferred aesthetic.

## Fallback

Use the hosted CSS studio or offline kit if account access, generation or Wi-Fi fails. Students can manually edit tokens or pair up. Prepared reference CSS is available as a recovery aid; it is not the research exercise. The primary workshop is AI Studio, with independent research and self-authored instructions.

Sources checked October 10, 2026: https://ui.shadcn.com/docs ; https://www.radix-ui.com/primitives/docs/overview/introduction ; https://carbondesignsystem.com/ ; https://m3.material.io/ ; https://www.gestaltprinciples.com/principles/proximity ; https://www.gestaltprinciples.com/principles/similarity . Google access and free-tier limitations were checked during the October 9 rehearsal; see AI-STUDIO-REHEARSAL.md for observed evidence and limits.

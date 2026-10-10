# Beyond AI Slop: student exercise

Open the workshop studio: **https://juneadkhan.github.io/hacknc-beyond-ai-slop/**

You will redesign **Friday**, a fictional student money app. Your goal is to help a student find the bills due before their next paycheck, using a consistent visual system in a style you choose.

## What you need
A laptop browser and access to an AI chat you already use. The studio itself has no account, installation, API key, or subscription. AI services have their own accounts and free limits. Pair up if access is unavailable. You can complete the design exercise manually using the reference CSS.

## The exercise, about 15 minutes
1. **Critique the original (2 minutes).** Locate the three bills due before Friday. Note one hierarchy problem and one component inconsistency. Describe the actual failure, such as "the chart attracts more attention than the bill dates."
2. **Choose your direction (1 minute).** Write a visual brief with an audience, mood, typography, density, and priority. Examples: a campus newspaper; an optimistic 2000s desktop; a dense scientific instrument; a playful student planner. You do not need to copy a reference style.
3. **Create the system (3 minutes).** Click **Copy system prompt**, paste it into your AI chat, and send it. Review the design guide before accepting it. Paste the guide back into the studio. Ask for purpose, semantic tokens, a type and spacing scale, component rules, interaction states, mobile behavior, and examples.
4. **Apply the system (5 minutes).** Click **Copy implementation prompt**, send it in the same chat, then paste the full CSS response into the CSS editor. Click **Apply CSS**. The studio preserves the app's markup, data, and JavaScript. Inspect both desktop and 390px mobile previews. Ask for a complete replacement stylesheet if the AI returns only a patch.
5. **Critique and revise (2 minutes).** Use **Copy critique prompt**, replace its observation placeholder with something you actually saw, and request a focused correction. Example: "At 390px the date wraps below the wrong bill. Keep the amount aligned to its bill and its date readable."
6. **Swap and test (2 minutes).** Ask a neighbor to find all bills due before payday and open one bill's details. Let them use the screen without your explanation. Name one improvement and one remaining issue.

Click **Download my app** and **Download my guide** before leaving. The app is one HTML file you can open in a browser or send to a teammate. Changes stay in your browser when local storage is available; they are not uploaded to a server. Unapplied edits must be applied before export. References preview independently and do not replace your editor.

## Facts you must preserve
- Today: Saturday, October 10, 2026. Next paycheck: Friday, October 16.
- Phone plan: $62 due October 11; gym membership: $29 due October 13; electricity: $48 due October 15; rent: $720 due November 1.
- Three bills totaling $139 are due before payday.
- Checking snapshot: $1,284. Last month's four illustrative weekly totals: $270, $244, $298, $175, totaling $987.
- Filters show all bills, before payday, and after payday. Each bill opens a detail dialog. "Review upcoming bills" selects the before-payday filter.
- Fictional data only. A bank balance is not an amount safe to spend. Do not add financial recommendations or unsupported conclusions.

## What counts as a design system?
A color palette is one part. Your system should explain which information gets priority, assign values to named roles, define reusable components, cover interaction states, and establish how the rules behave at small widths.

```css
:root {
  --surface: #ffffff;
  --text: #1c303c;
  --accent: #214e63;
  --on-accent: #ffffff;
  --space-4: 16px;
}
.button-primary {
  background: var(--accent);
  color: var(--on-accent);
  padding: var(--space-4);
}
```

Change one semantic token and check its uses. Consistency is shared rules; hierarchy lets important information differ intentionally.

## Review rubric
Score each from 0 (missing), 1 (partly), to 2 (clear).

| Criterion | What to look for |
|---|---|
| Task clarity | Your neighbor finds the three bills and their dates without coaching. |
| System consistency | Shared roles and component rules replace individual styling exceptions. |
| Visual direction | The style has a specific purpose and rationale beyond a different palette. |
| Readability | Dates and amounts remain readable at 390px; check contrast on the actual background. |
| Interaction | Filters, focus indicators, and bill details work with keyboard and pointer. |
| Integrity | Facts and labels are unchanged; no misleading claims appear. |

Use the score to discuss improvements, not to choose a single best visual style. A beautiful result can still fail the task.

## If you get stuck
- **No AI account or credits:** pair up, or preview a reference, copy its CSS, paste it into your editor, apply it, and change the tokens yourself.
- **Clipboard fails:** the studio selects the prompt in a text field; press Ctrl/Command + C.
- **AI returns HTML or React:** ask for CSS only using the supplied DOM. Advanced students may use the downloaded starter in their own editor; keep the facts and interactions.
- **CSS does not take effect:** return the entire stylesheet, not a patch; remove prose; check your browser and Apply CSS status. You can undo the previous apply.
- **A reference seems to replace your work:** it is a separate preview. Select "Your CSS" or Apply CSS to return.
- **Bad revision:** use Undo apply. Reset requires confirmation and resets the guide and direction too; download first.
- **Wi-Fi stops:** unzip the offline workshop, open index.html, and use manual token edits or prepared references. The app and studio work offline; AI chat still needs internet.

## Take it into your hack
Write the user task, save the design guide beside your code, reuse existing components, ask AI for one change at a time, and inspect the rendered result. In a larger project, changing the structure may be necessary too; this workshop limits changes to CSS to make comparisons and setup manageable.

# Beyond AI Slop: build in Google AI Studio

Student starter: **https://ai.studio/apps/41a59999-3017-4ceb-9f7c-3ce7e1dbbf35**

You will redesign Friday, a fictional student money app. Help a student find the three bills due before Friday and read each date and amount. Choose your own visual style, then make it consistent through a design system.

## Get ready

Use a laptop browser and sign into Google. The shared link requires sign-in. Open it before the exercise starts so account setup does not use your build time. If a school account blocks access, try your personal account. Google may require age verification even when you are over 18.

The facilitator rehearsal used AI Studio's free-tier requests without a subscription purchase or a paid API key. Your account's access and remaining limits can differ. This exercise uses the built-in coding assistant and a static fictional app. You do not need to connect GitHub, configure billing, deploy the app, upload files or install software.

Work alone or in pairs. In a pair, use one person's copy and alternate between prompting and reviewing the result.

## Make your own copy

1. Open the starter link and sign in. Google may show **This app is from another developer**. For this facilitator-provided fictional starter, choose **Continue to the app**. You should see **Beyond AI Slop - Friday Starter**, with **Design System** and **App** tabs. The workshop shell is gold/glass; the exercise starts with a deliberately inconsistent purple theme.
2. The left pane says **Remix to make this app your own**. Choose **Remix** at the top right. Give your copy a team name, such as **Friday - Campus Newspaper**, then choose **Remix app**. Wait for **Remixing...** to finish.
3. Confirm the app title and browser address changed. Work in that copy. Keep its URL to return later.
4. A new copy may show Launch while its preview starts. The chat still works. If Launch remains after your first guide request finishes and shows Built, refresh the AI Studio browser tab once. Refreshing before generation did not fix this in the rehearsal; refreshing after the saved guide did. You can critique the original starter before remixing if your new preview is still loading.

Viewer access lets you inspect and copy the starter. Each team edits its own remix; everyone should not edit the facilitator's original. Students' new chat history does not come from the facilitator's hidden preparation chat. The tested remix starts restricted and belongs to the account that copied it. To compare in pairs, show the preview on the copy owner's screen; exchanging URLs alone does not give a neighbor access to a restricted copy.

## Design, review, build

Your remix contains two tabs inside the running app:

- **Design System:** see the colors, typography, spacing and actual reusable components individually. Try the filters, buttons and bill dialog.
- **App:** see the complete Friday dashboard built with those same components. Shared design changes appear here automatically.

Use the tabs inside the preview, not AI Studio's Code/Preview controls. Code/Preview switches between source and the running project. The Gemini chat beside the preview is the coding assistant; there is no extra AI account or API to connect inside Friday.

First spend two minutes in App finding the bills due before payday. Name one hierarchy problem and one inconsistent component. Then do your own research: find a reference, credit its source, and identify two or three specific design choices you want to explore. There is no direction picker or preset style prompt. Write your own instructions in Gemini.

### Define your system

Ask AI to work on **DESIGN.md first**. Describe the intended audience, your references, visual choices and information priorities. Review concrete rules for semantic color roles, typography, spacing, surfaces, component variants, interaction states, motion and mobile behavior before asking for implementation. Explain why the choices suit Friday's task.

### Implement reusable parts

Direct AI to **src/tokens.css** and **src/components/**. Require Design System and App to use the same component implementations and token stylesheet. Inspect the gallery's buttons, selected filters, bill rows, cards and dialog. Review keyboard focus and disabled states as well as the default appearance. The shell and baseline use Lexend.

A guide provides context; it does not enforce itself. Explicitly ask the agent to read it, name the existing components it should reuse, and review the result for duplicated components or one-off styles.

### Compose and iterate

Switch to **App** and refine layout and hierarchy in **src/views/FridayApp.tsx**. Keep dates and amounts associated with their bills. Report a specific problem you observe, the viewport, and the rule it breaks, then review the revision. Shared component changes should appear in Design System too. You do not copy CSS between tools or tabs: AI Studio edits the project and rebuilds it.

Preserve the original fictional data, totals, chart and controls. Checking is a historical snapshot. This exercise needs no banking connection, backend, paid API or deployment.

Your deliverable is a beautiful Friday UI in your own style, a coherent component workbench, and a small guide explaining the system. At show-and-tell, show both tabs and explain one intentional decision.

## Test with a neighbor

- Ask them to find the three bills due before payday without coaching: Phone plan 62 dollars on October 11, Gym membership 29 dollars on October 13, Electricity 48 dollars on October 15. Together they total 139 dollars.
- After payday should show only Rent: 720 dollars on November 1.
- Use **Review upcoming bills**, then open a bill with Enter and close it with Escape. Check that keyboard focus returns to the bill.
- In **Select device preview → Mobile**, check that dates stay associated with their amounts and the page does not scroll sideways.
- Switch between Design System and App. Confirm the same button, row and card styles appear in both. Check the selected filter and keyboard focus as well as default styling. Give one improvement and one remaining issue.

For a focused revision, describe an observed problem, its viewport and the rule it breaks. For example: "At mobile width the bill amount is difficult to scan. Keep dates and amounts within their own row and align the amounts consistently. Preserve all facts and behaviors."

Keep your remix URL. Export from Code if you want source afterward; export is optional during the timed exercise. To present, show the live preview from your own copy.

## If access or generation fails

- Pair with someone who has access; switch who prompts and who reviews.
- If Google asks for first-use terms or age verification, complete that yourself. Ask the facilitator if the account is blocked.
- If AI generation hits a free limit, use the prepared reference systems and manual token editing in the fallback studio: **https://juneadkhan.github.io/hacknc-beyond-ai-slop/**.
- If a revision breaks behavior, use the prior checkpoint's Restore control or ask for a focused repair. The weak starter remains available to remix again.
- For Wi-Fi failure, use the facilitator's offline workshop kit. AI generation needs internet; the existing exercise and prepared examples can run offline.

Sources checked October 9, 2026: [Google's Build guide](https://ai.google.dev/gemini-api/docs/aistudio-build-mode), [billing and free tiers](https://ai.google.dev/gemini-api/docs/billing), [account availability and age verification](https://ai.google.dev/gemini-api/docs/available-regions).

Facilitator verification status, October 9: the prepared starter is link-accessible with chat history hidden. A separate personal Google account opened it as a viewer, remixed it, generated a guide, saved direct guide edits, applied the guide with free-tier AI, and reopened the saved result. Desktop/375px filtering, bill details and keyboard focus checks passed; the original starter stayed unchanged. The guide and implementation requests reported 36 seconds and 3 minutes 20 seconds respectively. A brand-new account's first-use terms/age-verification steps and whole-room capacity are untested. ZIP export is offered in Code, but its completion was not confirmed in this browser rehearsal; keep the remix URL regardless.

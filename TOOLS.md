# Workshop delivery options

Checked October 9, 2026 against primary vendor documentation. Free allowances and account eligibility may change. A signed-out Gemini Flash-Lite session was rehearsed on October 9: guide generation, CSS generation, and application in the studio worked without a subscription or login. The first response also created an unsolicited Canvas; the prompt was tightened to ask explicitly for Markdown only. This is one observed session, not a guarantee of student eligibility, available quota, or whole-room load. No fresh paid-agent account has been tested.

## Recommended path

**Workshop studio + an existing AI chat.** Students open one static website; preview, edit, import/export CSS, and download their app without an account. Prompts are copied to their own AI service. The studio itself has no AI integration or usage charges. Hosted preview needs internet initially; the offline ZIP works after download. AI chat requires internet and may require an eligible account. No subscription purchase is part of this exercise.

The copied prompt includes the fixed sample DOM and current CSS. This avoids manual file uploads, installs, Git cloning, npm builds, and permission grants during a 45-minute session. AI processing happens on the service students choose; the studio makes no AI requests or telemetry calls.

## Comparison

| Option                        | Free provision                                                                                 | Account/setup                                                                                                                                    | Workshop fit                                                                                                                                                   |
| ----------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Our browser studio            | Editing, preview, source download; no app account or usage meter                               | Open URL, use any existing AI chat                                                                                                               | Default; no environment setup, two prompt stages, offline fallback                                                                                             |
| Gemini web chat               | Basic access without a Google AI subscription, subject to changing capacity and feature limits | Some features work without sign-in; additional features and saved activity need an eligible Google account; school account availability can vary | Suggested chat link; use text prompts, no paid model or Canvas requirement                                                                                     |
| Bolt                          | $0; 300K tokens/day and 1M/month; public/private projects; hosting                             | Sign in; GitHub import adds GitHub connection/permission steps; desktop Chromium recommended                                                     | Optional for students already using it; the quota is not a promise of a fixed number of revisions                                                              |
| Replit Starter                | Daily Agent credits up to a monthly cap; Lite build; one free published app                    | Replit account; import/remix setup                                                                                                               | Still available, but exact free daily amount is not specified in the cited Starter guide; Plan Mode requires Core; free published link goes down after 30 days |
| StackBlitz Personal           | Unlimited public projects and GitHub repositories                                              | View/edit public projects without GitHub account; GitHub account needed to save/collaborate                                                      | Good optional browser code editor; do not promise included AI prompting                                                                                        |
| CodePen Free                  | Editor/full/details views                                                                      | Free account for saved work                                                                                                                      | Good HTML/CSS/JS playground; free signup lists no Collab Mode, Professor Mode, or asset hosting; do not promise included AI                                    |
| Clone/download + usual editor | Workshop source has no dependencies                                                            | Local editor; any separately available AI tool                                                                                                   | Advanced/fallback route; browser-openable HTML, no npm requirement                                                                                             |

## Optional browser-code route

The public workshop repository is **juneadkhan/hacknc-beyond-ai-slop**. Download the starter ZIP first. Its index.html runs directly in a browser; style.css and app.js are separate for editing. Do not import the entire Treasury repository.

**StackBlitz:** create a plain HTML/CSS/JS project and paste the starter files. Public GitHub projects can also be opened using StackBlitz's documented GitHub integration. Saving needs GitHub authentication. Use your usual AI chat separately.

**Bolt/Replit:** import the public workshop repository through the product's current GitHub flow or add the starter files to a plain web project. Ask it to work only on starter-project/style.css and keep the markup/data/behavior. Verify your account's free allowance before the session. If import, authentication, or quota takes more than a couple minutes, return to the studio. No deployment or payment is required to present a result.

**CodePen:** use the body markup, style.css, and app.js in the respective panels. The standalone file's head and CSP are not needed in Pen panels. Native dialog/filter behavior must still be tested. This path is optional and has not been verified with a new free account.

## Hosting

The workshop uses a public, standalone GitHub repository and GitHub Pages. GitHub documents Pages availability for public repositories on GitHub Free. The studio does not upload student work; hosting has its own ordinary security logging.

## Sources

- [GitHub Pages availability](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
- [Bolt pricing](https://bolt.new/pricing): published free caps, checked October 9, 2026.
- [Bolt GitHub integration](https://support.bolt.new/integrations/git) and [browser support](https://support.bolt.new/building/using-bolt/browser-support).
- [Replit Starter guide](https://docs.replit.com/billing/plans/starter-plan): free credits, Lite build, publishing and paid restrictions.
- [StackBlitz pricing](https://stackblitz.com/pricing) and [GitHub integration](https://developer.stackblitz.com/guides/integration/open-from-github).
- [CodePen free signup/features](https://codepen.io/accounts/signup/user/free).
- [Gemini requirements](https://support.google.com/gemini/answer/13275745) and [limits](https://support.google.com/gemini/answer/16275805).

## Why not require an all-in-one agent?

An integrated agent is convenient for an individual with an established account. For a room of students, account setup, browser requirements, GitHub grants, and used-up free allowances become workshop dependencies. The studio keeps the exercise usable while those differ across students. It also makes design context and human inspection explicit.

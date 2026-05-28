# InkWeave Agent Running Model

This file is for Claude, Codex, and any other agent working in this repo.

## Mission
- Build InkWeave into a UK author-first book generation platform.
- Prioritise generation quality, paid conversion, and output reliability.
- Do not turn this into a generic writing assistant.

## Operating Order
1. Protect paid book value (full manuscript stays behind paywall).
2. Improve generation quality and output integrity.
3. Keep the snippet intake and generation pipeline fast.
4. Add monetisation hooks only when they strengthen the offer.
5. Keep UX simple and author-focused.

## Product Rule
- Free chapter preview can be useful.
- Free preview must not reveal the full book output.
- Paid users get full manuscript (DOCX + PDF), chapter-by-chapter generation, and remote control.

## Generation Pipeline Rule
- Use `INGEST → ANALYSE → OUTLINE → EXPAND → COMPILE → DELIVER`.
- No hallucinated content without grounding in user snippets.
- No empty chapter objects.
- Keep the fixed manuscript schema intact.
- Longer, more detailed snippets produce better outputs — guide users toward this.

## Author POV
- Would one complete book still feel worth paying for?
- If the answer is no, improve quality before adding features.
- Copy must speak to completion, pride, control, and simplicity.

## Agent Workflow
- Read `AGENTS.md` first.
- Read this file second.
- Check Obsidian vault (`C:\Users\manaz\claude-obsidian\wiki\projects\inkweave\`) for memory.
- Add short Obsidian notes for meaningful changes.
- Link notes into the right folder index.
- Run targeted tests before claiming work is done.
- Push only intentional changes.

## Copy Rules
- Use plain, warm language — not tech jargon, not AI buzzwords.
- Prefer: YOUR BOOK FINISHED, NO BLANK PAGE, WEAVE YOUR STORY, STAY IN CONTROL, ONE PRICE FULL BOOK.
- Every sentence must earn its place.

## Do Not
- Do not expose the full manuscript in the free flow.
- Do not run generation in the frontend.
- Do not add placeholder manuscript content to production paths.
- Do not overbuild dashboards before generation quality is proven.
- Do not leave Obsidian notes orphaned.

## Current Handoff Prompt
Use this when sending another agent into the repo:

```text
You are working on InkWeave in C:\Users\manaz\Desktop\inkweave.

Read AGENTS.md, AGENT_RUNNING_MODEL.md, and the Obsidian vault at
C:\Users\manaz\claude-obsidian\wiki\projects\inkweave\ first.

Context:
- InkWeave is a UK author-first book generation SaaS, not a generic AI writing tool.
- Priority is generation quality, output reliability, paid conversion, then simple UX.
- Free flows may show 1 chapter sample, but never the full manuscript.
- Paid value includes: full manuscript (50k-100k words), DOCX + PDF download, session remote control, add-on upgrades.
- Generation pipeline: INGEST snippets -> ANALYSE -> OUTLINE -> EXPAND chapters -> COMPILE -> DELIVER file.
- Session remote control: user can redirect AI mid-generation via live SSE stream.

Before claiming done, run:
npm run lint
npm run build

Keep changes scoped. Add short linked Obsidian notes for meaningful changes.
```

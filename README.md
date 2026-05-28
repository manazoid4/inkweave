# InkWeave

AI-powered book-writing platform. Submit snippets — raw ideas, scenes, notes, character sketches — and InkWeave weaves them into a full manuscript.

**Status:** Stage 1 — MVP planning  
**Market:** UK-first  
**Repo:** https://github.com/manazoid4/inkweave

## What It Does

1. User submits text snippets (ideas, scenes, dialogue, notes)
2. AI pipeline: analyse → structure outline → expand chapters → compile manuscript
3. Output: DOCX + PDF download (50k–100k words)
4. Optional: session remote control to steer AI mid-generation

## Stages

| Stage | Feature | Status |
|---|---|---|
| 1 | MVP: snippets → full book + Stripe payment | Planning |
| 2 | Session remote control (live steering) | Planned |
| 3 | Paid add-ons: edit pass, cover brief, UK publishing guide | Planned |
| 4 | Subscriptions, API, white-label | Future |

## Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend:** Node.js / tRPC
- **AI:** Anthropic Claude API
- **DB:** Supabase
- **Payments:** Stripe
- **Hosting:** Vercel + Railway

## Obsidian Vault

Project knowledge base lives in the [claude-obsidian vault](https://github.com/manazoid4/claude-obsidian) under `wiki/projects/inkweave/`.

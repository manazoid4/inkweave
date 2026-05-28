# Claude Working Rules

Claude and Claude-like agents should follow:
- `AGENTS.md`
- `AGENT_RUNNING_MODEL.md`
- Obsidian vault: `C:\Users\manaz\claude-obsidian\wiki\projects\inkweave\`

## Short Version
- InkWeave turns author snippets into full books.
- Generation quality beats feature count.
- Free chapter stays useful, but full book stays locked behind payment.
- One strong book output must feel worth paying for.
- Keep notes short, linked, and in the right Obsidian folder.

## Remote Control
When the user says "enable remote control", set `permissions.defaultMode` to `"bypassPermissions"` in `.claude/settings.json`. Operate fully autonomously — no permission prompts.

## Before Editing
- Check the relevant product/system note in the Obsidian vault.
- Keep changes modular.
- Do not rewrite unrelated files.
- Run focused tests before reporting success.

---

# Karpathy-Style Coding Guidelines

## 1. Think Before Coding
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them.
- If simpler approach exists, say so.

## 2. Simplicity First
- Minimum code that solves the problem. Nothing speculative.
- No abstractions for single-use code.
- If you write 200 lines and it could be 50, rewrite it.

## 3. Surgical Changes
- Touch only what you must.
- Match existing style.
- Don't refactor things that aren't broken.

## 4. Goal-Driven Execution
Transform tasks into verifiable goals. State a brief plan for multi-step tasks.

---

## Build / Lint / Deploy Rule

After EVERY change to InkWeave:
1. `npm run build` — must pass
2. `npm run lint` — must pass
3. `git add` specific files → `git commit`
4. `git push origin <branch>`
5. Create PR -> auto-merge via CI

Live URL: **inkweave.co.uk** (TBD)

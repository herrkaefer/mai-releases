# Mai Releases

![Mai](./screenshots/screenshot-light.png)
![Mai](./screenshots/screenshot-dark.png)

Mai is a native macOS knowledge workspace for local Markdown files, now with an integrated AI Agent for real note operations.

## Download

- Latest releases: https://github.com/herrkaefer/mai-releases/releases
- Current recommended build: **v1.4.2**  
  https://github.com/herrkaefer/mai-releases/releases/tag/v1.4.2

## Why Mai

- **Local-first, no lock-in**: your notes stay as plain Markdown files in your own folders.
- **Native speed**: pure Swift/AppKit desktop app, optimized for large note collections.
- **Realtime sync**: external file edits are reflected immediately.
- **Practical structure**: categories, tags, filters, directories, backlinks, and full-text search.

## New: AI Agent Workflow

Mai now includes a production-ready AI Agent layer for Markdown knowledge work:

- **Built on SwiftAgentCore**: Mai's agent runtime is powered by [SwiftAgentCore](https://github.com/herrkaefer/SwiftAgentCore), maintained as a submodule in this repo.
- **Tool-driven actions**: the agent reads/edits/writes notes through explicit tools instead of hallucinated edits.
- **Safety by default**: mutating tools require in-app user confirmation.
- **Web search**: web search tool is available if codex is configured. More built-in web search tools will be implemented later.

## What Mai Is Not

- **Not a proprietary data container**: no private document format, no migration trap.
- **Not a Markdown editor replacement**: keep using your preferred writing tool if you prefer.
- **Not a forced workflow**: Finder and external tooling remain first-class.

## Road Ahead

Mai keeps improving around high-signal local knowledge workflows: stronger agent skills, better automation, and tighter reliability for real-world note operations.

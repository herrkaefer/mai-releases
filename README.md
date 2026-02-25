# Mai Releases

![Mai](./screenshots/screenshot-light.png)
![Mai](./screenshots/screenshot-dark.png)

Mai is a native macOS knowledge workspace for local Markdown files, now with an integrated AI Agent for real note operations.

## Download

- Latest releases: https://github.com/herrkaefer/mai-releases/releases
- Current recommended build: **v1.4.4**  
  https://github.com/herrkaefer/mai-releases/releases/tag/v1.4.4

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

### Supported Agent Tools (Current)

- `append_to_md`: append text to the end of a markdown file.
- `create_directory`: create a directory under the active root.
- `create_md`: create a new markdown file with frontmatter.
- `delete_file`: delete a file or directory under the active root.
- `delete_tmp_file`: legacy compatibility tool for `.mai/tmp` cleanup.
- `delete_worksite_file`: delete a staging file under `@worksite`.
- `edit_md`: replace a unique text segment in a markdown file.
- `get_backlinks`: get incoming links for a markdown file.
- `get_outgoing_links`: get outgoing links for a markdown file.
- `list_categories`: list available note categories.
- `list_directories`: list available directories in the active root.
- `list_files`: list markdown files in the active root.
- `list_tags`: list available note tags.
- `move_file`: move a file from root/`@worksite` to a new path under the active root.
- `read_frontmatter`: read frontmatter fields from a markdown file.
- `read_md`: read a markdown file by root-relative path or `@worksite` path.
- `search_md`: full-text search across markdown notes in the active root.
- `validate_md`: validate markdown sanity for a file.
- `web_fetch`: fetch a URL into `@worksite` markdown staging.
- `web_search`: search the public web with source URLs (when Codex CLI is configured).
- `write_frontmatter`: update frontmatter fields of a markdown file.
- `write_md`: overwrite a markdown file with full content.

## What Mai Is Not

- **Not a proprietary data container**: no private document format, no migration trap.
- **Not a Markdown editor replacement**: keep using your preferred writing tool if you prefer.
- **Not a forced workflow**: Finder and external tooling remain first-class.

## Road Ahead

Mai keeps improving around high-signal local knowledge workflows: stronger agent skills, better automation, and tighter reliability for real-world note operations.

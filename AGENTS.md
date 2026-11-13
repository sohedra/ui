# Repository guidelines

This is the repository for Sohedra UI: accessible components for Svelte. It is a pnpm workspace.

## Verifying changes

Run from the repository root before a change lands:

- `pnpm lint` (0 warnings)
- `pnpm format:check`
- `pnpm test`

## Git

- Changes reach `main` through pull requests, squash-merged. Work on a branch and open a pull
  request; never push to `main` directly.
- The pull request title becomes the commit on `main`, so it follows Conventional Commits
  (`feat: …`, `fix: …`, `docs: …`). Use the same style for commits on the branch.
- Never force-push to `main` or rewrite its history.
- Check the current branch and status before every commit or push.

## Agent tools

- Keep all agent instructions in this file; a `CLAUDE.md` or `CLAUDE.local.md` would replace it.

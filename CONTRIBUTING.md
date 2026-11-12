# Contributing

Thanks for your interest in Sohedra UI. The project is in early development and nothing is published
yet.

Everyone taking part follows the
[Code of Conduct](https://github.com/sohedra/.github/blob/main/CODE_OF_CONDUCT.md). To report a
security vulnerability, follow the
[security policy](https://github.com/sohedra/.github/blob/main/SECURITY.md) instead of opening an
issue.

## Before you start

Report bugs and propose features in [issues](https://github.com/sohedra/ui/issues). Search first:
someone may have reported it already.

Pull requests are welcome. Bug fixes, docs and tests can go straight to a pull request. For a new
component, an API change or anything large, open an issue first so we can agree on the approach
before you write code. APIs may still change during the beta.

## Setup

You need Node.js 26.13 or later and pnpm 12.18 or later (see `devEngines` in `package.json`).

```sh
pnpm install
```

## Checks

Run these before opening a pull request. CI runs the same checks.

```sh
pnpm lint
pnpm format:check
```

`pnpm lint:fix` and `pnpm format` fix most problems automatically.

## Pull requests

- Keep each pull request to one change.
- Use [Conventional Commits](https://www.conventionalcommits.org) for the title: `fix: …`,
  `feat: …`, `docs: …`.
- Describe what changed and why, and link the issue it resolves.

## AI tools

AI tools are welcome. You're responsible for everything you submit, whoever wrote it: only submit
changes you understand and can explain, and keep issues and descriptions short and accurate. If you
used AI tools, say how in the pull request. Issues and pull requests that don't meet this may be
closed.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](./LICENSE).

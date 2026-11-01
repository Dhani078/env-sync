env-sync

[![Release](https://img.shields.io/github/v/release/Dhani078/env-sync?color=blue)](https://github.com/Dhani078/env-sync/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Environment variable discovery and .env.example synchronization CLI. Scans codebases for process.env, import.meta.env, and os.environ references, compares against local .env and .env.example, flags missing keys, and generates synchronized templates with zero secret leakage.

---

The Problem

Environment variables are a frequent source of deployment failures:
- Developers add a new environment variable in code but forget to update .env.example.
- New team members clone the repository and crash immediately with missing config errors.
- Developers accidentally copy live production secrets into .env.example and commit them.
- Variable names drift between camelCase, snake_case, and UPPER_CASE across files.

---

The Solution

env-sync statically analyzes code across JavaScript, TypeScript, Python, Go, and PHP:
- Extracts every referenced environment variable key.
- Compares discovered keys against current `.env` and `.env.example`.
- Reports missing, unused, and undeclared variables in a clean tabular view.
- Auto-generates a clean `.env.example` file populated with placeholder values, preserving comments and grouping.

---

Installation and Usage

Run check without installing:

```bash
npx env-sync check
```

Automatically synchronize .env.example from code and local .env:

```bash
npx env-sync sync
```

Validate runtime variables against schema:

```bash
npx env-sync validate
```

---

CLI Options

- `--env <path>`: Path to active local env file (default: .env).
- `--example <path>`: Path to example env template (default: .env.example).
- `--fix`: Automatically append missing variables to .env.example.
- `--strict`: Fail with exit code 1 if any unreferenced variable is found in .env.
- `--json`: Output analysis results as JSON.

---

Author

Dhani078

---
name: env-sync
description: Environment variable discovery and .env.example synchronizer CLI and agent skill. Scans codebases for process.env and import.meta.env keys and generates clean templates.
risk: safe
version: 1.0.0
---

NAME
env-sync - Environment variable auditor and template synchronizer

SYNOPSIS
npx env-sync [options]

COMMANDS
- audit: Reconcile code references against .env and .env.example.
- --check: CI mode, exits with code 1 if variables are missing.
- --fix: Synchronize .env.example by appending missing keys.

OPTIONS
- --env <path>: Local env file path.
- --example <path>: Example template file path.
- --strict: Fail on dead unreferenced variables.
- --json: Output JSON report.

DETERMINISTIC BEHAVIOR AND INVARIANTS
1. The tool must never copy secret values from .env into .env.example.
2. If keys are referenced in code but missing from .env.example, --check must exit with code 1.
3. If all referenced keys are declared, the tool must exit with code 0.
4. Existing comments and ordering in .env.example must be preserved when adding new keys.

AGENT INTEGRATION INSTRUCTIONS
When onboarding a repository or preparing a pull request:
1. Run npx env-sync --check to verify environment variable parity.
2. If missing keys are reported, run npx env-sync --fix.
3. Commit the updated .env.example file.

AUTHOR
Dhani078 (dhanisepeda@gmail.com)

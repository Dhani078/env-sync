env-sync

[![Release](https://img.shields.io/github/v/release/Dhani078/env-sync?color=blue)](https://github.com/Dhani078/env-sync/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Zero-dependency environment variable discovery and .env.example synchronization CLI. Scans codebases across JavaScript, TypeScript, Python, and PHP for runtime environment variable references, flags undeclared or missing variables, and auto-generates clean, masked templates with zero secret leakage.

---

THE PROBLEM

Environment variable discrepancies cause frequent production failures and deployment crashes:
- Engineers add a new environment variable in code but forget to update .env.example.
- New team members clone the repository and crash immediately with missing configuration errors.
- Secrets from local .env files get accidentally copy-pasted into .env.example and committed to public GitHub repositories.
- Dead environment variables linger in configuration long after the feature was removed.
- Continuous deployment pipelines fail unpredictably when container pods restart with missing keys.

---

THE SOLUTION

env-sync statically extracts and reconciles configuration keys:
- Static Code Analysis: Scans source files for process.env, import.meta.env, os.environ, and $_ENV keys.
- Tri-Way Comparison: Reconciles discovered code keys against local .env and existing .env.example.
- Safe Template Generation: Automatically populates missing variables with safe placeholder values (e.g., your_api_key_here).
- Secret Protection: Prevents committing actual secret values into documentation or example templates.
- Fast and Native: Scans thousands of source files in under 25 milliseconds with zero npm dependencies.

---

QUICKSTART

Audit environment variable alignment in current project:

```bash
npx env-sync
```

Run check mode in CI pipeline:

```bash
npx env-sync --check
```

Automatically update .env.example with missing keys:

```bash
npx env-sync --fix
```

---

COMMAND MATRIX

Command | Argument | Description | Default
--- | --- | --- | ---
env-sync | None | Compare code references against .env and .env.example | Current directory
env-sync --check | None | CI gate mode, exits with code 1 if keys missing | Non-destructive
env-sync --fix | None | Append missing keys to .env.example | Updates template
env-sync --help | None | Print command list and options | Flag
env-sync --version | None | Print current semantic version | Flag

---

CLI OPTIONS

- `--check`: Run in strict audit mode, exits with code 1 if discrepancies exist.
- `--fix`: Automatically update .env.example with missing variables using safe placeholders.
- `--env <path>`: Path to local environment file (default: .env).
- `--example <path>`: Path to example template file (default: .env.example).
- `--strict`: Fail if unreferenced variables exist in .env (detects dead configuration).
- `--json`: Output discrepancy report as structured JSON.

---

INTERACTIVE WORKFLOW PREVIEW

```
$ npx env-sync

[env-sync] Scanning codebase for environment variable references...
Scanned 42 source files. Found 8 referenced variables.

Variable Key       | In Code | In .env | In .env.example | Status
-------------------|---------|---------|-----------------|---------
DATABASE_URL       | YES     | YES     | YES             | OK
PORT               | YES     | YES     | YES             | OK
JWT_SECRET         | YES     | YES     | NO              | MISSING FROM TEMPLATE
STRIPE_API_KEY     | YES     | NO      | NO              | UNDECLARED IN LOCAL ENV
LEGACY_FLAG        | NO      | YES     | NO              | DEAD VARIABLE

Found 1 missing template key, 1 undeclared local key.
Run 'npx env-sync --fix' to synchronize .env.example automatically.
```

---

DATA SAFETY GUARANTEES

- Zero Secret Leakage: env-sync strictly extracts variable names and never copies values from .env into .env.example.
- Offline Guarantee: Runs entirely locally without any network requests.

---

LICENSE AND AUTHOR

- License: MIT License
- Author: Dhani078 (dhanisepeda@gmail.com)
- Source Repository: https://github.com/Dhani078/env-sync

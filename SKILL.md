---
name: env-sync
description: Environment variable discovery and .env.example synchronization CLI. Use when developer adds new env variables, verifies configuration completeness, or needs to synchronize .env.example with actual codebase usage.
version: 1.0.0
author: Dhani078
---

Env Sync Skill

Use when developing features that introduce new configuration variables or when onboarding to a project with missing environment definitions.

Instructions

1. Scan codebase for environment variable references:
   ```bash
   npx env-sync check
   ```

2. Review drift analysis:
   - Identify variables present in code but absent from .env.example.
   - Identify variables declared in .env that have no active consumers in code.

3. Synchronize template safely:
   ```bash
   npx env-sync sync --fix
   ```

4. Verify zero secret exposure:
   Confirm that all values in .env.example are sanitized placeholders (e.g. `your_api_key_here`).

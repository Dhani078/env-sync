TROUBLESHOOTING: env-sync

Diagnostic Runbook for Common Failures

Problem 1: Error: Cannot find .env or .env.example
- Symptom: CLI exits with code 2.
- Cause: Target files are located in a custom subdirectory.
- Solution: Pass paths explicitly: npx env-sync --env config/.env --example config/.env.example.

Problem 2: CI pipeline fails on missing .env file
- Symptom: Error reading .env in continuous integration runner.
- Cause: Production CI runners do not have local .env files checked out.
- Solution: When running in CI, env-sync validates code against .env.example only, ignoring the absence of local .env.

Problem 3: Variable in comments is falsely detected
- Symptom: Code comments mentioning process.env.OLD_KEY appear in audit.
- Cause: Regex matched variable name inside comment block.
- Solution: env-sync includes comment stripping for single-line and multi-line comments. Ensure comments use standard syntax.

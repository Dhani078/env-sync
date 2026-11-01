SPECIFICATION: env-sync

1. Scope and Objective

env-sync statically extracts configuration keys accessed via runtime environment APIs and ensures bidirectional alignment between codebase references, local .env files, and shared .env.example templates.

2. Syntax Extraction Patterns

2.1. Node.js & TypeScript
- `process.env.VARIABLE_NAME`
- `process.env['VARIABLE_NAME']`
- `import.meta.env.VITE_VARIABLE_NAME`

2.2. Python
- `os.environ.get('VARIABLE_NAME')`
- `os.environ['VARIABLE_NAME']`
- `os.getenv('VARIABLE_NAME')`

2.3. PHP
- `$_ENV['VARIABLE_NAME']`
- `getenv('VARIABLE_NAME')`

3. Exit Codes

- 0: All referenced environment variables exist in .env and .env.example.
- 1: Drift detected (missing variables in .env or .env.example).
- 2: Invalid CLI parameters or file path not found.
- 3: Secret leakage detected (real secret found in .env.example).

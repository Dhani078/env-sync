SPECIFICATION: env-sync

1. Scope and Technical Purpose
env-sync performs static AST and regex parsing across project source files to discover environment variable identifiers, comparing them against filesystem configuration files.

2. Syntax Extraction Patterns
- Node.js JavaScript / TypeScript: process.env.KEY_NAME, process.env['KEY_NAME']
- Vite / Modern Frontend: import.meta.env.KEY_NAME, import.meta.env['KEY_NAME']
- Python: os.environ['KEY_NAME'], os.environ.get('KEY_NAME'), os.getenv('KEY_NAME')
- PHP: $_ENV['KEY_NAME'], getenv('KEY_NAME')

3. Reconciled Status Codes
- OK: Present in code, present in .env, present in .env.example.
- MISSING_FROM_EXAMPLE: Referenced in code, but absent from .env.example.
- UNDECLARED_LOCAL: Referenced in code, but absent from local .env.
- DEAD_VARIABLE: Present in .env, but not referenced anywhere in codebase.

4. Exit Codes
- 0: Parity achieved. All referenced variables exist in template.
- 1: Discrepancy detected under --check mode.
- 2: Configuration or syntax error.

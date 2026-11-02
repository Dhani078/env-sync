FAQ: env-sync

Q1: Does env-sync read my secret passwords or tokens?
A: No. env-sync only parses keys (the variable names left of the equals sign). It never reads, stores, or prints actual secret values.

Q2: Can env-sync detect dynamically constructed keys like process.env[dynamicKey]?
A: Dynamic computed keys cannot be resolved via static analysis. env-sync will warn if dynamic bracket notation is encountered.

Q3: Which file extensions does env-sync scan?
A: By default, env-sync scans .js, .jsx, .ts, .tsx, .mjs, .cjs, .py, and .php files.

Q4: Can I run env-sync in pre-commit git hooks?
A: Yes. Adding 'npx env-sync --check' to your pre-commit hook ensures no developer can commit code referencing undeclared environment variables.

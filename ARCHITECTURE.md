ARCHITECTURE: env-sync

Data Flow Diagram

```
+-----------------------------------------------------------+
|                        CLI Runner                         |
|                     (bin/env-sync.js)                     |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                   Codebase Regex & AST                    |
|   - Scans: process.env, import.meta.env, os.environ       |
|   - Collects set of unique variable keys                  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                       Env File Reader                     |
|   - Parses: .env, .env.local, .env.example                |
|   - Preserves section comments and grouping               |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     Reconciliation Matrix                 |
|   - Computes: Used vs Declared vs Documented              |
|   - Identifies orphan keys and undocumented dependencies  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     Emitter & Synchronizer                |
|   - Formats sanitized .env.example template               |
|   - Injects dummy placeholders: your_key_here             |
+-----------------------------------------------------------+
```

Component Responsibilities

- bin/env-sync.js: CLI handler and exit code evaluator.
- src/scanner.js: Static code analyzer for env key extraction.
- src/parser.js: Robust .env parser with comment preservation.
- src/reconciler.js: Set intersection and difference engine.
- src/sanitizer.js: Placeholder generator preventing secret leaks.

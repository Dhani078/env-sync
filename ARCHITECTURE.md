ARCHITECTURE: env-sync

1. Architectural Pipeline

```
+-------------------------------------------------------------+
|                      SOURCE CODE SCANNER                    |
|   - Traverses project source directories recursively        |
|   - Extracts regex matches for env access patterns          |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     CONFIG FILE PARSER                      |
|   - Parses .env key-value pairs (ignoring values)           |
|   - Parses .env.example keys and structural comments        |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     RECONCILIATION ENGINE                   |
|   - Performs set intersection and difference operations     |
|   - Identifies missing, undeclared, and dead variables      |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     SYNCHRONIZATION WRITER                  |
|   - On --fix, appends missing keys with masked placeholders |
|   - Emits formatted table or JSON results to stdout         |
+-------------------------------------------------------------+
```

2. Standard Library Mapping
- Filesystem: node:fs readdirSync, readFileSync, appendFileSync.
- Path Manipulation: node:path join, resolve.
- Process: node:process cwd, exit.

3. Performance Invariants
- Execution completes in under 25 milliseconds.
- Resident memory footprint under 20 megabytes RSS.

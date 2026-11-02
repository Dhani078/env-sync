EXAMPLES: env-sync

Scenario 1: Auditing Local Project
```bash
$ npx env-sync
[env-sync] Discovered 6 referenced environment variables.
All variables matched in .env.example. Status: Clean.
```

Scenario 2: Missing Key Detected
```bash
$ npx env-sync
[env-sync] Warning: NEW_PAYMENT_URL is referenced in src/pay.ts:14 but missing from .env.example.
Run 'npx env-sync --fix' to add it to .env.example.
```

Scenario 3: Automatic Template Fix
```bash
$ npx env-sync --fix
[env-sync] Appended NEW_PAYMENT_URL=your_new_payment_url_here to .env.example.
Synchronized successfully.
```

Scenario 4: Running in Continuous Integration
```bash
$ npx env-sync --check
[env-sync] SUCCESS: All 12 referenced variables declared in .env.example.
```

Scenario 5: Emitting JSON for Automation Scripts
```bash
$ npx env-sync --json
{
  "totalReferenced": 8,
  "missingFromExample": ["REDIS_PORT"],
  "undeclaredLocal": [],
  "deadVariables": []
}
```

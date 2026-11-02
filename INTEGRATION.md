INTEGRATION GUIDE: env-sync

1. Pre-Commit Hook Integration
Add env-sync to Husky to guarantee .env.example is always in sync with code:

```bash
npx husky add .husky/pre-commit "npx env-sync --check"
```

2. GitHub Actions CI Pipeline (.github/workflows/env-check.yml)

```yaml
name: Environment Variable Parity
on: [push, pull_request]

jobs:
  env-parity:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Verify .env.example parity
        run: npx env-sync --check
```

3. npm Scripts Configuration

```json
{
  "scripts": {
    "env:check": "npx env-sync --check",
    "env:sync": "npx env-sync --fix"
  }
}
```

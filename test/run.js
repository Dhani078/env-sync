const assert = require('node:assert');
const { extractEnvKeys, parseEnvFile } = require('../bin/cli.js');

console.log('Running env-sync tests...');
const code = 'const port = process.env.PORT || 3000; const key = import.meta.env.VITE_KEY;';
const keys = extractEnvKeys(code);
assert(keys.includes('PORT'), 'Should extract PORT');
assert(keys.includes('VITE_KEY'), 'Should extract VITE_KEY');

const parsed = parseEnvFile('DATABASE_URL=postgres://localhost/db\n# Comment\nPORT=8080');
assert.strictEqual(parsed.PORT, '8080');
assert.strictEqual(parsed.DATABASE_URL, 'postgres://localhost/db');
console.log('env-sync tests passed cleanly.');
process.exit(0);

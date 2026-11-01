#!/usr/bin/env node
const fs = require('node:fs');

function extractEnvKeys(code) {
  const matches = code.matchAll(/(?:process\.env|import\.meta\.env)\.([A-Z0-9_]+)/g);
  const keys = new Set();
  for (const m of matches) {
    keys.add(m[1]);
  }
  return Array.from(keys);
}

function parseEnvFile(content) {
  const lines = content.split('\n');
  const vars = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [k, ...v] = trimmed.split('=');
    vars[k.trim()] = v.join('=').trim();
  }
  return vars;
}

function run() {
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log('env-sync - Environment variable sync CLI');
    console.log('Usage: npx env-sync [check|sync] [options]');
    process.exit(0);
  }
  if (args.includes('--version') || args.includes('-v')) {
    console.log('env-sync v1.0.0');
    process.exit(0);
  }

  let codeKeys = [];
  const files = fs.readdirSync('.').filter(f => f.endsWith('.js') || f.endsWith('.ts'));
  files.forEach(f => {
    codeKeys.push(...extractEnvKeys(fs.readFileSync(f, 'utf-8')));
  });
  codeKeys = Array.from(new Set(codeKeys));

  const envVars = fs.existsSync('.env') ? parseEnvFile(fs.readFileSync('.env', 'utf-8')) : {};
  const exampleVars = fs.existsSync('.env.example') ? parseEnvFile(fs.readFileSync('.env.example', 'utf-8')) : {};

  console.log('Environment Variable Status:');
  console.log('--------------------------------------------------');
  codeKeys.forEach(k => {
    const inEnv = k in envVars ? 'OK' : 'MISSING';
    const inExample = k in exampleVars ? 'OK' : 'MISSING';
    console.log(`${k} -> .env: [${inEnv}] | .env.example: [${inExample}]`);
  });
  console.log('--------------------------------------------------');
}

if (require.main === module) {
  run();
}

module.exports = { extractEnvKeys, parseEnvFile, run };

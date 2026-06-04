import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const exts = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.mjs']);

const replacements = [
  ['--ei-midnight-rgb', '--ei-midnight-rgb'],
  ['--ei-midnight-rgb', '--ei-midnight-rgb'],
  ['--ei-aurora-blue-rgb', '--ei-aurora-blue-rgb'],
  ['--ei-luxe-violet-rgb', '--ei-luxe-violet-rgb'],
  ['--ei-orchid-pink-rgb', '--ei-orchid-pink-rgb'],
  ['--ei-soft-lavender-rgb', '--ei-soft-lavender-rgb'],
  ['--ei-midnight-rgb', '--ei-midnight-rgb'],
  ['--ei-void-rgb', '--ei-void-rgb'],
  ['--ei-ice-white-rgb', '--ei-ice-white-rgb'],
  ['--ei-midnight', '--ei-midnight'],
  ['--ei-midnight', '--ei-midnight'],
  ['--ei-aurora-blue', '--ei-aurora-blue'],
  ['--ei-luxe-violet', '--ei-luxe-violet'],
  ['--ei-orchid-pink', '--ei-orchid-pink'],
  ['--ei-soft-lavender', '--ei-soft-lavender'],
  ['--ei-midnight', '--ei-midnight'],
  ['--ei-void', '--ei-void'],
  ['--ei-ice-white', '--ei-ice-white'],
];

const legacyNames = [
  'cosmic-black','deep-nebula','orbit-blue','electric-cobalt','ion-violet','neon-magenta','stellar-lilac','void-plum','photon-white'
];

function walk(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function processFile(file) {
  const ext = path.extname(file);
  if (!exts.has(ext) && !/tailwind\.config\.(js|ts|mjs)$/.test(file)) return false;
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;

  for (const [from, to] of replacements) {
    const rx = new RegExp(from.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    s = s.replace(rx, to);
  }

  if (file.endsWith(path.join('src', 'styles', 'tokens.css'))) {
    s = s.replace(/\/\*[\s\S]*?Backwards Compat Aliases[\s\S]*?\*\/[\s\S]*?(?=\/\*\s*─{1,} Typography Contrast)/, '');
    s = s.split('\n').filter(line => {
      for (const ln of legacyNames) {
        if (line.includes(`--ei-${ln}:`)) return false;
      }
      for (const ln of legacyNames) {
        if (line.includes(`--ei-${ln}-rgb:`)) return false;
      }
      return true;
    }).join('\n');
  }

  if (s !== orig) {
    fs.writeFileSync(file, s, 'utf8');
    return true;
  }
  return false;
}

function main() {
  const allFiles = walk(repoRoot);
  const changed = [];
  for (const f of allFiles) {
    try {
      if (processFile(f)) changed.push(path.relative(repoRoot, f));
    } catch (err) {
      console.error('ERR processing', f, err.message);
    }
  }
  console.log('Changed files:', changed.length);
  for (const c of changed) console.log('  ', c);
  if (changed.length === 0) console.log('No files changed.');
}

main();

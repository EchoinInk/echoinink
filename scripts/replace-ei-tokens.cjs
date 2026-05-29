const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const exts = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.mjs']);

const replacements = [
  ['--ei-orbit-blue-rgb', '--ei-deep-indigo-rgb'],
  ['--ei-deep-nebula-rgb', '--ei-deep-indigo-rgb'],
  ['--ei-electric-cobalt-rgb', '--ei-aurora-blue-rgb'],
  ['--ei-ion-violet-rgb', '--ei-luxe-violet-rgb'],
  ['--ei-neon-magenta-rgb', '--ei-orchid-pink-rgb'],
  ['--ei-stellar-lilac-rgb', '--ei-soft-lavender-rgb'],
  ['--ei-void-plum-rgb', '--ei-deep-indigo-rgb'],
  ['--ei-cosmic-black-rgb', '--ei-void-black-rgb'],
  ['--ei-photon-white-rgb', '--ei-ice-white-rgb'],
  ['--ei-orbit-blue', '--ei-deep-indigo'],
  ['--ei-deep-nebula', '--ei-deep-indigo'],
  ['--ei-electric-cobalt', '--ei-aurora-blue'],
  ['--ei-ion-violet', '--ei-luxe-violet'],
  ['--ei-neon-magenta', '--ei-orchid-pink'],
  ['--ei-stellar-lilac', '--ei-soft-lavender'],
  ['--ei-void-plum', '--ei-deep-indigo'],
  ['--ei-cosmic-black', '--ei-void-black'],
  ['--ei-photon-white', '--ei-ice-white'],
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
  let orig = s;

  for (const [from, to] of replacements) {
    const rx = new RegExp(from.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    s = s.replace(rx, to);
  }

  if (file.endsWith(path.join('src','styles','tokens.css'))) {
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

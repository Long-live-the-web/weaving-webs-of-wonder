#!/usr/bin/env node
// Scans webpages-workshop/ and merges with hotspots.json to produce pages.json.
// Run after adding/renaming/removing a page folder:  node build.js

const fs = require('fs');

const config = JSON.parse(fs.readFileSync('hotspots.json', 'utf8'));
const folders = fs.readdirSync('webpages-workshop', { withFileTypes: true })
  .filter(e => e.isDirectory() && !e.name.startsWith('.'))
  .map(e => e.name)
  .sort();

const pages = folders.map(folder => {
  const link = config.links[folder];
  if (!link) console.warn(`⚠  No link config for "${folder}" — using default position.`);
  return {
    folder,
    title: link?.title || folder,
    x: link?.x ?? 50,
    y: link?.y ?? 50
  };
});

for (const k of Object.keys(config.links)) {
  if (!folders.includes(k)) console.warn(`⚠  hotspots.json has "${k}" but no folder.`);
}

fs.writeFileSync('pages.json', JSON.stringify({
  image: config.image,
  imageAlt: config.imageAlt,
  pages
}, null, 2) + '\n');

console.log(`✓ pages.json (${pages.length} pages)`);

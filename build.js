#!/usr/bin/env node
// Scans webpages-workshop/ + wall-imgs/ and merges with hotspots.json
// to produce pages.json.  Run after adding files:  node build.js

const fs = require('fs');

const config = JSON.parse(fs.readFileSync('hotspots.json', 'utf8'));

const folders = fs.readdirSync('webpages-workshop', { withFileTypes: true })
  .filter(e => e.isDirectory() && !e.name.startsWith('.'))
  .map(e => e.name).sort();

const tiles = fs.readdirSync('wall-imgs')
  .filter(f => /\.(jpe?g|png|gif|webp)$/i.test(f))
  .sort()
  .map(f => 'wall-imgs/' + f);

const pages = folders.map(folder => {
  const h = config.hotspots[folder];
  if (!h) console.warn(`⚠  No hotspot for "${folder}" — using full image.`);
  return {
    folder,
    title: h?.title || folder,
    hotspot: h || { x: 0, y: 0, width: 100, height: 100 }
  };
});

for (const k of Object.keys(config.hotspots)) {
  if (!folders.includes(k)) console.warn(`⚠  hotspots.json has "${k}" but no folder.`);
}

fs.writeFileSync('pages.json', JSON.stringify({
  columns: config.columns || 4,
  tiles,
  pages
}, null, 2) + '\n');

console.log(`✓ pages.json (${tiles.length} tiles, ${pages.length} pages)`);

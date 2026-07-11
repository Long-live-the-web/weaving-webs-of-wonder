# weaving webs of wonder

- **`index.html`** — loads `pages.json` and places each link over the image at its
  `x`/`y` percentage coordinates.
- **`hotspots.json`** — the source config you edit: image path plus a `links` map,
  keyed by folder name, giving each page a `title` and `x`/`y` position (percentages).
- **`build.js`** — scans `webpages-workshop/` and merges the folders with
  `hotspots.json` to generate `pages.json`. Every folder becomes a link.
- **`pages.json`** — generated output; **this is the file the site actually reads.**
  Do not edit it by hand — re-run `build.js` instead.
- **`webpages-workshop/`** — one folder per page, each containing an `index.html`.

## Adding a new page

1. Make a folder under `webpages-workshop/` containing an `index.html`.
2. Add an entry to `hotspots.json` keyed by the **exact folder name** (the key must
   match the folder, or the link won't be positioned/titled correctly).
3. Run `node build.js` to regenerate `pages.json`.
4. Commit **both** `hotspots.json` and `pages.json`, then push.

> Editing `hotspots.json` alone does nothing on the live site — you must re-run
> `build.js` and commit the updated `pages.json`.

## Notes

- Any folder in `webpages-workshop/` without a matching `hotspots.json` entry still becomes a link, using the folder name as its title at the default center position. Remove or rename unfinished folders so they don't appear.

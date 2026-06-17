# weaving webs of wonder

A collaborative web art project — an image map that links out to small, handmade webpages. Each page is an independent experiment made during the *Long Live the Web* event held at ΚΛΙΦ, Athens, Greece.

## How it works

The homepage (`index.html`) displays a full image (`wall-imgs/LLW_main_web.jpg`) with clickable hotspots overlaid on it. Each hotspot links to a mini-site living under `webpages-workshop/`. The hotspot positions and page metadata are stored in `hotspots.json` and compiled into `pages.json` by the build script.

## Pages

| Folder | Title | Description |
|--------|-------|-------------|
| `brush-my-teeth-game` | Brush My Teeth! | A playful browser game |
| `dontbeevil` | don't be evil | Collage of news and images connecting concerns about the net |
| `localNetwork` | Digital Doorstep | Explores local vs. global networks |
| `remember-when` | remember when the internet was a specific place? | Nostalgic scroll through early internet vibes |
| `screenshotheaven` | STOP SCROLLING | Anti-scroll provocation with marquee text |
| `scrolling-timer` | do you want to stop scrolling? | Interactive timer nudging you to step away |
| `wander-flaneur` | wandering | A collection of links and inspiration gathered during the event |

## Adding a new page

1. Create a folder under `webpages-workshop/` with an `index.html` inside.
2. Add an entry to `hotspots.json` keyed by the folder name, specifying the title and `x`/`y` position (as percentages of the image dimensions).
3. Run `node build.js` to regenerate `pages.json`.
4. Commit both `hotspots.json` and `pages.json`.

## Running locally

Open `index.html` via a local server (e.g. `npx serve .` or VS Code Live Server). A plain `file://` open won't work because the page fetches `pages.json`.

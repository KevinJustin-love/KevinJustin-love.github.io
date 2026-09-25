# Jiajun Peng · Personal Research Homepage

Source for [kevinjustin-love.github.io](https://kevinjustin-love.github.io/), a personal research homepage and reading site focused on world models, embodied intelligence, vision-language-action models, and spatial intelligence.

## Site structure

| Path | Purpose |
| --- | --- |
| `index.html` | Personal homepage and research interests |
| `notes.html` | Canonical Notes directory, grouped into four topics |
| `notes/wam-vla.html` | WAM/VLA reading paths, cross-view guide, and 24 paper-note links |
| `notes/embodied-intelligence.html`, `notes/embodied-rl.html` | Embodied AI and reinforcement learning articles |
| `notes/video-generation.html`, `notes/ar-video-generation.html` | Video generation and world models |
| `notes/codex.html`, `notes/claude-code.html` | Developer tool guides |
| `notes.css` | Shared article, directory, and topic-page styles |

The site uses static HTML and CSS, a warm paper background, and blue/teal accents. It needs no build tools or external JavaScript libraries. Section navigation and collapsible reading lists work without JavaScript; the legacy redirects use a small inline script to preserve query strings and chapter fragments, with a meta-refresh and link fallback.

## Notes and source material

- Start at [Notes](https://kevinjustin-love.github.io/notes.html), then choose WAM/VLA, embodied AI & RL, video generation, or developer tools.
- Long articles include a chapter directory and links back to their topic.
- The [learning repository](https://github.com/KevinJustin-love/pjj-learning-notes) maintains detailed Markdown notes and existing supporting resources.
- The WAM/VLA page links to those Markdown notes and named papers. Paper PDFs, TeX archives, model weights, and datasets are not copied into this website.
- [Historical material](https://github.com/KevinJustin-love/pjj-learning-notes/tree/main/archives) is separate from current topic notes.

### Adding or updating a note

1. Add a readable HTML page under `notes/`, using `../notes.css` and the shared header/footer pattern.
2. Use one page-level `h1`, stable IDs on section headings, and a matching static chapter directory.
3. Add the note to the appropriate topic in `notes.html`, with a short description and a meaningful reading order.
4. For WAM/VLA, update the Markdown source in `pjj-learning-notes/wam-vla/`, then update the topic page's links and paper count when needed.
5. Keep each article's original information-check date separate from layout changes. Check local links, chapter fragments, and mobile layout before publishing.

### URL compatibility

`/notes/` redirects to `/notes.html`. The old `/notes/codex/`, `/notes/codex/usage-guide/`, `/notes/claude-code/`, and `/notes/claude-code/usage-guide/` routes redirect to their `.html` articles. Existing chapter IDs and Markdown download paths are retained.

## Local preview

From this directory, run:

```sh
python -m http.server 8000
```

Then open [localhost:8000/notes.html](http://localhost:8000/notes.html).

## Deployment

GitHub Pages publishes from `main` at the repository root. After pushing, check the Pages build and deployment before assuming the public site has updated.

# Jiajun Peng · Personal Research Homepage

Source for [kevinjustin-love.github.io](https://kevinjustin-love.github.io/), a personal research homepage and reading site focused on world models, embodied intelligence, vision-language-action models, and spatial intelligence.

## Site structure

| Path | Purpose |
| --- | --- |
| `index.html` | English academic homepage |
| `index-zh.html` | Chinese academic homepage, with the same sections and facts |
| `homepage.css` | Shared responsive cream theme for both homepages |
| `notes.html` | Canonical Notes directory, grouped into four topics |
| `notes/wam-vla.html` | WAM/VLA reading paths, cross-view guide, and 24 paper-note links |
| `notes/embodied-intelligence.html`, `notes/embodied-rl.html` | Embodied AI and reinforcement learning articles |
| `notes/video-generation.html`, `notes/ar-video-generation.html` | Video generation and world models |
| `notes/codex.html`, `notes/claude-code.html` | Developer tool guides |
| `notes.css` | Shared article, directory, and topic-page styles |

The site uses static HTML and CSS, a warm paper background, and blue/teal accents. It needs no build tools or external JavaScript libraries. Section navigation and collapsible reading lists work without JavaScript; the legacy redirects use a small inline script to preserve query strings and chapter fragments, with a meta-refresh and link fallback.

## Academic homepage

The English and Chinese homepages link to each other through the header's **EN / 中文** switch. They introduce my school and email, research interests, News, publications and preprints, research experience, education and academic scores, honors and awards, selected projects, and the Notes directory.

The homepages use compact academic typography (15px body text, a 36px name, and 22px section headings), a small profile image, publication rows with venue labels, and paired education/awards columns on desktop. On mobile, these columns stack and the portrait shrinks to keep the introduction and updates close to the top.

Academic information follows my English and Chinese CVs. Major rank is 1/28. Expected graduation is June 2028. Both listed papers are **submitted preprints**, with direct arXiv and PDF links; they are not listed as accepted publications. National Scholarship is dated September 2026. There is no Google Scholar profile link.

When updating academic content, update both language pages together and keep paper author order, contribution markers, submission status, and score scopes consistent. The two homepages share one stylesheet; existing Notes pages retain their shared cream theme.

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

Then open [the English homepage](http://localhost:8000/), [the Chinese homepage](http://localhost:8000/index-zh.html), or [Notes](http://localhost:8000/notes.html).

## Deployment

GitHub Pages publishes from `main` at the repository root. After pushing, check the Pages build and deployment before assuming the public site has updated.

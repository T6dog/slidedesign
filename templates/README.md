# Original starter templates

All files here were written for this hub and use its MIT license. They contain no consulting-firm logos, proprietary fonts or copied firm templates.

- Open `executive-deck.html` directly in a browser. It contains five 16:9 pages with synthetic data and remains editable as HTML/CSS. Use the browser's print-to-PDF command, disable browser headers/footers, and enable background graphics. Inspect the result before sending it.
- Adapt `decision-brief.md` to structure the question, evidence and approval.
- Use `slides.md` with a separately installed Marp renderer. This is Markdown source, not a prebuilt PPTX. Inspect your renderer's licensing, dependencies and export options before installation.
- `tokens.json` defines the neutral visual system for implementing your own PowerPoint or Slidev theme.

HTML source editing does not make a PDF or image-based PPTX natively editable in PowerPoint. Use a native PPTX authoring tool when recipients must edit charts or tables.

Example data deliberately describes a fictional business. Replace all figures, source notes, dates and assumptions before using the template for a real decision.


## Editable PowerPoint, HTML and Slidev set

An additional original set provides six patterns: executive summary, evidence, options, logic, delivery plan and decision record. Its charcoal/teal palette is distinct from the earlier HTML/Marp set; both are neutral, original designs.

- [PowerPoint: six editable layouts](original-consulting.pptx), with a native chart and table.
- [Self-contained six-page HTML](original-consulting.html).
- [Slidev Markdown starter](slidev/slides.md) and [CSS](slidev/style.css).
- [Authoring source](build-pptx.mjs), [tokens](design-tokens.json) and [previews](previews/).
- [Editing and rebuild instructions](POWERPOINT-GUIDE.md).

All values are synthetic. PowerPoint was package-validated and every final slide rendered and inspected. Native application testing and Slidev runtime rendering were not performed. HTML source and JavaScript syntax were checked; local-file browser preview was unavailable.

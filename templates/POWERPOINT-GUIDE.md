# Original templates

All files in this directory, except explicitly attributed dependencies, are original hub material under the root MIT license. They contain no firm logo, corporate master, proprietary font file or copied example deck. All example data is synthetic.

| File | Use |
| --- | --- |
| [original-consulting.pptx](original-consulting.pptx) | Six editable PowerPoint layouts, including a native chart with workbook values and a native options table |
| [original-consulting.html](original-consulting.html) | Open locally in a browser; next/previous buttons, arrow keys and print styles; no network dependency |
| [slidev/slides.md](slidev/slides.md) | Six-page Markdown starter for an existing Slidev project |
| [design-tokens.json](design-tokens.json) | Original palette, type sizes and spacing |
| [build-pptx.mjs](build-pptx.mjs) | JavaScript authoring source requiring an environment that supplies @oai/artifact-tool |
| [previews/](previews/) | Rendered views of all six PowerPoint layouts |

## Replace before delivery

Replace the sample finding, data, population, period, owners and decision criteria. Add actual source citations beside exhibits and in notes. Remove the synthetic-example footer only after replacing the synthetic content. A sample recommendation is not an approval.

## Edit PowerPoint

Open the PPTX in a presentation editor and duplicate the layout you need. Text, shapes, the chart and the table are editable objects. Chart data contains literal example values, not a connection to any external source. The file uses DejaVu Sans without embedded fonts. If your editor substitutes a font, recheck the line breaks and table widths.

The deck was package-validated and every slide rendered and visually inspected. Native chart data and table presence were checked. It was not tested interactively inside Microsoft PowerPoint or Google Slides.

## Edit HTML

Open the HTML file directly. Change the content and CSS tokens in a text editor. Navigation needs JavaScript; without JavaScript all slides remain readable. Print presents one slide per page. No analytics, external fonts, CDN scripts or network calls are included.

## Use the Slidev starter

Create or use a Slidev project following the [official setup guide](https://sli.dev/guide/). Copy `slidev/slides.md` and `slidev/style.css` into that project, then run its normal development command. In an environment with the CLI already installed, `slidev slides.md` opens it. Slidev itself and its dependencies are not vendored or installed by this hub. This starter is source-only and has not been rendered with Slidev in this collection run.

## Rebuild PowerPoint

The committed PPTX can be edited without a build environment. The optional generator requires Node.js plus access to the @oai/artifact-tool package used by the authoring environment; the package is not bundled and this is not a claim of a standalone npm install workflow.

```bash
node templates/build-pptx.mjs output
```

The generator writes a draft `candidate.pptx` and six PNGs. Before distributing a modified deck, validate its package, inspect every rendered page and verify the chart values again. Do not assume a successful export proves a usable slide.

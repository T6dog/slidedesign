# Neutral visual system

These are original defaults for `slidedesign`, not official McKinsey, BCG, Bain or QuantumBlack colors or fonts. See [tokens.json](../templates/tokens.json) for machine-readable values.

| Role | Value | Application |
| --- | --- | --- |
| Paper | `#FFFFFF` | Main canvas |
| Ink | `#243342` | Headings and primary text |
| Secondary ink | `#526171` | Explanations and source labels |
| Accent | `#1C6E73` | Selected option or focal data series |
| Soft background | `#EDF3F4` | Table header and restrained grouping |
| Rule | `#B8C4CC` | Table boundaries and separators |
| Caution | `#8C4C12` | Text label for a material caveat |

Color should reinforce words, symbols or line styles. Avoid red/green-only distinctions. Check contrast for each actual foreground/background pairing after modifying the palette. The templates use system fonts and make no network font requests.

| Element | 1600 x 900 HTML reference | Approximate PowerPoint equivalent |
| --- | ---: | ---: |
| Page title | 48 px | 30-34 pt |
| Lead statement | 34 px | 22-26 pt |
| Body/table | 28 px | 18-20 pt |
| Source/footer | 20 px | 12-14 pt |
| Side margin | 88 px | About 0.75 in on a 13.33 in canvas |

Use `Arial, Helvetica, sans-serif` as a local fallback stack. These names are font preferences, not a distribution of font binaries. If an open font is embedded later, include its actual license and check reserved-font-name terms.

## How this relates to public systems

The [QuantumBlack token documentation](https://github.com/mckinsey/quantumblack-design-system/blob/main/docs/TOKENS.md) demonstrates separating semantic roles such as surface, text and status. Applying that organization to a slide system is our design inference. The public UI system is not evidence of a PowerPoint specification.

The [qblabs theme](https://github.com/dwmkerr/claude-toolkit/tree/main/plugins/dwmkerr/skills/slides/themes/qblabs) uses its author's approximation of public identity cues. Treat its palette as third-party interpretation and its font references as substitutes. Our starter templates use the independent palette above.

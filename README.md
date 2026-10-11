# slidedesign

Curated resources for replicating top-tier consulting slide/deck design (McKinsey, BCG, Bain, etc.).

An independent working library for clear arguments, analytical exhibits and consistent slide production. It combines reviewed open-source tools, links to external guidance, and original templates with a neutral visual identity.

**No affiliation or endorsement is implied.** This is not an official McKinsey, BCG or Bain handbook. Firm names describe reference styles only. Internal templates, proprietary fonts, firm logos, paid template packs and client decks are not included in the hub. A public webpage or repository does not automatically grant redistribution rights.

## Quick start

```bash
git clone --recurse-submodules https://github.com/T6dog/slidedesign.git
cd slidedesign
./scripts/check-licenses.sh
```

For a lightweight clone, omit `--recurse-submodules` and run `./scripts/check-licenses.sh --metadata-only`. To fetch the reviewed source versions later, run `./scripts/update-submodules.sh`. Requires Git, Bash and Python 3. No `gh` CLI, API token, add-in installation or model account is required.

Start with [the original templates](templates/README.md), then use [design principles](docs/design-principles.md), [visual tokens](docs/visual-system.md), and the [slide-pattern catalogue](docs/slide-patterns.md). All example figures are synthetic.

## Official resources

| Resource | Use | Treatment |
| --- | --- | --- |
| [QuantumBlack qbstyles](https://github.com/mckinsey/qbstyles) | Matplotlib styles | Apache 2.0 declaration with trademark reservation; pinned submodule |
| [QuantumBlack Design System](https://github.com/mckinsey/quantumblack-design-system) | Semantic tokens and UI components | Link only because the repository bundles firm logos |
| [BCG](https://www.bcg.com/) and [Bain](https://www.bain.com/) | Official public sites | Link only; no reusable brand portal or internal slide handbook verified |

The current QBDS repository is `mckinsey/quantumblack-design-system`, not a guessed `qbds` repository. Its scope is UI design, not a firm-wide PowerPoint specification.

## Third-party skills and templates

| Resource | Best reason to inspect | Treatment |
| --- | --- | --- |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | Python layouts and QA | Submodule, Apache 2.0; retain NOTICE |
| [zairuilab/consulting-deck](https://github.com/zairuilab/consulting-deck) | Traceable evidence and editable slides | Link only; Apache-labelled text differs from standard license |
| [floflo11/mbb-decks](https://github.com/floflo11/mbb-decks) | Storyline and layout workflow | Link only; bundled company-logo rights unverified |
| [sharptoolbox/consulting-html-ppt](https://github.com/sharptoolbox/consulting-html-ppt) | Single-file HTML decks | Link only; no license found |
| [dwmkerr/claude-toolkit](https://github.com/dwmkerr/claude-toolkit) | Historical qblabs Slidev theme | Submodule, MIT; unofficial approximation |
| [dwmkerr/slides](https://github.com/dwmkerr/slides) | Maintained HTML slides successor | Submodule, MIT |

The [top ten additional candidates](docs/search-methodology.md) include RW Consulting PPT, ProDeck, Presentation Skills, 30x research-deck, paopao, Flight Check, MBB Page Maker, Consulting Research to Output, deck.md and Olito Slides. Their stars, activity, licenses, restrictions and pinned revisions appear in [SOURCES.md](SOURCES.md).

## Guides

- [Slideworks: consulting presentation structure](https://slideworks.io/resources/how-mckinsey-consultants-make-presentations)
- [Slideworks: visual-identity analysis](https://slideworks.io/resources/decoding-mckinseys-visual-identity-and-powerpoint-template)
- [Deckary: slide-deck design](https://deckary.com/blog/slide-deck-design-tips)
- [Deckary: presentation checklist](https://deckary.com/blog/presentation-checklist)

These are commercial publishers' interpretations. Articles, screenshots and paid templates remain on their owners' sites.

## Original templates

| File | Purpose |
| --- | --- |
| [executive-deck.html](templates/executive-deck.html) | Five editable HTML pages: decision, evidence, options, roadmap and assumptions |
| [decision-brief.md](templates/decision-brief.md) | Structured deck brief and evidence plan |
| [slides.md](templates/slides.md) | Original Marp Markdown starter |
| [tokens.json](templates/tokens.json) | Neutral palette, typography and spacing specifications |

## Tools

| Resource | Role | License |
| --- | --- | --- |
| [Slidev](https://github.com/slidevjs/slidev) | Markdown/Vue presentations | MIT |
| [PptxGenJS](https://github.com/gitbrent/PptxGenJS) | Native PowerPoint objects from JavaScript | MIT |
| [Marp Core](https://github.com/marp-team/marp-core) | Markdown slide rendering | MIT |
| [ProDeck](https://github.com/rodrigolourencofarinha/ProDeck) | PowerPoint editing toolbar | MIT |
| [Flight Check](https://github.com/analystacademy/flight-check) | Editorial and evidence QA | MIT |

Submodules provide source references, not preinstalled plugins. No third-party code, macros or agent instructions run when reading this repository. Before running an upstream tool, review its dependencies, permissions and data handling. Source licensing is not a security certification.

## Licenses and attribution

Original hub documentation, scripts and templates use [MIT](LICENSE). Every upstream keeps its own license. The complete per-source license table is in [SOURCES.md](SOURCES.md); exact license and NOTICE snapshots for included sources are under [LICENSES](LICENSES/README.md).

| Category | Policy |
| --- | --- |
| Reviewed permissive code | Pin as a Git submodule; preserve attribution and notices |
| Missing, modified or unclear license | Link only until resolved |
| Mixed assets with unverified rights | Link only even when root code license is permissive |
| Commercial articles and firm-brand resources | Link only |
| Original templates | MIT; no proprietary fonts or firm identities |

McKinsey, QuantumBlack, BCG, Bain and all other product names belong to their respective owners. Their mention identifies sources and does not grant trademark rights. Follow upstream notices and replace sample identities in your own deliverables.

## Maintenance

- `scripts/clone-all.sh [destination]` clones this hub and its reviewed submodules.
- `scripts/update-submodules.sh` initializes or restores the pinned versions, refusing dirty modules.
- `scripts/update-submodules.sh --check-updates` reports upstream heads without changing pins.
- `scripts/check-licenses.sh` verifies gitlinks, initialized revisions and license/NOTICE hashes.
- [Maintenance procedure](docs/maintenance.md) explains how to review and promote an update.
- [Fork register](forks/README.md) records account copies and their purpose. Submodules point to upstream to retain clear provenance.

Reviewed on **11 October 2026**. The search is a bounded sample, not a global ranking or a full legal/security audit. See [search evidence](docs/search-results.json).


## Additional editable layouts and generators

The collection now includes [six editable PowerPoint layouts](templates/original-consulting.pptx), [six-page HTML](templates/original-consulting.html) and a [Slidev starter](templates/slidev/slides.md). See the [editing guide](templates/POWERPOINT-GUIDE.md), [visual system](docs/powerpoint-visual-system.md) and [previews](templates/previews/). All are original MIT-licensed material with synthetic data.

Two further reviewed source snapshots are available: [albertojb/mbb-ppt-generator](https://github.com/albertojb/mbb-ppt-generator), Apache-2.0 with retained attribution notices, and [Gnomeshgh0714/mbb-deck](https://github.com/Gnomeshgh0714/mbb-deck), MIT. These are additions beyond the documented top-ten search. The hub has **16 pinned submodules**. The [fork register](forks/README.md) now verifies **eight account-owned forks**; remaining account copies are explicitly recorded there.

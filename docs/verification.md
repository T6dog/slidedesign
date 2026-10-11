# Verification record

Review date: 2026-10-11.

## Completed checks

- Authenticated GitHub account is T6dog; write access to slidedesign was confirmed.
- Existing repository is public, uses main, and already has the requested description and all nine topics.
- All seven named GitHub seed sources were inspected through repository metadata, license files, README content and asset-path inventories.
- Nine requested GitHub search queries were executed. Results and bounded sampling are recorded in the search documentation.
- Fourteen upstream submodules were cloned and checked out at the reviewed commit IDs.
- The license checker passed for the actual initialized modules, gitlinks and all recorded license/NOTICE hashes.
- A deliberately altered notice snapshot caused the checker to fail. The original snapshot was then restored.
- An unsupported update flag was rejected. The normal update script restored the reviewed pins and passed its final license check.
- Six existing forks were verified, including their parent repositories. New account forks remain incomplete for the reason in the fork register.

- Initial publication reached main at commit `a762f8312d62db71265af33d4bd0707f7df24e64`. GitHub returned tree `9d085f3c95dbbd29c29db010612b64db821069e8`, identical to the locally constructed tree. Remote tree inspection confirmed 14 gitlinks and four executable scripts.

## Boundaries

No third-party tool, add-in, macro, installer or agent skill was executed. Licensing checks do not constitute a dependency or security audit. The original HTML and Markdown files are editable source templates; PowerPoint editability and browser/PDF rendering have not been certified. Cloud browser policy prevented opening the local HTML file for visual inspection. Template source structure and synthetic values were checked locally.

The fork limitation does not prevent cloning the hub's upstream submodules. GitHub's archive ZIP does not contain submodule source trees; use Git for a complete checkout.


## Integration update

The later publication on main was preserved. Two reviewed source snapshots were added, bringing the total to 16 submodules, and the fork register was updated to eight verified account copies. The original templates, search evidence and documented remaining fork limitations remain available.

Six original editable PowerPoint layouts were added. Package, 16:9 geometry and font checks passed; slide 2 has a native editable chart whose workbook values match 40 and 60, and slide 3 has a native table. Every final slide was rendered and visually inspected. The previews are pixel-identical to the inspected renders. Microsoft PowerPoint/Google Slides interactive testing was not performed.

The added HTML has six sections, no external script/font dependency and valid JavaScript syntax. Local-file browser preview was unavailable. The added Slidev starter is source-only and was not runtime-rendered.

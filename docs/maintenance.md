# Maintenance and review

## Restore the reviewed versions

Run `./scripts/update-submodules.sh`, then `./scripts/check-licenses.sh`. The first command restores existing pins and does not advance them to an unreviewed upstream release. Both refuse inconsistent metadata. Dirty submodules must be handled manually.

## Inspect available updates

Run `./scripts/update-submodules.sh --check-updates`. This reports the current upstream default-branch head and leaves every gitlink unchanged. An upstream head may belong to a different branch or be unavailable; inspect it before changing the record.

## Promote one source update

1. Fetch the candidate upstream revision in an isolated working copy. Inspect its diff, root license, NOTICE files, submodules and added assets. Do not execute its setup scripts during the license review.
2. Confirm that the license remains permissive and that bundled assets can be redistributed. For an unresolved case, change the source to `link-only`, remove the gitlink and `.gitmodules` entry, and retain a link placeholder.
3. For an accepted revision, update its gitlink and `sources.json` revision together. Refresh license/NOTICE snapshots, hashes, date, notes, stars and activity. Keep a written reason in the commit message.
4. Regenerate or edit the human-readable source tables to match. Retain every relevant upstream copyright and notice. Re-review new dependencies before running the software.
5. Initialize the pinned modules and run the checker. Inspect the original templates if the hub's visual system changed. Commit the reviewed changes as one unit.

The license checker detects drift against recorded evidence. It cannot decide legal compatibility, prove asset ownership, detect every dependency license, or validate presentation claims.

## Forks and upstream provenance

Forks are account copies for isolated experiments and possible contributions. The hub's submodules refer to canonical upstream URLs and fixed commits. A fork does not update itself and is not evidence that its latest revision was reviewed. Do not rewrite an existing fork's history to match this hub.

## Contributions

Submit the source URL, exact revision, license-file URL, intended use and any asset restrictions. New source entries should add machine-readable evidence and a short explanation of their relevance. Links to confidential material, leaked templates or paid packs are out of scope.

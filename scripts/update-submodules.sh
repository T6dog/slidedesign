#!/usr/bin/env bash
set -euo pipefail
root_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root_dir"
if (( $# > 1 )) || { (( $# == 1 )) && [[ "$1" != "--check-updates" ]]; }; then
  echo "Usage: $0 [--check-updates]" >&2
  exit 2
fi
bash ./scripts/check-licenses.sh --metadata-only
if [[ "${1:-}" == "--check-updates" ]]; then
  python3 - <<'PY'
import json,subprocess,sys
failed=False
for r in json.load(open('sources.json'))['repositories']:
    if r['mode']!='submodule':continue
    result=subprocess.run(['git','ls-remote',r['url']+'.git','HEAD'],text=True,capture_output=True)
    if result.returncode or not result.stdout.strip():
        print(r['repository']+': upstream unavailable',file=sys.stderr);failed=True;continue
    sha=result.stdout.split()[0]
    print(r['repository']+': '+('reviewed head' if sha==r['revision'] else 'NEW unreviewed head '+sha))
sys.exit(1 if failed else 0)
PY
  exit
fi
git submodule foreach --quiet 'test -z "$(git status --porcelain)" || { echo "Dirty submodule: $name" >&2; exit 1; }'
git submodule sync
git submodule update --init --checkout
bash ./scripts/check-licenses.sh

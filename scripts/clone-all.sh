#!/usr/bin/env bash
set -euo pipefail
if (( $# > 1 )); then
  echo "Usage: $0 [destination]" >&2
  exit 2
fi
destination="${1:-slidedesign}"
git clone --recurse-submodules -- https://github.com/T6dog/slidedesign.git "$destination"
bash "$destination/scripts/check-licenses.sh"

#!/usr/bin/env python3
"""Verify reviewed revisions and notice hashes. This is not a legal scanner."""
import argparse
import configparser
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]

def git(*args, cwd=ROOT):
    return subprocess.check_output(['git', '-C', str(cwd), *args], stderr=subprocess.STDOUT)

def validate(metadata_only=False):
    manifest=json.loads((ROOT/'sources.json').read_text())
    modules=[r for r in manifest['repositories'] if r['mode']=='submodule']
    config=configparser.ConfigParser(interpolation=None)
    config.read(ROOT/'.gitmodules')
    actual={config[s]['path']:config[s]['url'] for s in config.sections()}
    expected={r['path']:r['url']+'.git' for r in modules}
    errors=[]
    if actual!=expected:
        errors.append('.gitmodules paths/URLs differ from sources.json')
    tracked={}
    for entry in git('ls-files','--stage','-z').split(b'\0'):
        if not entry: continue
        meta,path=entry.decode().split('\t',1)
        mode,sha,stage=meta.split()
        if mode=='160000':
            tracked[path]=sha
            if stage!='0':errors.append(f'{path}: unresolved merge stage')
    if tracked!={r['path']:r['revision'] for r in modules}:
        errors.append('Git index submodule revisions differ from sources.json')
    for r in manifest['repositories']:
        if r['mode']=='link-only' and 'path' in r:
            errors.append(r['id']+': link-only source has a clone path')
    for r in modules:
        label=r['repository']
        if r['license'] not in {'MIT','Apache-2.0','BSD-2-Clause','BSD-3-Clause','ISC','0BSD'}:
            errors.append(label+': unapproved license classification')
        if not re.fullmatch('[0-9a-f]{40}',r['revision']):
            errors.append(label+': invalid revision')
        if not r.get('license_evidence'):
            errors.append(label+': missing license evidence')
        module=ROOT/r['path']
        initialized=(module/'.git').exists()
        if not metadata_only:
            if not initialized:errors.append(label+': not initialized (use update-submodules.sh)')
            else:
                head=git('rev-parse','HEAD',cwd=module).decode().strip()
                if head!=r['revision']:errors.append(label+': working copy revision differs from review')
                if git('status','--porcelain',cwd=module).strip():errors.append(label+': working copy has changes')
        for ev in r['license_evidence']:
            snapshot=ROOT/ev['snapshot_path']
            if not snapshot.is_file():
                errors.append(label+': missing notice snapshot '+ev['snapshot_path']);continue
            content=snapshot.read_bytes()
            if hashlib.sha256(content).hexdigest()!=ev['sha256']:
                errors.append(label+': snapshot hash changed: '+ev['snapshot_path'])
            if initialized and not metadata_only:
                try:upstream=git('show',r['revision']+':'+ev['upstream_path'],cwd=module)
                except subprocess.CalledProcessError:
                    errors.append(label+': upstream notice missing');continue
                if hashlib.sha256(upstream).hexdigest()!=ev['sha256']:
                    errors.append(label+': upstream notice differs from reviewed snapshot')
    if errors:
        print('\n'.join('FAIL '+e for e in errors),file=sys.stderr)
        return 1
    scope='metadata and snapshots only' if metadata_only else 'gitlinks, initialized revisions and notices'
    print(f'PASS {len(modules)} reviewed submodules: {scope}.')
    print('This checks recorded evidence, not legal rights, dependency licenses or software safety.')
    return 0

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--metadata-only',action='store_true',help='Do not require initialized modules')
    args=parser.parse_args()
    try:sys.exit(validate(args.metadata_only))
    except (OSError,ValueError,KeyError,subprocess.CalledProcessError) as exc:
        print('FAIL '+str(exc),file=sys.stderr);sys.exit(1)

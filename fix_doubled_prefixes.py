import os
import re
from pathlib import Path

ZOOHUB_DIR = Path("d:/zoolearn(10.2.2026)/zoolearn_1st/src/components/zoohub")

def get_prefix(filename):
    name = Path(filename).stem
    return name[:4].lower()

def is_pseudo_or_vendor(name):
    pseudo = {'hover', 'active', 'focus', 'visited', 'first-child', 'last-child',
              'only-child', 'first-of-type', 'last-of-type', 'nth-child', 'nth-of-type',
              'before', 'after', 'placeholder', 'focus-within', 'root', 'not'}
    return name in pseudo or name.startswith(('webkit-', 'moz-', 'ms-'))

def already_has_prefix(name, prefix):
    # Check if already has this prefix OR any 4-letter prefix pattern
    return name.startswith(prefix + '-') or (len(name) > 5 and name[4] == '-' and name[:4].islower())

def extract_css_classes_ids(content):
    classes = set()
    ids = set()
    
    for match in re.finditer(r'\.([a-zA-Z_][\w-]*)', content):
        name = match.group(1)
        if not is_pseudo_or_vendor(name):
            classes.add(name)
    
    for match in re.finditer(r'#([a-zA-Z_][\w-]*)', content):
        name = match.group(1)
        if not re.match(r'^[0-9a-fA-F]{3,8}$', name):
            ids.add(name)
    
    return sorted(classes, key=len, reverse=True), sorted(ids, key=len, reverse=True)

def extract_jsx_classes_ids(content):
    classes = set()
    ids = set()
    
    for match in re.finditer(r'className\s*=\s*["\']([^"\']+)["\']', content):
        for cls in match.group(1).split():
            if cls:
                classes.add(cls)
    
    for match in re.finditer(r'\bid\s*=\s*["\']([^"\']+)["\']', content):
        ids.add(match.group(1))
    
    for match in re.finditer(r'querySelector(?:All)?\s*\(\s*["\']([^"\']+)["\']\s*\)', content):
        selector = match.group(1)
        if selector.startswith('.'):
            classes.add(selector[1:])
        elif selector.startsWith('#'):
            ids.add(selector[1:])
    
    for match in re.finditer(r'getElementById\s*\(\s*["\']([^"\']+)["\']\s*\)', content):
        ids.add(match.group(1))
    
    return sorted(classes, key=len, reverse=True), sorted(ids, key=len, reverse=True)

def fix_doubled_classes(content, prefix):
    """Fix classes that were double-prefixed"""
    doubled_pattern = prefix + '-' + prefix + '-'
    single_pattern = prefix + '-'
    return content.replace(doubled_pattern, single_pattern)

def process_file(filepath):
    prefix = get_prefix(filepath.name)
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original = f.read()
    except:
        return False
    
    # Fix any double-prefixing from previous run
    fixed = fix_doubled_classes(original, prefix)
    
    if fixed != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        return True
    
    return False

# Main
print("Fixing double-prefixed classes...")

files = []
for ext in ['*.css', '*.jsx', '*.js', '*.tsx', '*.ts']:
    files.extend(ZOOHUB_DIR.rglob(ext))

print(f"Found {len(files)} files")

changed = 0
for filepath in files:
    if process_file(filepath):
        rel_path = filepath.relative_to(ZOOHUB_DIR)
        print(f"Fixed: {rel_path}")
        changed += 1

print(f"\nFixed {changed} of {len(files)} files")
print("Complete!")

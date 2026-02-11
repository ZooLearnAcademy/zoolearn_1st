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
    return name.startswith(prefix + '-')

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
        elif selector.startswith('#'):
            ids.add(selector[1:])
    
    for match in re.finditer(r'getElementById\s*\(\s*["\']([^"\']+)["\']\s*\)', content):
        ids.add(match.group(1))
    
    return sorted(classes, key=len, reverse=True), sorted(ids, key=len, reverse=True)

def prefix_css(content, prefix, classes, ids):
    result = content
    
    for cls in classes:
        if not already_has_prefix(cls, prefix):
            pattern = r'\.' + re.escape(cls) + r'\b'
            replacement = '.' + prefix + '-' + cls
            result = re.sub(pattern, replacement, result)
    
    for id_name in ids:
        if not already_has_prefix(id_name, prefix):
            pattern = r'#' + re.escape(id_name) + r'\b'
            replacement = '#' + prefix + '-' + id_name
            result = re.sub(pattern, replacement, result)
    
    return result

def prefix_jsx(content, prefix, classes, ids):
    result = content
    
    # Process classes
    for cls in classes:
        if not already_has_prefix(cls, prefix):
            new_cls = prefix + '-' + cls
            
            # className attributes
            # Match whole className="..." with word boundary
            pattern1 = r'className="([^"]*\b)' + re.escape(cls) + r'\b([^"]*)"'
            result = re.sub(pattern1, r'className="\1' + new_cls + r'\2"', result)
            
            pattern2 = r"className='([^']*\b)" + re.escape(cls) + r"\b([^']*)'"
            result = re.sub(pattern2, r"className='\1" + new_cls + r"\2'", result)
            
            # querySelector
            pattern3 = r'querySelector\("' + re.escape('.' + cls) + r'"\)'
            result = re.sub(pattern3, 'querySelector(".' + new_cls + '")', result)
            
            pattern4 = r"querySelector\('" + re.escape('.' + cls) + r"'\)"
            result = re.sub(pattern4, "querySelector('." + new_cls + "')", result)
            
            pattern5 = r'querySelectorAll\("' + re.escape('.' + cls) + r'"\)'
            result = re.sub(pattern5, 'querySelectorAll(".' + new_cls + '")', result)
            
            pattern6 = r"querySelectorAll\('" + re.escape('.' + cls) + r"'\)"
            result = re.sub(pattern6, "querySelectorAll('." + new_cls + "')", result)
    
    # Process IDs
    for id_name in ids:
        if not already_has_prefix(id_name, prefix):
            new_id = prefix + '-' + id_name
            
            # id attributes
            pattern1 = r'\bid="' + re.escape(id_name) + r'"'
            result = re.sub(pattern1, 'id="' + new_id + '"', result)
            
            pattern2 = r"\bid='" + re.escape(id_name) + r"'"
            result = re.sub(pattern2, "id='" + new_id + "'", result)
            
            # querySelector with #
            pattern3 = r'querySelector\("' + re.escape('#' + id_name) + r'"\)'
            result = re.sub(pattern3, 'querySelector("#' + new_id + '")', result)
            
            pattern4 = r"querySelector\('" + re.escape('#' + id_name) + r"'\)"
            result = re.sub(pattern4, "querySelector('#" + new_id + "')", result)
            
            pattern5 = r'querySelectorAll\("' + re.escape('#' + id_name) + r'"\)'
            result = re.sub(pattern5, 'querySelectorAll("#' + new_id + '")', result)
            
            pattern6 = r"querySelectorAll\('" + re.escape('#' + id_name) + r"'\)"
            result = re.sub(pattern6, "querySelectorAll('#" + new_id + "')", result)
            
            # getElementById
            pattern7 = r'getElementById\("' + re.escape(id_name) + r'"\)'
            result = re.sub(pattern7, 'getElementById("' + new_id + '")' + result)
            
            pattern8 = r"getElementById\('" + re.escape(id_name) + r"'\)"
            result = re.sub(pattern8, "getElementById('" + new_id + "')", result)
    
    return result

def process_file(filepath):
    prefix = get_prefix(filepath.name)
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original = f.read()
    except:
        return False
    
    if filepath.suffix == '.css':
        classes, ids = extract_css_classes_ids(original)
        updated = prefix_css(original, prefix, classes, ids) if (classes or ids) else original
    elif filepath.suffix in {'.jsx', '.js', '.tsx', '.ts', '.html'}:
        classes, ids = extract_jsx_classes_ids(original)
        updated = prefix_jsx(original, prefix, classes, ids) if (classes or ids) else original
    else:
        return False
    
    if updated != original:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated)
            return True
        except:
            return False
    
    return False

# Main
print("Starting refactoring...")

files = []
for ext in ['*.css', '*.jsx', '*.js', '*.tsx', '*.ts']:
    files.extend(ZOOHUB_DIR.rglob(ext))

print(f"Found {len(files)} files")

changed = 0
for filepath in files:
    if process_file(filepath):
        rel_path = filepath.relative_to(ZOOHUB_DIR)
        print(f"Changed: {rel_path}")
        changed += 1

print(f"\nChanged {changed} of {len(files)} files")
print("Complete!")

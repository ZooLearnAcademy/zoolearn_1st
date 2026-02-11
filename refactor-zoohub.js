const fs = require('fs');
const path = require('path');

const ZOOHUB_DIR = path.join(__dirname, 'src', 'components', 'zoohub');

function getPrefix(filename) {
    const name = path.basename(filename, path.extname(filename));
    return name.substring(0, 4).toLowerCase();
}

function getAllFiles(dir, fileList = []) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            getAllFiles(fullPath, fileList);
        } else if (/\.(css|jsx|js|tsx|ts|html)$/i.test(item.name)) {
            fileList.push(fullPath);
        }
    }

    return fileList;
}

function extractCssClassesIds(content) {
    const classes = new Set();
    const ids = new Set();

    // Extract classes
    const classRegex = /\.([a-zA-Z_][\w-]*)/g;
    let match;
    while ((match = classRegex.exec(content)) !== null) {
        const name = match[1];
        if (!isPseudoOrVendor(name)) {
            classes.add(name);
        }
    }

    // Extract IDs  
    const idRegex = /#([a-zA-Z_][\w-]*)/g;
    while ((match = idRegex.exec(content)) !== null) {
        const name = match[1];
        if (!/^[0-9a-fA-F]{3,8}$/.test(name)) {
            ids.add(name);
        }
    }

    return { classes: Array.from(classes), ids: Array.from(ids) };
}

function extractJsxClassesIds(content) {
    const classes = new Set();
    const ids = new Set();

    // className="..." or className={'...'}
    const classNameRegex = /className\s*=\s*["']([^"']+)["']/g;
    let match;
    while ((match = classNameRegex.exec(content)) !== null) {
        const classNames = match[1].split(/\s+/);
        classNames.forEach(cn => cn && classes.add(cn));
    }

    // id="..." or id={'...'}
    const idRegex = /\bid\s*=\s*["']([^"']+)["']/g;
    while ((match = idRegex.exec(content)) !== null) {
        ids.add(match[1]);
    }

    // querySelector
    const querySelectorRegex = /querySelector(?:All)?\s*\(\s*["']([^"']+)["']\s*\)/g;
    while ((match = querySelectorRegex.exec(content)) !== null) {
        const selector = match[1];
        if (selector.startsWith('.')) {
            classes.add(selector.substring(1));
        } else if (selector.startsWith('#')) {
            ids.add(selector.substring(1));
        }
    }

    // getElementById
    const getByIdRegex = /getElementById\s*\(\s*["']([^"']+)["']\s*\)/g;
    while ((match = getByIdRegex.exec(content)) !== null) {
        ids.add(match[1]);
    }

    return { classes: Array.from(classes), ids: Array.from(ids) };
}

function isPseudoOrVendor(name) {
    const pseudo = [
        'hover', 'active', 'focus', 'visited', 'first-child', 'last-child',
        'only-child', 'first-of-type', 'last-of-type', 'nth-child', 'nth-of-type',
        'before', 'after', 'placeholder', 'focus-within', 'root', 'not'
    ];
    return pseudo.includes(name) || name.startsWith('webkit-') || name.startsWith('moz-') || name.startsWith('ms-');
}

function alreadyHasPrefix(name, prefix) {
    return name.startsWith(prefix + '-');
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function prefixCss(content, prefix, classes, ids) {
    let result = content;

    const sortedClasses = classes.sort((a, b) => b.length - a.length);
    const sortedIds = ids.sort((a, b) => b.length - a.length);

    for (const className of sortedClasses) {
        if (!alreadyHasPrefix(className, prefix)) {
            const escaped = escapeRegex(className);
            const regex = new RegExp(`\\.${escaped}(?=[^\\w-]|$)`, 'g');
            result = result.replace(regex, `.${prefix}-${className}`);
        }
    }

    for (const id of sortedIds) {
        if (!alreadyHasPrefix(id, prefix)) {
            const escaped = escapeRegex(id);
            const regex = new RegExp(`#${escaped}(?=[^\\w-]|$)`, 'g');
            result = result.replace(regex, `#${prefix}-${id}`);
        }
    }

    return result;
}

function prefixJsx(content, prefix, classes, ids) {
    let result = content;

    const sortedClasses = classes.sort((a, b) => b.length - a.length);
    const sortedIds = ids.sort((a, b) => b.length - a.length);

    for (const className of sortedClasses) {
        if (!alreadyHasPrefix(className, prefix)) {
            const escaped = escapeRegex(className);

            // className attributes - handle space-separated classes
            result = result.replace(
                new RegExp(`(className\\s*=\\s*["'])([^"']*)`, 'g'),
                (fullMatch, before, classStr) => {
                    const updated = classStr.split(/\s+/).map(cls => {
                        return cls === className ? `${prefix}-${className}` : cls;
                    }).join(' ');
                    return before + updated;
                }
            );

            // querySelector with .
            result = result.replace(
                new RegExp(`(querySelector(?:All)?\\s*\\(\\s*["'])\\.${escaped}(["']\\s*\\))`, 'g'),
                `$1.${prefix}-${className}$2`
            );
        }
    }

    for (const id of sortedIds) {
        if (!alreadyHasPrefix(id, prefix)) {
            const escaped = escapeRegex(id);

            // id attributes
            result = result.replace(
                new RegExp(`(\\bid\\s*=\\s*["'])${escaped}(["'])`, 'g'),
                `$1${prefix}-${id}$2`
            );

            // querySelector  with #
            result = result.replace(
                new RegExp(`(querySelector(?:All)?\\s*\\(\\s*["'])#${escaped}(["']\\s*\\))`, 'g'),
                `$1#${prefix}-${id}$2`
            );

            // getElementById
            result = result.replace(
                new RegExp(`(getElementById\\s*\\(\\s*["'])${escaped}(["']\\s*\\))`, 'g'),
                `$1${prefix}-${id}$2`
            );
        }
    }

    return result;
}

function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const prefix = getPrefix(filePath);
    const originalContent = fs.readFileSync(filePath, 'utf8');
    let newContent = originalContent;

    if (ext === '.css') {
        const { classes, ids } = extractCssClassesIds(originalContent);
        if (classes.length > 0 || ids.length > 0) {
            newContent = prefixCss(originalContent, prefix, classes, ids);
        }
    } else if (['.jsx', '.js', '.tsx', '.ts', '.html'].includes(ext)) {
        const { classes, ids } = extractJsxClassesIds(originalContent);
        if (classes.length > 0 || ids.length > 0) {
            newContent = prefixJsx(originalContent, prefix, classes, ids);
        }
    }

    if (newContent !== originalContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        return true;
    }

    return false;
}

// Main
console.log('🚀 Starting systematic refactoring...\n');

const allFiles = getAllFiles(ZOOHUB_DIR);
console.log(`Found ${allFiles.length} files\n`);

let changedCount = 0;

for (const filePath of allFiles) {
    const relativePath = path.relative(ZOOHUB_DIR, filePath);
    const changed = processFile(filePath);

    if (changed) {
        console.log(`✅ ${relativePath}`);
        changedCount++;
    }
}

console.log(`\n📊 Files changed: ${changedCount}/${allFiles.length}`);
console.log('✅ Complete!');

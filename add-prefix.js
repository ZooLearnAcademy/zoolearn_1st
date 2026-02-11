const fs = require('fs');
const path = require('path');

const ZOOHUB_DIR = path.join(__dirname, 'src', 'components', 'zoohub');

// Pseudo-classes/elements to NOT treat as class names
const PSEUDO = new Set([
  'hover', 'active', 'focus', 'visited', 'first-child', 'last-child',
  'only-child', 'first-of-type', 'last-of-type', 'nth-child', 'nth-of-type',
  'before', 'after', 'placeholder', 'focus-within', 'root', 'not',
  '-webkit-scrollbar', '-webkit-user-drag', '-moz-user-select',
  '-webkit-background-clip', '-webkit-text-fill-color', '-webkit-overflow-scrolling'
]);

// CSS element selectors to skip
const ELEMENTS = new Set([
  'body', 'html', 'header', 'footer', 'section', 'div', 'span', 'a', 'p',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'img', 'input',
  'button', 'iframe', 'i', 'b', 'strong', 'em', 'nav', 'main', 'article'
]);

function getPrefix(filename) {
  // Get basename without extension, take first 4 chars
  const name = path.basename(filename, path.extname(filename));
  return name.substring(0, 4);
}

function extractClassNames(cssContent) {
  const classNames = new Set();
  
  // Match class selectors: .class-name
  // We need to be careful with pseudo-classes and pseudo-elements
  const regex = /\.([a-zA-Z_][\w-]*)/g;
  let match;
  
  while ((match = regex.exec(cssContent)) !== null) {
    const name = match[1];
    // Skip pseudo-classes and vendor prefixes
    if (!PSEUDO.has(name) && !name.startsWith('-webkit-') && !name.startsWith('-moz-') && !name.startsWith('-ms-')) {
      classNames.add(name);
    }
  }
  
  return Array.from(classNames);
}

function extractIds(cssContent) {
  const ids = new Set();
  const regex = /#([a-zA-Z_][\w-]*)/g;
  let match;
  
  while ((match = regex.exec(cssContent)) !== null) {
    const name = match[1];
    // Skip hex colors (they'll be 3 or 6 hex chars after #)
    if (!/^[0-9a-fA-F]{3,8}$/.test(name)) {
      ids.add(name);
    }
  }
  
  return Array.from(ids);
}

function prefixCssClasses(cssContent, classNames, prefix) {
  let result = cssContent;
  
  // Sort by length descending to avoid partial replacements
  const sorted = [...classNames].sort((a, b) => b.length - a.length);
  
  for (const className of sorted) {
    // Replace .className in CSS selectors
    // Use word boundary-like matching to avoid partial replacements
    const cssRegex = new RegExp(`\\.${escapeRegex(className)}(?=[^\\w-]|$)`, 'g');
    result = result.replace(cssRegex, `.${prefix}-${className}`);
  }
  
  return result;
}

function prefixCssIds(cssContent, ids, prefix) {
  let result = cssContent;
  
  const sorted = [...ids].sort((a, b) => b.length - a.length);
  
  for (const id of sorted) {
    const cssRegex = new RegExp(`#${escapeRegex(id)}(?=[^\\w-]|$)`, 'g');
    result = result.replace(cssRegex, `#${prefix}-${id}`);
  }
  
  return result;
}

function prefixJsxClasses(jsxContent, classNames, prefix) {
  let result = jsxContent;
  
  // Sort by length descending
  const sorted = [...classNames].sort((a, b) => b.length - a.length);
  
  for (const className of sorted) {
    // Replace in className="..." attributes
    // Match the class name within quotes (could be single class or space-separated)
    const regex = new RegExp(`(?<=[\\s"'])${escapeRegex(className)}(?=[\\s"'])`, 'g');
    result = result.replace(regex, `${prefix}-${className}`);
  }
  
  return result;
}

function prefixJsxIds(jsxContent, ids, prefix) {
  let result = jsxContent;
  
  const sorted = [...ids].sort((a, b) => b.length - a.length);
  
  for (const id of sorted) {
    const regex = new RegExp(`(?<=[\\s"'])${escapeRegex(id)}(?=[\\s"'])`, 'g');
    result = result.replace(regex, `${prefix}-${id}`);
  }
  
  return result;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function processFilePair(cssFile) {
  const prefix = getPrefix(cssFile);
  const jsxFile = cssFile.replace('.css', '.jsx');
  
  console.log(`\n📁 Processing: ${path.basename(cssFile)}`);
  console.log(`   Prefix: "${prefix}"`);
  
  // Read CSS
  let cssContent = fs.readFileSync(cssFile, 'utf8');
  
  // Extract class names and IDs
  const classNames = extractClassNames(cssContent);
  const ids = extractIds(cssContent);
  
  console.log(`   Classes found: ${classNames.join(', ')}`);
  if (ids.length > 0) console.log(`   IDs found: ${ids.join(', ')}`);
  
  // Prefix CSS
  cssContent = prefixCssClasses(cssContent, classNames, prefix);
  cssContent = prefixCssIds(cssContent, ids, prefix);
  
  // Write CSS
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log(`   ✅ CSS updated: ${path.basename(cssFile)}`);
  
  // Read and update JSX if it exists
  if (fs.existsSync(jsxFile)) {
    let jsxContent = fs.readFileSync(jsxFile, 'utf8');
    jsxContent = prefixJsxClasses(jsxContent, classNames, prefix);
    jsxContent = prefixJsxIds(jsxContent, ids, prefix);
    fs.writeFileSync(jsxFile, jsxContent, 'utf8');
    console.log(`   ✅ JSX updated: ${path.basename(jsxFile)}`);
  } else {
    console.log(`   ⚠️  No JSX found: ${path.basename(jsxFile)}`);
  }
}

function findCssFiles(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...findCssFiles(fullPath));
    } else if (item.name.endsWith('.css')) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Main
console.log('🚀 Starting CSS class/ID prefix addition...\n');
console.log(`📂 Directory: ${ZOOHUB_DIR}\n`);

const cssFiles = findCssFiles(ZOOHUB_DIR);
console.log(`Found ${cssFiles.length} CSS files to process.\n`);

for (const cssFile of cssFiles) {
  processFilePair(cssFile);
}

console.log('\n\n✅ All files processed successfully!');
console.log('🔍 Please verify the changes and test the application.');

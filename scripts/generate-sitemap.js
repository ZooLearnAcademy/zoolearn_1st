import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://zoolearn.in';
const SRC_DIR = path.resolve(__dirname, '../src');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Base static routes
const staticRoutes = [
  '/',
  '/zoohub',
  '/taxonomy-tree',
  '/about',
  '/living-world',
  '/basic-features-of-classification',
  '/anatomy',
  '/kingdom-animalia',
  '/leech',
  '/rabbit',
  '/honeybee',
  '/cockroach',
  '/frog',
  '/horse-evolution',
  '/career-path',
  '/scopes',
  '/blog',
  '/blog/giraffe',
  '/zoohub/porifera',
  '/zoohub/coelenterata',
  '/zoohub/ctenophora',
  '/zoohub/platyhelminthes',
  '/zoohub/aschelminthes',
  '/zoohub/annelida',
  '/zoohub/arthropoda',
  '/zoohub/mollusca',
  '/zoohub/echinodermata',
  '/zoohub/hemichordata',
  '/zoohub/chordata'
];

const dynamicRoutes = new Set();

// Function to recursively read all files
const readFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      readFiles(fullPath);
    } else if (fullPath.endsWith('.json')) {
      extractPaths(fullPath);
    }
  }
};

// Function to extract "path" from JSON files
const extractPaths = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // regex to find "path": "/something"
    const regex = /"path"\s*:\s*"(\/[^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (match[1]) {
        dynamicRoutes.add(match[1]);
      }
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
};

// Run extraction
console.log('Generating sitemap...');
readFiles(SRC_DIR);

// Also check backend data just in case
const BACKEND_DIR = path.resolve(__dirname, '../zoolearn-backend/data');
if (fs.existsSync(BACKEND_DIR)) {
  readFiles(BACKEND_DIR);
}

const allRoutes = new Set([...staticRoutes, ...dynamicRoutes]);

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(allRoutes)
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : route.includes('/zoohub/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${allRoutes.size} URLs!`);

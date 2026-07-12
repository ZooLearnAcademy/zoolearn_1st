import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);const zoohubDir = path.resolve(__dirname, '../src/components/zoohub');

// Directory names for phyla
const phyla = [
  { dir: 'porifera', file: 'Phylum1.jsx', phylumName: 'Porifera' },
  { dir: 'coelenterata', file: 'Phylum2.jsx', phylumName: 'Coelenterata' },
  { dir: 'ctenophora', file: 'Phylum3.jsx', phylumName: 'Ctenophora' },
  { dir: 'platyhelminthes', file: 'Phylum4.jsx', phylumName: 'Platyhelminthes' },
  { dir: 'aschelminthes', file: 'Phylum5.jsx', phylumName: 'Aschelminthes' },
  { dir: 'annelida', file: 'Phylum6.jsx', phylumName: 'Annelida' },
  { dir: 'arthropoda', file: 'Phylum7.jsx', phylumName: 'Arthropoda' },
  { dir: 'mollusca', file: 'Phylum8.jsx', phylumName: 'Mollusca' },
  { dir: 'echinodermata', file: 'Phylum9.jsx', phylumName: 'Echinodermata' },
  { dir: 'hemichordata', file: 'Phylum10.jsx', phylumName: 'Hemichordata' },
  { dir: 'chordata', file: 'Phylum11.jsx', phylumName: 'Chordata' },
];

phyla.forEach(({ dir, file, phylumName }) => {
  const filePath = path.join(zoohubDir, dir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has SEO
  if (content.includes('import { SEO }')) {
    console.log(`SEO already injected in ${file}`);
    return;
  }

  // 1. Add import { SEO } from "../../shared";
  // We can insert it after import React
  content = content.replace(/import React[^;]*;/, (match) => {
    return `${match}\nimport { SEO } from "../../shared";`;
  });

  // 2. Add SEO block before the main return statement.
  // We look for:
  //   return (
  //     <div className="phyl-genus-sycon-container">
  // or similar. (Some might have a different class name, but they all return a container)
  
  const seoInjection = `
  const schema = {
    "@type": "WebPage",
    "name": species.name,
    "description": species.description,
    "url": \`https://zoolearn.in/zoohub/${dir}/\${slug}\`
  };

  return (
    <>
      <SEO 
        title={\`\${species.name} - \${species.scientificName}\`}
        description={species.description}
        keywords={\`\${species.name}, \${species.scientificName}, ${phylumName}, Zoology, Animal Kingdom\`}
        canonicalUrl={\`/zoohub/${dir}/\${slug}\`}
        schema={schema}
      />`;

  // Replace `return (` with the SEO injection
  // Be careful to only replace the LAST 'return (' which is the main component return.
  const returnRegex = /return\s*\(\s*<div className="phyl-[^"]*"/;
  const match = content.match(returnRegex);
  if (match) {
    // Replace the first matched main return
    content = content.replace(match[0], `${seoInjection}\n      <div className="${match[0].match(/className="([^"]+)"/)[1]}"`);
    
    // Also we need to wrap the whole thing in </> so at the end we must replace `</div>\n  );\n};`
    // We can just append `\n    </>\n` before `  );\n};`
    const endMatch = /(<\/div>\s*)\);\s*};\s*export default/m;
    content = content.replace(endMatch, (m, p1) => {
      return `${p1}    </>\n  );\n};\n\nexport default`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Successfully injected SEO into ${file}`);
  } else {
    console.log(`Could not find main return in ${file}`);
  }
});

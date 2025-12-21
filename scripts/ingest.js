
import fs from 'fs';
import path from 'path';

const files = [
    'data_ingest/1/awesome-zk/README.md',
    'data_ingest/2/awesome-zero-knowledge-proofs/README.md',
    'data_ingest/3/awesome-zero-knowledge-proofs/README.md'
];

const extracted = [];

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`Skipping ${file} - not found`);
        return;
    }

    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    let currentCategory = 'Uncategorized';

    lines.forEach(line => {
        // Detect headers as categories
        if (line.startsWith('## ')) {
            currentCategory = line.replace('## ', '').trim();
        }

        // Regex for markdown links: [Title](URL) - Description or similar
        // We want to capture the link and the text around it (description)
        const match = line.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
            const title = match[1];
            const url = match[2];

            // Attempt to get description (text after the link)
            let description = line.replace(match[0], '').trim();
            // Remove leading hyphens or colons
            description = description.replace(/^[\s-:]+/, '');

            // Filter out internal links (anchors) or images
            if (!url.startsWith('http')) return;

            extracted.push({
                title,
                url,
                description,
                category: currentCategory,
                source: file
            });
        }
    });
});

// Deduplicate by URL
const unique = new Map();
extracted.forEach(item => {
    if (!unique.has(item.url)) {
        unique.set(item.url, item);
    }
});

const result = Array.from(unique.values());

console.log(`Extracted ${result.length} unique resources.`);
fs.writeFileSync('src/data/raw_resources.json', JSON.stringify(result, null, 2));

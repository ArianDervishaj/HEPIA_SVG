import fs from 'fs';
import path from 'path';

const baseDir = 'static/Classes';
const outputFile = 'src/lib/svgs.json';

function generateSVGList() {
	const classes = {};

	// Traverse the Classes directory
	fs.readdirSync(baseDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.forEach((dir) => {
			const folderPath = path.join(baseDir, dir.name);
			const files = fs.readdirSync(folderPath);

			// Only include SVG files
			classes[dir.name] = files.filter((file) => file.endsWith('.svg'));
		});

	// Write to JSON file
	fs.writeFileSync(outputFile, JSON.stringify(classes, null, 2));
	console.log(`✅ SVG manifest generated at ${outputFile}`);
}

generateSVGList();

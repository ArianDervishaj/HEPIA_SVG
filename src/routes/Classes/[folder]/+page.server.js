import fs from 'fs';
import path from 'path';

export async function load({ params }) {
    const folder = params.folder; // e.g., "POO"
    const baseDir = path.resolve(`static/Classes/${folder}`);

    const svgs = fs.readdirSync(baseDir)
        .filter(file => file.endsWith('.svg'))
        .map(file => file.replace('.svg', ''));

    return { folder, svgs };
}

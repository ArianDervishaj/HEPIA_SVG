import fs from 'fs';
import path from 'path';

export async function load() {
    const baseDir = path.resolve('static/Classes');
    const folders = fs.readdirSync(baseDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    return { folders };
}

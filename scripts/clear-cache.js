// path/fs
const path = require('path');
const fs = require('fs');

const cacheDirectory = path.resolve(__dirname, '..', 'node_modules', '.cache');
fs.rmSync(cacheDirectory, { recursive: true, force: true });
console.log('done');

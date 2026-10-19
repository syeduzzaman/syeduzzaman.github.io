const fs = require('node:fs');
const path = require('node:path');

const source = __dirname;
const output = path.resolve(source, 'dist');
const publicFiles = ['index.html', 'resume.html', 'styles.css', 'app.js', 'i18n.js', 'portrait.png'];

// Only this generated, checkout-local folder may be replaced.
if (path.dirname(output) !== path.resolve(source) || path.basename(output) !== 'dist') {
  throw new Error('Unexpected publish directory');
}
for (const name of publicFiles) {
  if (!fs.statSync(path.join(source, name)).isFile()) throw new Error(`Missing public asset: ${name}`);
}
// Refuse a symlink or unexpected user content rather than recursively deleting it.
if (fs.existsSync(output)) {
  if (fs.lstatSync(output).isSymbolicLink()) throw new Error('Publish directory must not be a symlink');
  for (const name of fs.readdirSync(output)) {
    if (!publicFiles.includes(name) || !fs.lstatSync(path.join(output, name)).isFile()) {
      throw new Error(`Unexpected file in publish directory: ${name}`);
    }
  }
} else {
  fs.mkdirSync(output);
}
for (const name of publicFiles) fs.copyFileSync(path.join(source, name), path.join(output, name));
console.log(`Prepared ${publicFiles.length} public website assets in dist/.`);

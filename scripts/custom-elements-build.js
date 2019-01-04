const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/runtime.js',
    './dist/polyfills.js',
    './dist/4.js',
    './dist/main.js',
  ];
  await fs.ensureDir('elements-dist');
  await concat(files, 'elements-dist/custom-elements.js');
  await fs.copyFile('./dist/styles.css', 'elements-dist/styles.css');
  await fs.copy('./dist/assets/', 'elements-dist/assets/' );

})();

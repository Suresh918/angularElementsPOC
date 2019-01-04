const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angularElementsPOC/runtime.js',
    './dist/angularElementsPOC/polyfills.js',
    './dist/angularElementsPOC/4.js',
    './dist/angularElementsPOC/main.js',
  ];
  await fs.ensureDir('elements-dist');
  await concat(files, 'elements-dist/custom-elements.js');
  await fs.copyFile('./dist/angularElementsPOC/styles.css', 'elements-dist/styles.css');

})();

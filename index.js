'use strict';

const Plugin = require('markdown-it-regexp');
const fs = require('fs');

function readMdFile(filename) {
  try {
    return fs.readFileSync(filename, 'utf-8');
  }
  catch (err) {
    console.log(`Read failed: ${err}`);
  }
};

var plugin = Plugin(
  /^@import\((.+\.md)\)$/,
  function(match) {
    let importedString = readMdFile(`${match[1]}`);
    return importedString
  }
)

module.exports = plugin;

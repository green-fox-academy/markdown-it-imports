'use strict';

const fs = require('fs');
const md = require('markdown-it')();
const Plugin = require('markdown-it-regexp');

function readMdFile(filename) {
  try {
    return fs.readFileSync(filename, 'utf-8');
  }
  catch (err) {
    console.log(`Read failed: ${err}`);
  }
};

const mainFileString = readMdFile('mainfile.md');

var plugin = Plugin(
  // regexp to match
  /^@import\(.+\.md\)$/,
  // this function will be called when something matches
  function(match) {
    let importedString = readMdFile(`${match[0].slice(8, -1)}`);
    return importedString
  }
)

md.use(plugin)

var res = md.render(mainFileString)
console.log(res);

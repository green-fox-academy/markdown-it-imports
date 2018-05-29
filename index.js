'use strict';

const fs = require('fs');
const md = require('markdown-it')();
const Plugin = require('markdown-it-regexp');

const mainFileString = fs.readFileSync('mainfile.md', 'utf8');

var plugin = Plugin(
  // regexp to match
  /^@import\(.+\.md\)$/,
  // this function will be called when something matches
  function(match) {
    let importedMd = fs.readFileSync(match[0].slice(8, -1), 'utf8');
    return importedMd
  }
)

md.use(plugin)

var res = md.render(mainFileString)
console.log(res);

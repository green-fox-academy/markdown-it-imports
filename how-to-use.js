'use strict';

const fs = require('fs');
const md = require('markdown-it')();
const importer = require('./index')

function readMdFile(filename) {
  try {
    return fs.readFileSync(filename, 'utf-8');
  }
  catch (err) {
    console.log(`Read failed: ${err}`);
  }
};

const mainFileString = readMdFile('mainfile.md');
md.use(importer)
var res = md.render(mainFileString)
console.log(res);

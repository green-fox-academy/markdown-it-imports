'use strict';

const regexp = require('markdown-it-regexp');
const markdown = require('markdown-it');

const fs = require('fs');

const importer = (match) => {
  return markdown().render(fs.readFileSync(match[1], 'utf-8'));
};

module.exports = regexp(/^@import\((.+\.md)\)$/, importer);

var md = require('markdown-it')();
var Plugin = require('markdown-it-regexp');

var plugin = Plugin(
  // regexp to match
  /^@import\(\w+\.md\)$/,
  // this function will be called when something matches
  function(match, utils) {
    var url = 'http://example.org/u/' + match[0]

    return '<a href="' + utils.escape(url) + '">'
         + utils.escape(match[0])
         + '</a>'
  }
)

md.use(plugin)

var res = md.render("@import(ndsajdnasjdinasd.md)")

console.log(res);

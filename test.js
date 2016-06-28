var test = require('tape')
var Handlebars = require("handlebars")
var cheerio = require('cheerio')
var fs = require('fs')

test('test the greeting template', function (t) {
  var source = fs.readFileSync(__dirname + '/views/greeting.hbs').toString('utf8')
  var template = Handlebars.compile(source);
  var result = template({"name": 'Benedict'})
  console.log(result)
  var $ = cheerio.load(result)
  t.equal($('h1').text(), 'Benedict')
  t.equal($('p').text(), 'working!')
  t.end()

console.log('test ends here')
})

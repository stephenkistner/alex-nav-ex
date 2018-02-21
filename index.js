var css = require('sheetify')
var choo = require('choo')
var navStore = require('./stores/navStore')

css('tachyons')
css('./TESTSTYLES.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(navStore)

//don worry bout this, just done for the test
app.route('/*', require('./views/main'))
//app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app

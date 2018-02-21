var html = require('choo/html')

var navButton = require('../components/navButton.js')


module.exports = view

function view (state, emit) {

  return html`
    <body>
      ${state.navItems.map(navItemMap)}
    </body>
  `
  function navItemMap (obj, i) {
    return navButton(handleNavClick, obj, i)
  }


  function handleNavClick(e) {
    var index = e.target.id
    emit('navClick', index)
  }
}

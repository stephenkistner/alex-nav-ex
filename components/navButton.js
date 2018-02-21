const html = require('choo/html')

module.exports = function (onClick, navItemData, itemIndex) {
  var itemNum = navItemData.num
  var itemTitle = navItemData.title
  var itemLink = navItemData.link
  var itemName = navItemData.name

  //set active class to NOTHING if false, if true set it to 'active'
  var navItemActiveClass = ''
  if (navItemData.active) {
    navItemActiveClass = 'active'
  }

  return html`
  <a class="link" href="${itemLink}">
    <li id="${itemIndex}" onclick=${onClick} class="nav-button flex relative items-center f4-ns f5 pv2 ph3-ns ph2 mh1 bg-white ba bw1 b--light-silver dark-gray br-pill pointer ${navItemActiveClass}">
    <li class="flex self-start content-start items-start z-99 rotate-90">${itemNum}</li>
    <li  class="ml3-ns ml2 z-99 f5-ns f6">${itemTitle}</li>
    </li>
  </a>
  `


}

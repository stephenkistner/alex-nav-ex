module.exports = store

function store (state, emitter) {

  state.navItems = [
    {
      num: '1',
      title: "UX",
      link: "/ux",
      name: 'btnUx',
      active: false
    },
    {
      num: '2',
      title: "UX",
      link: "/ux",
      name: 'btnUx',
      active: false
    },
    {
      num: '3',
      title: "UX",
      link: "/ux",
      name: 'btnUx',
      active: false
    },
    {
      num: '4',
      title: "UX",
      link: "/ux",
      name: 'btnUx',
      active: false
    }
  ]

  emitter.on('DOMContentLoaded', function () {
    emitter.on('navClick', function (data) {
      var navItemIdx = data
      //do switches here
      for (var i=0; i<state.navItems.length; i++) {
        if (navItemIdx == i) {
          state.navItems[i].active = true
          console.log(state.navItems[i].active)
        }
        else {
          state.navItems[i].active = false
        }
      }
      emitter.emit(state.events.RENDER)
    })
  })
}

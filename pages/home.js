const html = require('choo/html'),
  navBar = require('../elements/navbar'),
  addShow = require('../elements/add-show'),
  showList = require('../elements/show-list')

module.exports = (state, prev, send) => html`
  <main>
    ${navBar()}
    <div class="container">
      ${addShow(state, send)}
      ${showList(state)}
    </div>
  </main>
`

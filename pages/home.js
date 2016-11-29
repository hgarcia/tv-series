const html = require('choo/html'),
  navBar = require('../elements/navbar'),
  addShow = require('../elements/add-show'),
  showList = require('../elements/show-list')

module.exports = (state, prev, send) => {
  return html`
    <main>
      ${navBar()}
      <div class="container">
        ${addShow({
          show: state.show,
          addShow: (data) => {
            send('shows:add', data);
            send('show:reset');
          },
          updateShow: (data) => {
            console.log(data);
            send('show:update', data);
          }
        })}
        ${showList({shows: state.shows.list})}
      </div>
    </main>`
  }

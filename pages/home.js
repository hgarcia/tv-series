const html = require('choo/html'),
  navbar = require("../elements/navbar"),
  shows = require("../elements/shows"),
  showsModel = require("../models/shows"),
  sources = require("../models/sources");

module.exports = (state, prev, send) => html`
  <main>
    ${navbar()}
    ${shows(showsModel.state, sources.state)}
    <input
      type="text"
      oninput=${(e) => send('update', { value: e.target.value })} />
  </main>
`

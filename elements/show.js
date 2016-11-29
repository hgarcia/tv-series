// Element: show
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function show (show) {
  return html`<tr>
    <td>${show.title}</td>
    <td>${show.season}</td>
    <td>${show.episode}</td>
  </tr>`;
}

module.exports = show

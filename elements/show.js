// Element: show
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function show (show, state) {
  return html`<tr>
    <th scope="row">${show.title}</th>
    <td>${show.season}</td>
    <td>${show.episode}</td>
  </tr>`;
}

module.exports = show

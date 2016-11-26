// Element: show
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel'),
  sourceLink = require("./source-link");

function show (show, sourcesState) {
  return html`<tr>
      <th scope="row">${show.title}</th>
      <td>${show.season}</td>
      <td>${show.episode}</td>
      <td>${sourceLink(show.sourceId, sourcesState)}</td>
    </tr>`
}

module.exports = show

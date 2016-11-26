"use strict";

const html = require("bel"),
  sourceLink = require("./source-link");

function show (show, sourcesState) {
  return html`<tr>
      <th scope="row">${show.title}</th>
      <td>${show.season}</td>
      <td>${show.episode}</td>
      <td>${sourceLink(show.sourceId, sourcesState)}</td>
    </tr>`;
}

module.exports = show;

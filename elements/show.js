// Element: show
//
"use strict";
const html = require("bel");

function show (show) {
  return html`<tr>
    <td>${show.title}</td>
    <td>${show.season}</td>
    <td>${show.episode}</td>
  </tr>`;
}

module.exports = show;

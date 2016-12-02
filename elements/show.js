// Element: show
//
"use strict";
const html = require("bel"),
    assert = require("assert");

function show (show) {
  assert.equal(typeof show.title, "string", "show: show.title must be a string");
  assert.equal(typeof show.season, "number", "show: show.season must be a number");
  assert.equal(typeof show.episode, "number", "show: show.episode must be a number");

  return html`<tr>
    <td>${show.title}</td>
    <td>${show.season}</td>
    <td>${show.episode}</td>
  </tr>`;
}

module.exports = show;

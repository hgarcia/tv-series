// Element: showList
//
"use strict";

const html = require("bel"),
  show = require("./show"),
  assert = require("assert");

function showList(options) {
  assert.ok(Array.isArray(options.shows), "showList: options.shows must be an array");

  return html`<table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Season</th>
        <th>Episode</th>
      </tr>
    </thead>
    <tbody>
    ${options.shows.map((s)=> {
      return show(s);
    })}
    </tbody>
  </table>`;
}

module.exports = showList;

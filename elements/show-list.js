// Element: showList
//
"use strict";

const html = require("bel"),
  show = require("./show"),
  assert = require("assert");

function onLoad(options) {
  return () => {
    options.loadShows();
  };
}

function showList(options) {
  assert.ok(Array.isArray(options.shows), "showList: options.shows must be an array");
  assert.equal(typeof options.loadShows, "function", "loadShows: options.loadShows must be a function");

  return html`<table class="table" onload=${onLoad(options)}>
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

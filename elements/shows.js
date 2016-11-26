"use strict";

const html = require("bel"),
  show = require("./show");

function shows (state) {
  return html`<table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Season</th>
        <th>Episode</th>
        <th>Source</th>
      </tr>
    </thead>
    <tbody>
    ${state.shows.titles.map((s)=> {
      return show(s, state);
    })}
    </tbody>
  </table>`;
}

module.exports = shows;

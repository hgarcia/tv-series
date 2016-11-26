"use strict";

const html = require("bel"),
  show = require("./show");

function shows (showsState, sourcesState) {
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
    ${showsState.shows.map((s)=> {
      return show(s, sourcesState);
    })}
    </tbody>
  </table>`;
}

module.exports = shows;

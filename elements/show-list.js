// Element: showList
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.

const html = require("bel"),
  show = require("./show");

function shows (state) {
  return html`<table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Season</th>
        <th>Episode</th>
      </tr>
    </thead>
    <tbody>
    ${state.shows.list.map((s)=> {
      return show(s, state);
    })}
    </tbody>
  </table>`;
}

module.exports = shows;

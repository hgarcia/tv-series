"use strict";

const html = require("choo/html"),
  navBar = require("../elements/navbar"),
  addShow = require("../elements/add-show"),
  showList = require("../elements/show-list");

function _getAddShowParams(state, send) {
  return {
    show: state.show,
    addShow: (data) => {
      send("shows:add", data);
      send("show:reset");
    },
    updateShow: (data) => {
      send("show:update", data);
    }
  };
};

function _getShowListParams(state, send) {
  return {
    shows: state.shows.list,
    loadShows: () => {
      send("shows:load");
    }
  };
}

module.exports = {
  getAddShowParams: _getAddShowParams,
  getShowListParams: _getShowListParams,
  render(state, prev, send) {
    var self = this;
    return html`
      <main>
      ${navBar()}
      <div class="container">
      ${addShow(_getAddShowParams(state, send))}
      ${showList(_getShowListParams(state, send))}
      </div>
      </main>`;
  }
};

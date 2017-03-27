"use strict";

const html = require("choo/html"),
  navBar = require("../elements/navbar"),
  addShow = require("../elements/add-show"),
  showList = require("../elements/show-list");

function _getAddShowParams(state, emit) {
  return {
    show: state.show,
    addShow: (data) => {
      emit("shows:add", data);
      emit("show:reset");
    },
    updateShow: (data) => {
      emit("show:update", data);
    }
  };
}

function _getShowListParams(state, emit) {
  return {
    shows: state.shows,
    changeShow: (data) => {
      emit("shows:modify", data);
    },
    loadShows: () => {
      emit("shows:load");
    },
    removeShow: (show) => {
      emit("shows:remove", show);
    }
  };
}

module.exports = {
  getAddShowParams: _getAddShowParams,
  getShowListParams: _getShowListParams,
  render(state, emit) {
    return html`
      <main>
      ${navBar()}
      <div class="container">
      ${addShow(_getAddShowParams(state, emit))}
      ${showList(_getShowListParams(state, emit))}
      </div>
      </main>`;
  }
};

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

module.exports = {
  getAddShowParams: _getAddShowParams,
  render(state, prev, send) {
    var self = this;
    return html`
      <main>
      ${navBar()}
      <div class="container">
      ${addShow(_getAddShowParams(state, send))}
      ${showList({shows: state.shows.list})}
      </div>
      </main>`;
  }
};

"use strict";

const html = require("choo/html"),
  navbar = require("../elements/navbar"),
  shows = require("../elements/shows");

module.exports = (state) => {
  return html`
  <main>
    ${navbar()}
    ${shows(state)}
  </main>`;
};

"use strict";

const html = require("choo/html"),
  navbar = require("../elements/navbar"),
  shows = require("../elements/shows"),
  showsModel = require("../models/shows"),
  sources = require("../models/sources");

module.exports = () => html`
  <main>
    ${navbar()}
    ${shows(showsModel.state, sources.state)}
  </main>`;

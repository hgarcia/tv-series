"use strict";

const choo = require("choo"),
  app = choo(),
  home = require("./pages/home"),
  store = require("store"),
  storage = require("./lib/storage").create(store);

app.use(require("./models/shows").create(storage));
app.route("/", home.render);

const tree = app.start();

document.body.appendChild(tree);

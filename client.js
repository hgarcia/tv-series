"use strict";

const choo = require("choo"),
  app = choo(),
  home = require("./pages/home"),
  store = require("store"),
  storage = require("./lib/storage").create(store);

app.model(require("./models/show"));
app.model(require("./models/shows").create(storage));

app.router((route) => [
  route("/", home.render)
]);

const tree = app.start();

document.body.appendChild(tree);

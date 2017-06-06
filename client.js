"use strict";

const choo = require("choo"),
  app = choo(),
  home = require("./pages/home"),
  db = require("./lib/firebase").db(),
  storage = require("./lib/storage").create(db);

app.use(require("./models/shows").create(storage));
app.route("/", home.render);

const tree = app.start();

document.body.appendChild(tree);

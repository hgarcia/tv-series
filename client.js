"use strict";

const choo = require("choo"),
  app = choo(),
  home = require("./pages/home");

app.model(require("./models/show"));
app.model(require("./models/shows"));

app.router((route) => [
  route("/", home.render)
]);

const tree = app.start();

document.body.appendChild(tree);

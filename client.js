"use strict";

const choo = require("choo"),
  app = choo();

app.model(require("./models/show"));
app.model(require("./models/shows"));

app.router((route) => [
  route("/", require("./pages/home"))
]);

const tree = app.start();

document.body.appendChild(tree);

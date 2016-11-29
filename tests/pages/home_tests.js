"use strict";

const test = require("tape"),
  choo = require("choo"),
  app = choo();

app.model(require("../../models/show"));
app.model(require("../../models/shows"));
app.router((route) => [
  route("/", require("../../pages/home"))
]);

test("#homePage", (assert) => {
  const rendered = app.toString("/");
  assert.notEqual(rendered.indexOf("<main>"), -1, "It should contain the body");
  assert.end();
});

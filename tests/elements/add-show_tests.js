"use strict";

const test = require("tape"),
  addShow = require("../../elements/add-show");

test("#addShow", (assert) => {
  const rendered = addShow({
    show: {
      title: "",
      season: 0,
      episode: 0
    },
    addShow: () => {},
    updateShow: () => {}
  }).toString();
  assert.notEqual(rendered.indexOf("<button type=\"submit\" class=\"btn btn-primary btn-sm\">Add</button>"), -1, "Should contains the button");
  assert.end();
});

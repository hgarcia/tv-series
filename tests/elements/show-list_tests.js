"use strict";

const test = require("tape"),
  showList = require("../../elements/show-list");

test("#showList", (assert) => {
  const rendered = showList({shows: [
    {
      title: "A show",
      season: 3,
      episode: 2
    }
  ]}).toString();
  assert.notEqual(rendered.indexOf("<td>A show</td>"), -1, "It should contain the title");
  assert.notEqual(rendered.indexOf("<td>3</td>"), -1, "It should contain the episode");
  assert.notEqual(rendered.indexOf("<td>2</td>"), -1, "It should contain the season");
  assert.end();
});

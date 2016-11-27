"use strict";

const test = require("tape"),
  shows = require("../../models/shows");

test("#add", (assert) => {
  const data = {title: "new show", season: 1, episode: 3},
    results = shows.reducers.add(data, shows.state);

  assert.equal(results.list.length, 1, "should increase the size of the list");
  assert.equal(results.list[0].title, data.title, "should add the new show");
  assert.end();
});

"use strict";

const test = require("tape"),
  show = require("../../models/show");

test("#updateTitle", (assert) => {
  const result = show.reducers.updateTitle("New title");
  assert.equal(result.title, "New title", "should update the value");
  assert.end();
});

test("#updateSeason with falsy value", (assert) => {
  const result = show.reducers.updateSeason("");
  assert.equal(result.season, 0, "should be number 0");
  assert.end();
});

test("#updateSeason with a string", (assert) => {
  const result = show.reducers.updateSeason("12");
  assert.equal(result.season, 12, "should be a number");
  assert.end();
});

test("#updateEpisode with falsy value", (assert) => {
  const result = show.reducers.updateEpisode("");
  assert.equal(result.episode, 0, "should be number 0");
  assert.end();
});

test("#updateEpisode with a string", (assert) => {
  const result = show.reducers.updateEpisode("30");
  assert.equal(result.episode, 30, "should be a number");
  assert.end();
});

test("#reset", (assert) => {
  const result = show.reducers.reset();
  assert.equal(result.title, '', "should remove the title");
  assert.equal(result.season, 0, "should set the season to 0");
  assert.equal(result.episode, 0, "should set the episode to 0");
  assert.end();
});

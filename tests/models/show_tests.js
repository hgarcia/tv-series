"use strict";

const test = require("tape"),
  show = require("../../models/show");

test("#update", (assert) => {
  const result = show.reducers.update({prop: "title", value: "New title"});
  assert.equal(result.title, "New title", "should update the value");
  assert.end();
});

test("#update season with falsy value", (assert) => {
  const result = show.reducers.update({prop: "season", value: ""});
  assert.equal(result.season, 0, "should be number 0");
  assert.end();
});

test("#update season with a string", (assert) => {
  const result = show.reducers.update({prop: "season", value: "12"});
  assert.equal(result.season, 12, "should be a number");
  assert.end();
});

test("#update episode with falsy value", (assert) => {
  const result = show.reducers.update({prop: "episode", value: ""});
  assert.equal(result.episode, 0, "should be number 0");
  assert.end();
});

test("#update episode with a string", (assert) => {
  const result = show.reducers.update({prop: "episode", value: "30"});
  assert.equal(result.episode, 30, "should be a number");
  assert.end();
});

test("#reset", (assert) => {
  const result = show.reducers.reset();
  assert.equal(result.title, "", "should remove the title");
  assert.equal(result.season, 0, "should set the season to 0");
  assert.equal(result.episode, 0, "should set the episode to 0");
  assert.end();
});

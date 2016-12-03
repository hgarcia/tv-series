"use strict";

const test = require("tape"),
  storage = require("../../lib/storage").create({set() {}, get() {}}),
  shows = require("../../models/shows").create(storage);

test("#refresh", (assert) => {
  const data = [{title: "new show", season: 1, episode: 3}],
    results = shows.reducers.refresh(data, shows.state);

  assert.equal(results.list.length, 1, "should return the list");
  assert.equal(results.list[0].title, data[0].title, "should have the shows");
  assert.end();
});

test("#load", (assert) => {
  const
    storage = {
      get() {
        return [{title: "new title"}];
      }
    },
    _shows = require("../../models/shows").create(storage);
  _shows.effects.load({}, shows.state, (action, data) => {
    assert.equal(action, "shows:refresh", "should call the right action");
    assert.equal(data[0].title, "new title", "should be the data stored in localStorage");
    assert.end();
  }, ()=> {});
});

test("#add should save the data", (assert) => {
  const
    newShow = {title: "new title"},
    storage = {
      save(data) {
        assert.equal(data.title, newShow.title, "should save the new show");
        assert.end();
      },
      get() {
        return [];
      }
    },
    _shows = require("../../models/shows").create(storage);
  _shows.effects.add(newShow, shows.state, () => {}, ()=> {});
});

test("#add should call refresh with the new data", (assert) => {
  const
    newShow = {title: "new title"},
    storage = {
      save(data) { },
      get() {
        return [newShow];
      }
    },
    _shows = require("../../models/shows").create(storage);
  _shows.effects.add(newShow, shows.state, (action, data) => {
    assert.equal(action, "shows:refresh", "should call the right action");
    assert.equal(data[0].id, newShow.id, "should be the data stored in localStorage");
    assert.end();
  }, ()=> {});
});

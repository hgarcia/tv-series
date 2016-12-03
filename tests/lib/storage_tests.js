"use strict";

const test = require("tape"),
  storage = require("../../lib/storage");

test("should save the item in 'store'", (assert) => {
  const
    show = {id: "an_unique_id"},
    store = {
      set(key, data) {
        assert.equal(key, show.id, "Show use the show title as the key");
        assert.equal(data, show, "Show should be saved in the store");
        assert.end();
      }
    },
    instance = storage.create(store);

  instance.save(show);
});

test("should get all shows", (assert) => {
  const store = {
      getAll() {
        return {
          "1": {title: "title 1", episode: 2, season: 1},
          "2": {title: "title 2", episode: 2, season: 1},
          "3": {title: "title 3", episode: 2, season: 1}
        };
      }
    },
    instance = storage.create(store),
    results = instance.get();

  assert.equal(results.length, 3, "should return a list of shows");
  assert.equal(results[0].title, "title 1", "should have one show per slot");
  assert.end();
});

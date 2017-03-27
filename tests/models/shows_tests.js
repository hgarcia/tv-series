"use strict";

const test = require("tape"),
  storage = require("../../lib/storage").create({set() {}, get() {}}),
  shows = require("../../models/shows").create(storage);

// test("#update", (assert) => {
//   const result = shows.reducers.update({prop: "title", value: "New title"});
//   assert.equal(result.title, "New title", "should update the value");
//   assert.end();
// });

// test("#update season with falsy value", (assert) => {
//   const result = shows.reducers.update({prop: "season", value: ""});
//   assert.equal(result.season, 0, "should be number 0");
//   assert.end();
// });

// test("#update season with a string", (assert) => {
//   const result = shows.reducers.update({prop: "season", value: "12"});
//   assert.equal(result.season, 12, "should be a number");
//   assert.end();
// });

// test("#update episode with falsy value", (assert) => {
//   const result = shows.reducers.update({prop: "episode", value: ""});
//   assert.equal(result.episode, 0, "should be number 0");
//   assert.end();
// });

// test("#update episode with a string", (assert) => {
//   const result = shows.reducers.update({prop: "episode", value: "30"});
//   assert.equal(result.episode, 30, "should be a number");
//   assert.end();
// });

// test("#reset", (assert) => {
//   const result = shows.reducers.reset();
//   assert.equal(result.title, "", "should remove the title");
//   assert.equal(result.season, 0, "should set the season to 0");
//   assert.equal(result.episode, 0, "should set the episode to 0");
//   assert.end();
// });

// test("#refresh", (assert) => {
//   const data = [{title: "new show", season: 1, episode: 3}],
//     results = shows.reducers.refresh(data, shows.state);

//   assert.equal(results.list.length, 1, "should return the list");
//   assert.equal(results.list[0].title, data[0].title, "should have the shows");
//   assert.end();
// });

// test("#load", (assert) => {
//   const
//     storage = {
//       get() {
//         return [{title: "new title"}];
//       }
//     },
//     _shows = require("../../models/shows").create(storage);
//   _shows.effects.load({}, shows.state, (action, data) => {
//     assert.equal(action, "shows:refresh", "should call the right action");
//     assert.equal(data[0].title, "new title", "should be the data stored in localStorage");
//     assert.end();
//   }, ()=> {});
// });

// test("#add should save the data", (assert) => {
//   const
//     newShow = {title: "new title"},
//     storage = {
//       save(data) {
//         assert.equal(data.title, newShows.title, "should save the new show");
//         assert.end();
//       },
//       get() {
//         return [];
//       }
//     },
//     _shows = require("../../models/shows").create(storage);
//   _shows.effects.add(newShow, shows.state, () => {}, ()=> {});
// });

// test("#add should call refresh with the new data", (assert) => {
//   const
//     newShow = {title: "new title"},
//     storage = {
//       save(data) { },
//       get() {
//         return [newShow];
//       }
//     },
//     _shows = require("../../models/shows").create(storage);
//   _shows.effects.add(newShow, shows.state, (action, data) => {
//     assert.equal(action, "shows:refresh", "should call the right action");
//     assert.equal(data[0].id, newShows.id, "should be the data stored in localStorage");
//     assert.end();
//   }, ()=> {});
// });

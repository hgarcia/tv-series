"use strict";

const test = require("tape"),
  choo = require("choo"),
  app = choo(),
  store = require("store"),
  storage = require("../../lib/storage").create(store),
  home = require("../../pages/home");

app.model(require("../../models/show"));
app.model(require("../../models/shows").create(storage));

app.router((route) => [
  route("/", home.render)
]);

test("#homePage", (assert) => {
  const rendered = app.toString("/");
  assert.notEqual(rendered.indexOf("<main>"), -1, "It should contain the body");
  assert.end();
});

test("getAddShowParams:addShow", (assert) => {
  const send = (eventName, data) => {
    if (eventName === "shows:add") {
      assert.equal(eventName, "shows:add", "It should call shows:add");
      assert.equal(data.some, "data", "It should be called with the data");
      assert.end();
    }
  },
  params = home.getAddShowParams({show: {title: "some thing"}}, send);
  params.addShow({some: "data"});
});

test("getAddShowParams:addShow reset", (assert) => {
  const send = (eventName, data) => {
    if (eventName === "show:reset") {
      assert.equal(eventName, "show:reset", "It should call show:reset");
      assert.end();
    }
  },
  params = home.getAddShowParams({show: {title: "some thing"}}, send);
  params.addShow({some: "data"});
});

test("getAddShowParams:updateShow", (assert) => {
  const send = (eventName, data) => {
    assert.equal(eventName, "show:update", "It should call show:update");
    assert.equal(data.some, "data", "It should be called with the data");
    assert.end();
  },
  params = home.getAddShowParams({show: {title: "some thing"}}, send);
  params.updateShow({some: "data"});
});

test("getShowListParams:shows", (assert) => {
  const params = home.getShowListParams({shows: {list: [{title: "show"}]}}, () => {});
  assert.equal(params.shows[0].title, "show", "should return the shows");
  assert.end();
});

test("getShowListParams:loadShows", (assert) => {
  const send = (eventName, data) => {
    assert.equal(eventName, "shows:load", "It should call shows:load");
    assert.end();
  },
  params = home.getShowListParams({shows: {list: []}}, send);
  params.loadShows();
});

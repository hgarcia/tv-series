"use strict";

const uuid = require("uuid"),
  validations = require("./validations");

function getValue(payload) {
  if (payload.prop !== "title") {
    return parseInt(payload.value || 0, 10);
  }
  return payload.value;
}

function emptyShow() {
  return {
    id: "",
    title: "",
    season: 0,
    episode: 0,
    errors: null
  };
}

function render(bus) {
  return () => {
    bus.emit("render");
  };
}

module.exports = {
  create(storage) {
    return (state, bus) => {
      const __render = render(bus);
      state.show = emptyShow();
      state.shows = [];
      bus.on("show:update", function (payload) {
        state.show[payload.prop] = getValue(payload);
        if (payload.prop === "title") {
          state.show.errors = validations.show(state.show);
          __render();
        }
      });
      bus.on("show:reset", () => {
        state.show = emptyShow();
        __render();
      });
      bus.on("shows:add", (data) => {
        const errors = validations.show(data);
        data.id = uuid.v4();
        if (!errors) {
          state.shows.push(data);
          storage.save(data);
          __render();
        } else {
          state.show.errors = errors;
          __render();
        }
      });

      bus.on("shows:load", () => {
        storage.get((shows) => {
          state.shows = shows;
          __render();
        });
      });
      bus.on("shows:modify", (data) => {
        data.show[data.prop] += data.value;
        storage.save(data.show);
        bus.emit("shows:load");
      });
      bus.on("shows:remove", (data) => {
        storage.removeById(data.id);
        bus.emit("shows:load");
      });
    };
  }
};

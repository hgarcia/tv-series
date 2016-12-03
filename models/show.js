"use strict";

function getValue(payload) {
  if (payload.prop !== "title") {
    return parseInt(payload.value || 0, 10);
  }
  return payload.value;
}

const show = {
  namespace: "show",
  state: {
    id: "",
    title: "",
    season: 0,
    episode: 0
  },
  reducers: {
    update: (payload) => {
      const obj = {};
      obj[payload.prop] = getValue(payload);
      return obj;
    },
    reset: () => {
      return {
        id: "",
        title: "",
        season: 0,
        episode: 0
      };
    }
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
    myEffect: (data, state, send, done) => {
      // do stuff
    }
    */
  },
  subscriptions: [
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    (send, done) => {
      // do stuff
    }
    */
  ]
};

module.exports = show;

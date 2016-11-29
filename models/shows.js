"use strict";

const shows = {
  namespace: "shows",
  state: {
    list: []
  },
  reducers: {
    add: (data, state) => {
      return {list: state.list.concat(data)};
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

module.exports = shows;

"use strict";

const sources = {
  namespace: "sources",
  state: {
    list: [
      {id: 1, name: "Netflix", url: "https://netflix.com"},
      {id: 2, name: "Netflix", url: "https://netflix.com"}
    ]
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    // update: (data, state) => ({ title: data.value })
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

module.exports = sources;

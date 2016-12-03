"use strict";

const uuid = require("uuid");

module.exports = {
  create(storage) {
    return {
      namespace: "shows",
      state: {
        list: []
      },
      reducers: {
        refresh: (data, state) => {
          return {list: data};
        }
      },
      effects: {
        add: (data, state, send, done) => {
          data.id = uuid.v4();
          storage.save(data);
          send("shows:refresh", storage.get(), done);
        },
        load: (data, state, send, done) => {
          send("shows:refresh", storage.get(), done);
        }
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
  }
};

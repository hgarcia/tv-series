"use strict";

const uuid = require("uuid"),
  validations = require("./validations");

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
          const errors = validations.show(data);
          data.id = uuid.v4();
          if (!errors) {
            storage.save(data);
            send("shows:refresh", storage.get(), done);
          } else {
            send("show:errors", errors, done);
          }
        },
        load: (data, state, send, done) => {
          send("shows:refresh", storage.get(), done);
        },
        modify: (data, state, send, done) => {
          data.show[data.prop] += data.value;
          storage.save(data.show);
          send("shows:refresh", storage.get(), done);
        },
        remove: (data, state, send, done) => {
          storage.removeById(data.id);
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

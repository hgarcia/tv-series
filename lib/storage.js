"use strict";

const firebase = require("firebase");

module.exports = {
  create(store) {
    firebase.initializeApp({
      apiKey: "AIzaSyDhYKyuUW8nX-fzNPdOhizEzXlAPBk8gu4",
      authDomain: " tv-series-163a4.firebaseapp.com",
      databaseURL: "https://tv-series-163a4.firebaseio.com",
      storageBucket: "tv-series-163a4.appspot.com"
    });
    return {
      get(cb) {
        const shows = firebase.database().ref("shows/");
        shows.once("value", (data) => {
          const values = data.val(),
            shows = Object.keys(values).map((k) => {
              return values[k];
            });
          cb(shows || []);
        });
      },
      save(data) {
        Reflect.deleteProperty(data, "errors");
        firebase.database().ref("shows/" + data.id).set(data);
      },
      removeById(id) {
        firebase.database().ref("shows/" + id).remove();
      }
    };
  }
};

"use strict";

const firebase = require("firebase");

module.exports = {
  db() {
    firebase.initializeApp({
      apiKey: "AIzaSyDhYKyuUW8nX-fzNPdOhizEzXlAPBk8gu4",
      authDomain: " tv-series-163a4.firebaseapp.com",
      databaseURL: "https://tv-series-163a4.firebaseio.com",
      storageBucket: "tv-series-163a4.appspot.com"
    });
    return firebase.database();
  }
};

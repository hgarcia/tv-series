"use strict";

module.exports = {
  create(db) {
    return {
      get(cb) {
        const shows = db.ref("shows/");
        shows.once("value", (data) => {
          if (!data || !data.val()) {
            cb([]);
            return;
          }
          const values = data.val(),
            shows = Object.keys(values).map((k) => {
              return values[k];
            });
          cb(shows || []);
        });
      },
      save(data) {
        Reflect.deleteProperty(data, "errors");
        db.ref("shows/" + data.id).set(data);
      },
      removeById(id) {
        db.ref("shows/" + id).remove();
      }
    };
  }
};

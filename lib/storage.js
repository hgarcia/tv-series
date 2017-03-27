"use strict";

module.exports = {
  create(store) {
    return {
      get() {
        const shows = store.getAll();
        return Object.keys(shows)
          .map((k) => {
            return shows[k];
          })
          .sort((a, b) => {
            if (a && a.title && b && b.title) {
              return a.title > b.title ? 1 : -1;
            }
            return false;
          });
      },
      save(data) {
        store.set(data.id, data);
      },
      removeById(id) {
        store.remove(id);
      }
    };
  }
};

"use strict";

module.exports = {
  create(store) {
    return {
      get() {
        const shows = store.getAll();
         return Object.keys(shows)
          .map((k) => {
            return shows[k];
          });
      },
      save(data) {
        store.set(data.id, data);
      },
      removeById(id) {
        store.remove(id);
      }
    }
  }
};

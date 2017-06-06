"use strict";

const test = require("tape"),
  storage = require("../../lib/storage");

function fakeDb() {
  return {
    ref() {}
  };
}

test("#get should return an empty array if no results", (assert) => {

  const db = fakeDb(),
    st = storage.create(db);

  db.ref = () => {
    return {
      once(param, cb) {
        cb(null);
      }
    };
  };

  st.get((result) => {
    assert.equal(Array.isArray(result), true);
    assert.equal(result.length, 0);
    assert.end();
  });
});

test("#get should return an empty array if no data", (assert) => {

  const db = fakeDb(),
    st = storage.create(db);

  db.ref = () => {
    return {
      once(param, cb) {
        cb({ val() { return null;} });
      }
    };
  };

  st.get((result) => {
    assert.equal(Array.isArray(result), true);
    assert.equal(result.length, 0);
    assert.end();
  });
});


test("#get should one result if included", (assert) => {

  const db = fakeDb(),
    st = storage.create(db);

  db.ref = (url) => {
    assert.equal(url, "shows/");
    return {
      once(param, cb) {
        assert.equal(param, "value");
        cb({ val() { return {key: {}};} });
      }
    };
  };

  st.get((result) => {
    assert.equal(Array.isArray(result), true);
    assert.equal(result.length, 1);
    assert.end();
  });
});

test("#save", (assert) => {
  const db = fakeDb(),
    st = storage.create(db),
    data = {id: "1234", errors: [], some: "data" };

  db.ref = (url) => {
    assert.equal(url, "shows/1234");
    return {
      set(_data) {
        assert.equal(_data.errors, undefined);
        assert.equal(_data.id, "1234");
        assert.equal(_data.some, "data");
        assert.end();
      }
    };
  };

  st.save(data);
});


test("#removeById", (assert) => {
  const db = fakeDb(),
    st = storage.create(db),
    data = {id: "12345", errors: [], some: "data" };

  db.ref = (url) => {
    assert.equal(url, "shows/12345");
    return {
      remove() {
        assert.end();
      }
    };
  };

  st.removeById(data.id);
});

"use strict";

const test = require("tape"),
  sourceLink = require("../elements/source-link");

test("should return a link to a souce", (assert) => {
  const result = sourceLink(1, {sources: [{id: 1, name: "Example", url: "http://example.com"}]}).toString();
  assert.equal(result, "<a href=\"http://example.com\">Example</a>");
  assert.end();
});

test("should return an empty span if can;t find source", (assert) => {
  const result = sourceLink(2, {sources: [{id: 1, name: "Example", url: "http://example.com"}]}).toString();
  assert.equal(result, "<span></span>");
  assert.end();
});

test("should return an empty span if no sources", (assert) => {
  const result = sourceLink(2, {}).toString();
  assert.equal(result, "<span></span>");
  assert.end();
});

"use strict";

const html = require("bel");

function getSource(sourceId, state) {
  return (state && state.sources && state.sources.list && Array.isArray(state.sources.list)) ?
    state.sources.list.find((s) => s.id === sourceId) :
    null;
}

function souceLink (sourceId, state) {
  const source = getSource(sourceId, state);
  return (source) ?
    html`<a href="${source.url}">${source.name}</a>` :
    html`<span></span>`;
}

module.exports = souceLink;

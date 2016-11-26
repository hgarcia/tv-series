"use strict";

const html = require("bel");

function getSource(sourceId, sourcesState) {
  return (sourcesState && sourcesState.sources && Array.isArray(sourcesState.sources)) ?
    sourcesState.sources.find((s) => s.id === sourceId) :
    null;
}

function souceLink (sourceId, sourcesState) {
  const source = getSource(sourceId, sourcesState);
  return (source) ?
    html`<a href="${source.url}">${source.name}</a>` :
    html`<span></span>`;
}

module.exports = souceLink;

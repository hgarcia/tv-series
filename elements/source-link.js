// Element: souceLink
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function souceLink (sourceId, sourcesState) {
  const source = sourcesState.sources.find((s) => s.id === sourceId);
  return html`<a href="${source.url}">${source.name}</a>`
}

module.exports = souceLink

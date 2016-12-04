// Element: show
//
"use strict";
const html = require("bel"),
  assert = require("assert");

function onDelete(options) {
  return (e) => {
    e.preventDefault();
    options.removeShow(options.show);
    return false;
  }
}

function onDecrement(options, prop) {
  return (e) => {
    e.preventDefault();
    options.changeShow({show: options.show, prop: prop, value: -1});
    return false;
  }
}

function onIncrement(options, prop) {
  return (e) => {
    e.preventDefault();
    options.changeShow({show: options.show, prop: prop, value: 1});
    return false;
  }
}

function show (options) {
  assert.equal(typeof options.show.title, "string", "show: options.show.title must be a string");
  assert.equal(typeof options.show.season, "number", "show: options.show.season must be a number");
  assert.equal(typeof options.show.episode, "number", "show: options.show.episode must be a number");

  return html`<tr>
    <td class="wide">${options.show.title}</td>
    <td class="narrow"><a href="#" class="btn btn-sm" onclick=${onDecrement(options, 'season')}>-</a>${options.show.season}<a href="#" class="btn btn-sm" onclick=${onIncrement(options, 'season')}>+</a></td>
    <td class="narrow"><a href="#" class="btn btn-sm" onclick=${onDecrement(options, 'episode')}>-</a>${options.show.episode}<a href="#" class="btn btn-sm" onclick=${onIncrement(options, 'episode')}>+</a></td>
    <td class="narrow"><a href="#" onclick=${onDelete(options)}>[delete]</a>
  </tr>`;
}

module.exports = show;

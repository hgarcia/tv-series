// Element: addShow
"use strict";

const html = require("bel");

function onInput(prop, options) {
  return (event) => {
    options.updateShow({prop,
      value: event.target.value
    });
    event.preventDefault();
  };
}

function onSubmit(options) {
  return (event) => {
    event.preventDefault();
    options.addShow(options.show);
    return false;
  };
}

function addShow (options) {
  return html`
    <div class="card-block">
      <div class="row">
        <form>
          <div class="form-group col-xs-5">
            <label for="title" class="col-xs-2">Title</label>
            <div class="col-xs-10">
              <input type="text" oninput=${onInput("title", options)} class="form-control form-control-sm" name="title" id="title" value="${options.show.title}">
            </div>
          </div>
          <div class="form-group col-xs-3">
            <label for="title" class="col-xs-5">Season</label>
            <div class="col-xs-7">
              <input type="number" oninput=${onInput("season", options)} step="1" min="0" class="form-control form-control-sm" name="season" id="season" value="${options.show.season}">
            </div>
          </div>
          <div class="form-group col-xs-3">
            <label for="title" class="col-xs-5">Episode</label>
            <div class="col-xs-7">
              <input type="number" oninput=${onInput("episode", options)} step="1" min="0" class="form-control form-control-sm" name="episode" id="episode" value="${options.show.episode}">
            </div>
          </div>
          <div class="form-group col-xs-1">
            <button type="submit" onclick=${onSubmit(options)} class="btn btn-primary btn-sm">Add</button>
          </div>
        </form>
      </div>
    </div>`;
}

module.exports = addShow;

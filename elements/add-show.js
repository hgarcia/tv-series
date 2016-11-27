// Element: addShow
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function onInput(action, send) {
  return (event) => {
    send(action, event.target.value);
    event.preventDefault();
  }
}

function onSubmit(send, state) {
  return (event) => {
    event.preventDefault();
    send('shows:add', state.show);
    send('show:reset');
    return false;
  };
}

function addShow (state, send) {
  return html`
    <div class="card-block">
      <div class="row">
        <form>
          <div class="form-group col-xs-5">
            <label for="title" class="col-xs-2">Title</label>
            <div class="col-xs-10">
              <input type="text" oninput=${onInput('show:updateTitle', send)} class="form-control form-control-sm" name="title" id="title" value="${state.show.title}">
            </div>
          </div>
          <div class="form-group col-xs-3">
            <label for="title" class="col-xs-5">Season</label>
            <div class="col-xs-7">
              <input type="number" oninput=${onInput('show:updateSeason', send)} step="1" min="0" class="form-control form-control-sm" name="season" id="season" value="${state.show.season}">
            </div>
          </div>
          <div class="form-group col-xs-3">
            <label for="title" class="col-xs-5">Episode</label>
            <div class="col-xs-7">
              <input type="number" oninput=${onInput('show:updateEpisode', send)} step="1" min="0" class="form-control form-control-sm" name="episode" id="episode" value="${state.show.episode}">
            </div>
          </div>
          <div class="form-group col-xs-1">
            <button type="submit" onclick=${onSubmit(send, state)} class="btn btn-primary btn-sm">Add</button>
          </div>
        </form>
      </div>
    </div>`
}

module.exports = addShow

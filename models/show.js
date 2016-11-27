const show = {
  namespace: 'show',
  state: {
    title: '',
    season: 0,
    episode: 0
  },
  reducers: {
    updateTitle: (data, state) => {
      return {title: data};
    },
    updateSeason: (data, state) => {
      return {season: parseInt(data || 0, 10)};
    },
    updateEpisode: (data, state) => {
      return {episode: parseInt(data || 0, 10)};
    },
    reset: (data, state) => {
      return {
        title: '',
        season: 0,
        episode: 0
      };
    }
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
    myEffect: (data, state, send, done) => {
      // do stuff
    }
    */
  },
  subscriptions: [
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    (send, done) => {
      // do stuff
    }
    */
  ]
}

module.exports = show

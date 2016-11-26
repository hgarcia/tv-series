const shows = {
  namespace: 'shows',
  state: {
    shows: [
      {title: "X-Files", season: 1, episode: 18, sourceId: 1},
      {title: "Last man standing", season: 1, episode: 18, sourceId: 1},
      {title: "Homeland", season: 1, episode: 18, sourceId: 1},
      {title: "Lucky man", season: 1, episode: 18, sourceId: 1}
    ]
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    // update: (data, state) => ({ title: data.value })
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

module.exports = shows

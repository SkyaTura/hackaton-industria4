export const state = () => ({
  procedure: {
    steps: []
  }
})

export const mutations = {
  setProcedure (state, payload) {
    state.procedure = {
      ...payload
    }
  }
}

export const actions = {
  fetchData ({ commit }, procedureId) {
    const db = this.$firebase.database()
    const ref = db.ref('procedures')
    ref.once('value')
      .then(data => data.val())
      .then(procedure => commit('setProcedure', procedure))
  }
}

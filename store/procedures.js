export const state = () => ({
  items: []
})

export const mutations = {
  addItem (state, item) {
    state.items = [
      item,
      ...state.items
    ]
  },
  addItems (state, items) {
    state.items = [
      ...state.items,
      ...items
    ]
  }
}

export const actions = {
  fetchData ({ commit }) {
    const db = this.$firebase.database()
    const ref = db.ref('procedures')
    ref.once('value')
      .then(data => data.val())
      .then(items => commit('addItems', items))
  }
}

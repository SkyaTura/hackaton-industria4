export const state = () => ({
  items: {}
})

export const mutations = {
  addItem (state, item) {
    state.items = {
      item,
      ...state.items
    }
  },
  addItems (state, items) {
    state.items = {
      ...state.items,
      ...items
    }
  },
  setItems (state, items) {
    state.items = {
      ...items
    }
  },
  addProcedureStep (state, { id, text }) {
    const db = this.$firebase.database()
    const ref = db.ref(`procedures/${id}`)
    const procedure = state.items[id]
    procedure.steps.push({ text })
    ref.set(procedure)
  }
}

export const actions = {
  fetchData ({ commit }) {
    const db = this.$firebase.database()
    const ref = db.ref('procedures')
    ref.once('value')
      .then(data => data.val())
      .then(items => commit('setItems', items))
  },
  createProcedure ({ commit }, step) {
    const db = this.$firebase.database()
    const ref = db.ref('procedures')
    const newProcedure = ref.push()
    const procedure = {
      steps: [
        step
      ]
    }
    newProcedure.set(procedure)
      .then(() => commit('addItem', {
        id: newProcedure.key,
        ...procedure
      }))
      .then(() => { window.location.href = `/procedures/${newProcedure.key}/steps` })
      .catch(console.log)
  },
  addProcedureStep ({ commit }, payload) {
    commit('addProcedureStep', payload)
  }
}

export const getters = {
  findById (state) {
    return id => (state[id] || {})
  }
}

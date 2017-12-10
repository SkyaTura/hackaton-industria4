export const state = () => ({
  pageContent: {
    background: '#fafafa'
  }
})

export const mutations = {
  setStyle (state, { element, style, value }) {
    if (state[element]) {
      state[element] = {}
    }
    state[element][style] = value
  },
  removeStyle (state, { element, style }) {
    if (!state[element]) return
    const {
      [style]: ignore,
      ...others
    } = state[element]
    state[element] = {
      ...others
    }
  }
}

export const actions = {
  removeStyle ({ commit }, props) {
    commit('removeStyle', props)
  },
  setStyle ({ commit }, props) {
    commit('setStyle', props)
  }
}

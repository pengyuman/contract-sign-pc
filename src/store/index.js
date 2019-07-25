import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    REPLACE: (state, { prop, value }) => {
      if (prop) {
        state[prop] = Object.assign({}, value)
      } else {
        state = value
      }
    }
  },
  actions: {
    replace: ({ commit }, { prop, value }) => {
      commit('REPLACE', { prop, value })
    }
  }
})

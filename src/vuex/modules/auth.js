import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE
} from '../mutation-types'

const state = {
  authorized: false
}

// mutations
const mutations = {
  [AUTH_REQUEST] (state) {
  },

  [AUTH_SUCCESS] (state) {
    state.authorized = true
  },

  [AUTH_FAILURE] (state) {
    state.authorized = false
  }
}

export default {
  state,
  mutations
}

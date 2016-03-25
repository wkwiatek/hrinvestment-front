import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_INVALIDATE
} from '../mutation-types'

const state = {
  token: null
}

const mutations = {
  [AUTH_REQUEST] (state) {
  },

  [AUTH_SUCCESS] (state, action, token) {
    state.token = token
  },

  [AUTH_FAILURE] (state) {
    state.token = null
  },

  [AUTH_INVALIDATE] (state) {
    state.token = null
  }
}

export default {
  state,
  mutations
}

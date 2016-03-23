import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE
} from '../mutation-types'

const state = {
  token: null
}

const mutations = {
  [AUTH_REQUEST] (state) {
    console.log('asdqwe', state)
  },

  [AUTH_SUCCESS] (state, action) {
    state.token = action.token
  },

  [AUTH_FAILURE] (state) {
    state.token = null
  }
}

export default {
  state,
  mutations
}

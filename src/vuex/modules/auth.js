import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_INVALIDATE
} from '../mutation-types'

const state = {
  token: null,
  permissions: [],
  firstname: null,
  lastname: null
}

const mutations = {
  [AUTH_REQUEST] (state) {
  },

  [AUTH_SUCCESS] (state, action, token, permissions, firstname, lastname) {
    state.token = token
    state.permissions = permissions
    state.firstname = firstname
    state.lastname = lastname
  },

  [AUTH_FAILURE] (state) {
    state.token = null
    state.permissions = []
    state.firstname = null
    state.lastname = null
  },

  [AUTH_INVALIDATE] (state) {
    state.token = null
    state.permissions = []
    state.firstname = null
    state.lastname = null
  }
}

export default {
  state,
  mutations
}

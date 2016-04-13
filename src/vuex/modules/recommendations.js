import {
  RECEIVE_RECOMMENDATIONS
} from '../mutation-types'

const state = {
  all: []
}

const mutations = {
  [RECEIVE_RECOMMENDATIONS] (state, recommendations) {
    state.all = recommendations
  }
}

export default {
  state,
  mutations
}

import {
  ALERT_SHOW,
  ALERT_HIDE
} from '../mutation-types'

const state = {
  isVisible: false,
  body: '',
  header: ''
}

const mutations = {
  [ALERT_SHOW] (state, { body, header }) {
    state.isVisible = true
    state.body = body
    state.header = header
  },

  [ALERT_HIDE] (state) {
    state.isVisible = false
  }
}

export default {
  state,
  mutations
}

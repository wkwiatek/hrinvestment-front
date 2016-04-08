import {
  ALERT_SHOW,
  ALERT_HIDE
} from '../mutation-types'

const state = {
  isVisible: false,
  type: '',
  body: '',
  header: ''
}

const mutations = {
  [ALERT_SHOW] (state, { body, header, type }) {
    state.isVisible = true
    state.body = body
    state.header = header
    state.type = type
  },

  [ALERT_HIDE] (state) {
    state.isVisible = false
    state.body = ''
    state.header = ''
    state.type = ''
  }
}

export default {
  state,
  mutations
}

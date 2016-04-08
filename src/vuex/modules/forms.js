import {
  FORM_RECOMMEND_COMPANY_REQUEST,
  FORM_RECOMMEND_WORKER_REQUEST,
  FORM_RECOMMEND_COMPANY_SUCCESS,
  FORM_RECOMMEND_WORKER_SUCCESS,
  FORM_FAILURE
} from '../mutation-types'

const state = {
  form: null
}

const mutations = {
  [FORM_RECOMMEND_COMPANY_REQUEST] (state, form) {
    state.form = form
  },
  [FORM_RECOMMEND_WORKER_REQUEST] (state, form) {
    state.form = form
  },
  [FORM_RECOMMEND_COMPANY_SUCCESS] (state) {
    state.form = null
  },
  [FORM_RECOMMEND_WORKER_SUCCESS] (state) {
    state.form = null
  },
  [FORM_FAILURE] (state) {
    state.form = null
  }
}

export default {
  state,
  mutations
}

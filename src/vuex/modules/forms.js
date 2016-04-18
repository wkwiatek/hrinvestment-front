import {
  FORM_RECOMMEND_COMPANY_REQUEST,
  FORM_RECOMMEND_WORKER_REQUEST,
  FORM_REGISTER_USER_REQUEST,
  FORM_RECOMMEND_COMPANY_SUCCESS,
  FORM_RECOMMEND_WORKER_SUCCESS,
  FORM_REGISTER_USER_SUCCESS,
  FORM_RECOMMEND_COMPANY_FAILURE,
  FORM_RECOMMEND_WORKER_FAILURE,
  FORM_REGISTER_USER_FAILURE
} from '../mutation-types'

const state = {
  register: {
    payload: null,
    isLocked: false
  },
  recommendCompany: {
    payload: null,
    isLocked: false
  },
  recommendWorker: {
    payload: null,
    isLocked: false
  }
}

const mutations = {
  [FORM_RECOMMEND_COMPANY_REQUEST] (state, form) {
    state.recommendCompany.payload = form
    state.recommendCompany.isLocked = true
  },
  [FORM_RECOMMEND_WORKER_REQUEST] (state, form) {
    state.recommendWorker.payload = form
    state.recommendWorker.isLocked = true
  },
  [FORM_REGISTER_USER_REQUEST] (state, form) {
    state.register.payload = form
    state.register.isLocked = true
  },
  [FORM_RECOMMEND_COMPANY_SUCCESS] (state) {
    state.recommendCompany.payload = null
    state.recommendCompany.isLocked = false
  },
  [FORM_RECOMMEND_WORKER_SUCCESS] (state) {
    state.recommendWorker.payload = null
    state.recommendWorker.isLocked = false
  },
  [FORM_REGISTER_USER_SUCCESS] (state) {
    state.register.payload = null
    state.register.isLocked = false
  },
  [FORM_RECOMMEND_COMPANY_FAILURE] (state) {
    state.recommendCompany.payload = null
    state.recommendCompany.isLocked = false
  },
  [FORM_RECOMMEND_WORKER_FAILURE] (state) {
    state.recommendWorker.payload = null
    state.recommendWorker.isLocked = false
  },
  [FORM_REGISTER_USER_FAILURE] (state) {
    state.register.payload = null
    state.register.isLocked = false
  }
}

export default {
  state,
  mutations
}

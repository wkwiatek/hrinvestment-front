import auth from '../api/auth'
import recommendCompany from '../api/recommend-company'
import recommendWorker from '../api/recommend-worker'

import * as types from './mutation-types'

export const authorize = ({ dispatch }, user) => {
  dispatch(types.AUTH_REQUEST)
  auth.authorize(user).then(
    (response) => {
      dispatch(types.AUTH_SUCCESS, user, response.headers('x-auth-token'), response.data.name, response.data.surname)
      dispatch(types.CHANGE_ROUTE, {path: '/app/home'})
    },
    () => dispatch(types.AUTH_FAILURE)
  )
}

export const invalidate = ({ dispatch }) => {
  dispatch(types.AUTH_REQUEST)
  dispatch(types.AUTH_INVALIDATE)
  dispatch(types.CHANGE_ROUTE, {path: '/login'})
}

export const sendCompanyRecommendationForm = ({ dispatch }, form) => {
  dispatch(types.FORM_RECOMMEND_COMPANY_REQUEST, form)
  recommendCompany.send(form).then(
    (response) => {
      dispatch(types.FORM_RECOMMEND_COMPANY_SUCCESS)
    },
    () => dispatch(types.FORM_FAILURE)
  )
}

export const sendWorkerRecommendationForm = ({ dispatch }, form) => {
  dispatch(types.FORM_RECOMMEND_WORKER_REQUEST, form)
  recommendWorker.send(form).then(
    (response) => {
      dispatch(types.FORM_RECOMMEND_WORKER_SUCCESS)
    },
    () => dispatch(types.FORM_FAILURE)
  )
}

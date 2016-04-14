import auth from '../api/auth'
import recommendCompany from '../api/recommend-company'
import recommendWorker from '../api/recommend-worker'
import registerUser from '../api/register-user'
import recommendations from '../api/recommendations'
import {PERMISSIONS} from '../utils/translations.js'

import Vue from 'vue'
import * as types from './mutation-types'

export const authorize = ({ dispatch }, user) => {
  dispatch(types.AUTH_REQUEST)
  auth.authorize(user).then(
    (response) => {
      dispatch(types.AUTH_SUCCESS, user, response.headers('x-auth-token'), response.data.permissions, response.data.name, response.data.surname)
      dispatch(types.CHANGE_ROUTE, {path: '/app/home'})
      dispatch(types.ALERT_SHOW, {
        header: 'Sukces!',
        type: 'success',
        body: 'Użytkownik został zalogowany'
      })

      auth.availablePermissions().then(({ data }) => {
        const allPerms = Object.keys(data).map(key => ({
          name: PERMISSIONS[data[key]],
          value: data[key]
        }))

        dispatch(types.RECEIVE_ALL_PERMISSIONS, allPerms)
      })
    },
    () => {
      dispatch(types.AUTH_FAILURE)
      dispatch(types.ALERT_SHOW, {
        header: 'Błąd!',
        type: 'danger',
        body: 'Błąd podczas logowania'
      })
    }
  )
  setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
}

export const invalidate = ({ dispatch }) => {
  dispatch(types.AUTH_REQUEST)
  dispatch(types.AUTH_INVALIDATE)
  dispatch(types.CHANGE_ROUTE, {path: '/login'})
  dispatch(types.ALERT_SHOW, {
    header: 'Sukces!',
    type: 'success',
    body: 'Użytkownik został wylogowany'
  })
  setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
}

export const sendRegisterUserForm = ({ dispatch }, form) => {
  dispatch(types.FORM_REGISTER_USER_REQUEST, form)
  registerUser.send(form).then(
    (response) => {
      dispatch(types.FORM_REGISTER_USER_SUCCESS)
      dispatch(types.ALERT_SHOW, {
        header: 'Sukces!',
        type: 'success',
        body: 'Użytkownik został zarejestrowany'
      })
      dispatch(types.CHANGE_ROUTE, {path: '/app/home'})
    },
    () => {
      dispatch(types.FORM_FAILURE)
      dispatch(types.ALERT_SHOW, {
        header: 'Błąd!',
        type: 'danger',
        body: 'Błąd podczas rejestracji nowego użytkownika'
      })
    }
  )
  setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
}

export const sendCompanyRecommendationForm = ({ dispatch }, form, fileData) => {
  dispatch(types.FORM_RECOMMEND_COMPANY_REQUEST, form)
  recommendCompany.send(form).then(
    (response) => {
      dispatch(types.FORM_RECOMMEND_COMPANY_SUCCESS)
      dispatch(types.ALERT_SHOW, {
        header: 'Sukces!',
        type: 'success',
        body: 'Formularz został poprawnie przesłany'
      })
      Vue.http.post(`recommend/${response.data.id}/file`, fileData).then(() => {
        console.debug('file upload succeed')
      }, () => {
        console.debug('file upload failed')
      })
      dispatch(types.CHANGE_ROUTE, {path: '/app/recommendations'})
    },
    () => {
      dispatch(types.FORM_FAILURE)
      dispatch(types.ALERT_SHOW, {
        header: 'Błąd!',
        type: 'danger',
        body: 'Błąd podczas przesyłania formularza'
      })
    }
  )
  setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
}

export const sendWorkerRecommendationForm = ({ dispatch }, form) => {
  dispatch(types.FORM_RECOMMEND_WORKER_REQUEST, form)
  recommendWorker.send(form).then(
    (response) => {
      dispatch(types.FORM_RECOMMEND_WORKER_SUCCESS)
      dispatch(types.ALERT_SHOW, {
        header: 'Sukces!',
        type: 'success',
        body: 'Formularz został poprawnie przesłany'
      })
      dispatch(types.CHANGE_ROUTE, {path: '/app/home'})
    },
    () => {
      dispatch(types.FORM_FAILURE)
      dispatch(types.ALERT_SHOW, {
        header: 'Błąd!',
        type: 'danger',
        body: 'Błąd podczas przesyłania formularza'
      })
    }
  )
  setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
}

export const getAllRecommendations = ({ dispatch }) => {
  recommendations.getAll().then(res => {
    dispatch(types.RECEIVE_RECOMMENDATIONS, res.data)
  })
}

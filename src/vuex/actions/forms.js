import recommendCompany from '../../api/recommend-company'
import recommendWorker from '../../api/recommend-worker'
import registerUser from '../../api/register-user'

import * as types from '../mutation-types'

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
      dispatch(types.CHANGE_ROUTE, { path: '/app/home' })
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
      if (fileData) {
        recommendCompany.saveFile({ id: response.data.id }, fileData).then(
          () => {
            dispatch(types.ALERT_SHOW, {
              header: 'Sukces!',
              type: 'success',
              body: 'Plik został przesłany poprawnie'
            })
            setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
            dispatch(types.CHANGE_ROUTE, { path: '/app/home' })
          },
          () => {
            setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
            dispatch(types.ALERT_SHOW, {
              header: 'Błąd!',
              type: 'danger',
              body: 'Błąd podczas przesyłania pliku'
            })
          }
        )
      } else {
        setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
        dispatch(types.CHANGE_ROUTE, { path: '/app/home' })
      }
    },
    () => {
      dispatch(types.FORM_FAILURE)
      setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
      dispatch(types.ALERT_SHOW, {
        header: 'Błąd!',
        type: 'danger',
        body: 'Błąd podczas przesyłania formularza'
      })
    }
  )
}

export const sendWorkerRecommendationForm = ({ dispatch }, form, fileData) => {
  dispatch(types.FORM_RECOMMEND_WORKER_REQUEST, form)
  recommendWorker.send(form).then(
    (response) => {
      dispatch(types.FORM_RECOMMEND_WORKER_SUCCESS)
      dispatch(types.ALERT_SHOW, {
        header: 'Sukces!',
        type: 'success',
        body: 'Formularz został poprawnie przesłany'
      })
      if (fileData) {
        recommendWorker.saveFile({ id: response.data.id }, fileData).then(
          () => {
            dispatch(types.ALERT_SHOW, {
              header: 'Sukces!',
              type: 'success',
              body: 'Plik został przesłany poprawnie'
            })
            setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
            dispatch(types.CHANGE_ROUTE, { path: '/app/home' })
          },
          () => {
            dispatch(types.ALERT_SHOW, {
              header: 'Błąd!',
              type: 'danger',
              body: 'Błąd podczas przesyłania pliku'
            })
          }
        )
      } else {
        setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
        dispatch(types.CHANGE_ROUTE, { path: '/app/home' })
      }
    },
    () => {
      dispatch(types.FORM_FAILURE)
      setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
      dispatch(types.ALERT_SHOW, {
        header: 'Błąd!',
        type: 'danger',
        body: 'Błąd podczas przesyłania formularza'
      })
    }
  )
}

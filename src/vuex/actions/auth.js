import auth from '../../api/auth'
import {PERMISSIONS} from '../../utils/translations.js'

import * as types from '../mutation-types'

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
  dispatch(types.CHANGE_ROUTE, { path: '/login' })
  dispatch(types.ALERT_SHOW, {
    header: 'Sukces!',
    type: 'success',
    body: 'Użytkownik został wylogowany'
  })
  setTimeout(() => dispatch(types.ALERT_HIDE), 3000)
}

import auth from '../api/auth'
import * as types from './mutation-types'

export const authorize = ({ dispatch }, user) => {
  dispatch(types.AUTH_REQUEST)
  auth.authorize(user).then(
    (response) => {
      dispatch(types.AUTH_SUCCESS, user, response.headers('x-auth-token'))
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

import auth from '../api/auth'
import * as types from './mutation-types'

export const authorize = ({ dispatch }, user) => {
  dispatch(types.AUTH_REQUEST)
  auth.authorize(user).then(
    (response) => dispatch(types.AUTH_SUCCESS, user, response.headers('x-auth-token')),
    () => dispatch(types.AUTH_FAILURE)
  )
}

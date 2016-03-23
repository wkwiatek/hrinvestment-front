import auth from '../api/auth'
import * as types from './mutation-types'

export const authorize = ({ dispatch }, user) => {
  dispatch(types.AUTH_REQUEST)
  auth.authorize(user).then(
    () => dispatch(types.AUTH_SUCCESS),
    () => dispatch(types.AUTH_FAILURE)
  )
}

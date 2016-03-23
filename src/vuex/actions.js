import auth from '../api/auth'
import * as types from './mutation-types'

export const authorize = ({ dispatch }, user) => {
  dispatch(types.AUTHORIZE_REQUEST)
  auth.authorize(
    user,
    () => dispatch(types.AUTHORIZE_SUCCESS),
    () => dispatch(types.AUTHORIZE_FAILURE)
  )
}

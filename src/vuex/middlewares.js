import { STORAGE_KEY } from './constants'
import createLogger from 'vuex/logger'

const localStorageMiddleware = {
  onMutation (mutation, { auth }) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(auth))
  }
}

const debug = process.env.NODE_ENV !== 'production'

export default debug
  ? [createLogger(), localStorageMiddleware]
  : [localStorageMiddleware]

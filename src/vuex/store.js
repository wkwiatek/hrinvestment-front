import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import auth from './modules/auth'

Vue.use(Vuex)
Vue.config.debug = true

const debug = true

export default new Vuex.Store({
  modules: {
    auth
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})

import {RecommendCompanyResource} from '../resources/index'
import store from '../vuex/store'

export default {
  send (data) {
    return RecommendCompanyResource.save(data, {
      headers: {
        'x-auth-token': store.state.auth.token
      }
    })
  }
}

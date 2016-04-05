import {RecommendCompanyResource} from '../resources/index'

export default {
  send (data) {
    return RecommendCompanyResource.save(data)
  }
}

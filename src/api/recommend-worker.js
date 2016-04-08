import {RecommendWorkerResource} from '../resources/index'

export default {
  send (data) {
    return RecommendWorkerResource.save(data)
  }
}

import {RecommendWorkerResource, RecommendFileUpload} from '../resources/index'

export default {
  send (data) {
    return RecommendWorkerResource.save(data)
  },
  saveFile (params, data) {
    return RecommendFileUpload.save(params, data)
  }
}

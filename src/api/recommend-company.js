import {RecommendCompanyResource, RecommendFileUpload} from '../resources/index'

export default {
  send (data) {
    return RecommendCompanyResource.save(data)
  },
  saveFile (params, data) {
    return RecommendFileUpload.save(params, data)
  }
}

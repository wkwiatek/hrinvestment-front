import {RecommendationsResource} from '../resources/index'

export default {
  getAll () {
    return RecommendationsResource.get()
  }
}

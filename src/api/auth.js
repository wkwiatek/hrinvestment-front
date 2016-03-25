import {LoginResource} from '../resources/index'

export default {
  authorize (data) {
    return LoginResource.save(data)
  }
}

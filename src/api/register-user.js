import {UsersResource} from '../resources/index'

export default {
  send (data) {
    return UsersResource.save(data)
  }
}

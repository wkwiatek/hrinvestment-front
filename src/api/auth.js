import {LoginResource, PermissonsResource} from '../resources/index'

export default {
  authorize (data) {
    return LoginResource.save(data)
  },
  availablePermissions () {
    return PermissonsResource.get()
  }
}

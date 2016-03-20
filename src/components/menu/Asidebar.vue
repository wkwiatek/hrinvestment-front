<template>
  <aside id="aside" class="app-aside hidden-xs bg-dark">
    <div class="aside-wrap">
      <div class"navi-wrap">
        <nav ui-nav="" class="navi clearfix">
            <ul class="nav">
              <li>
                <a href="" class="auto">
                  <i class="icon-home icon"></i>
                  <span class="font-bold">Main</span>
                </a>
              </li>

              <li class="line dk"></li>

              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>Forms</span>
              </li>

              <li>
                <a v-link="{ path: '/form1' }">
                  <i class="fa fa-edit"></i>
                  <span>Form 1</span>
                </a>
              </li>

              <li>
                <a v-link="{ path: '/form2' }">
                  <i class="fa fa-edit"></i>
                  <span>Form 2</span>
                </a>
              </li>

              <li class="line dk hidden-folded"></li>

              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>Authorization</span>
              </li>

              <li>
                <a v-link="{ path: '/login' }">
                  <i class="icon-login icon"></i>
                  <span>Login</span>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/register' }">
                  <i class="icon-user-follow icon"></i>
                  <span>Sign-up</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-logout icon"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  </aside>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Menu'
    }
  }
}
</script>

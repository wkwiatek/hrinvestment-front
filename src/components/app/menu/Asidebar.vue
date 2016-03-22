<template>
  <aside class="app-aside hidden-xs bg-dark">
    <div class="aside-wrap">
      <div class
      "navi-wrap">
      <nav ui-nav="" class="navi clearfix">
        <ul class="nav">
          <li>
            <a v-link="{ path: '/app/home'}" class="auto">
              <i class="icon-home icon"></i>
              <span class="font-bold">Home</span>
            </a>
          </li>

          <li class="line dk"></li>

          <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
            <span>Forms</span>
          </li>

          <li>
            <a v-link="{ path: '/app/form1' }">
              <i class="fa fa-edit"></i>
              <span>Form 1</span>
            </a>
          </li>

          <li>
            <a v-link="{ path: '/app/form2' }">
              <i class="fa fa-edit"></i>
              <span>Form 2</span>
            </a>
          </li>

          <li class="line dk hidden-folded"></li>

          <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
            <span>Access</span>
          </li>

          <li>
            <a v-link="{ path: '/app/register' }">
              <i class="icon-user-follow icon"></i>
              <span>Register</span>
            </a>
          </li>
          <li>
            <a @click="logout()">
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
  import auth from './../../../auth'
  export default {
    data () {
      return {
        msg: 'Menu'
      }
    },
    methods: {
      logout () {
        auth.logout()
      }
    }
  }
</script>
<style>
  .v-link-active {
    background-color: #32374a;
    color: #ffffff !important;
  }
</style>

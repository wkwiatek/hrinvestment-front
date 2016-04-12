<template>
  <header class="app-header navbar">
    <div class="navbar-header bg-black">
      <a v-link="{ path: '/app/home', activeClass: 'text-lt' }" class="navbar-brand text-lt">
        <span class="hidden-folded">HR Investment</span>
      </a>
    </div>

    <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a class="dropdown-toggle clear">
            <span class="hidden-sm hidden-md">{{ getFullname }}</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import {getFullname} from '../../../vuex/getters.js'

  export default {
    vuex: {
      getters: {
        getFullname
      }
    }
  }
</script>

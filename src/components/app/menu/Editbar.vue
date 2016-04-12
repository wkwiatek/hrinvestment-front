<template>
  <header class="app-header navbar" role="menu">
    <div class="navbar-header bg-black">
      <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">
        <i class="glyphicon glyphicon-cog"></i>
      </button>
      <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">
        <i class="glyphicon glyphicon-align-justify"></i>
      </button>
      <a v-link="{ path: '/app/home' }" class="navbar-brand text-lt">
        <i class="fa fa-btc"></i>
        <span class="hidden-folded m-l-xs">HR Investment</span>
      </a>
    </div>

    <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown" dropdown="" style="">
          <a class="dropdown-toggle clear" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
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

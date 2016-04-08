<template>
  <div class="app app-header-fixed">
    <editbar></editbar>
    <asidebar></asidebar>
    <div class="app-content" role="main">
      <div class="app-content-body">
        <div class="hbox hbox-auto-xs hbox-auto-sm">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Asidebar from './menu/Asidebar'
import Editbar from './menu/Editbar'
import Footerbar from './menu/Footerbar'

export default {
  components: {
    Asidebar, Editbar, Footerbar
  }
}
</script>

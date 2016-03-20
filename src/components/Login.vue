<template>
  <div class="fade-in-right-big smooth">
    <div class="container w-xxl w-auto-xs">
      <a v-link="{ path: '/app/home'}" class="navbar-brand block m-t">HR Ivestment</a>
      <div class="m-b-lg">
        <div class="wrapper text-center">
          <strong>Log in</strong>
        </div>
        <form name="form" class="form-validation">
          <div class="text-danger wrapper text-center" aria-hidden="true">

          </div>
          <div class="list-group list-group-sm">
            <div class="list-group-item">
              <input type="email" placeholder="Email" class="form-control no-border"required="" aria-required="true" aria-invalid="true">
            </div>
            <div class="list-group-item">
              <input type="password" placeholder="Password" class="form-control no-border" required="" aria-required="true" aria-invalid="true">
            </div>
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block" aria-disabled="true" disabled="disabled">Log in</button>
          <div class="line line-dashed"></div>
        </form>
      </div>
      <p class="ng-scope">
        <small class="text-muted">Web app framework base on Bootstrap and AngularJS<br>© 2014</small>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Sign in to get in touch'
    }
  }
}
</script>

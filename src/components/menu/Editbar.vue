<template>
  <header id="header" class="app-header navbar" role="menu">
    <div class="navbar-header bg-dark">
      <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">
        <i class="glyphicon glyphicon-cog"></i>
      </button>
      <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">
        <i class="glyphicon glyphicon-align-justify"></i>
      </button>
      <a v-link="{ path: '/' }" class="navbar-brand text-lt">
        <i class="fa fa-btc"></i>
        <span class="hidden-folded m-l-xs">Hr Investment</span>
      </a>
    </div>

    <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
      <div class="nav navbar-nav hidden-xs">
        <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">
          <i class="fa fa-dedent fa-fw text"></i>
          <i class="fa fa-indent fa-fw text-active"></i>
        </a>
      </div>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" data-toggle="dropdown" class="dropdown-toggle clear">
            <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
              <img src="../../assets/logo.png" alt="...">
              <i class="on md b-white bottom"></i>
            </span>
            <span class="hidden-sm hidden-md">John.Smith</span></b>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

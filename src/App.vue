<template>
  <div id="app">
  <b-navbar class="navbar">
    <b-navbar-nav>
      <b-nav-item href="#">Todo App</b-nav-item>
    </b-navbar-nav>
  </b-navbar>

    <router-view/>
  </div>
</template>

<style scoped>
.navbar{
  background-color: rgb(62, 62, 129);
}
</style>
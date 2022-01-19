<template>
  <div id="app">
  <b-navbar class="navbar">
    <b-navbar-nav>
      <b-nav-item href="#"><h5>Todo App</h5></b-nav-item>
    </b-navbar-nav>
  </b-navbar>

    <router-view/>
  </div>
</template>

<style scoped>
.navbar{
  background-color: rgb(62, 62, 129);
}
h5{
  color: white;
  padding:4px 0px 0px 10px;
}
</style>
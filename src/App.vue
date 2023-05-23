<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
@import "./assets/main.scss";

body {
  background-color: $main-background-color;
}

#app {
  font-family: $font-family;
}
</style>

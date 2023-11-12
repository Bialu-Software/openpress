<template>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/styles/main';

#app {
  font-family: $font-family;
  line-height: 1.3;
}

body {
  background-color: $main-background-color;
}

h1,
h2 {
  color: $headline-color;
}

p,
label {
  color: $text-color;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 15px;
  background: $main-color;
  color: $searchBar-button-color;
  flex-direction: row;
  gap: 10px;
  transition: 0.2s;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: $searchBar-button-background-hover;
  }
}

input,
textarea {
  position: relative;
  border-radius: $searchBar-border-radius;
  border: 1px solid $searchBar-input-border-color;
  background-color: $searchBar-background-color;
  color: $text-color;
  padding: 15px;
}

</style>

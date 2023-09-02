<template>
  <div class="container">
    <div class="search-bar">
      <div class="content">
        <input type="text" placeholder="Search blog posts..." class="search-input" />
        <button class="search-button"><span class="text">Search</span> <i class="bi bi-search"></i></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/main';
.search-bar {
  position: relative;
  border-radius: $searchBar-border-radius;
  border: 1px solid $searchBar-input-border-color;
  background-color: $searchBar-background-color;
  padding: 15px;

  .content {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
  }

  .search-input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 15px;
    color: $searchBar-input-color;
    background-color: transparent;
  }

  .search-button {
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 15px;
    background: $main-color;
    color: $searchBar-button-color;
    display: flex;
    flex-direction: row;
    gap: 10px;
    transition: 0.2s;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: $searchBar-button-background-hover;
    }
  }
}

@media (max-width: 454px) {
  .container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .search-bar {
    align-items: start;

    .search-button {
      padding: 10px;

      .text {
        display: none;
      }
    }
  }
}
</style>

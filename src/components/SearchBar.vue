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

<style lang="scss">
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
    display: flex;
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

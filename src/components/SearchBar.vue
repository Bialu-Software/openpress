<template>
  <div class="container">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search blog posts..."
        class="search-input"
      />
      <button class="search-button pc">
        Search <i class="bi bi-search"></i>
      </button>
      <button class="search-button mobile"><i class="bi bi-search"></i></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.search-bar {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .search-input {
    position: relative;
    width: 100%;
    border-radius: $searchBar-border-radius;
    border: 1px solid $searchBar-input-border-color;
    outline: none;
    font-size: 15px;
    color: $searchBar-input-color;
    background-color: $searchBar-background-color;
    padding: 20px 10px;
  }

  .search-button.mobile {
    display: none;
  }

  .search-button {
    position: absolute;
    right: 10px;
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

    &::after {
      content: "";
      background-color: $searchBar-background-color;
      height: 100%;
      width: 20px;
      position: absolute;
      top: 0;
      left: -20px;
    }
  }
}

@media (max-width: 454px) {
  .container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .search-bar {
    flex-direction: column;
    width: 100%;
    gap: 20px;
    align-items: start;

    .search-button.mobile {
      display: flex;
    }

    .search-button.pc {
      display: none;
    }

    .search-input {
      width: calc(100% - 22px);
    }

    .search-button {
      padding: 10px;
    }
  }
}
</style>

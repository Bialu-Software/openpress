<template>
  <div v-if="!postsArray"></div>
  <div class="card-container" v-else>
    <template v-for="post in postsArray" :key="post.id">
      <CardPost
        :id="post.id"
        :imageUrl="post.imageUrl"
        :headline="post.headline"
        :text="post.text"
        :author="post.author"
        :timestamp="post.timestamp"
        :tags="post.tags"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardPost from "@/components/basics/CardPost.vue";

export default defineComponent({
  name: "CardGrid",
  props: ["postsArray"],
  components: {
    CardPost,
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.card-container {
  display: grid;
  gap: $grid-gap;
  grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
}

@media (max-width: 419px) {
  .card-container {
    display: flex;
    flex-direction: column;
  }
}
</style>

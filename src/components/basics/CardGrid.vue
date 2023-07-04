<template>
    <div v-if="!posts"></div>
    <div class="card-container" v-else>
        <template v-for="(post) in posts" :key="post.id">
            <CardPost :id="post.id" :imageUrl="post.imageUrl" :headline="post.headline" :text="post.text" :author="post.author" :timestamp="post.timestamp" :tags="post.tags"/>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardPost from '@/components/basics/CardPost.vue';
import posts from "../../../backend/data/posts.json";
import { Post } from "./interfaces";

export default defineComponent({
    name: 'CardGrid',
    props: {
        postsArray: Array
    },
    data() {
        return {
            posts: [] as Post[],
        };
    },
    created() {
        console.log(posts)
        
        this.posts = posts;
    },
    components: {
        CardPost
    }
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
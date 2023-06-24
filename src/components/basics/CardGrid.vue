<template>
    <div class="card-container">
        <template v-for="(post) in posts">
            <CardPost :imageUrl="post.imageUrl" :headline="post.headline" :text="post.text" :author="post.author" :timestamp="post.timestamp" :tags="post.tags" />
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardPost from '@/components/basics/CardPost.vue';
import jsonContent from '../../assets/data.json';

interface Post {
    imageUrl: string;
    headline: string;
    text: string;
    author: string;
    tags: string[];
    timestamp: number;
}

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
        this.posts = jsonContent.posts;
    },
    components: {
        CardPost
    },
});

</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(355px, 1fr));
    grid-gap: $grid-gap;
}

@media (max-width: 454px) {
    .card-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}
</style>
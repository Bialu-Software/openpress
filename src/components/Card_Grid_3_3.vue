<template>
    <div class="card-container">
        <template v-for="(post, index) in posts">
            <Card_1_1 :imageUrl="post.imageUrl" :headline="post.headline" :text="post.text" :author="post.author" :timestamp="post.timestamp" :tags="post.tags" />
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card_1_1 from '@/components/Card_1_1.vue';
import jsonContent from '../assets/data.json';

interface Post {
    imageUrl: string;
    headline: string;
    text: string;
    author: string;
    tags: string[];
    timestamp: number;
}

export default defineComponent({
    name: 'Card_3_3',
    data() {
        return {
            posts: [] as Post[],
        };
    },
    created() {
        this.posts = jsonContent.posts;
    },
    components: {
        Card_1_1
    },
    mounted() {
        this.log_posts()
    },
    methods: {
        log_posts(): void {
            console.log(this.posts)
        }
    }
});

</script>

<style scoped lang="scss">
@import "../assets/main.scss";

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(355px, 1fr));
    margin: 0 auto;
    width: 80%;
    grid-gap: $grid-gap;
}

@media (max-width: 454px) {
    .card-container {
        display: flex;
        flex-direction: column;
    }
}
</style>
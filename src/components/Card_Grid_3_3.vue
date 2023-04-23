<template>
    <div v-for="post in posts">
        <Card_1_1 :headline="post.headline" :author="post.author" :timestamp="post.timestamp" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card_1_1 from '@/components/Card_1_1.vue';
import jsonContent from '../assets/data.json';

interface Post {
    headline: string;
    author: string;
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
</style>
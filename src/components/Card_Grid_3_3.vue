<template>
  <!-- <Card_1_1 :headline="posts[0].headline" :author="posts[0].author" :timestamp="posts[0].timestamp" /> -->
  <Card_1_1 headline="Top games of 2020" author="Michal Kopčík" :timestamp=1682252133 />
  log_posts()
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
    name: 'Card_1_1',
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
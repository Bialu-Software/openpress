<template>
    <h1>JSON Content</h1>
    <div class="card-container">
        <div v-for="post in posts" :key="post.timestamp" class="card">
            <h3>{{ post.headline }}</h3>
            <p>Made by {{ post.author }}</p>
            <p>{{ formatTimestamp(post.timestamp) }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import jsonContent from '../assets/data.json'; // get the data

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
    methods: {
        formatTimestamp(timestamp: number): string {
            const date = new Date(timestamp * 1000);
            const dateString = date.toLocaleDateString();
            return dateString;
        },
    },
});
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    background-color: $main-component-color;
    text-align: left;
    color: white;
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    flex: 0 0 25%;
}
</style>
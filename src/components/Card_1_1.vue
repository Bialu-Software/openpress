<template>
    <div class="card">
        <h2>{{ headline }}</h2>
        <p>By {{ author }} on {{ formatTimestamp(timestamp) }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Post {
    headline: string;
    author: string;
    timestamp: number;
}

export default defineComponent({
    name: 'Card_1_1',
    props: {
        headline: String,
        author: String,
        timestamp: Number,
    },
    methods: {
        formatTimestamp(timestamp: number | undefined): string {
            const date = new Date(timestamp! * 1000);
            const dateString = date.toLocaleDateString();
            return dateString;
        },
    },
});
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

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
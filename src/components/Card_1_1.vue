<template>
    <div class="card">
        <div class="image"></div>
        <h2>{{ headline }}</h2>
        <div style="padding-top:25px;"></div>
        <p>{{ text }}</p>
        <div style="padding-top:25px;"></div>
        <p>By {{ author }} on {{ formatTimestamp(timestamp) }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Card_1_1',
    props: {
        headline: String,
        text: String,
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

* {
    margin: 0;
}

h2 {
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    color: $card-headline-color;
}

p {
    padding-left: 25px;
    padding-right: 25px;
    color: $card-text-color;
}

.image {
    width: $card-width;
    height: 210px;
    background: #526EFF;
    border-radius: $card-border-radius $card-border-radius 0px 0px;
}

.card {
    background-color: $card-background-color;
    text-align: left;
    padding-bottom: 25px;
    border-radius: $card-border-radius;
    display: flex;
    flex-direction: column;
    width: $card-width;
    min-height: 479px;
}
</style>
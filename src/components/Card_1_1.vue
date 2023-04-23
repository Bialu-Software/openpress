<template>
    <div class="card">
        <h2>{{ headline }}</h2>
        <p>By {{ author }} on {{ formatTimestamp(timestamp) }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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

* {
    margin: 0;
}

h2 {
    padding: 10px;
}

p {
    padding: 10px;
}

.card {
  background-color: $main-component-color;
  text-align: left;
  color: white;
  padding: 25px;
  border-radius: $card-border-radius;
  display: inline-block;
  width: 25%;
  height: 450px;
  margin: 15px;
}

</style>
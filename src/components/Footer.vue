<template>
    <div class="container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',

});
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

.container {
    margin-top: calc($grid-gap * 4);
    width: 100%;
    height: 305px;
    background-color: $footer-color;
}
</style>
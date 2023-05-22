<template>
    <div class="container"></div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar',

});
</script>
    
<style scoped lang="scss">
@import "../assets/main.scss";

.container {
    margin-bottom: calc($grid-gap * 4);
    width: 100%;
    height: 79px;
    background-color: $navbar-color;
}
</style>
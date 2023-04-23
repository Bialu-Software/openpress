<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <Card_3_1></Card_3_1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Card_3_1 from '@/components/Card_3_1.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    Card_3_1
  },
});
</script>

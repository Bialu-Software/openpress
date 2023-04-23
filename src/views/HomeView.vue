<template>
  <Card_1_1 headline="Top games of 2020" author="Michal Kopčík" v-bind:timestamp=1682252133 />
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import Card_1_1 from '@/components/Card_1_1.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Card_1_1
  },
});
</script>

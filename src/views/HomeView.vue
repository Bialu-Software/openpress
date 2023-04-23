<template>
  <!-- <Card_1_1 headline="Top games of 2020" author="Michal Kopčík" :timestamp=1682252133 /> -->
  <Card_Grid_3_3></Card_Grid_3_3>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import Card_1_1 from '@/components/Card_1_1.vue';
import Card_Grid_3_3 from '@/components/Card_Grid_3_3.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Card_1_1,
    Card_Grid_3_3
  },
});
</script>

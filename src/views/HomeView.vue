<template>
  <Navbar></Navbar>
  <Card_Grid_3_3></Card_Grid_3_3>
  <Footer></Footer>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
import Card_1_1 from '@/components/Card_1_1.vue';
import Card_Grid_3_3 from '@/components/Card_Grid_3_3.vue';
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Card_1_1,
    Card_Grid_3_3,
    Footer,
    Navbar
  },
});
</script>

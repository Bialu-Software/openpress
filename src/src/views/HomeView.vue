<template>
  <Navbar></Navbar>
    <div class="page-content">
        <section class="latest-posts">
            <h2 class="section-title">Latests</h2>
            <CardGrid></CardGrid>
        </section>

        <section class="topRated-posts">
            <h2 class="section-title">Top rated</h2>
            <CardGrid></CardGrid>
        </section>

        <subscribeForm></subscribeForm>
    </div>
    <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardGrid from '@/components/basics/CardGrid.vue';
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import SubscribeForm from "@/components/SubscribeForm.vue";

export default defineComponent({
    name: 'Home',
    components: {
        CardGrid,
        Footer,
        Navbar,
        SubscribeForm
    },
});
</script>

<style scoped lang="scss">
.page-content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 90px;

  .latest-posts, .topRated-posts {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .section-title {
      font-size: 30px;
      font-weight: 800;
    }
  }
}

@media (max-width: 454px) {
  .page-content {
    width: 100%;

    .latest-posts, .topRated-posts {
      .section-title {
        padding-left: 20px;
      }
    }
  }
}
</style>

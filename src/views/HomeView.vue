<template>
  <Navbar></Navbar>
  <div class="page-content">
    <div class="header">
      <LatestPost class="latest-post-header"></LatestPost>
      <SearchBar class="searchBar-header"></SearchBar>
    </div>

    <section class="latest-posts">
      <h2 class="section-title">Latests</h2>
      <CardGrid></CardGrid>
    </section>

    <section class="topRated-posts">
      <h2 class="section-title">Top rated</h2>
      <CardGrid></CardGrid>
    </section>

    <SubscribeForm class="subscribe-form"></SubscribeForm>
  </div>
  
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardGrid from '@/components/basics/CardGrid.vue';
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import SubscribeForm from "@/components/SubscribeForm.vue";
import LatestPost from "@/components/LatestPost.vue";
import SearchBar from "@/components/SearchBar.vue";

export default defineComponent({
    name: 'Home',
    components: {
        SearchBar,
        CardGrid,
        Footer,
        Navbar,
        SubscribeForm,
        LatestPost
    }
});
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 90px;
}

.page-content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 90px;

  .header {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }

  .latest-posts, .topRated-posts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

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
      width: 100%;
      .section-title {
        padding-left: 20px;
      }
    }
  }
}
</style>

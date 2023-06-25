<template>
  <Navbar></Navbar>

  <div id="header" class="section">
    <LatestPost class="latest-post-header"></LatestPost>
    <SearchBar class="searchBar-header"></SearchBar>
  </div>

  <section id="latest-posts" class="section">
    <h2 class="section-title">Latests</h2>
    <CardGrid></CardGrid>
  </section>

  <section id="topRated-posts" class="section">
    <h2 class="section-title">Top rated</h2>
    <CardGrid></CardGrid>
  </section>

  <SubscribeForm id="subscribe-form" class="section"></SubscribeForm>
  
  <Footer id="footer" class="section"></Footer>
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
    name: 'HomeView',
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

.section {
  padding-left: 150px;
  padding-right: 150px;
}

#header {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

#latest-posts, #topRated-posts {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .section-title {
    font-size: 30px;
    font-weight: 800;
  }
}
/*
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
}*/

@media (max-width: 1409px) {
  .section {
    padding-left: 90px;
    padding-right: 90px;
  }
}

@media (max-width: 820px) {
  .section {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media (max-width: 454px) {
  #footer {
    padding: 0;
  }
  .section {
    width: 100%;
    padding: 0;
    .section-title {
      padding-left: 20px;
    }
  }
}
</style>

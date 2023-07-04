<template>
  <Navbar :activeLink="'saved'" style="background: #fff;" v-if="savedPosts.length <= 0"></Navbar>

  <div id="page-content" class="section error" v-if="savedPosts.length <= 0">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <h1>The post was not found</h1>
    <p>
      Oops! The requested blog post was not found. The post does not seem to exist. Sorry for the inconvenience. While we investigate whether this is an error, please check out our other engaging content. 
      <br><br>
      Link back to the home page: <a href="/">Link</a>
    </p>
  </div>

  <section id="topRated-posts" class="section" v-if="savedPosts.length <= 0">
    <h2 class="section-title">Find your favourites</h2>
    <CardGrid :postsArray="posts"></CardGrid>
  </section>




  <Navbar :activeLink="'saved'" v-if="savedPosts.length > 0"></Navbar>

  <div id="page-content" class="section" v-if="savedPosts.length > 0">
    <div class="header-content">
      <h1 class="section-title">Saved Posts</h1>
      <p class="section-description">You have saved <span class="saved-post-length">{{ savedPosts.length }}</span> posts in total.</p>
  
      <SearchBar class="searchBar-header"></SearchBar>
  
      <ul class="sort-menu">
        <li>Sort by:</li>
        <li class="item active" ref="item1" @click="changeSort(1)">All</li>
        <li class="item" ref="item2" @click="changeSort(2)">Nejstarší</li>
        <li class="item" ref="item3" @click="changeSort(3)">Nejmladší</li>
      </ul>
    </div>

    <section id="saved-posts">
      <CardGrid :postsArray="savedPosts"></CardGrid>
    </section>
  </div>

  <Footer id="footer" class="section"></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import SearchBar from "@/components/SearchBar.vue";
import CardGrid from "@/components/basics/CardGrid.vue";
import { SavedPosts } from "../components/basics/classes";
import posts from "../../backend/data/posts.json";
import { Post } from "@/components/basics/interfaces";

export default defineComponent({
  name: "HomeView",
  components: {
    SearchBar,
    Footer,
    Navbar,
    CardGrid
  },
  data() {
    return {
      savedPosts: [] as Post[],
      activeSort: 1,
      posts
    }
  },
  methods: {
    getAllSavedPosts() {
      let savedPostsArray = SavedPosts.getSavedPosts().parsedData;

      for (let index = 0; index < savedPostsArray.length; index++) {
        const post = posts.find((post: any) => post.id == Number(savedPostsArray[index]));
        savedPostsArray[index] = post;
      }

      this.savedPosts = savedPostsArray;
    },

    changeSort(sortMenuItemId: number) {
      if(sortMenuItemId == 1) {
        this.getAllSavedPosts();

      } else if (sortMenuItemId == 2) {
        this.savedPosts.sort((x, y) => {
          return y.timestamp - x.timestamp;
        });

      } else if (sortMenuItemId == 3) {
        this.savedPosts.sort((x, y) => {
          return x.timestamp - y.timestamp;
        });
      }

      (this.$refs["item" + this.activeSort] as HTMLDataListElement).classList.remove("active");
      (this.$refs["item" + sortMenuItemId] as HTMLDataListElement).classList.add("active");

      this.activeSort = sortMenuItemId;
    }
  },
  mounted() {
    this.getAllSavedPosts();
  }
});
</script>

<style lang="scss" scoped>
#page-content:is(.error) {
  padding-top: 90px;
  padding-bottom: 90px;
  margin-top: -90px;
  background: #fff;

  i {
    font-size: 70px;
  }

  a {
    text-transform: uppercase;
    color: #8B94FF;
    font-weight: 700;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}

#page-content {
  display: flex;
  flex-direction: column;
  gap: 35px;

  .header-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.section-description {
  color: #3F3F3F;
}

.saved-post-length {
  color: #000;
  font-weight: 700;
}

.sort-menu {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;

  .item {
    background: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    min-width: 100px;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: #8B94FF;
      color: #fff;
    }
  }

  .active {
    background: #8B94FF;
    color: #fff;
  }
}

@media (max-width: 454px) {
  .sort-menu, .section-description {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (max-width: 400px) {
  .sort-menu {
    .item {
      width: 100%;
    }
  }
}
</style>

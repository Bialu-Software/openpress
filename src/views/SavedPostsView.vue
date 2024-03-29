<template>
  <Navbar :activeLink="'saved'" v-if="savedPosts.length <= 0"></Navbar>

  <div id="page-content" class="section error" v-if="savedPosts.length <= 0">
    <i class="bi bi-bookmarks"></i>
    <h1>Nothing is saved</h1>
    <p>
      To save a post, click on the flag at the bottom. You will see all of your saved posts here.
      <br /><br />
      <a href="/">Link back to the home page</a>
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
      <p class="section-description">
        You have saved
        <span class="saved-post-length">{{ savedPosts.length }}</span> posts in total.
      </p>

      <SearchBar class="searchBar-header"></SearchBar>

      <ul class="sort-menu">
        <li>Sort by:</li>
        <li class="item active" ref="item1" @click="changeSort(1)">All</li>
        <li class="item" ref="item2" @click="changeSort(2)">Newest</li>
        <li class="item" ref="item3" @click="changeSort(3)">Oldest</li>
      </ul>
    </div>

    <section id="saved-posts">
      <CardGrid :postsArray="savedPosts"></CardGrid>
    </section>
  </div>

  <Footer id="footer" class="section"></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import SearchBar from '@/components/SearchBar.vue';
import CardGrid from '@/components/basics/CardGrid.vue';
import { SavedPosts } from '../components/basics/classes';
import posts from '../../backend/data/posts.json';
import profiles from '../../backend/data/profiles.json';
import { Post } from '@/components/basics/interfaces';

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchBar,
    Footer,
    Navbar,
    CardGrid,
  },
  data() {
    return {
      savedPosts: [] as Post[],
      activeSort: 1,
      posts: [] as Post[],
    };
  },
  mounted() {
    this.getAllSavedPosts();
    document.title = 'OpenPress | Saved';

    const updatedPosts = posts.map((post) => {
      const postAuthorId = post.author;
      const foundProfile = profiles.find((profile: any) => profile.id === postAuthorId);

      const author = foundProfile ? foundProfile.username : 'Anonymous';

      return {
        ...post,
        author: author,
      };
    });

    this.posts = updatedPosts;
  },
  methods: {
    getAllSavedPosts() {
      let savedPostsArray = SavedPosts.getSavedPosts().parsedData;

      for (let index = 0; index < savedPostsArray.length; index++) {
        const post = posts.find((post: any) => post.id == Number(savedPostsArray[index]));
        savedPostsArray[index] = post;
      }

      savedPostsArray = savedPostsArray.map((post: { author: any; }) => {

        const postAuthorId = post.author;
        const foundProfile = profiles.find(
          (profile: any) => profile.id === postAuthorId
        );

        const author = foundProfile ? foundProfile.username : "Anonymous";

        return {
          ...post,
          author: author,
        };

      });

      this.savedPosts = savedPostsArray;
    },

    changeSort(sortMenuItemId: number) {
      if (sortMenuItemId == 1) {
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

      (this.$refs['item' + this.activeSort] as HTMLDataListElement).classList.remove('active');
      (this.$refs['item' + sortMenuItemId] as HTMLDataListElement).classList.add('active');

      this.activeSort = sortMenuItemId;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main';

.section-title {
  font-size: 30px;
  font-weight: 800;
  color: $headline-color;
}

#page-content:is(.error) {
  padding-top: 90px;
  padding-bottom: 90px;
  margin-top: -90px;
  background-color: $main-background-color;
  gap: 20px;

  i {
    color: $headline-color;
    font-size: 70px;
  }

  h1 {
    color: $headline-color;
  }

  p {
    color: $text-color;
  }

  a {
    text-transform: uppercase;
    color: $main-color;
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
  color: $text-color;
}

.saved-post-length {
  color: $headline-color;
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
    color: $card-text-color;
    background: $card-background-color;
    padding: 10px 20px;
    border-radius: 8px;
    min-width: 100px;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: $main-color;
      color: $searchBar-button-color;
    }
  }

  li {
    color: $text-color;
  }

  .active {
    background: $main-color;
    color: $searchBar-button-color;
  }
}

@media (max-width: 454px) {
  .sort-menu,
  .section-description {
    padding-right: 20px;
    padding-left: 20px;
  }

  #page-content:is(.error) {
    padding: 20px;
    width: auto;
  }
}

@media (max-width: 400px) {
  .sort-menu {
    .item {
      width: 100%;
    }
  }
}

// kinda dont work OWO (from HomeViews.vue)

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
    // width: 100%;
    padding: 0;

    .section-title {
      padding-left: 20px;
    }
  }
}
</style>

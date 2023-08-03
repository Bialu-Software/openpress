<template>
  <Navbar></Navbar>

  <div id="post-content" class="section error" v-if="!post.id">
    <i class="bi bi-exclamation-triangle-fill"></i>
    <h1>The post was not found</h1>
    <p>
      Oops! The requested blog post was not found. The post does not seem to
      exist. Sorry for the inconvenience. While we investigate whether this is
      an error, please check out our other engaging content.
      <br /><br />
      Link back to the home page: <a href="/">Link</a>
    </p>
  </div>
  <div id="post-content" class="section" v-else>
    <div class="above-img">
      <h1 class="post-title">{{ post.headline }}</h1>
      <div class="date info">
        <p class="info-text">Posted On</p>
        <h4 class="info-value">{{ formatTimestamp(post.timestamp) }}</h4>
      </div>
    </div>
    <img
      :src="post.imageUrl"
      class="post-img"
      alt="Post image"
      draggable="false"
    />
    <div class="under-img">
      <div class="author">
        <img
          src="https://media.extra.cz/static/img/2020/12/c39c180-103863-sym6-2500.jpg"
          class="author-img"
          alt="Author profile image"
          draggable="false"
        />
        <div class="info">
          <p class="info-text">Written By</p>
          <h4 class="info-value">{{ post.author }}</h4>
        </div>
      </div>
      <div class="share info">
        <p class="info-text">Share On</p>
        <h4 class="info-value">
          <a href="#" class="share-link"><i class="bi bi-facebook"></i></a>
          <a href="#" class="share-link"><i class="bi bi-twitter"></i></a>

          <span class="line"></span>

          <a href="#" class="share-link"><i class="bi bi-link-45deg"></i></a>
        </h4>
      </div>
    </div>

    <div class="content">
      <div v-html="post.html"></div>
    </div>

    <div class="post-footer">
      <div class="tags">
        <p class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</p>
      </div>
      <div class="info save-post">
        <p class="info-text">Save Post:</p>
        <h4 class="info-value" v-if="savedPostIndex === -1">
          <i class="bi bi-bookmark bookmark" @click="setItem(postId)"></i>
        </h4>
        <h4 class="info-value" v-else>
          <i class="bi bi-bookmark-fill" @click="setItem(postId)"></i>
        </h4>
      </div>
    </div>
  </div>

  <section id="topRated-posts" class="section">
    <h2 class="section-title">Top rated</h2>
    <CardGrid :postsArray="posts"></CardGrid>
  </section>

  <SubscribeForm id="subscribe-form" class="section"></SubscribeForm>

  <Footer class="section"></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardGrid from "@/components/basics/CardGrid.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import SubscribeForm from "@/components/SubscribeForm.vue";
import posts from "../../backend/data/posts.json";
import CardPost from "@/components/basics/CardPost.vue";

import { formatTimestamp } from "@/components/basics/functions";
import { Post } from "@/components/basics/interfaces";
import { SavedPosts } from "@/components/basics/classes";
import profiles from "../../backend/data/profiles.json";

export default defineComponent({
  name: "PostView",
  components: {
    CardGrid,
    Footer,
    Navbar,
    SubscribeForm,
    CardPost,
  },
  data() {
    return {
      post: {} as Post,
      formatTimestamp,
      posts: [] as Post[],
      postId: Number(this.$route.query.id),
      savedPostIndex: SavedPosts.checkPost(Number(this.$route.query.id)),
    };
  },
  mounted() {
    document.title = "OpenPress | Post";

    const updatedPosts = posts.map((post) => {
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

    this.posts = updatedPosts;
  },
  methods: {
    setItem(id: number | undefined) {
      SavedPosts.setItem(id);
      this.savedPostIndex = SavedPosts.checkPost(id);
    },
  },
  created() {
    let post = posts.find((post: any) => post.id === this.postId);

    if (post) {
      const foundProfile = profiles.find(
        (profile: any) => profile.id == post?.author
      );
      let author = foundProfile ? foundProfile.username : "Anonymous";

      let updatedPost = {
        ...post,
        author: author,
      };

      this.post = updatedPost;
    }
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";
@import url("../assets/styles/codePostFormater.scss");

.section-title {
    font-size: 30px;
    font-weight: 800;
    color: $headline-color;
  }
.content {
  * {
    color: $text-color;
  }
}

#post-content {
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-top: 90px;
  padding-bottom: 90px;
  margin-top: -90px;
  background-color: $main-background-color;

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .info-text {
      font-size: 15px;
      color: $text-color;
    }

    .info-value {
      font-size: 18px;
      color: $text-color;
      font-weight: 700;
    }
  }

  .above-img {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    .post-title {
      color: $headline-color;
      flex: 6.5;
    }

    .date .info-value {
      text-transform: uppercase;
      color: $text-color;
    }
  }

  .post-img {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    position: relative;
    object-fit: cover;
  }

  .under-img {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    .author {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      .author-img {
        max-width: 50px;
        border-radius: 50%;
      }
    }

    .share .info-value {
      display: flex;
      flex-direction: row;
      gap: 5px;

      .share-link {
        color: $text-color;
        font-size: 20px;
        transition: 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }

      .line {
        width: 1px;
        max-height: 100px;
        background: $text-color;
        border-radius: 50%;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }

  .post-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    padding-top: 35px;
    border-top: 1px solid #c8c8c8;

    .tags {
      display: flex;
      flex-direction: row;
      gap: 13px;
      flex-wrap: wrap;
      flex: 2;

      .tag {
        padding: 5px 15px;
        background: $card-tag-color;
        color: $text-color;
        border-radius: 4px;
      }
    }

    .save-post {
      flex-direction: row;
      align-items: center;

      .info-value {
        color: $text-color;
        font-size: 20px;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
}

#post-content:is(.error) {
  gap: 20px;

  i {
    font-size: 70px;
  }

  a {
    text-transform: uppercase;
    color: #8b94ff;
    font-weight: 700;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}

@media (max-width: 587px) {
  #post-content .above-img {
    flex-direction: column;
    align-items: flex-start;
  }

  #post-content .post-footer {
    flex-direction: column;
  }
}

@media (max-width: 454px) {
  #post-content {
    padding: 20px;
    width: auto;

    .post-img {
      height: 300px;
    }
  }
}
</style>

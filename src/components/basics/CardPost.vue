<template>
  <div class="card">
    <a :href="'/post?id=' + id" class="post-link">
      <div class="card-image">
        <div
          class="image"
          :style="
            'background: url(' +
            imageUrl +
            ');' +
            'background-repeat:no-repeat;background-position:center center;background-size:cover;'
          "
        ></div>
      </div>
    </a>
    <div class="card-content">
      <a :href="'/post?id=' + id" class="post-link">
        <p class="date">{{ formatTimestamp(timestamp) }}</p>
        <h2 class="headline">{{ headline }}</h2>
        <p class="description">{{ text }}</p>
      </a>

      <div class="card-footer">
        <p class="author">
          <img
            class="profile-photo"
            src="https://media.extra.cz/static/img/2020/12/c39c180-103863-sym6-2500.jpg"
            alt="Profile photo"
          />
          <span class="name">{{ author }}</span>
        </p>

        <div class="action-icons">
          <i class="bi bi-share" @click="sharePost(id, headline)"></i>
          <i class="bi bi-bookmark bookmark" @click="setItem(id)" v-if="savedPostIndex === -1"></i>
          <i class="bi bi-bookmark-fill" @click="setItem(id)" v-else></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formatTimestamp } from './functions';
import { SavedPosts } from './classes';

export default defineComponent({
  name: 'CardPost',
  props: {
    id: Number,
    imageUrl: String,
    headline: String,
    text: String,
    html: String,
    author: String,
    tags: Array,
    timestamp: Number,
  },
  data() {
    return {
      formatTimestamp,
      savedPostIndex: SavedPosts.checkPost(this.id),
    };
  },
  methods: {
    setItem(id: number | undefined) {
      SavedPosts.setItem(id);
      this.savedPostIndex = SavedPosts.checkPost(id);
    },

    sharePost(id: number | undefined, headline: string | undefined) {
      const shareData = {
        title: `Share the "${headline}" post`,
        text: "Check out this post",
        url: window.location.origin + '/post?id=' + id,
      };
  
      try {
        if (navigator.share) { navigator.share(shareData); }
      } catch (error) { console.error('Error sharing:', error); }
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/main';

.date {
  text-transform: uppercase;
}

.headline {
  color: $card-headline-color;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

p {
  color: $card-text-color;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-image {
  overflow: hidden;
  position: relative;
  height: 210px;
  width: 100%;
  border-radius: $card-border-radius $card-border-radius 0 0;

  .image {
    height: 210px;
    width: 100%;
    position: relative;
    transition: transform 0.2s ease-in-out;
  }
}

.little {
  max-width: 400px;
}

.card {
  background-color: $card-background-color;
  border-radius: $card-border-radius;
  display: flex;
  flex-direction: column;
  min-width: 100px;
  width: auto;
  cursor: pointer;

  .card-content,
  .card-content a {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-decoration: none;
  }

  .card-content {
    padding: 25px;
    height: 100%;
    justify-content: space-between;
  }

  &:hover {
    .image {
      transform: scale(1.1);
    }
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  cursor: default;

  .author {
    display: flex;
    gap: 10px;
    align-items: center;

    .name {
      font-weight: 600;
    }

    .profile-photo {
      max-width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .action-icons {
    display: flex;
    color: $card-icon-color;
    gap: 10px;
    align-items: center;

    i {
      font-size: 20px;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}

@media (max-width: 454px) {
  .image {
    border-radius: 10px;
  }

  .card {
    padding: 20px;
    border-radius: 0;

    .card-content {
      padding: 25px 0 0 0;
    }
  }
}
</style>

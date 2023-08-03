<template>
  <div class="header">
    <a href="#" class="post-link">
      <div
        class="latest-post"
        :style="
          'background: url(https://github.blog/wp-content/uploads/2020/03/github-npm-blog.png?fit=2400%2C1260);' +
          'background-repeat:no-repeat;background-position:center center;background-size:cover;'
        "
      >
        <div class="content">
          <p class="date">Luboš Polívka • April 8, 2023</p>
          <h2 class="headline">
            5 Easy Ways to Boost Your Productivity Today!
          </h2>
          <p class="description">
            In this blog post, we'll share five simple and effective ways to
            supercharge your productivity and get more done in less time. From
            organizing your workspace to setting clear goals, these tips are
            easy to implement and will help you make the most of your day!
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LatestPost",
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.header {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
}

.post-link {
  text-decoration: none;
  width: 100%;
}

.latest-post {
  width: 100%;
  min-height: 500px;
  border-radius: $latestPost-border-radius;
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
  transition: 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: $latestPost-background-gradient;
    border-radius: inherit;
  }

  &:hover {
    filter: brightness(95%);
  }

  .content {
    padding: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 80%;

    .date {
      font-size: 17px;
      color: $latestPost-description-color;
    }

    .headline {
      color: $latestPost-headline-color;
      font-weight: bold;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 35px;
    }

    .description {
      font-size: 17px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: $latestPost-description-color;
    }

    p {
      color: $card-text-color;
    }
  }
}

@media (max-width: 1300px) {
  .latest-post {
    .content {
      max-width: 50%;
    }

    &::before {
      background: $latestPost-background;
    }
  }
}

@media (max-width: 892px) {
  .latest-post .content {
    max-width: 100%;
  }
}

@media (max-width: 608px) {
  .latest-post .content {
    .headline {
      font-size: 30px;
    }

    .description {
      font-size: 18px;
    }
  }
}

@media (max-width: 454px) {
  .latest-post {
    border-radius: 0;
    width: 100%;

    .content {
      padding: 20px;
    }
  }
}
</style>

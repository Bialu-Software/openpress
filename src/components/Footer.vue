<template>
  <footer>
    <div class="container">
      <div class="columns">
        <div class="column left">
          <h2 class="title">OpenPress</h2>
          <p class="description">
            This blog is a customized edition of the OpenPress blog, designed and developed by the dedicated team at Bialu
            Software and their collaborators.
          </p>
        </div>

        <div class="right">
          <div class="column">
            <h2 class="title">Quick Links</h2>
            <ul class="links">
              <li><a href="#" class="link">Our blog</a></li>
              <li><a href="#" class="link">About us</a></li>
              <li><a href="#" class="link">Contact us</a></li>
            </ul>
          </div>

          <div class="column">
            <h2 class="title">More</h2>
            <ul class="links">
              <li><a href="#" class="link">Terms of Use</a></li>
              <li><a href="#" class="link">Privacy Policy</a></li>
              <li><a href="#" class="link">Admin Panel</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="line"></div>

      <p class="copyright">
        Copyright &copy; 2022 - 2023. All Rights Reserved by
        <a href="#" class="link"></a>.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/main';

.link {
  text-decoration: none;
  color: $footer-text-color;
  transition: 0.2s;

  &:hover {
    color: $footer-link-hover-color;
  }
}

footer {
  background-color: $footer-color;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 30px;
    flex-direction: column;
    color: $footer-text-color;

    .columns {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 60px;

      .column {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .title {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          color: $footer-title-color;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 5px;

          li {
            list-style-type: none;
          }
        }
      }

      .left {
        flex: 0.5;

        h2 {
          text-indent: -9999px;

          &::before {
            text-indent: 0;
            content: $logo-name;
            float: left;
          }
        }
      }

      .right {
        display: flex;
        flex-direction: row;
        gap: 100px;
        width: fit-content;
        flex-wrap: wrap;
      }
    }

    .line {
      width: 100%;
      height: 1px;
      background: $footer-line-background;
    }

    .copyright {
      text-align: center;

      .link {
        color: $footer-copyright-link-color;
        text-indent: -9999px;
        transition: 0.2s;

        &:hover {
          color: $footer-link-hover-color;
        }

        &::before {
          text-indent: 0;
          content: $logo-name;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  footer .container {
    .columns {
      flex-direction: column;

      .right {
        gap: 60px;
      }

      .left {
        flex: 1;
      }
    }
  }
}

@media (max-width: 454px) {
  footer .container {
    padding: 20px;
    width: 100%;
  }
}
</style>

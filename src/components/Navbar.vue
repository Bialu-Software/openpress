<template>
  <nav class="navbar" ref="navbar">
    <div class="mobile-navbar">
      <a class="logo" href="/">
        <img
          src="@/assets/images/logo.png"
          alt="Blog logo"
          class="image-logo"
        />
        <p class="logo-name">OpenPress</p>
      </a>

      <i class="bi bi-list hamburger" @click="openNavbar()"></i>
    </div>

    <ul class="links">
      <li class="link news"><a href="/">News</a></li>
      <li class="link saved"><a href="/saved-posts">Saved</a></li>
      <li class="link contact"><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {
    activeLink: String,
  },
  methods: {
    openNavbar() {
      (this.$refs.navbar as HTMLInputElement).classList.toggle("open");
    },
  },
  mounted() {
    if (this.activeLink)
      document.querySelector("." + this.activeLink)?.classList.add("active");
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 90px;
  border-bottom: 1px solid $navbar-border-color;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #000;
    text-decoration: none;

    .image-logo {
      content: url($logo-image);
      max-width: 40px;
      height: auto;
    }

    .logo-name {
      font-weight: 900;
      font-size: 20px;
      text-indent: -9999px;

      &::before {
        text-indent: 0;
        content: $logo-name;
        float: left;
        color: $logo-name-color;
      }
    }
  }

  .mobile-navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 25px;
    list-style-type: none;

    .link a {
      color: $navbar-links-color;
      text-decoration: none;
      font-size: 18px;
      display: flex;
      width: 100%;
      height: 100%;
      transition: 0.2s;
    }

    .link:not(.active) a:hover {
      color: $navbar-links-hover-color;
    }

    .active a {
      color: $main-color;
      font-weight: 600;
    }
  }

  .hamburger {
    color: $navbar-links-color;
    font-size: 25px;
    display: none;
    cursor: pointer;

    &:hover {
      color: $navbar-links-hover-color;
    }
  }
}

@media (max-width: 969px) {
  .navbar {
    padding: 20px 50px;
  }
}

@media (max-width: 603px) {
  .navbar {
    padding: 20px 50px;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    max-height: 40px;
    transition: 0.3s;

    .hamburger {
      display: flex;
    }

    .links {
      width: 100%;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s;
    }
  }

  .open {
    max-height: 1000px;
    transition: 0.8s;

    .links {
      visibility: visible;
      opacity: 1;
      transition: 0.8s;
    }
  }
}

@media (max-width: 454px) {
  .navbar {
    padding: 20px;

    .logo {
      .logo-name {
        font-size: 18px;
      }
    }
  }
}
</style>

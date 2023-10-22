<template>
  <div class="container">
    <div class="info-card">
      <h3 class="info-title">Stay up to date!</h3>
      <p class="info-description">
        Stay updated with exclusive content and offers! Subscribe now for the latest news and exciting updates delivered
        straight to your inbox.
      </p>
    </div>

    <div class="subscribe-form">
      <i class="bi bi-envelope-at"></i>

      <form class="form" @submit.prevent="test()">
        <input
          type="email"
          placeholder="Enter your email"
          class="email"
          v-model="Form.email"
          @input="hideMessage()"
          required
        />
        <button type="submit" class="submit-button">Subscribe</button>
        <p class="message success" v-if="isError == 'false'">Thank you for registering your email.</p>
        <p class="message error" v-if="isError == 'true'">An error occurred, please try again.</p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubscribeForm',
  data() {
    return {
      Form: { email: '' },
      isError: '',
    };
  },
  methods: {
    test() {
      try {
        console.log(this.Form.email);
        this.isError = 'false';
      } catch (e) {
        console.log(e);
        this.isError = 'true';
      }

      setTimeout(() => {
        this.isError = 'false';
      }, 4000);
    },
    hideMessage() {
      this.isError = '';
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/main';

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 22px;

  .info-card {
    background: $subscribeForm-card-background;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    text-align: left;
    padding: 25px;
    border-radius: $subscribeForm-border-radius;
    flex: 2;

    .info-title {
      font-size: 30px;
      font-weight: bold;
    }

    .info-description {
      font-size: 17px;
      color: $subscribeForm-text-color;
    }

    h3 {
      color: $subscribeForm-headline-color;
    }
  }

  .subscribe-form {
    background: $subscribeForm-card-background;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border-radius: $subscribeForm-border-radius;
    transition: 0.2s;

    i {
      color: $subscribeForm-icon-color;
      font-size: 50px;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 277px;

      input {
        outline: none;
        border-radius: 5px;
        border: $subscribeForm-input-border;
        padding: 15px;
        font-size: 16px;
        background: transparent;
        transition: 0.2s;
        color: $subscribeForm-text-color;

        &:hover,
        &:focus {
          border-color: $main-color;
        }
      }

      .submit-button {
        outline: none;
        border-radius: 5px;
        padding: 15px;
        font-size: 16px;
        background: $main-color;
        border: none;
        color: $subscribeForm-button-color;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s;

        &:hover,
        &:focus {
          background: $subscribeForm-button-background-hover;
        }
      }

      .message {
        max-width: 90%;
      }

      .message.success {
        color: $main-color;
      }

      .message.error {
        color: $subscribeForm-error-color;
      }
    }
  }
}

@media (max-width: 741px) {
  .container {
    flex-direction: column;

    .subscribe-form .form {
      min-width: 100%;

      .message {
        min-width: 100%;
      }
    }
  }
}

@media (max-width: 454px) {
  .container {
    width: 100%;
    padding: 0px;
    .subscribe-form,
    .info-card {
      padding: 20px;
      border-radius: 0;
    }
  }
}
</style>
